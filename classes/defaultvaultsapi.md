[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultVaultsAPI

# Class: DefaultVaultsAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultVaultsAPI`**

## Implements

- [`VaultsAPI`](/interfaces/vaultsapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultvaultsapi.md#constructor)

### Properties

- [api](/classes/defaultvaultsapi.md#api)
- [btcNetwork](/classes/defaultvaultsapi.md#btcnetwork)
- [feeAPI](/classes/defaultvaultsapi.md#feeapi)
- [granularity](/classes/defaultvaultsapi.md#granularity)
- [oracleAPI](/classes/defaultvaultsapi.md#oracleapi)
- [tokensAPI](/classes/defaultvaultsapi.md#tokensapi)

### Methods

- [calculateCapacity](/classes/defaultvaultsapi.md#calculatecapacity)
- [computeReward](/classes/defaultvaultsapi.md#computereward)
- [computeRewardInPool](/classes/defaultvaultsapi.md#computerewardinpool)
- [depositCollateral](/classes/defaultvaultsapi.md#depositcollateral)
- [get](/classes/defaultvaultsapi.md#get)
- [getAPY](/classes/defaultvaultsapi.md#getapy)
- [getAccount](/classes/defaultvaultsapi.md#getaccount)
- [getBackingCollateral](/classes/defaultvaultsapi.md#getbackingcollateral)
- [getCollateral](/classes/defaultvaultsapi.md#getcollateral)
- [getFeesCollateral](/classes/defaultvaultsapi.md#getfeescollateral)
- [getFeesWrapped](/classes/defaultvaultsapi.md#getfeeswrapped)
- [getIssuableAmount](/classes/defaultvaultsapi.md#getissuableamount)
- [getIssuedAmount](/classes/defaultvaultsapi.md#getissuedamount)
- [getIssuedAmounts](/classes/defaultvaultsapi.md#getissuedamounts)
- [getLiquidationCollateralThreshold](/classes/defaultvaultsapi.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/classes/defaultvaultsapi.md#getliquidationvault)
- [getLiquidationVaultId](/classes/defaultvaultsapi.md#getliquidationvaultid)
- [getMaxNominationRatio](/classes/defaultvaultsapi.md#getmaxnominationratio)
- [getMaxSLA](/classes/defaultvaultsapi.md#getmaxsla)
- [getPremiumRedeemThreshold](/classes/defaultvaultsapi.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/classes/defaultvaultsapi.md#getpremiumredeemvaults)
- [getPunishmentFee](/classes/defaultvaultsapi.md#getpunishmentfee)
- [getRequiredCollateralForVault](/classes/defaultvaultsapi.md#getrequiredcollateralforvault)
- [getRequiredCollateralForWrapped](/classes/defaultvaultsapi.md#getrequiredcollateralforwrapped)
- [getRewardPerToken](/classes/defaultvaultsapi.md#getrewardpertoken)
- [getRewardTally](/classes/defaultvaultsapi.md#getrewardtally)
- [getSLA](/classes/defaultvaultsapi.md#getsla)
- [getSecureCollateralThreshold](/classes/defaultvaultsapi.md#getsecurecollateralthreshold)
- [getStake](/classes/defaultvaultsapi.md#getstake)
- [getStakingCapacity](/classes/defaultvaultsapi.md#getstakingcapacity)
- [getSystemCollateralization](/classes/defaultvaultsapi.md#getsystemcollateralization)
- [getTotalIssuableAmount](/classes/defaultvaultsapi.md#gettotalissuableamount)
- [getTotalIssuedAmount](/classes/defaultvaultsapi.md#gettotalissuedamount)
- [getVaultCollateralization](/classes/defaultvaultsapi.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/classes/defaultvaultsapi.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/classes/defaultvaultsapi.md#getvaultswithredeemabletokens)
- [isNoTokensIssuedError](/classes/defaultvaultsapi.md#isnotokensissuederror)
- [isVaultFlaggedForTheft](/classes/defaultvaultsapi.md#isvaultflaggedfortheft)
- [list](/classes/defaultvaultsapi.md#list)
- [mapIssueRequests](/classes/defaultvaultsapi.md#mapissuerequests)
- [mapRedeemRequests](/classes/defaultvaultsapi.md#mapredeemrequests)
- [mapReplaceRequests](/classes/defaultvaultsapi.md#mapreplacerequests)
- [register](/classes/defaultvaultsapi.md#register)
- [selectRandomVaultIssue](/classes/defaultvaultsapi.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/classes/defaultvaultsapi.md#selectrandomvaultredeem)
- [sendLogged](/classes/defaultvaultsapi.md#sendlogged)
- [setAccount](/classes/defaultvaultsapi.md#setaccount)
- [unwrapCurrency](/classes/defaultvaultsapi.md#unwrapcurrency)
- [withdrawCollateral](/classes/defaultvaultsapi.md#withdrawcollateral)
- [wrapCurrency](/classes/defaultvaultsapi.md#wrapcurrency)
- [doesArrayContainEvent](/classes/defaultvaultsapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultvaultsapi.md#isdispatcherror)
- [printEvents](/classes/defaultvaultsapi.md#printevents)
- [waitForEvent](/classes/defaultvaultsapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultVaultsAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/vaults.ts:325](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L325)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.network.md)

#### Defined in

[src/parachain/vaults.ts:322](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L322)

___

### feeAPI

• **feeAPI**: [`FeeAPI`](/interfaces/feeapi.md)

#### Defined in

[src/parachain/vaults.ts:325](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L325)

___

### granularity

• **granularity**: `number` = `5`

#### Defined in

[src/parachain/vaults.ts:321](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L321)

___

### oracleAPI

• **oracleAPI**: [`OracleAPI`](/interfaces/oracleapi.md)

#### Defined in

[src/parachain/vaults.ts:324](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L324)

___

### tokensAPI

• **tokensAPI**: [`TokensAPI`](/interfaces/tokensapi.md)

#### Defined in

[src/parachain/vaults.ts:323](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L323)

## Methods

### calculateCapacity

▸ `Private` **calculateCapacity**<`C`\>(`collateral`): `Promise`<`BTCAmount`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`BTCAmount`\>

#### Defined in

[src/parachain/vaults.ts:635](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L635)

___

### computeReward

▸ **computeReward**<`C`\>(`currency`, `localPoolId`, `accountId`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `localPoolId` | `string` |
| `accountId` | `string` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The reward as a currency type, dependending on the currencyId parameter

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[computeReward](/interfaces/vaultsapi.md#computereward)

#### Defined in

[src/parachain/vaults.ts:457](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L457)

___

### computeRewardInPool

▸ **computeRewardInPool**<`C`\>(`currency`, `rewardPool`, `accountId`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `rewardPool` | `RewardPool` |
| `accountId` | `string` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Defined in

[src/parachain/vaults.ts:484](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L484)

___

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[depositCollateral](/interfaces/vaultsapi.md#depositcollateral)

#### Defined in

[src/parachain/vaults.ts:347](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L347)

___

### get

▸ **get**(`vaultId`): `Promise`<`VaultExt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`VaultExt`\>

A vault object

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[get](/interfaces/vaultsapi.md#get)

#### Defined in

[src/parachain/vaults.ts:397](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L397)

___

### getAPY

▸ **getAPY**(`vaultId`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in InterBTC and DOT
divided by the locked DOT.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getAPY](/interfaces/vaultsapi.md#getapy)

#### Defined in

[src/parachain/vaults.ts:740](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L740)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getAccount](/interfaces/vaultsapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getBackingCollateral

▸ **getBackingCollateral**<`C`\>(`vaultId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The entire collateral backing a vault's issued tokens.

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getBackingCollateral](/interfaces/vaultsapi.md#getbackingcollateral)

#### Defined in

[src/parachain/vaults.ts:421](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L421)

___

### getCollateral

▸ **getCollateral**<`C`\>(`vaultId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The collateral of a vault, taking slashes into account.

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getCollateral](/interfaces/vaultsapi.md#getcollateral)

#### Defined in

[src/parachain/vaults.ts:406](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L406)

___

### getFeesCollateral

▸ **getFeesCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total DOT reward collected by the vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getFeesCollateral](/interfaces/vaultsapi.md#getfeescollateral)

#### Defined in

[src/parachain/vaults.ts:733](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L733)

___

### getFeesWrapped

▸ **getFeesWrapped**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |

#### Returns

`Promise`<`BTCAmount`\>

The total InterBTC reward collected by the vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getFeesWrapped](/interfaces/vaultsapi.md#getfeeswrapped)

#### Defined in

[src/parachain/vaults.ts:729](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L729)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issuable by this vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getIssuableAmount](/interfaces/vaultsapi.md#getissuableamount)

#### Defined in

[src/parachain/vaults.ts:602](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L602)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issued by the given vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getIssuedAmount](/interfaces/vaultsapi.md#getissuedamount)

#### Defined in

[src/parachain/vaults.ts:597](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L597)

___

### getIssuedAmounts

▸ `Private` **getIssuedAmounts**(): `Promise`<`BTCAmount`[]\>

#### Returns

`Promise`<`BTCAmount`[]\>

#### Defined in

[src/parachain/vaults.ts:614](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L614)

___

### getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The lower bound for the collateral rate in InterBTC.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getLiquidationCollateralThreshold](/interfaces/vaultsapi.md#getliquidationcollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:711](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L711)

___

### getLiquidationVault

▸ **getLiquidationVault**(): `Promise`<`SystemVault`\>

#### Returns

`Promise`<`SystemVault`\>

A vault object representing the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getLiquidationVault](/interfaces/vaultsapi.md#getliquidationvault)

#### Defined in

[src/parachain/vaults.ts:515](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L515)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getLiquidationVaultId](/interfaces/vaultsapi.md#getliquidationvaultid)

#### Defined in

[src/parachain/vaults.ts:509](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L509)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getMaxNominationRatio](/interfaces/vaultsapi.md#getmaxnominationratio)

#### Defined in

[src/parachain/vaults.ts:437](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L437)

___

### getMaxSLA

▸ **getMaxSLA**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The maximum SLA score, a positive integer

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getMaxSLA](/interfaces/vaultsapi.md#getmaxsla)

#### Defined in

[src/parachain/vaults.ts:756](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L756)

___

### getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The collateral rate of Vaults at which users receive
a premium in DOT, allocated from the
Vault’s collateral, when performing a redeem with this Vault.

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getPremiumRedeemThreshold](/interfaces/vaultsapi.md#getpremiumredeemthreshold)

#### Defined in

[src/parachain/vaults.ts:717](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L717)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getPremiumRedeemVaults](/interfaces/vaultsapi.md#getpremiumredeemvaults)

#### Defined in

[src/parachain/vaults.ts:671](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L671)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay if it fails to execute redeem or replace requests
(for redeem, on top of the slashed BTC-in-DOT value of the request). The fee is
paid in DOT based on the InterBTC amount at the current exchange rate.

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getPunishmentFee](/interfaces/vaultsapi.md#getpunishmentfee)

#### Defined in

[src/parachain/vaults.ts:769](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L769)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getRequiredCollateralForVault](/interfaces/vaultsapi.md#getrequiredcollateralforvault)

#### Defined in

[src/parachain/vaults.ts:566](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L566)

___

### getRequiredCollateralForWrapped

▸ **getRequiredCollateralForWrapped**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the minimum amount of collateral required for the given amount of btc
with the current threshold and exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral for issuing, denominated in DOT

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getRequiredCollateralForWrapped](/interfaces/vaultsapi.md#getrequiredcollateralforwrapped)

#### Defined in

[src/parachain/vaults.ts:581](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L581)

___

### getRewardPerToken

▸ **getRewardPerToken**(`currencyId`, `rewardPool`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/currencyidliteral.md) |
| `rewardPool` | `RewardPool` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:505](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L505)

___

### getRewardTally

▸ **getRewardTally**(`currencyId`, `rewardPool`, `accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/currencyidliteral.md) |
| `rewardPool` | `RewardPool` |
| `accountId` | `string` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:501](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L501)

___

### getSLA

▸ **getSLA**(`vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The SLA score of the given vault, an integer in the range [0, MaxSLA]

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getSLA](/interfaces/vaultsapi.md#getsla)

#### Defined in

[src/parachain/vaults.ts:750](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L750)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for DOT collateral locked
by Vaults, necessary for issuing InterBTC

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getSecureCollateralThreshold](/interfaces/vaultsapi.md#getsecurecollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:723](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L723)

___

### getStake

▸ **getStake**(`currencyId`, `rewardPool`, `accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/currencyidliteral.md) |
| `rewardPool` | `RewardPool` |
| `accountId` | `string` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:497](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L497)

___

### getStakingCapacity

▸ **getStakingCapacity**<`C`\>(`vaultId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getStakingCapacity](/interfaces/vaultsapi.md#getstakingcapacity)

#### Defined in

[src/parachain/vaults.ts:445](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L445)

___

### getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

Get the total system collateralization measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

#### Returns

`Promise`<`undefined` \| `Big`\>

The total system collateralization

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getSystemCollateralization](/interfaces/vaultsapi.md#getsystemcollateralization)

#### Defined in

[src/parachain/vaults.ts:554](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L554)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC that can be issued, considering the DOT
locked by the vaults

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getTotalIssuableAmount](/interfaces/vaultsapi.md#gettotalissuableamount)

#### Defined in

[src/parachain/vaults.ts:625](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L625)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getTotalIssuedAmount](/interfaces/vaultsapi.md#gettotalissuedamount)

#### Defined in

[src/parachain/vaults.ts:620](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L620)

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
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | `undefined` |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getVaultCollateralization](/interfaces/vaultsapi.md#getvaultcollateralization)

#### Defined in

[src/parachain/vaults.ts:525](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L525)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with issuable tokens, sorted in descending order of this value

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getVaultsWithIssuableTokens](/interfaces/vaultsapi.md#getvaultswithissuabletokens)

#### Defined in

[src/parachain/vaults.ts:685](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L685)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with redeemable tokens, sorted in descending order of this value

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[getVaultsWithRedeemableTokens](/interfaces/vaultsapi.md#getvaultswithredeemabletokens)

#### Defined in

[src/parachain/vaults.ts:695](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L695)

___

### isNoTokensIssuedError

▸ `Private` **isNoTokensIssuedError**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`boolean`

#### Defined in

[src/parachain/vaults.ts:521](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L521)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[isVaultFlaggedForTheft](/interfaces/vaultsapi.md#isvaultflaggedfortheft)

#### Defined in

[src/parachain/vaults.ts:705](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L705)

___

### list

▸ **list**(): `Promise`<`VaultExt`[]\>

#### Returns

`Promise`<`VaultExt`[]\>

An array containing the vaults with non-zero backing collateral

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[list](/interfaces/vaultsapi.md#list)

#### Defined in

[src/parachain/vaults.ts:353](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L353)

___

### mapIssueRequests

▸ **mapIssueRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

Fetch the issue requests associated with a vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

A map with issue ids to issue requests involving said vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[mapIssueRequests](/interfaces/vaultsapi.md#mapissuerequests)

#### Defined in

[src/parachain/vaults.ts:359](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L359)

___

### mapRedeemRequests

▸ **mapRedeemRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

Fetch the redeem requests associated with a vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

A map with redeem ids to redeem requests involving said vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[mapRedeemRequests](/interfaces/vaultsapi.md#mapredeemrequests)

#### Defined in

[src/parachain/vaults.ts:368](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L368)

___

### mapReplaceRequests

▸ **mapReplaceRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/replacerequestext.md)\>\>

A map with replace ids to replace requests involving said vault as new vault and old vault

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[mapReplaceRequests](/interfaces/vaultsapi.md#mapreplacerequests)

#### Defined in

[src/parachain/vaults.ts:379](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L379)

___

### register

▸ **register**(`planckCollateral`, `publicKey`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `planckCollateral` | `BN` |
| `publicKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:335](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L335)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`AccountId`\>

A vault that has sufficient DOT collateral to issue the given InterBTC amount

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[selectRandomVaultIssue](/interfaces/vaultsapi.md#selectrandomvaultissue)

#### Defined in

[src/parachain/vaults.ts:647](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L647)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`AccountId`\>

A vault that has issued sufficient InterBTC to redeem the given InterBTC amount

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[selectRandomVaultRedeem](/interfaces/vaultsapi.md#selectrandomvaultredeem)

#### Defined in

[src/parachain/vaults.ts:659](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L659)

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

[VaultsAPI](/interfaces/vaultsapi.md).[sendLogged](/interfaces/vaultsapi.md#sendlogged)

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

[VaultsAPI](/interfaces/vaultsapi.md).[setAccount](/interfaces/vaultsapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### unwrapCurrency

▸ `Private` **unwrapCurrency**(`wrappedBalance`): `Balance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedBalance` | `BalanceWrapper` |

#### Returns

`Balance`

#### Defined in

[src/parachain/vaults.ts:781](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L781)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/vaultsapi.md).[withdrawCollateral](/interfaces/vaultsapi.md#withdrawcollateral)

#### Defined in

[src/parachain/vaults.ts:340](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L340)

___

### wrapCurrency

▸ `Private` **wrapCurrency**(`amount`): `BalanceWrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `Balance` |

#### Returns

`BalanceWrapper`

#### Defined in

[src/parachain/vaults.ts:775](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/vaults.ts#L775)

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
