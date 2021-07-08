[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultBTCRelayAPI

# Class: DefaultBTCRelayAPI

## Implements

- [`BTCRelayAPI`](/interfaces/btcrelayapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultbtcrelayapi.md#constructor)

### Methods

- [getLatestBlock](/classes/defaultbtcrelayapi.md#getlatestblock)
- [getLatestBlockHeight](/classes/defaultbtcrelayapi.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/classes/defaultbtcrelayapi.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/classes/defaultbtcrelayapi.md#getstableparachainconfirmations)
- [verifyTransactionInclusion](/classes/defaultbtcrelayapi.md#verifytransactioninclusion)

## Constructors

### constructor

• **new DefaultBTCRelayAPI**(`api`, `electrsAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/electrsapi.md) |

#### Defined in

[src/parachain/btc-relay.ts:40](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L40)

## Methods

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`H256Le`\>

#### Returns

`Promise`<`H256Le`\>

The raw transaction data, represented as a Buffer object

#### Implementation of

[BTCRelayAPI](/interfaces/btcrelayapi.md).[getLatestBlock](/interfaces/btcrelayapi.md#getlatestblock)

#### Defined in

[src/parachain/btc-relay.ts:53](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L53)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`u32`\>

#### Returns

`Promise`<`u32`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Implementation of

[BTCRelayAPI](/interfaces/btcrelayapi.md).[getLatestBlockHeight](/interfaces/btcrelayapi.md#getlatestblockheight)

#### Defined in

[src/parachain/btc-relay.ts:58](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L58)

___

### getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Implementation of

[BTCRelayAPI](/interfaces/btcrelayapi.md).[getStableBitcoinConfirmations](/interfaces/btcrelayapi.md#getstablebitcoinconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:43](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L43)

___

### getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Implementation of

[BTCRelayAPI](/interfaces/btcrelayapi.md).[getStableParachainConfirmations](/interfaces/btcrelayapi.md#getstableparachainconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:48](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L48)

___

### verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |
| `confirmations` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[BTCRelayAPI](/interfaces/btcrelayapi.md).[verifyTransactionInclusion](/interfaces/btcrelayapi.md#verifytransactioninclusion)

#### Defined in

[src/parachain/btc-relay.ts:63](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L63)
