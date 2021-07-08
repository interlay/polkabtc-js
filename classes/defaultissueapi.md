[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultIssueAPI

# Class: DefaultIssueAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultIssueAPI`**

## Implements

- [`IssueAPI`](/interfaces/issueapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultissueapi.md#constructor)

### Properties

- [api](/classes/defaultissueapi.md#api)
- [feeAPI](/classes/defaultissueapi.md#feeapi)
- [vaultsAPI](/classes/defaultissueapi.md#vaultsapi)

### Methods

- [cancel](/classes/defaultissueapi.md#cancel)
- [execute](/classes/defaultissueapi.md#execute)
- [getAccount](/classes/defaultissueapi.md#getaccount)
- [getFeeRate](/classes/defaultissueapi.md#getfeerate)
- [getFeesToPay](/classes/defaultissueapi.md#getfeestopay)
- [getGriefingCollateral](/classes/defaultissueapi.md#getgriefingcollateral)
- [getIssueIdsFromEvents](/classes/defaultissueapi.md#getissueidsfromevents)
- [getIssuePeriod](/classes/defaultissueapi.md#getissueperiod)
- [getRequestById](/classes/defaultissueapi.md#getrequestbyid)
- [getRequestLimits](/classes/defaultissueapi.md#getrequestlimits)
- [getRequestsByIds](/classes/defaultissueapi.md#getrequestsbyids)
- [list](/classes/defaultissueapi.md#list)
- [mapForUser](/classes/defaultissueapi.md#mapforuser)
- [request](/classes/defaultissueapi.md#request)
- [requestAdvanced](/classes/defaultissueapi.md#requestadvanced)
- [sendLogged](/classes/defaultissueapi.md#sendlogged)
- [setAccount](/classes/defaultissueapi.md#setaccount)
- [setIssuePeriod](/classes/defaultissueapi.md#setissueperiod)
- [doesArrayContainEvent](/classes/defaultissueapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultissueapi.md#isdispatcherror)
- [printEvents](/classes/defaultissueapi.md#printevents)
- [waitForEvent](/classes/defaultissueapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultIssueAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/issue.ts:167](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L167)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

___

### feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/feeapi.md)

#### Defined in

[src/parachain/issue.ts:167](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L167)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Defined in

[src/parachain/issue.ts:166](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L166)

## Methods

### cancel

▸ **cancel**(`requestId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance of InterBTC can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[cancel](/interfaces/issueapi.md#cancel)

#### Defined in

[src/parachain/issue.ts:270](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L270)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send an issue execution transaction

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

[IssueAPI](/interfaces/issueapi.md).[execute](/interfaces/issueapi.md#execute)

#### Defined in

[src/parachain/issue.ts:263](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L263)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getAccount](/interfaces/issueapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getFeeRate](/interfaces/issueapi.md#getfeerate)

#### Defined in

[src/parachain/issue.ts:321](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L321)

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

[IssueAPI](/interfaces/issueapi.md).[getFeesToPay](/interfaces/issueapi.md#getfeestopay)

#### Defined in

[src/parachain/issue.ts:313](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L313)

___

### getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The griefing collateral, in DOT

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getGriefingCollateral](/interfaces/issueapi.md#getgriefingcollateral)

#### Defined in

[src/parachain/issue.ts:305](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L305)

___

### getIssueIdsFromEvents

▸ `Private` **getIssueIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending an issue request transaction |

#### Returns

`Hash`[]

The issueId associated with the request. If the EventRecord array does not
contain issue request events, the function throws an error.

#### Defined in

[src/parachain/issue.ts:193](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L193)

___

### getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getIssuePeriod](/interfaces/issueapi.md#getissueperiod)

#### Defined in

[src/parachain/issue.ts:282](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L282)

___

### getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/issue.md)\>

An issue request object

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getRequestById](/interfaces/issueapi.md#getrequestbyid)

#### Defined in

[src/parachain/issue.ts:327](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L327)

___

### getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults?` | `Map`<`AccountId`, `BTCAmount`\> |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getRequestLimits](/interfaces/issueapi.md#getrequestlimits)

#### Defined in

[src/parachain/issue.ts:175](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L175)

___

### getRequestsByIds

▸ **getRequestsByIds**(`issueIds`): `Promise`<[`Issue`](/interfaces/issue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Issue`](/interfaces/issue.md)[]\>

The issue request objects

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[getRequestsByIds](/interfaces/issueapi.md#getrequestsbyids)

#### Defined in

[src/parachain/issue.ts:331](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L331)

___

### list

▸ **list**(): `Promise`<[`Issue`](/interfaces/issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/issue.md)[]\>

An array containing the issue requests

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[list](/interfaces/issueapi.md#list)

#### Defined in

[src/parachain/issue.ts:287](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L287)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/issue.md)\>\>

A mapping from the issue request ID to the issue request object, corresponding to the requests of
the given account

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[mapForUser](/interfaces/issueapi.md#mapforuser)

#### Defined in

[src/parachain/issue.ts:293](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L293)

___

### request

▸ **request**(`amount`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Issue`](/interfaces/issue.md)[]\>

Request issuing of InterBTC.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | `undefined` |
| `vaultId?` | `AccountId` | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<`AccountId`, `BTCAmount`\> | `undefined` |

#### Returns

`Promise`<[`Issue`](/interfaces/issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[request](/interfaces/issueapi.md#request)

#### Defined in

[src/parachain/issue.ts:197](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L197)

___

### requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`, `collateralCurrency?`): `Promise`<[`Issue`](/interfaces/issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<`AccountId`, `BTCAmount`\> |
| `atomic` | `boolean` |
| `collateralCurrency` | `Currency`<`Object`\> |

#### Returns

`Promise`<[`Issue`](/interfaces/issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[requestAdvanced](/interfaces/issueapi.md#requestadvanced)

#### Defined in

[src/parachain/issue.ts:228](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L228)

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

[IssueAPI](/interfaces/issueapi.md).[sendLogged](/interfaces/issueapi.md#sendlogged)

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

[IssueAPI](/interfaces/issueapi.md).[setAccount](/interfaces/issueapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/issueapi.md).[setIssuePeriod](/interfaces/issueapi.md#setissueperiod)

#### Defined in

[src/parachain/issue.ts:276](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/issue.ts#L276)

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
