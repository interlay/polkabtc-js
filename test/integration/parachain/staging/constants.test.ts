import { ApiPromise } from "@polkadot/api";
import { assert } from "chai";
import { ConstantsAPI, DefaultConstantsAPI } from "../../../../src/parachain/constants";
import { createPolkadotAPI } from "../../../../src/factory";
import { defaultParachainEndpoint } from "../../../config";

describe("Constants", function () {
    this.timeout(10000); // API can be slightly slow

    let api: ApiPromise;
    let constantAPI: ConstantsAPI;

    beforeEach(async () => {
        api = await createPolkadotAPI(defaultParachainEndpoint);
        constantAPI = new DefaultConstantsAPI(api);
    });

    afterEach(async () => {
        await api.disconnect();
    });

    describe("getDotExistentialDeposit", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getDotExistentialDeposit();
            assert.isDefined(returnValue);
        });
    });

    describe("getInterBtcExistentialDeposit", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getInterBtcExistentialDeposit();
            assert.isDefined(returnValue);
        });
    });

    describe("getSystemBlockHashCount", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getSystemBlockHashCount();
            assert.isDefined(returnValue);
        });
    });

    describe("getSystemDbWeight", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getSystemDbWeight();
            assert.isDefined(returnValue);
        });
    });

    describe("getTimestampMinimumPeriod", () => {
        it("should sucessfully return", async () => {
            const returnValue = constantAPI.getTimestampMinimumPeriod();
            assert.isDefined(returnValue);
        });
    });

    describe("getTransactionByteFee", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getTransactionByteFee();
            assert.isDefined(returnValue);
        });
    });

    describe("getTransactionWeightToFee", () => {
        it("should sucessfully return", async () => {
            this.timeout(500);
            const returnValue = constantAPI.getTransactionWeightToFee();
            assert.isDefined(returnValue);
        });
    });
});
