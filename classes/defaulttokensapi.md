[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultTokensAPI

# Class: DefaultTokensAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultTokensAPI`**

## Implements

- [`TokensAPI`](/interfaces/tokensapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaulttokensapi.md#constructor)

### Properties

- [api](/classes/defaulttokensapi.md#api)

### Methods

- [balance](/classes/defaulttokensapi.md#balance)
- [balanceLocked](/classes/defaulttokensapi.md#balancelocked)
- [getAccount](/classes/defaulttokensapi.md#getaccount)
- [sendLogged](/classes/defaulttokensapi.md#sendlogged)
- [setAccount](/classes/defaulttokensapi.md#setaccount)
- [subscribeToBalance](/classes/defaulttokensapi.md#subscribetobalance)
- [total](/classes/defaulttokensapi.md#total)
- [transfer](/classes/defaulttokensapi.md#transfer)
- [doesArrayContainEvent](/classes/defaulttokensapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaulttokensapi.md#isdispatcherror)
- [printEvents](/classes/defaulttokensapi.md#printevents)
- [waitForEvent](/classes/defaulttokensapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultTokensAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[constructor](/classes/defaulttransactionapi.md#constructor)

#### Defined in

[src/parachain/tokens.ts:53](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L53)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

## Methods

### balance

▸ **balance**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's free balance

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[balance](/interfaces/tokensapi.md#balance)

#### Defined in

[src/parachain/tokens.ts:65](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L65)

___

### balanceLocked

▸ **balanceLocked**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's locked balance

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[balanceLocked](/interfaces/tokensapi.md#balancelocked)

#### Defined in

[src/parachain/tokens.ts:74](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L74)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[getAccount](/interfaces/tokensapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

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

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[sendLogged](/interfaces/tokensapi.md#sendlogged)

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

[TokensAPI](/interfaces/tokensapi.md).[setAccount](/interfaces/tokensapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### subscribeToBalance

▸ **subscribeToBalance**<`C`\>(`currency`, `account`, `callback`): `Promise`<`fn`\>

Subscribe to balance updates, denominated in InterBTC

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `account` | `string` |
| `callback` | (`account`: `string`, `balance`: `MonetaryAmount`<`Currency`<`C`\>, `C`\>) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[subscribeToBalance](/interfaces/tokensapi.md#subscribetobalance)

#### Defined in

[src/parachain/tokens.ts:83](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L83)

___

### total

▸ **total**<`C`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total amount in the system

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[total](/interfaces/tokensapi.md#total)

#### Defined in

[src/parachain/tokens.ts:58](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L58)

___

### transfer

▸ **transfer**<`C`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[TokensAPI](/interfaces/tokensapi.md).[transfer](/interfaces/tokensapi.md#transfer)

#### Defined in

[src/parachain/tokens.ts:104](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/tokens.ts#L104)

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
