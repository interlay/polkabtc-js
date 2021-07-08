[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultNominationAPI

# Class: DefaultNominationAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultNominationAPI`**

## Implements

- [`NominationAPI`](/interfaces/nominationapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultnominationapi.md#constructor)

### Properties

- [api](/classes/defaultnominationapi.md#api)
- [vaultsAPI](/classes/defaultnominationapi.md#vaultsapi)

### Methods

- [depositCollateral](/classes/defaultnominationapi.md#depositcollateral)
- [getAccount](/classes/defaultnominationapi.md#getaccount)
- [getFilteredNominations](/classes/defaultnominationapi.md#getfilterednominations)
- [getNominationStatus](/classes/defaultnominationapi.md#getnominationstatus)
- [getNominatorRewards](/classes/defaultnominationapi.md#getnominatorrewards)
- [getTotalNomination](/classes/defaultnominationapi.md#gettotalnomination)
- [isNominationEnabled](/classes/defaultnominationapi.md#isnominationenabled)
- [listNominationPairs](/classes/defaultnominationapi.md#listnominationpairs)
- [listNominatorRewards](/classes/defaultnominationapi.md#listnominatorrewards)
- [listNominatorsRaw](/classes/defaultnominationapi.md#listnominatorsraw)
- [listVaults](/classes/defaultnominationapi.md#listvaults)
- [optIn](/classes/defaultnominationapi.md#optin)
- [optOut](/classes/defaultnominationapi.md#optout)
- [sendLogged](/classes/defaultnominationapi.md#sendlogged)
- [setAccount](/classes/defaultnominationapi.md#setaccount)
- [setNominationEnabled](/classes/defaultnominationapi.md#setnominationenabled)
- [withdrawCollateral](/classes/defaultnominationapi.md#withdrawcollateral)
- [doesArrayContainEvent](/classes/defaultnominationapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultnominationapi.md#isdispatcherror)
- [printEvents](/classes/defaultnominationapi.md#printevents)
- [waitForEvent](/classes/defaultnominationapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultNominationAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/nomination.ts:99](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L99)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### vaultsAPI

• **vaultsAPI**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Defined in

[src/parachain/nomination.ts:99](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L99)

## Methods

### depositCollateral

▸ **depositCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[depositCollateral](/interfaces/nominationapi.md#depositcollateral)

#### Defined in

[src/parachain/nomination.ts:106](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L106)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[getAccount](/interfaces/nominationapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getFilteredNominations

▸ **getFilteredNominations**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<[[`AccountId`, `AccountId`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId?` | `string` |
| `vaultId?` | `string` |

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

A list of `[nominatorId, vaultId], nominatedAmount` pairs

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[getFilteredNominations](/interfaces/nominationapi.md#getfilterednominations)

#### Defined in

[src/parachain/nomination.ts:179](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L179)

___

### getNominationStatus

▸ **getNominationStatus**<`C`\>(`currency`, `nominatorId`, `vaultId`): `Promise`<[`NominationStatus`](/enums/nominationstatus.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId` | `string` |
| `vaultId` | `string` |

#### Returns

`Promise`<[`NominationStatus`](/enums/nominationstatus.md)\>

#### Defined in

[src/parachain/nomination.ts:219](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L219)

___

### getNominatorRewards

▸ **getNominatorRewards**(`nominatorId`): `Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nominatorId` | `string` |

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[getNominatorRewards](/interfaces/nominationapi.md#getnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:174](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L174)

___

### getTotalNomination

▸ **getTotalNomination**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId?` | `string` |
| `vaultId?` | `string` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total nominated amount, filtered using the given parameters

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[getTotalNomination](/interfaces/nominationapi.md#gettotalnomination)

#### Defined in

[src/parachain/nomination.ts:237](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L237)

___

### isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[isNominationEnabled](/interfaces/nominationapi.md#isnominationenabled)

#### Defined in

[src/parachain/nomination.ts:141](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L141)

___

### listNominationPairs

▸ **listNominationPairs**(): `Promise`<[`AccountId`, `AccountId`][]\>

#### Returns

`Promise`<[`AccountId`, `AccountId`][]\>

A list of all users who nominated collateral to vaults.
There is a separate entry for each (nominatorId, vaultId) pair.
The return format is `[[nominatorId, vaultId], Nominator][]`

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[listNominationPairs](/interfaces/nominationapi.md#listnominationpairs)

#### Defined in

[src/parachain/nomination.ts:157](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L157)

___

### listNominatorRewards

▸ **listNominatorRewards**(): `Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[listNominatorRewards](/interfaces/nominationapi.md#listnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:163](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L163)

___

### listNominatorsRaw

▸ **listNominatorsRaw**(): `Promise`<[[`AccountId`, `AccountId`], `Nominator`][]\>

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `Nominator`][]\>

#### Defined in

[src/parachain/nomination.ts:147](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L147)

___

### listVaults

▸ **listVaults**(): `Promise`<`AccountId`[]\>

#### Returns

`Promise`<`AccountId`[]\>

A list of all vaults that opted in to the nomination feature.

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[listVaults](/interfaces/nominationapi.md#listvaults)

#### Defined in

[src/parachain/nomination.ts:249](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L249)

___

### optIn

▸ **optIn**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[optIn](/interfaces/nominationapi.md#optin)

#### Defined in

[src/parachain/nomination.ts:126](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L126)

___

### optOut

▸ **optOut**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[optOut](/interfaces/nominationapi.md#optout)

#### Defined in

[src/parachain/nomination.ts:131](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L131)

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

[NominationAPI](/interfaces/nominationapi.md).[sendLogged](/interfaces/nominationapi.md#sendlogged)

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

[NominationAPI](/interfaces/nominationapi.md).[setAccount](/interfaces/nominationapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### setNominationEnabled

▸ **setNominationEnabled**(`enabled`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[setNominationEnabled](/interfaces/nominationapi.md#setnominationenabled)

#### Defined in

[src/parachain/nomination.ts:136](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L136)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/nominationapi.md).[withdrawCollateral](/interfaces/nominationapi.md#withdrawcollateral)

#### Defined in

[src/parachain/nomination.ts:116](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L116)

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
