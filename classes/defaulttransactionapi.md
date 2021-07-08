[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultTransactionAPI

# Class: DefaultTransactionAPI

## Hierarchy

- **`DefaultTransactionAPI`**

  ↳ [`DefaultVaultsAPI`](/classes/defaultvaultsapi.md)

  ↳ [`DefaultIssueAPI`](/classes/defaultissueapi.md)

  ↳ [`DefaultRedeemAPI`](/classes/defaultredeemapi.md)

  ↳ [`DefaultRefundAPI`](/classes/defaultrefundapi.md)

  ↳ [`DefaultStakedRelayerAPI`](/classes/defaultstakedrelayerapi.md)

  ↳ [`DefaultOracleAPI`](/classes/defaultoracleapi.md)

  ↳ [`DefaultTokensAPI`](/classes/defaulttokensapi.md)

  ↳ [`DefaultReplaceAPI`](/classes/defaultreplaceapi.md)

  ↳ [`DefaultNominationAPI`](/classes/defaultnominationapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaulttransactionapi.md#constructor)

### Properties

- [api](/classes/defaulttransactionapi.md#api)

### Methods

- [getAccount](/classes/defaulttransactionapi.md#getaccount)
- [sendLogged](/classes/defaulttransactionapi.md#sendlogged)
- [setAccount](/classes/defaulttransactionapi.md#setaccount)
- [doesArrayContainEvent](/classes/defaulttransactionapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaulttransactionapi.md#isdispatcherror)
- [printEvents](/classes/defaulttransactionapi.md#printevents)
- [waitForEvent](/classes/defaulttransactionapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultTransactionAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Defined in

[src/parachain/transaction.ts:19](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L19)

## Properties

### api

• **api**: `ApiPromise`

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

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

#### Defined in

[src/parachain/transaction.ts:97](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L97)
