[@interlay/interbtc](/README.md) / [Exports](/modules.md) / BTCRelayAPI

# Interface: BTCRelayAPI

## Implemented by

- [`DefaultBTCRelayAPI`](/classes/defaultbtcrelayapi.md)

## Table of contents

### Methods

- [getLatestBlock](/interfaces/btcrelayapi.md#getlatestblock)
- [getLatestBlockHeight](/interfaces/btcrelayapi.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/interfaces/btcrelayapi.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/interfaces/btcrelayapi.md#getstableparachainconfirmations)
- [verifyTransactionInclusion](/interfaces/btcrelayapi.md#verifytransactioninclusion)

## Methods

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`H256Le`\>

#### Returns

`Promise`<`H256Le`\>

The raw transaction data, represented as a Buffer object

#### Defined in

[src/parachain/btc-relay.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L26)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`u32`\>

#### Returns

`Promise`<`u32`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Defined in

[src/parachain/btc-relay.ts:30](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L30)

___

### getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Defined in

[src/parachain/btc-relay.ts:17](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L17)

___

### getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Defined in

[src/parachain/btc-relay.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L22)

___

### verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |
| `confirmations?` | `number` | The number of block confirmations needed to accept the inclusion proof. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/btc-relay.ts:37](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/btc-relay.ts#L37)
