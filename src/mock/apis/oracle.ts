import { OracleAPI } from "@interlay/polkabtc/apis";
import { OracleInfo } from "@interlay/polkabtc/apis/oracle";

export class MockOracleAPI implements OracleAPI {
    async getInfo(): Promise<OracleInfo> {
        const oracle_info: OracleInfo = {
            exchangeRate: await this.getExchangeRate(),
            feed: await this.getFeed(),
            name: await this.getOracleName(), 
            online: await this.isOnline(), 
            lastUpdate: await this.getLastExchangeRateTime(),
        };

        return Promise.resolve(oracle_info);
    }

    getExchangeRate(): Promise<number> {
        return Promise.resolve(20);
    }

    getOracleName(): Promise<string> {
        return Promise.resolve("ChainLink");
    }

    getFeed(): Promise<string> {
        return Promise.resolve("BTC/DOT");
    }

    getLastExchangeRateTime(): Promise<Date> {
        return Promise.resolve(new Date());
    }

    isOnline(): Promise<boolean> {
        return Promise.resolve(true);
    }
}