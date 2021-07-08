[@interlay/interbtc](/README.md) / [Exports](/modules.md) / TransactionAPI

# Interface: TransactionAPI

## Hierarchy

- **`TransactionAPI`**

  ↳ [`VaultsAPI`](/interfaces/vaultsapi.md)

  ↳ [`IssueAPI`](/interfaces/issueapi.md)

  ↳ [`RedeemAPI`](/interfaces/redeemapi.md)

  ↳ [`RefundAPI`](/interfaces/refundapi.md)

  ↳ [`StakedRelayerAPI`](/interfaces/stakedrelayerapi.md)

  ↳ [`OracleAPI`](/interfaces/oracleapi.md)

  ↳ [`TokensAPI`](/interfaces/tokensapi.md)

  ↳ [`ReplaceAPI`](/interfaces/replaceapi.md)

  ↳ [`NominationAPI`](/interfaces/nominationapi.md)

## Table of contents

### Methods

- [getAccount](/interfaces/transactionapi.md#getaccount)
- [sendLogged](/interfaces/transactionapi.md#sendlogged)
- [setAccount](/interfaces/transactionapi.md#setaccount)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L12)

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

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L11)
