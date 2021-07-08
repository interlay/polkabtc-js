[@interlay/interbtc](/README.md) / [Exports](/modules.md) / InterBTCAPI

# Interface: InterBTCAPI

## Implemented by

- [`DefaultInterBTCAPI`](/classes/defaultinterbtcapi.md)

## Table of contents

### Properties

- [account](/interfaces/interbtcapi.md#account)
- [api](/interfaces/interbtcapi.md#api)
- [btcRelay](/interfaces/interbtcapi.md#btcrelay)
- [electrsAPI](/interfaces/interbtcapi.md#electrsapi)
- [faucet](/interfaces/interbtcapi.md#faucet)
- [fee](/interfaces/interbtcapi.md#fee)
- [issue](/interfaces/interbtcapi.md#issue)
- [nomination](/interfaces/interbtcapi.md#nomination)
- [oracle](/interfaces/interbtcapi.md#oracle)
- [redeem](/interfaces/interbtcapi.md#redeem)
- [refund](/interfaces/interbtcapi.md#refund)
- [replace](/interfaces/interbtcapi.md#replace)
- [stakedRelayer](/interfaces/interbtcapi.md#stakedrelayer)
- [system](/interfaces/interbtcapi.md#system)
- [tokens](/interfaces/interbtcapi.md#tokens)
- [vaults](/interfaces/interbtcapi.md#vaults)

### Methods

- [setAccount](/interfaces/interbtcapi.md#setaccount)

## Properties

### account

• `Readonly` **account**: `undefined` \| `AddressOrPair`

#### Defined in

[src/interbtc-api.ts:53](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L53)

___

### api

• `Readonly` **api**: `ApiPromise`

#### Defined in

[src/interbtc-api.ts:37](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L37)

___

### btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/btcrelayapi.md)

#### Defined in

[src/interbtc-api.ts:46](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L46)

___

### electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/electrsapi.md)

#### Defined in

[src/interbtc-api.ts:45](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L45)

___

### faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/faucetclient.md)

#### Defined in

[src/interbtc-api.ts:43](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L43)

___

### fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/feeapi.md)

#### Defined in

[src/interbtc-api.ts:50](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L50)

___

### issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/issueapi.md)

#### Defined in

[src/interbtc-api.ts:39](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L39)

___

### nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/nominationapi.md)

#### Defined in

[src/interbtc-api.ts:51](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L51)

___

### oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/oracleapi.md)

#### Defined in

[src/interbtc-api.ts:44](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L44)

___

### redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/redeemapi.md)

#### Defined in

[src/interbtc-api.ts:40](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L40)

___

### refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/refundapi.md)

#### Defined in

[src/interbtc-api.ts:41](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L41)

___

### replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/replaceapi.md)

#### Defined in

[src/interbtc-api.ts:49](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L49)

___

### stakedRelayer

• `Readonly` **stakedRelayer**: [`StakedRelayerAPI`](/interfaces/stakedrelayerapi.md)

#### Defined in

[src/interbtc-api.ts:42](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L42)

___

### system

• `Readonly` **system**: [`SystemAPI`](/interfaces/systemapi.md)

#### Defined in

[src/interbtc-api.ts:48](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L48)

___

### tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/tokensapi.md)

#### Defined in

[src/interbtc-api.ts:47](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L47)

___

### vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/vaultsapi.md)

#### Defined in

[src/interbtc-api.ts:38](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L38)

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

#### Defined in

[src/interbtc-api.ts:52](https://github.com/interlay/interbtc-js/blob/0c8155e/src/interbtc-api.ts#L52)
