[@interlay/interbtc](/README.md) / [Exports](/modules.md) / VaultsAPI

# Interface: VaultsAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/transactionapi.md)

  ↳ **`VaultsAPI`**

## Implemented by

- [`DefaultVaultsAPI`](/classes/defaultvaultsapi.md)

## Table of contents

### Methods

- [computeReward](/interfaces/vaultsapi.md#computereward)
- [depositCollateral](/interfaces/vaultsapi.md#depositcollateral)
- [get](/interfaces/vaultsapi.md#get)
- [getAPY](/interfaces/vaultsapi.md#getapy)
- [getAccount](/interfaces/vaultsapi.md#getaccount)
- [getBackingCollateral](/interfaces/vaultsapi.md#getbackingcollateral)
- [getCollateral](/interfaces/vaultsapi.md#getcollateral)
- [getFeesCollateral](/interfaces/vaultsapi.md#getfeescollateral)
- [getFeesWrapped](/interfaces/vaultsapi.md#getfeeswrapped)
- [getIssuableAmount](/interfaces/vaultsapi.md#getissuableamount)
- [getIssuedAmount](/interfaces/vaultsapi.md#getissuedamount)
- [getLiquidationCollateralThreshold](/interfaces/vaultsapi.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/interfaces/vaultsapi.md#getliquidationvault)
- [getLiquidationVaultId](/interfaces/vaultsapi.md#getliquidationvaultid)
- [getMaxNominationRatio](/interfaces/vaultsapi.md#getmaxnominationratio)
- [getMaxSLA](/interfaces/vaultsapi.md#getmaxsla)
- [getPremiumRedeemThreshold](/interfaces/vaultsapi.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/interfaces/vaultsapi.md#getpremiumredeemvaults)
- [getPunishmentFee](/interfaces/vaultsapi.md#getpunishmentfee)
- [getRequiredCollateralForVault](/interfaces/vaultsapi.md#getrequiredcollateralforvault)
- [getRequiredCollateralForWrapped](/interfaces/vaultsapi.md#getrequiredcollateralforwrapped)
- [getSLA](/interfaces/vaultsapi.md#getsla)
- [getSecureCollateralThreshold](/interfaces/vaultsapi.md#getsecurecollateralthreshold)
- [getStakingCapacity](/interfaces/vaultsapi.md#getstakingcapacity)
- [getSystemCollateralization](/interfaces/vaultsapi.md#getsystemcollateralization)
- [getTotalIssuableAmount](/interfaces/vaultsapi.md#gettotalissuableamount)
- [getTotalIssuedAmount](/interfaces/vaultsapi.md#gettotalissuedamount)
- [getVaultCollateralization](/interfaces/vaultsapi.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/interfaces/vaultsapi.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/interfaces/vaultsapi.md#getvaultswithredeemabletokens)
- [isVaultFlaggedForTheft](/interfaces/vaultsapi.md#isvaultflaggedfortheft)
- [list](/interfaces/vaultsapi.md#list)
- [mapIssueRequests](/interfaces/vaultsapi.md#mapissuerequests)
- [mapRedeemRequests](/interfaces/vaultsapi.md#mapredeemrequests)
- [mapReplaceRequests](/interfaces/vaultsapi.md#mapreplacerequests)
- [selectRandomVaultIssue](/interfaces/vaultsapi.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/interfaces/vaultsapi.md#selectrandomvaultredeem)
- [sendLogged](/interfaces/vaultsapi.md#sendlogged)
- [setAccount](/interfaces/vaultsapi.md#setaccount)
- [withdrawCollateral](/interfaces/vaultsapi.md#withdrawcollateral)

## Methods

### computeReward

▸ **computeReward**<`C`\>(`currency`, `localPoolId`, `accountId`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |
| `localPoolId` | `string` | the account id for the local pool |
| `accountId` | `string` | the account id of the local pool nominator |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The reward as a currency type, dependending on the currencyId parameter

#### Defined in

[src/parachain/vaults.ts:304](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L304)

___

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of extra collateral to lock |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:267](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L267)

___

### get

▸ **get**(`vaultId`): `Promise`<`VaultExt`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The ID of the vault to fetch |

#### Returns

`Promise`<`VaultExt`\>

A vault object

#### Defined in

[src/parachain/vaults.ts:106](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L106)

___

### getAPY

▸ **getAPY**(`vaultId`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in InterBTC and DOT
divided by the locked DOT.

**`note`** this does not account for interest compounding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | the id of the vault |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Defined in

[src/parachain/vaults.ts:243](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L243)

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

### getBackingCollateral

▸ **getBackingCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The entire collateral backing a vault's issued tokens.

#### Defined in

[src/parachain/vaults.ts:314](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L314)

___

### getCollateral

▸ **getCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The collateral of a vault, taking slashes into account.

#### Defined in

[src/parachain/vaults.ts:281](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L281)

___

### getFeesCollateral

▸ **getFeesCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | The vault account ID |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total DOT reward collected by the vault

#### Defined in

[src/parachain/vaults.ts:230](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L230)

___

### getFeesWrapped

▸ **getFeesWrapped**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | The vault account ID |

#### Returns

`Promise`<`BTCAmount`\>

The total InterBTC reward collected by the vault

#### Defined in

[src/parachain/vaults.ts:224](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L224)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issuable by this vault

#### Defined in

[src/parachain/vaults.ts:166](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L166)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issued by the given vault

#### Defined in

[src/parachain/vaults.ts:161](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L161)

___

### getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The lower bound for the collateral rate in InterBTC.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Defined in

[src/parachain/vaults.ts:208](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L208)

___

### getLiquidationVault

▸ **getLiquidationVault**(): `Promise`<`SystemVault`\>

#### Returns

`Promise`<`SystemVault`\>

A vault object representing the liquidation vault

#### Defined in

[src/parachain/vaults.ts:275](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L275)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Defined in

[src/parachain/vaults.ts:271](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L271)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Defined in

[src/parachain/vaults.ts:288](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L288)

___

### getMaxSLA

▸ **getMaxSLA**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The maximum SLA score, a positive integer

#### Defined in

[src/parachain/vaults.ts:252](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L252)

___

### getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The collateral rate of Vaults at which users receive
a premium in DOT, allocated from the
Vault’s collateral, when performing a redeem with this Vault.

#### Defined in

[src/parachain/vaults.ts:214](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L214)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Defined in

[src/parachain/vaults.ts:189](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L189)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed BTC-in-DOT
value of the request). The fee is paid in DOT based on the InterBTC
amount at the current exchange rate.

#### Defined in

[src/parachain/vaults.ts:259](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L259)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Defined in

[src/parachain/vaults.ts:141](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L141)

___

### getRequiredCollateralForWrapped

▸ **getRequiredCollateralForWrapped**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the minimum amount of collateral required for the given amount of btc
with the current threshold and exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | Amount to issue, denominated in BTC |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral for issuing, denominated in DOT

#### Defined in

[src/parachain/vaults.ts:153](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L153)

___

### getSLA

▸ **getSLA**(`vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`number`\>

The SLA score of the given vault, an integer in the range [0, MaxSLA]

#### Defined in

[src/parachain/vaults.ts:248](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L248)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for DOT collateral locked
by Vaults, necessary for issuing InterBTC

#### Defined in

[src/parachain/vaults.ts:219](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L219)

___

### getStakingCapacity

▸ **getStakingCapacity**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Defined in

[src/parachain/vaults.ts:294](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L294)

___

### getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

Get the total system collateralization measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

#### Returns

`Promise`<`undefined` \| `Big`\>

The total system collateralization

#### Defined in

[src/parachain/vaults.ts:131](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L131)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC that can be issued, considering the DOT
locked by the vaults

#### Defined in

[src/parachain/vaults.ts:175](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L175)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC issued by the vaults

#### Defined in

[src/parachain/vaults.ts:170](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L170)

___

### getVaultCollateralization

▸ **getVaultCollateralization**<`C`\>(`vaultId`, `newCollateral?`, `onlyIssued?`): `Promise`<`undefined` \| `Big`\>

Get the collateralization of a single vault measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

**`remarks`** Undefined collateralization is handled as infinite collateralization in the UI.
If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
which means collateralization is infinite.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | the vault account id |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | use this instead of the vault's actual collateral |
| `onlyIssued?` | `boolean` | optional, defaults to `false`. Specifies whether the collateralization should only include the issued tokens, leaving out unsettled ("to-be-issued") tokens |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Defined in

[src/parachain/vaults.ts:120](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L120)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with issuable tokens, sorted in descending order of this value

#### Defined in

[src/parachain/vaults.ts:193](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L193)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with redeemable tokens, sorted in descending order of this value

#### Defined in

[src/parachain/vaults.ts:197](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L197)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Defined in

[src/parachain/vaults.ts:202](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L202)

___

### list

▸ **list**(): `Promise`<`VaultExt`[]\>

#### Returns

`Promise`<`VaultExt`[]\>

An array containing the vaults with non-zero backing collateral

#### Defined in

[src/parachain/vaults.ts:79](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L79)

___

### mapIssueRequests

▸ **mapIssueRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

Fetch the issue requests associated with a vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter issue requests |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

A map with issue ids to issue requests involving said vault

#### Defined in

[src/parachain/vaults.ts:86](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L86)

___

### mapRedeemRequests

▸ **mapRedeemRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

Fetch the redeem requests associated with a vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter redeem requests |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

A map with redeem ids to redeem requests involving said vault

#### Defined in

[src/parachain/vaults.ts:93](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L93)

___

### mapReplaceRequests

▸ **mapReplaceRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter replace requests |

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

A map with replace ids to replace requests involving said vault as new vault and old vault

#### Defined in

[src/parachain/vaults.ts:101](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L101)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | InterBTC amount to issue |

#### Returns

`Promise`<`AccountId`\>

A vault that has sufficient DOT collateral to issue the given InterBTC amount

#### Defined in

[src/parachain/vaults.ts:180](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L180)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | InterBTC amount to redeem |

#### Returns

`Promise`<`AccountId`\>

A vault that has issued sufficient InterBTC to redeem the given InterBTC amount

#### Defined in

[src/parachain/vaults.ts:185](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L185)

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

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral to withdraw |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:263](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L263)
