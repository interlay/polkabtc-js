[@interlay/interbtc](/README.md) / [Exports](/modules.md) / StakedRelayerAPI

# Interface: StakedRelayerAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/transactionapi.md)

  ↳ **`StakedRelayerAPI`**

## Implemented by

- [`DefaultStakedRelayerAPI`](/classes/defaultstakedrelayerapi.md)

## Table of contents

### Methods

- [getAccount](/interfaces/stakedrelayerapi.md#getaccount)
- [getCurrentStateOfBTCParachain](/interfaces/stakedrelayerapi.md#getcurrentstateofbtcparachain)
- [getLastBTCDOTExchangeRateAndTime](/interfaces/stakedrelayerapi.md#getlastbtcdotexchangerateandtime)
- [getMonitoredVaultsCollateralizationRate](/interfaces/stakedrelayerapi.md#getmonitoredvaultscollateralizationrate)
- [reportVaultTheft](/interfaces/stakedrelayerapi.md#reportvaulttheft)
- [sendLogged](/interfaces/stakedrelayerapi.md#sendlogged)
- [setAccount](/interfaces/stakedrelayerapi.md#setaccount)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/transactionapi.md).[getAccount](/interfaces/transactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L12)

___

### getCurrentStateOfBTCParachain

▸ **getCurrentStateOfBTCParachain**(): `Promise`<`StatusCode`\>

#### Returns

`Promise`<`StatusCode`\>

A parachain status code object

#### Defined in

[src/parachain/staked-relayer.ts:31](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L31)

___

### getLastBTCDOTExchangeRateAndTime

▸ **getLastBTCDOTExchangeRateAndTime**(): `Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

#### Returns

`Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

A tuple denoting [lastBTCDOTExchangeRate, lastBTCDOTExchangeRateTime]

#### Defined in

[src/parachain/staked-relayer.ts:27](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L27)

___

### getMonitoredVaultsCollateralizationRate

▸ **getMonitoredVaultsCollateralizationRate**(): `Promise`<`Map`<`AccountId`, `Big`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `Big`\>\>

A mapping from vault IDs to their collateralization

#### Defined in

[src/parachain/staked-relayer.ts:23](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L23)

___

### reportVaultTheft

▸ **reportVaultTheft**(`vaultId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

A Staked Relayer reports misbehavior by a Vault, providing a fraud proof
(malicious Bitcoin transaction and the corresponding transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/staked-relayer.ts:42](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L42)

___

### sendLogged

▸ **sendLogged**<`T`\>(`transaction`, `successEventType?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Inherited from

[TransactionAPI](/interfaces/transactionapi.md).[sendLogged](/interfaces/transactionapi.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:13](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L13)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Inherited from

[TransactionAPI](/interfaces/transactionapi.md).[setAccount](/interfaces/transactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L11)
