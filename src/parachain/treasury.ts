import { AccountId } from "@polkadot/types/interfaces/runtime";
import { ApiPromise } from "@polkadot/api";
import { ACCOUNT_NOT_SET_ERROR_MESSAGE, btcToSat, satToBTC, Transaction } from "../utils";
import { IKeyringPair } from "@polkadot/types/types";
import Big from "big.js";

/**
 * @category PolkaBTC Bridge
 */
export interface TreasuryAPI {
    /**
     * @returns The total amount issued in the system
     */
    total(): Promise<Big>;
    /**
     * @param id The AccountId of a user
     * @returns The user's balance
     */
    balance(id: AccountId): Promise<Big>;
    /**
     * @param destination The address of a user
     * @param amount The amount to transfer
     */
    transfer(destination: string, amount: Big): Promise<void>;
    /**
     * Set an account to use when sending transactions from this API
     * @param account Keyring account
     */
    setAccount(account: IKeyringPair): void;
    /**
     * Subscribe to balance updates
     * @param account AccountId string
     * @param callback Function to be called whenever the balance of an account is updated.
     * Its parameters are (accountIdString, freeBalance)
     */
    subscribeToBalance(account: string, callback: (account: string, balance: Big) => void): Promise<() => void>;
}

export class DefaultTreasuryAPI implements TreasuryAPI {
    transaction: Transaction;

    constructor(private api: ApiPromise, private account?: IKeyringPair) {
        this.transaction = new Transaction(api);
    }

    setAccount(account: IKeyringPair): void {
        this.account = account;
    }

    async total(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const totalBN =  this.api.query.polkaBtc.totalIssuance.at(head);
        return new Big(satToBTC(totalBN.toString()));
    }

    async balance(id: AccountId): Promise<Big> {
        const account = await this.api.query.polkaBtc.account(id);
        return new Big(satToBTC(account.free.toString()));
    }

    async subscribeToBalance(account: string, callback: (account: string, balance: Big) => void): Promise<() => void> {
        try {
            const accountId = this.api.createType("AccountId", account);
            const unsubscribe = await this.api.query.polkaBtc.account(accountId, (balance) => {
                callback(account, new Big(satToBTC(balance.free.toString())));
            });
            return unsubscribe;
        } catch (error) {
            console.log(`Error during treasury balance subscription callback: ${error}`);
        }
        // as a fallback, return an empty void function
        return () => {
            return;
        };
    }

    async transfer(destination: string, amount: Big): Promise<void> {
        if (!this.account) {
            return Promise.reject(ACCOUNT_NOT_SET_ERROR_MESSAGE);
        }
        const amountSmallDenomination = this.api.createType("Balance", btcToSat(amount.toString()));
        const transferTransaction = this.api.tx.polkaBtc.transfer(destination, amountSmallDenomination);
        await this.transaction.sendLogged(transferTransaction, this.account, this.api.events.polkaBtc.Transfer);
    }
}
