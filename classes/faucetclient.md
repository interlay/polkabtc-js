[@interlay/interbtc](/README.md) / [Exports](/modules.md) / FaucetClient

# Class: FaucetClient

## Hierarchy

- `JsonRpcClient`<`void`\>

  ↳ **`FaucetClient`**

## Table of contents

### Constructors

- [constructor](/classes/faucetclient.md#constructor)

### Properties

- [constr](/classes/faucetclient.md#constr)
- [registry](/classes/faucetclient.md#registry)
- [url](/classes/faucetclient.md#url)

### Methods

- [fundAccount](/classes/faucetclient.md#fundaccount)
- [post](/classes/faucetclient.md#post)

## Constructors

### constructor

• **new FaucetClient**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Overrides

JsonRpcClient&lt;void\&gt;.constructor

#### Defined in

[src/clients/faucet.ts:16](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/faucet.ts#L16)

## Properties

### constr

• **constr**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FundAccountJsonRpcRequest` | `Constructor`<`FundAccountJsonRpcRequest`\> |

#### Defined in

[src/clients/faucet.ts:14](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/faucet.ts#L14)

___

### registry

• **registry**: `TypeRegistry`

#### Defined in

[src/clients/faucet.ts:12](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/faucet.ts#L12)

___

### url

• **url**: `string`

#### Inherited from

JsonRpcClient.url

#### Defined in

[src/clients/client.ts:27](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/client.ts#L27)

## Methods

### fundAccount

▸ **fundAccount**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/clients/faucet.ts:28](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/faucet.ts#L28)

___

### post

▸ **post**(`method`, `params?`): `Promise`<`JsonRpcResponse`<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `RequestParams` |

#### Returns

`Promise`<`JsonRpcResponse`<`void`\>\>

#### Inherited from

JsonRpcClient.post

#### Defined in

[src/clients/client.ts:33](https://github.com/interlay/interbtc-js/blob/0c8155e/src/clients/client.ts#L33)
