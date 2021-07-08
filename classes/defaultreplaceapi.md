[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultReplaceAPI

# Class: DefaultReplaceAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultReplaceAPI`**

## Implements

- [`ReplaceAPI`](/interfaces/replaceapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultreplaceapi.md#constructor)

### Properties

- [api](/classes/defaultreplaceapi.md#api)
- [btcNetwork](/classes/defaultreplaceapi.md#btcnetwork)
- [feeAPI](/classes/defaultreplaceapi.md#feeapi)

### Methods

- [accept](/classes/defaultreplaceapi.md#accept)
- [execute](/classes/defaultreplaceapi.md#execute)
- [getAccount](/classes/defaultreplaceapi.md#getaccount)
- [getDustValue](/classes/defaultreplaceapi.md#getdustvalue)
- [getGriefingCollateral](/classes/defaultreplaceapi.md#getgriefingcollateral)
- [getReplacePeriod](/classes/defaultreplaceapi.md#getreplaceperiod)
- [getRequestIdFromEvents](/classes/defaultreplaceapi.md#getrequestidfromevents)
- [list](/classes/defaultreplaceapi.md#list)
- [map](/classes/defaultreplaceapi.md#map)
- [request](/classes/defaultreplaceapi.md#request)
- [sendLogged](/classes/defaultreplaceapi.md#sendlogged)
- [setAccount](/classes/defaultreplaceapi.md#setaccount)
- [withdraw](/classes/defaultreplaceapi.md#withdraw)
- [doesArrayContainEvent](/classes/defaultreplaceapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultreplaceapi.md#isdispatcherror)
- [printEvents](/classes/defaultreplaceapi.md#printevents)
- [waitForEvent](/classes/defaultreplaceapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultReplaceAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/replace.ts:101](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L101)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.network.md)

#### Defined in

[src/parachain/replace.ts:100](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L100)

___

### feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/feeapi.md)

#### Defined in

[src/parachain/replace.ts:101](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L101)

## Methods

### accept

▸ **accept**(`oldVault`, `amount`, `collateral`, `btcAddress`): `Promise`<`void`\>

Accept a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldVault` | `AccountId` |
| `amount` | `BTCAmount` |
| `collateral` | `PolkadotAmount` |
| `btcAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[accept](/interfaces/replaceapi.md#accept)

#### Defined in

[src/parachain/replace.ts:144](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L144)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a replace request

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[execute](/interfaces/replaceapi.md#execute)

#### Defined in

[src/parachain/replace.ts:157](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L157)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[getAccount](/interfaces/replaceapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getDustValue

▸ **getDustValue**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The minimum amount of btc that is accepted for replace requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[getDustValue](/interfaces/replaceapi.md#getdustvalue)

#### Defined in

[src/parachain/replace.ts:164](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L164)

___

### getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The griefing collateral

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[getGriefingCollateral](/interfaces/replaceapi.md#getgriefingcollateral)

#### Defined in

[src/parachain/replace.ts:170](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L170)

___

### getReplacePeriod

▸ **getReplacePeriod**(): `Promise`<`BlockNumber`\>

#### Returns

`Promise`<`BlockNumber`\>

The time difference in number of blocks between when a replace request is created
and required completion time by a vault. The replace period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[getReplacePeriod](/interfaces/replaceapi.md#getreplaceperiod)

#### Defined in

[src/parachain/replace.ts:178](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L178)

___

### getRequestIdFromEvents

▸ `Private` **getRequestIdFromEvents**(`events`): `Hash`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending a replace request transaction |

#### Returns

`Hash`

The id associated with the replace request. If the EventRecord array does not
contain replace request events, the function throws an error.

#### Defined in

[src/parachain/replace.ts:114](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L114)

___

### list

▸ **list**(): `Promise`<[`ReplaceRequestExt`](/interfaces/replacerequestext.md)[]\>

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/replacerequestext.md)[]\>

An array containing the replace requests

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[list](/interfaces/replaceapi.md#list)

#### Defined in

[src/parachain/replace.ts:183](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L183)

___

### map

▸ **map**(): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

A mapping from the replace request ID to the replace request object

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[map](/interfaces/replaceapi.md#map)

#### Defined in

[src/parachain/replace.ts:189](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L189)

___

### request

▸ **request**(`amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`string`\>

The request id

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[request](/interfaces/replaceapi.md#request)

#### Defined in

[src/parachain/replace.ts:124](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L124)

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

[ReplaceAPI](/interfaces/replaceapi.md).[sendLogged](/interfaces/replaceapi.md#sendlogged)

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

[ReplaceAPI](/interfaces/replaceapi.md).[setAccount](/interfaces/replaceapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### withdraw

▸ **withdraw**(`amount`): `Promise`<`void`\>

Wihdraw a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/replaceapi.md).[withdraw](/interfaces/replaceapi.md#withdraw)

#### Defined in

[src/parachain/replace.ts:138](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L138)

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
