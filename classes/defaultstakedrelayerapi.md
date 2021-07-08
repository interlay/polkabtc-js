[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultStakedRelayerAPI

# Class: DefaultStakedRelayerAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultStakedRelayerAPI`**

## Implements

- [`StakedRelayerAPI`](/interfaces/stakedrelayerapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultstakedrelayerapi.md#constructor)

### Properties

- [api](/classes/defaultstakedrelayerapi.md#api)
- [oracleAPI](/classes/defaultstakedrelayerapi.md#oracleapi)
- [vaultsAPI](/classes/defaultstakedrelayerapi.md#vaultsapi)

### Methods

- [getAccount](/classes/defaultstakedrelayerapi.md#getaccount)
- [getCurrentStateOfBTCParachain](/classes/defaultstakedrelayerapi.md#getcurrentstateofbtcparachain)
- [getLastBTCDOTExchangeRateAndTime](/classes/defaultstakedrelayerapi.md#getlastbtcdotexchangerateandtime)
- [getMonitoredVaultsCollateralizationRate](/classes/defaultstakedrelayerapi.md#getmonitoredvaultscollateralizationrate)
- [isMonitoredVaultCollateralizationDefined](/classes/defaultstakedrelayerapi.md#ismonitoredvaultcollateralizationdefined)
- [reportVaultTheft](/classes/defaultstakedrelayerapi.md#reportvaulttheft)
- [sendLogged](/classes/defaultstakedrelayerapi.md#sendlogged)
- [setAccount](/classes/defaultstakedrelayerapi.md#setaccount)
- [doesArrayContainEvent](/classes/defaultstakedrelayerapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultstakedrelayerapi.md#isdispatcherror)
- [printEvents](/classes/defaultstakedrelayerapi.md#printevents)
- [waitForEvent](/classes/defaultstakedrelayerapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultStakedRelayerAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/electrsapi.md) |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[constructor](/classes/defaulttransactionapi.md#constructor)

#### Defined in

[src/parachain/staked-relayer.ts:54](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L54)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/oracleapi.md)

#### Defined in

[src/parachain/staked-relayer.ts:54](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L54)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Defined in

[src/parachain/staked-relayer.ts:53](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L53)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[getAccount](/interfaces/stakedrelayerapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getCurrentStateOfBTCParachain

▸ **getCurrentStateOfBTCParachain**(): `Promise`<`StatusCode`\>

#### Returns

`Promise`<`StatusCode`\>

A parachain status code object

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[getCurrentStateOfBTCParachain](/interfaces/stakedrelayerapi.md#getcurrentstateofbtcparachain)

#### Defined in

[src/parachain/staked-relayer.ts:97](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L97)

___

### getLastBTCDOTExchangeRateAndTime

▸ **getLastBTCDOTExchangeRateAndTime**(): `Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

#### Returns

`Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

A tuple denoting [lastBTCDOTExchangeRate, lastBTCDOTExchangeRateTime]

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[getLastBTCDOTExchangeRateAndTime](/interfaces/stakedrelayerapi.md#getlastbtcdotexchangerateandtime)

#### Defined in

[src/parachain/staked-relayer.ts:91](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L91)

___

### getMonitoredVaultsCollateralizationRate

▸ **getMonitoredVaultsCollateralizationRate**(): `Promise`<`Map`<`AccountId`, `Big`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `Big`\>\>

A mapping from vault IDs to their collateralization

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[getMonitoredVaultsCollateralizationRate](/interfaces/stakedrelayerapi.md#getmonitoredvaultscollateralizationrate)

#### Defined in

[src/parachain/staked-relayer.ts:69](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L69)

___

### isMonitoredVaultCollateralizationDefined

▸ `Private` **isMonitoredVaultCollateralizationDefined**(`pair`): pair is [AccountId, Big]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`AccountId`, `undefined` \| `Big`] |

#### Returns

pair is [AccountId, Big]

#### Defined in

[src/parachain/staked-relayer.ts:87](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L87)

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

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[reportVaultTheft](/interfaces/stakedrelayerapi.md#reportvaulttheft)

#### Defined in

[src/parachain/staked-relayer.ts:62](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/staked-relayer.ts#L62)

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

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[sendLogged](/interfaces/stakedrelayerapi.md#sendlogged)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[sendLogged](/classes/defaulttransactionapi.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:30](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L30)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Implementation of

[StakedRelayerAPI](/interfaces/stakedrelayerapi.md).[setAccount](/interfaces/stakedrelayerapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### doesArrayContainEvent

▸ `Static` **doesArrayContainEvent**<`T`\>(`events`, `eventType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `eventType` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`boolean`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[doesArrayContainEvent](/classes/defaulttransactionapi.md#doesarraycontainevent)

#### Defined in

[src/parachain/transaction.ts:130](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L130)

___

### isDispatchError

▸ `Static` **isDispatchError**(`eventData`): eventData is DispatchError

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | `unknown` |

#### Returns

eventData is DispatchError

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[isDispatchError](/classes/defaulttransactionapi.md#isdispatcherror)

#### Defined in

[src/parachain/transaction.ts:126](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L126)

___

### printEvents

▸ `Static` **printEvents**(`api`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `events` | `EventRecord`[] |

#### Returns

`void`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[printEvents](/classes/defaulttransactionapi.md#printevents)

#### Defined in

[src/parachain/transaction.ts:66](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L66)

___

### waitForEvent

▸ `Static` **waitForEvent**<`T`\>(`api`, `event`, `timeoutMs`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `event` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `timeoutMs` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[waitForEvent](/classes/defaulttransactionapi.md#waitforevent)

#### Defined in

[src/parachain/transaction.ts:97](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L97)
