import { ApiPromise, Keyring } from "@polkadot/api";
import { AccountId } from "@polkadot/types/interfaces/runtime";
import BN from "bn.js";
import sinon from "sinon";
import { DefaultStakedRelayerAPI, StakedRelayerAPI } from "../../../../src/parachain/staked-relayer";
import { createPolkadotAPI } from "../../../../src/factory";
import { StakedRelayer, DOT } from "../../../../src/interfaces/default";
import { assert } from "../../../chai";
import { defaultParachainEndpoint } from "../../../config";
import * as bitcoinjs from "bitcoinjs-lib";
import { KeyringPair } from "@polkadot/keyring/types";
import Big from "big.js";
import { TypeRegistry } from "@polkadot/types";
import { DefaultElectrsAPI, ElectrsAPI } from "../../../../src";

describe("stakedRelayerAPI", () => {
    function numberToDOT(x: number): DOT {
        return new BN(x) as DOT;
    }

    let api: ApiPromise;
    let stakedRelayerAPI: StakedRelayerAPI;
    let keyring: Keyring;
    let eve: KeyringPair;
    let electrsAPI: ElectrsAPI;
    const registry = new TypeRegistry();

    before(async () => {
        api = await createPolkadotAPI(defaultParachainEndpoint);
        keyring = new Keyring({ type: "sr25519" });
        eve = keyring.addFromUri("//Eve");
    });

    beforeEach(() => {
        electrsAPI = new DefaultElectrsAPI("http://0.0.0.0:3002");
        stakedRelayerAPI = new DefaultStakedRelayerAPI(api, bitcoinjs.networks.regtest, electrsAPI);
    });

    after(async () => {
        api.disconnect();
    });

    describe("request", () => {
        it("should getMonitoredVaultsCollateralizationRate", async () => {
            const monitoredVaultsCollateralizationRate = await stakedRelayerAPI.getMonitoredVaultsCollateralizationRate();
            assert.isDefined(monitoredVaultsCollateralizationRate);
        });

        it("should getLastBTCDOTExchangeRateAndTime", async () => {
            const lastBTCDOTExchangeRateAndTime = await stakedRelayerAPI.getLastBTCDOTExchangeRateAndTime();
            assert.isDefined(lastBTCDOTExchangeRateAndTime);
        });

        it("should getCurrentStateOfBTCParachain", async () => {
            const currentStateOfBTCParachain = await stakedRelayerAPI.getCurrentStateOfBTCParachain();
            assert.isDefined(currentStateOfBTCParachain);
        });
    });

    describe("sla", () => {
        it("should getMaxSLA", async () => {
            const feesToPay = await stakedRelayerAPI.getMaxSLA();
            assert.equal(feesToPay, 100);
        });

        it("should get SLA", async () => {
            const sla = await stakedRelayerAPI.getSLA(registry.createType("AccountId", eve.address));
            const slaBig = new Big(sla);
            const slaBenchmark = new Big("0");
            assert.isTrue(slaBig.gte(slaBenchmark));
        });
    });

    describe("fees", () => {
        it("should getFees", async () => {
            const feesPolkaBTC = await stakedRelayerAPI.getWrappingFees(registry.createType("AccountId", eve.address));
            const feesDOT = await stakedRelayerAPI.getCollateralFees(registry.createType("AccountId", eve.address));
            const feeBenchmark = new Big("0");
            assert.isTrue(new Big(feesPolkaBTC).gte(feeBenchmark));
            assert.isTrue(new Big(feesDOT).gte(feeBenchmark));
        });
    });
});
