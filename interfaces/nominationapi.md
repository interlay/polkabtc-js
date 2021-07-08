[@interlay/interbtc](/README.md) / [Exports](/modules.md) / NominationAPI

# Interface: NominationAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/transactionapi.md)

  ↳ **`NominationAPI`**

## Implemented by

- [`DefaultNominationAPI`](/classes/defaultnominationapi.md)

## Table of contents

### Methods

- [depositCollateral](/interfaces/nominationapi.md#depositcollateral)
- [getAccount](/interfaces/nominationapi.md#getaccount)
- [getFilteredNominations](/interfaces/nominationapi.md#getfilterednominations)
- [getNominatorRewards](/interfaces/nominationapi.md#getnominatorrewards)
- [getTotalNomination](/interfaces/nominationapi.md#gettotalnomination)
- [isNominationEnabled](/interfaces/nominationapi.md#isnominationenabled)
- [listNominationPairs](/interfaces/nominationapi.md#listnominationpairs)
- [listNominatorRewards](/interfaces/nominationapi.md#listnominatorrewards)
- [listVaults](/interfaces/nominationapi.md#listvaults)
- [optIn](/interfaces/nominationapi.md#optin)
- [optOut](/interfaces/nominationapi.md#optout)
- [sendLogged](/interfaces/nominationapi.md#sendlogged)
- [setAccount](/interfaces/nominationapi.md#setaccount)
- [setNominationEnabled](/interfaces/nominationapi.md#setnominationenabled)
- [withdrawCollateral](/interfaces/nominationapi.md#withdrawcollateral)

## Methods

### depositCollateral

▸ **depositCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | Vault to nominate collateral to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to deposit, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:24](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L24)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/transactionapi.md).[getAccount](/interfaces/transactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L12)

___

### getFilteredNominations

▸ **getFilteredNominations**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<[[`AccountId`, `AccountId`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The collateral currency of the nominations |
| `nominatorId?` | `string` | Id of user who nominated to one or more vaults |
| `vaultId?` | `string` | Id of vault who is opted in to nomination |

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

A list of `[nominatorId, vaultId], nominatedAmount` pairs

#### Defined in

[src/parachain/nomination.ts:73](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L73)

___

### getNominatorRewards

▸ **getNominatorRewards**(`nominatorId`): `Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nominatorId` | `string` | Id of user who nominated to one or more vaults |

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Defined in

[src/parachain/nomination.ts:95](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L95)

___

### getTotalNomination

▸ **getTotalNomination**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The collateral currency of the nominations |
| `nominatorId?` | `string` | Id of user who nominated to one or more vaults |
| `vaultId?` | `string` | Id of vault who is opted in to nomination |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total nominated amount, filtered using the given parameters

#### Defined in

[src/parachain/nomination.ts:85](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L85)

___

### isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Defined in

[src/parachain/nomination.ts:51](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L51)

___

### listNominationPairs

▸ **listNominationPairs**(): `Promise`<[`AccountId`, `AccountId`][]\>

#### Returns

`Promise`<[`AccountId`, `AccountId`][]\>

A list of all users who nominated collateral to vaults.
There is a separate entry for each (nominatorId, vaultId) pair.
The return format is `[[nominatorId, vaultId], Nominator][]`

#### Defined in

[src/parachain/nomination.ts:57](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L57)

___

### listNominatorRewards

▸ **listNominatorRewards**(): `Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

#### Returns

`Promise`<[[`AccountId`, `AccountId`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Defined in

[src/parachain/nomination.ts:61](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L61)

___

### listVaults

▸ **listVaults**(): `Promise`<`AccountId`[]\>

#### Returns

`Promise`<`AccountId`[]\>

A list of all vaults that opted in to the nomination feature.

#### Defined in

[src/parachain/nomination.ts:65](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L65)

___

### optIn

▸ **optIn**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:39](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L39)

___

### optOut

▸ **optOut**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:43](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L43)

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

#### Defined in

[src/parachain/nomination.ts:47](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L47)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | Vault that collateral was nominated to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to withdraw, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:32](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/nomination.ts#L32)
