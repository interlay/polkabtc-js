[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultOracleAPI

# Class: DefaultOracleAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/defaulttransactionapi.md)

  ↳ **`DefaultOracleAPI`**

## Implements

- [`OracleAPI`](/interfaces/oracleapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultoracleapi.md#constructor)

### Properties

- [api](/classes/defaultoracleapi.md#api)

### Methods

- [convertCollateralToWrapped](/classes/defaultoracleapi.md#convertcollateraltowrapped)
- [convertMoment](/classes/defaultoracleapi.md#convertmoment)
- [convertWrappedToCollateral](/classes/defaultoracleapi.md#convertwrappedtocollateral)
- [getAccount](/classes/defaultoracleapi.md#getaccount)
- [getBtcTxFeesPerByte](/classes/defaultoracleapi.md#getbtctxfeesperbyte)
- [getExchangeRate](/classes/defaultoracleapi.md#getexchangerate)
- [getLastExchangeRateTime](/classes/defaultoracleapi.md#getlastexchangeratetime)
- [getOnlineTimeout](/classes/defaultoracleapi.md#getonlinetimeout)
- [getSourcesById](/classes/defaultoracleapi.md#getsourcesbyid)
- [hasOracleError](/classes/defaultoracleapi.md#hasoracleerror)
- [isOnline](/classes/defaultoracleapi.md#isonline)
- [sendLogged](/classes/defaultoracleapi.md#sendlogged)
- [setAccount](/classes/defaultoracleapi.md#setaccount)
- [setBtcTxFeesPerByte](/classes/defaultoracleapi.md#setbtctxfeesperbyte)
- [setExchangeRate](/classes/defaultoracleapi.md#setexchangerate)
- [doesArrayContainEvent](/classes/defaultoracleapi.md#doesarraycontainevent)
- [isDispatchError](/classes/defaultoracleapi.md#isdispatcherror)
- [printEvents](/classes/defaultoracleapi.md#printevents)
- [waitForEvent](/classes/defaultoracleapi.md#waitforevent)

## Constructors

### constructor

• **new DefaultOracleAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[constructor](/classes/defaulttransactionapi.md#constructor)

#### Defined in

[src/parachain/oracle.ts:90](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L90)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[api](/classes/defaulttransactionapi.md#api)

## Methods

### convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`BTCAmount`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`BTCAmount`\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[convertCollateralToWrapped](/interfaces/oracleapi.md#convertcollateraltowrapped)

#### Defined in

[src/parachain/oracle.ts:118](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L118)

___

### convertMoment

▸ `Private` **convertMoment**(`moment`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moment` | `Moment` |

#### Returns

`Date`

#### Defined in

[src/parachain/oracle.ts:189](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L189)

___

### convertWrappedToCollateral

▸ **convertWrappedToCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

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

Converted value

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[convertWrappedToCollateral](/interfaces/oracleapi.md#convertwrappedtocollateral)

#### Defined in

[src/parachain/oracle.ts:110](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L110)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getAccount](/interfaces/oracleapi.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[getAccount](/classes/defaulttransactionapi.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L26)

___

### getBtcTxFeesPerByte

▸ **getBtcTxFeesPerByte**(): `Promise`<`BtcTxFees`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`BtcTxFees`\>

An object with the values `fast` (estimated fee for inclusion
in the next block - about 10 minutes), `half` (fee for the next 3 blocks or ~30 minutes)
and `hour` (fee for inclusion in the next 6 blocks, or ~60 minutes).

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getBtcTxFeesPerByte](/interfaces/oracleapi.md#getbtctxfeesperbyte)

#### Defined in

[src/parachain/oracle.ts:140](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L140)

___

### getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

The DOT/BTC exchange rate

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getExchangeRate](/interfaces/oracleapi.md#getexchangerate)

#### Defined in

[src/parachain/oracle.ts:95](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L95)

___

### getLastExchangeRateTime

▸ **getLastExchangeRateTime**(): `Promise`<`Date`\>

#### Returns

`Promise`<`Date`\>

Last exchange rate time

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getLastExchangeRateTime](/interfaces/oracleapi.md#getlastexchangeratetime)

#### Defined in

[src/parachain/oracle.ts:168](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L168)

___

### getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getOnlineTimeout](/interfaces/oracleapi.md#getonlinetimeout)

#### Defined in

[src/parachain/oracle.ts:126](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L126)

___

### getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[getSourcesById](/interfaces/oracleapi.md#getsourcesbyid)

#### Defined in

[src/parachain/oracle.ts:160](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L160)

___

### hasOracleError

▸ `Private` **hasOracleError**(`errors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `BTreeSet`<`ErrorCode`\> |

#### Returns

`boolean`

#### Defined in

[src/parachain/oracle.ts:180](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L180)

___

### isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[isOnline](/interfaces/oracleapi.md#isonline)

#### Defined in

[src/parachain/oracle.ts:174](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L174)

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

[OracleAPI](/interfaces/oracleapi.md).[sendLogged](/interfaces/oracleapi.md#sendlogged)

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

[OracleAPI](/interfaces/oracleapi.md).[setAccount](/interfaces/oracleapi.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/defaulttransactionapi.md).[setAccount](/classes/defaulttransactionapi.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/transaction.ts#L22)

___

### setBtcTxFeesPerByte

▸ **setBtcTxFeesPerByte**(`__namedParameters`): `Promise`<`void`\>

Send a transaction to set the current fee rates for BTC transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `BtcTxFees` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[setBtcTxFeesPerByte](/interfaces/oracleapi.md#setbtctxfeesperbyte)

#### Defined in

[src/parachain/oracle.ts:146](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L146)

___

### setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the DOT/BTC exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/oracleapi.md).[setExchangeRate](/interfaces/oracleapi.md#setexchangerate)

#### Defined in

[src/parachain/oracle.ts:132](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/oracle.ts#L132)

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
