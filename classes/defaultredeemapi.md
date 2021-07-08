[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultRedeemAPI

# Class: DefaultRedeemAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultRedeemAPI`**

## Implements

- [`RedeemAPI`](/interfaces/redeemapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultredeemapi.md#constructor)

### Properties

- [api](/classes/defaultredeemapi.md#api)
- [events](/classes/defaultredeemapi.md#events)
- [oracleAPI](/classes/defaultredeemapi.md#oracleapi)
- [requestHash](/classes/defaultredeemapi.md#requesthash)
- [tokensAPI](/classes/defaultredeemapi.md#tokensapi)
- [vaultsAPI](/classes/defaultredeemapi.md#vaultsapi)

### Methods

- [burn](/classes/defaultredeemapi.md#burn)
- [cancel](/classes/defaultredeemapi.md#cancel)
- [execute](/classes/defaultredeemapi.md#execute)
- [getAccount](/classes/defaultredeemapi.md#getaccount)
- [getBurnExchangeRate](/classes/defaultredeemapi.md#getburnexchangerate)
- [getCurrentInclusionFee](/classes/defaultredeemapi.md#getcurrentinclusionfee)
- [getDustValue](/classes/defaultredeemapi.md#getdustvalue)
- [getFeeRate](/classes/defaultredeemapi.md#getfeerate)
- [getFeesToPay](/classes/defaultredeemapi.md#getfeestopay)
- [getMaxBurnableTokens](/classes/defaultredeemapi.md#getmaxburnabletokens)
- [getPremiumRedeemFee](/classes/defaultredeemapi.md#getpremiumredeemfee)
- [getRedeemIdsFromEvents](/classes/defaultredeemapi.md#getredeemidsfromevents)
- [getRedeemPeriod](/classes/defaultredeemapi.md#getredeemperiod)
- [getRequestById](/classes/defaultredeemapi.md#getrequestbyid)
- [getRequestsById](/classes/defaultredeemapi.md#getrequestsbyid)
- [list](/classes/defaultredeemapi.md#list)
- [mapForUser](/classes/defaultredeemapi.md#mapforuser)
- [onRedeem](/classes/defaultredeemapi.md#onredeem)
- [request](/classes/defaultredeemapi.md#request)
- [requestAdvanced](/classes/defaultredeemapi.md#requestadvanced)
- [sendLogged](/classes/defaultredeemapi.md#sendlogged)
- [setAccount](/classes/defaultredeemapi.md#setaccount)
- [setRedeemPeriod](/classes/defaultredeemapi.md#setredeemperiod)
- [subscribeToRedeemCompletion](/classes/defaultredeemapi.md#subscribetoredeemcompletion)
- [subscribeToRedeemExpiry](/classes/defaultredeemapi.md#subscribetoredeemexpiry)
- [doesArrayContainEvent](/classes/defaultredeemapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultredeemapi.md#isdispatcherror)
- [printEvents](/classes/defaultredeemapi.md#printevents)
- [waitForEvent](/classes/defaultredeemapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultRedeemAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/redeem.ts:203](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L203)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### events

• **events**: `EventRecord`[] = `[]`

#### Defined in

[src/parachain/redeem.ts:203](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L203)

___

### oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/oracleapi.md)

#### Defined in

[src/parachain/redeem.ts:201](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L201)

___

### requestHash

• **requestHash**: `Hash`

#### Defined in

[src/parachain/redeem.ts:202](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L202)

___

### tokensAPI

• `Private` **tokensAPI**: [`TokensAPI`](/interfaces/tokensapi.md)

#### Defined in

[src/parachain/redeem.ts:200](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L200)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Defined in

[src/parachain/redeem.ts:199](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L199)

## Methods

### burn

▸ **burn**(`amount`): `Promise`<`void`\>

Burn wrapped tokens for a premium

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[burn](/interfaces/redeemapi.md#burn)

#### Defined in

[src/parachain/redeem.ts:290](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L290)

___

### cancel

▸ **cancel**(`requestId`, `reimburse?`): `Promise`<`void`\>

Send a redeem cancellation transaction. After the redeem period has elapsed,
the redeemal of InterBTC can be cancelled. As a result, the griefing collateral
of the vault will be slashed and sent to the redeemer

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestId` | `string` | `undefined` |
| `reimburse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[cancel](/interfaces/redeemapi.md#cancel)

#### Defined in

[src/parachain/redeem.ts:284](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L284)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send a redeem execution transaction

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

[RedeemAPI](/interfaces/redeemapi.md).[execute](/interfaces/redeemapi.md#execute)

#### Defined in

[src/parachain/redeem.ts:273](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L273)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getAccount](/interfaces/redeemapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getBurnExchangeRate

▸ **getBurnExchangeRate**(): `Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>\>

#### Returns

`Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>\>

The exchange rate (collateral currency to wrapped token currency)
used when burning tokens

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getBurnExchangeRate](/interfaces/redeemapi.md#getburnexchangerate)

#### Defined in

[src/parachain/redeem.ts:312](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L312)

___

### getCurrentInclusionFee

▸ **getCurrentInclusionFee**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The current inclusion fee based on the expected number of bytes
in the transaction, and the inclusion fee rate reported by the oracle

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getCurrentInclusionFee](/interfaces/redeemapi.md#getcurrentinclusionfee)

#### Defined in

[src/parachain/redeem.ts:332](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L332)

___

### getDustValue

▸ **getDustValue**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The minimum amount of btc that is accepted for redeem requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getDustValue](/interfaces/redeemapi.md#getdustvalue)

#### Defined in

[src/parachain/redeem.ts:424](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L424)

___

### getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for redeeming. For instance, "0.005" stands for 0.5%

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getFeeRate](/interfaces/redeemapi.md#getfeerate)

#### Defined in

[src/parachain/redeem.ts:418](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L418)

___

### getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`BTCAmount`\>

The fees, in BTC

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getFeesToPay](/interfaces/redeemapi.md#getfeestopay)

#### Defined in

[src/parachain/redeem.ts:413](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L413)

___

### getMaxBurnableTokens

▸ **getMaxBurnableTokens**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The maximum amount of tokens that can be burned through a liquidation redeem

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getMaxBurnableTokens](/interfaces/redeemapi.md#getmaxburnabletokens)

#### Defined in

[src/parachain/redeem.ts:307](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L307)

___

### getPremiumRedeemFee

▸ **getPremiumRedeemFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

If users execute a redeem with a Vault flagged for premium redeem,
they can earn a DOT premium, slashed from the Vault's collateral.
This value is a percentage of the redeemed amount.

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getPremiumRedeemFee](/interfaces/redeemapi.md#getpremiumredeemfee)

#### Defined in

[src/parachain/redeem.ts:430](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L430)

___

### getRedeemIdsFromEvents

▸ `Private` **getRedeemIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |

#### Returns

`Hash`[]

#### Defined in

[src/parachain/redeem.ts:212](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L212)

___

### getRedeemPeriod

▸ **getRedeemPeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between a redeem request
is created and required completion time by a vault.
The redeem period has an upper limit to ensure the user gets their BTC in time
and to potentially punish a vault for inactivity or stealing BTC.

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getRedeemPeriod](/interfaces/redeemapi.md#getredeemperiod)

#### Defined in

[src/parachain/redeem.ts:302](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L302)

___

### getRequestById

▸ **getRequestById**(`redeemId`): `Promise`<[`Redeem`](/interfaces/redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemId` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/redeem.md)\>

A redeem request object

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getRequestById](/interfaces/redeemapi.md#getrequestbyid)

#### Defined in

[src/parachain/redeem.ts:436](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L436)

___

### getRequestsById

▸ **getRequestsById**(`redeemIds`): `Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[getRequestsById](/interfaces/redeemapi.md#getrequestsbyid)

#### Defined in

[src/parachain/redeem.ts:441](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L441)

___

### list

▸ **list**(): `Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

#### Returns

`Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

An array containing the redeem requests

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[list](/interfaces/redeemapi.md#list)

#### Defined in

[src/parachain/redeem.ts:343](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L343)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/redeem.md)\>\>

A mapping from the redeem request ID to the redeem request object, corresponding to the requests of
the given account

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[mapForUser](/interfaces/redeemapi.md#mapforuser)

#### Defined in

[src/parachain/redeem.ts:349](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L349)

___

### onRedeem

▸ **onRedeem**(`account`, `fn`): `Promise`<`fn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `fn` | (`set`: `Set`<`H256`\>, `request`: [`Redeem`](/interfaces/redeem.md), `id`: `H256`, `blockNumber`: `BN`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/redeem.ts:395](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L395)

___

### request

▸ **request**(`amount`, `btcAddressEnc`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

Send a redeem request transaction

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | `undefined` |
| `btcAddressEnc` | `string` | `undefined` |
| `vaultId?` | `AccountId` | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<`AccountId`, `BTCAmount`\> | `undefined` |

#### Returns

`Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[request](/interfaces/redeemapi.md#request)

#### Defined in

[src/parachain/redeem.ts:216](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L216)

___

### requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `btcAddressEnc`, `atomic`): `Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

Send a batch of aggregated redeem transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<`AccountId`, `BTCAmount`\> |
| `btcAddressEnc` | `string` |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Redeem`](/interfaces/redeem.md)[]\>

An array of type {redeemId, vault} if the requests succeeded.

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[requestAdvanced](/interfaces/redeemapi.md#requestadvanced)

#### Defined in

[src/parachain/redeem.ts:250](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L250)

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

[RedeemAPI](/interfaces/redeemapi.md).[sendLogged](/interfaces/redeemapi.md#sendlogged)

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

[RedeemAPI](/interfaces/redeemapi.md).[setAccount](/interfaces/redeemapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### setRedeemPeriod

▸ **setRedeemPeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[setRedeemPeriod](/interfaces/redeemapi.md#setredeemperiod)

#### Defined in

[src/parachain/redeem.ts:296](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L296)

___

### subscribeToRedeemCompletion

▸ **subscribeToRedeemCompletion**(`account`, `callback`): `Promise`<`fn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `callback` | (`requestRedeemId`: `H256`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/redeem.ts:379](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L379)

___

### subscribeToRedeemExpiry

▸ **subscribeToRedeemExpiry**(`account`, `callback`): `Promise`<`fn`\>

Whenever a redeem request associated with `account` expires, call the callback function with the
ID of the expired request. Already expired requests are stored in memory, so as not to call back
twice for the same request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `callback` | (`requestRedeemId`: `H256`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[RedeemAPI](/interfaces/redeemapi.md).[subscribeToRedeemExpiry](/interfaces/redeemapi.md#subscribetoredeemexpiry)

#### Defined in

[src/parachain/redeem.ts:361](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/redeem.ts#L361)

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
