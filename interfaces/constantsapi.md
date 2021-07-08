[@interlay/interbtc](/README.md) / [Exports](/modules.md) / ConstantsAPI

# Interface: ConstantsAPI

## Implemented by

- [`DefaultConstantsAPI`](/classes/defaultconstantsapi.md)

## Table of contents

### Methods

- [getSystemBlockHashCount](/interfaces/constantsapi.md#getsystemblockhashcount)
- [getSystemDbWeight](/interfaces/constantsapi.md#getsystemdbweight)
- [getTimestampMinimumPeriod](/interfaces/constantsapi.md#gettimestampminimumperiod)
- [getTransactionByteFee](/interfaces/constantsapi.md#gettransactionbytefee)
- [getTransactionWeightToFee](/interfaces/constantsapi.md#gettransactionweighttofee)

## Methods

### getSystemBlockHashCount

▸ **getSystemBlockHashCount**(): `BlockNumber`

#### Returns

`BlockNumber`

Maximum number of block number to block hash mappings to keep (oldest pruned first).

#### Defined in

[src/parachain/constants.ts:15](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L15)

___

### getSystemDbWeight

▸ **getSystemDbWeight**(): `RuntimeDbWeight`

#### Returns

`RuntimeDbWeight`

The weight of database operations that the runtime can invoke.

#### Defined in

[src/parachain/constants.ts:19](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L19)

___

### getTimestampMinimumPeriod

▸ **getTimestampMinimumPeriod**(): `Moment`

#### Returns

`Moment`

The minimum period between blocks. Beware that this is different to the *expected* period
that the block production apparatus provides. Your chosen consensus system will generally
work with this to determine a sensible block time. e.g. For Aura, it will be double this
period on default settings.

#### Defined in

[src/parachain/constants.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L26)

___

### getTransactionByteFee

▸ **getTransactionByteFee**(): `BalanceOf`

#### Returns

`BalanceOf`

The fee to be paid for making a transaction; the per-byte portion.

#### Defined in

[src/parachain/constants.ts:30](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L30)

___

### getTransactionWeightToFee

▸ **getTransactionWeightToFee**(): `Vec`<`WeightToFeeCoefficient`\>

#### Returns

`Vec`<`WeightToFeeCoefficient`\>

The polynomial that is applied in order to derive fee from weight.

#### Defined in

[src/parachain/constants.ts:34](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/constants.ts#L34)
