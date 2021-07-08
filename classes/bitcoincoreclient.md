[@interlay/interbtc](/README.md) / [Exports](/modules.md) / BitcoinCoreClient

# Class: BitcoinCoreClient

## Table of contents

### Constructors

- [constructor](/classes/bitcoincoreclient.md#constructor)

### Properties

- [client](/classes/bitcoincoreclient.md#client)

### Methods

- [broadcastTx](/classes/bitcoincoreclient.md#broadcasttx)
- [formatRawTxInput](/classes/bitcoincoreclient.md#formatrawtxinput)
- [getBalance](/classes/bitcoincoreclient.md#getbalance)
- [getMempoolInfo](/classes/bitcoincoreclient.md#getmempoolinfo)
- [mineBlocks](/classes/bitcoincoreclient.md#mineblocks)
- [mineBlocksWithoutDelay](/classes/bitcoincoreclient.md#mineblockswithoutdelay)
- [sendBtcTxAndMine](/classes/bitcoincoreclient.md#sendbtctxandmine)
- [sendToAddress](/classes/bitcoincoreclient.md#sendtoaddress)

## Constructors

### constructor

• **new BitcoinCoreClient**(`network`, `host`, `username`, `password`, `port`, `wallet`)

Initialize the Bitcoin-core client, which is a js equivalent to bitcoin-cli

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | `string` | Bitcoin network (mainnet, testnet, regtest) |
| `host` | `string` | URL of Bitcoin node (e.g. localhost) |
| `username` | `string` | User for RPC authentication |
| `password` | `string` | Password for RPC authentication |
| `port` | `string` | Bitcoin node connection port (e.g. 18443) |
| `wallet` | `string` | Wallet to use if several are available. See https://github.com/ruimarinho/bitcoin-core#multiwallet |

#### Defined in

[src/utils/bitcoin-core-client.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L12)

## Properties

### client

• **client**: `any`

#### Defined in

[src/utils/bitcoin-core-client.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L12)

## Methods

### broadcastTx

▸ **broadcastTx**(`recipient`, `amount`, `data?`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BTCAmount` |
| `data?` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:59](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L59)

___

### formatRawTxInput

▸ **formatRawTxInput**(`recipient`, `amount`, `data?`): `RecipientsToUTXOAmounts`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `Big` |
| `data?` | `string` |

#### Returns

`RecipientsToUTXOAmounts`[]

#### Defined in

[src/utils/bitcoin-core-client.ts:50](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L50)

___

### getBalance

▸ **getBalance**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:99](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L99)

___

### getMempoolInfo

▸ **getMempoolInfo**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:108](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L108)

___

### mineBlocks

▸ **mineBlocks**(`n`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:91](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L91)

___

### mineBlocksWithoutDelay

▸ **mineBlocksWithoutDelay**(`n`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:86](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L86)

___

### sendBtcTxAndMine

▸ **sendBtcTxAndMine**(`recipient`, `amount`, `blocksToMine`, `data?`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BTCAmount` |
| `blocksToMine` | `number` |
| `data?` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:34](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L34)

___

### sendToAddress

▸ **sendToAddress**(`address`, `amount`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:103](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/bitcoin-core-client.ts#L103)
