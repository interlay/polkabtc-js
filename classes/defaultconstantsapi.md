[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultConstantsAPI

# Class: DefaultConstantsAPI

## Implements

- [`ConstantsAPI`](/interfaces/constantsapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultconstantsapi.md#constructor)

### Methods

- [getSystemBlockHashCount](/classes/defaultconstantsapi.md#getsystemblockhashcount)
- [getSystemDbWeight](/classes/defaultconstantsapi.md#getsystemdbweight)
- [getTimestampMinimumPeriod](/classes/defaultconstantsapi.md#gettimestampminimumperiod)
- [getTransactionByteFee](/classes/defaultconstantsapi.md#gettransactionbytefee)
- [getTransactionWeightToFee](/classes/defaultconstantsapi.md#gettransactionweighttofee)

## Constructors

### constructor

• **new DefaultConstantsAPI**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |

#### Defined in

[src/parachain/constants.ts:37](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L37)

## Methods

### getSystemBlockHashCount

▸ **getSystemBlockHashCount**(): `BlockNumber`

#### Returns

`BlockNumber`

Maximum number of block number to block hash mappings to keep (oldest pruned first).

#### Implementation of

[ConstantsAPI](/interfaces/constantsapi.md).[getSystemBlockHashCount](/interfaces/constantsapi.md#getsystemblockhashcount)

#### Defined in

[src/parachain/constants.ts:40](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L40)

___

### getSystemDbWeight

▸ **getSystemDbWeight**(): `RuntimeDbWeight`

#### Returns

`RuntimeDbWeight`

The weight of database operations that the runtime can invoke.

#### Implementation of

[ConstantsAPI](/interfaces/constantsapi.md).[getSystemDbWeight](/interfaces/constantsapi.md#getsystemdbweight)

#### Defined in

[src/parachain/constants.ts:44](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L44)

___

### getTimestampMinimumPeriod

▸ **getTimestampMinimumPeriod**(): `Moment`

#### Returns

`Moment`

The minimum period between blocks. Beware that this is different to the *expected* period
that the block production apparatus provides. Your chosen consensus system will generally
work with this to determine a sensible block time. e.g. For Aura, it will be double this
period on default settings.

#### Implementation of

[ConstantsAPI](/interfaces/constantsapi.md).[getTimestampMinimumPeriod](/interfaces/constantsapi.md#gettimestampminimumperiod)

#### Defined in

[src/parachain/constants.ts:48](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L48)

___

### getTransactionByteFee

▸ **getTransactionByteFee**(): `BalanceOf`

#### Returns

`BalanceOf`

The fee to be paid for making a transaction; the per-byte portion.

#### Implementation of

[ConstantsAPI](/interfaces/constantsapi.md).[getTransactionByteFee](/interfaces/constantsapi.md#gettransactionbytefee)

#### Defined in

[src/parachain/constants.ts:52](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L52)

___

### getTransactionWeightToFee

▸ **getTransactionWeightToFee**(): `Vec`<`WeightToFeeCoefficient`\>

#### Returns

`Vec`<`WeightToFeeCoefficient`\>

The polynomial that is applied in order to derive fee from weight.

#### Implementation of

[ConstantsAPI](/interfaces/constantsapi.md).[getTransactionWeightToFee](/interfaces/constantsapi.md#gettransactionweighttofee)

#### Defined in

[src/parachain/constants.ts:56](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L56)
