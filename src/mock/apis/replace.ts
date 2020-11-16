import { ReplaceAPI } from "@interlay/polkabtc/apis";
import { BlockNumber } from "@polkadot/types/interfaces";
import { PolkaBTC, DOT } from "@interlay/polkabtc/interfaces/default";
import { ReplaceRequest } from "@interlay/polkabtc/interfaces";
import BN from "bn.js";

export class MockReplaceAPI implements ReplaceAPI {
    async getBtcDustValue(): Promise<PolkaBTC> {
        return Promise.resolve(new BN(1) as PolkaBTC);
    }

    async getGriefingCollateral(): Promise<DOT> {
        return Promise.resolve(new BN(12) as DOT);
    }

    async getReplacePeriod(): Promise<BlockNumber> {
        return Promise.resolve(new BN(12) as BlockNumber);
    }

    async list(): Promise<ReplaceRequest[]> {
        return Promise.resolve([]);
    }

    async listWithId(): Promise<[string, ReplaceRequest][]> {
        return Promise.resolve([]);
    }
}
