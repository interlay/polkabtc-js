import { BTCCoreAPI } from "../../apis/btc-core";

export class MockBTCCoreAPI implements BTCCoreAPI {
    getLatestBlock(): Promise<string> {
        return Promise.resolve("00000000000000000006d0d6796fc5ed2e7be8d5511912bc3e8bdc1cf8d4c63f");
    }

    getLatestBlockHeight(): Promise<number> {
        return Promise.resolve(1835346);
    }

    getMerkleProof(): Promise<string> {
        return Promise.resolve(
            // eslint-disable-next-line max-len
            "00000020db957b64e98a999cce48ff1bc3be1c5c93f886842f8309000000000000000000c7d497903ba4a8cec7c32909f3b1ca0727e84653fc72bb6f0514150bde9c522ccb24745faa920e17ad204447f50400000c8926403719fb0befce9548b599e42722ad9bb38f9c1d52d7c5af49ca7dcb156cf34dc26187e607857296152c7d5ce23b844fa1d5144edbb803c487f44a0cf45af4e23c954c9882b149f2793ec0bbbe1269cfbdbce2050c607c515a3ba7605925d53585a422b26a1c114965d6fa39ee5491b4263d6dbf8e7a6c75501acfefafb6cb68d819bd4da7a9b24506d434ca720d91ccfcea0eea951481362e4409d325ffe46127d55feb011a9285f7af5f471fb16bfe43a9aa5adf2d545333a97d283e55330f209a85b80aa217d72e4ad194e8bc9957488d30382060ad4a7ec5842b46420f057e1af88adeedb3d236e7538d0cb63fffbea3fbd49dacf53adc1cc099b172dd5c9f407ce64e1c323750c2bad3b8c0acc52c204e91e8d5e13f64dc0d3eab338950f5475e5a84e0cc6aac41dc512ed420f134803ea9a399ac6792f6741914737c425b75625b92f0f742ea22538f686e9080e6e03374ee34c2a9d62c6e651b6c35a6586f67a56a7244b303094f954e4691f3be3ecac1dc36914cd1561a6625b003ff0f00"
        );
    }
}
