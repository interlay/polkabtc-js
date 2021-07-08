[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultRefundAPI

# Class: DefaultRefundAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultRefundAPI`**

## Implements

- [`RefundAPI`](/interfaces/refundapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultrefundapi.md#constructor)

### Properties

- [api](/classes/defaultrefundapi.md#api)

### Methods

- [execute](/classes/defaultrefundapi.md#execute)
- [getAccount](/classes/defaultrefundapi.md#getaccount)
- [getRequestById](/classes/defaultrefundapi.md#getrequestbyid)
- [getRequestByIssueId](/classes/defaultrefundapi.md#getrequestbyissueid)
- [getRequestIdByIssueId](/classes/defaultrefundapi.md#getrequestidbyissueid)
- [list](/classes/defaultrefundapi.md#list)
- [mapForUser](/classes/defaultrefundapi.md#mapforuser)
- [sendLogged](/classes/defaultrefundapi.md#sendlogged)
- [setAccount](/classes/defaultrefundapi.md#setaccount)
- [doesArrayContainEvent](/classes/defaultrefundapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultrefundapi.md#isdispatcherror)
- [printEvents](/classes/defaultrefundapi.md#printevents)
- [waitForEvent](/classes/defaultrefundapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultRefundAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/refund.ts:61](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L61)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

## Methods

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a refund request

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

[RefundAPI](/interfaces/refundapi.md).[execute](/interfaces/refundapi.md#execute)

#### Defined in

[src/parachain/refund.ts:66](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L66)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[getAccount](/interfaces/refundapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getRequestById

▸ **getRequestById**(`refundId`): `Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refundId` | `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)\>

A refund object

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[getRequestById](/interfaces/refundapi.md#getrequestbyid)

#### Defined in

[src/parachain/refund.ts:88](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L88)

___

### getRequestByIssueId

▸ **getRequestByIssueId**(`issueId`): `Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)\>

A refund request object

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[getRequestByIssueId](/interfaces/refundapi.md#getrequestbyissueid)

#### Defined in

[src/parachain/refund.ts:103](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L103)

___

### getRequestIdByIssueId

▸ **getRequestIdByIssueId**(`issueId`): `Promise`<`H256`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<`H256`\>

The ID of the refund request

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[getRequestIdByIssueId](/interfaces/refundapi.md#getrequestidbyissueid)

#### Defined in

[src/parachain/refund.ts:93](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L93)

___

### list

▸ **list**(): `Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)[]\>

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/refundrequestext.md)[]\>

An array containing the refund requests

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[list](/interfaces/refundapi.md#list)

#### Defined in

[src/parachain/refund.ts:73](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L73)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`RefundRequestExt`](/interfaces/refundrequestext.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`RefundRequestExt`](/interfaces/refundrequestext.md)\>\>

A mapping from the refund ID to the refund request, corresponding to the given account

#### Implementation of

[RefundAPI](/interfaces/refundapi.md).[mapForUser](/interfaces/refundapi.md#mapforuser)

#### Defined in

[src/parachain/refund.ts:79](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L79)

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

[RefundAPI](/interfaces/refundapi.md).[sendLogged](/interfaces/refundapi.md#sendlogged)

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

[RefundAPI](/interfaces/refundapi.md).[setAccount](/interfaces/refundapi.md#setaccount)

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
