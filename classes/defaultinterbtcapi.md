[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultInterBTCAPI

# Class: DefaultInterBTCAPI

## Implements

- [`InterBTCAPI`](/interfaces/interbtcapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultinterbtcapi.md#constructor)

### Properties

- [api](/classes/defaultinterbtcapi.md#api)
- [btcRelay](/classes/defaultinterbtcapi.md#btcrelay)
- [electrsAPI](/classes/defaultinterbtcapi.md#electrsapi)
- [faucet](/classes/defaultinterbtcapi.md#faucet)
- [fee](/classes/defaultinterbtcapi.md#fee)
- [issue](/classes/defaultinterbtcapi.md#issue)
- [nomination](/classes/defaultinterbtcapi.md#nomination)
- [oracle](/classes/defaultinterbtcapi.md#oracle)
- [redeem](/classes/defaultinterbtcapi.md#redeem)
- [refund](/classes/defaultinterbtcapi.md#refund)
- [replace](/classes/defaultinterbtcapi.md#replace)
- [stakedRelayer](/classes/defaultinterbtcapi.md#stakedrelayer)
- [system](/classes/defaultinterbtcapi.md#system)
- [tokens](/classes/defaultinterbtcapi.md#tokens)
- [vaults](/classes/defaultinterbtcapi.md#vaults)

### Accessors

- [account](/classes/defaultinterbtcapi.md#account)

### Methods

- [setAccount](/classes/defaultinterbtcapi.md#setaccount)

## Constructors

### constructor

• **new DefaultInterBTCAPI**(`api`, `network?`, `_account?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `_account?` | `AddressOrPair` | `undefined` |

#### Defined in

[src/interbtc-api.ts:75](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L75)

## Properties

### api

• `Readonly` **api**: `ApiPromise`

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[api](/interfaces/interbtcapi.md#api)

___

### btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/btcrelayapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[btcRelay](/interfaces/interbtcapi.md#btcrelay)

#### Defined in

[src/interbtc-api.ts:70](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L70)

___

### electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/electrsapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[electrsAPI](/interfaces/interbtcapi.md#electrsapi)

#### Defined in

[src/interbtc-api.ts:69](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L69)

___

### faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/faucetclient.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[faucet](/interfaces/interbtcapi.md#faucet)

#### Defined in

[src/interbtc-api.ts:67](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L67)

___

### fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/feeapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[fee](/interfaces/interbtcapi.md#fee)

#### Defined in

[src/interbtc-api.ts:74](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L74)

___

### issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/issueapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[issue](/interfaces/interbtcapi.md#issue)

#### Defined in

[src/interbtc-api.ts:63](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L63)

___

### nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/nominationapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[nomination](/interfaces/interbtcapi.md#nomination)

#### Defined in

[src/interbtc-api.ts:75](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L75)

___

### oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/oracleapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[oracle](/interfaces/interbtcapi.md#oracle)

#### Defined in

[src/interbtc-api.ts:68](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L68)

___

### redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/redeemapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[redeem](/interfaces/interbtcapi.md#redeem)

#### Defined in

[src/interbtc-api.ts:64](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L64)

___

### refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/refundapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[refund](/interfaces/interbtcapi.md#refund)

#### Defined in

[src/interbtc-api.ts:65](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L65)

___

### replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/replaceapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[replace](/interfaces/interbtcapi.md#replace)

#### Defined in

[src/interbtc-api.ts:73](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L73)

___

### stakedRelayer

• `Readonly` **stakedRelayer**: [`StakedRelayerAPI`](/interfaces/stakedrelayerapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[stakedRelayer](/interfaces/interbtcapi.md#stakedrelayer)

#### Defined in

[src/interbtc-api.ts:66](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L66)

___

### system

• `Readonly` **system**: [`SystemAPI`](/interfaces/systemapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[system](/interfaces/interbtcapi.md#system)

#### Defined in

[src/interbtc-api.ts:72](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L72)

___

### tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/tokensapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[tokens](/interfaces/interbtcapi.md#tokens)

#### Defined in

[src/interbtc-api.ts:71](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L71)

___

### vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[vaults](/interfaces/interbtcapi.md#vaults)

#### Defined in

[src/interbtc-api.ts:62](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L62)

## Accessors

### account

• `get` **account**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[account](/interfaces/interbtcapi.md#account)

#### Defined in

[src/interbtc-api.ts:113](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L113)

## Methods

### setAccount

▸ **setAccount**(`account`, `signer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |
| `signer?` | `Signer` |

#### Returns

`void`

#### Implementation of

[InterBTCAPI](/interfaces/interbtcapi.md).[setAccount](/interfaces/interbtcapi.md#setaccount)

#### Defined in

[src/interbtc-api.ts:95](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L95)
