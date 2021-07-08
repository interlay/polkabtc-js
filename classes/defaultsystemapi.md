[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultSystemAPI

# Class: DefaultSystemAPI

## Implements

- [`SystemAPI`](/interfaces/systemapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultsystemapi.md#constructor)

### Methods

- [getCurrentActiveBlockNumber](/classes/defaultsystemapi.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/classes/defaultsystemapi.md#getcurrentblocknumber)
- [subscribeToNewBlockHeads](/classes/defaultsystemapi.md#subscribetonewblockheads)

## Constructors

### constructor

• **new DefaultSystemAPI**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |

#### Defined in

[src/parachain/system.ts:24](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/system.ts#L24)

## Methods

### getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current active block number being processed.

#### Implementation of

[SystemAPI](/interfaces/systemapi.md).[getCurrentActiveBlockNumber](/interfaces/systemapi.md#getcurrentactiveblocknumber)

#### Defined in

[src/parachain/system.ts:32](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/system.ts#L32)

___

### getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current block number being processed.

#### Implementation of

[SystemAPI](/interfaces/systemapi.md).[getCurrentBlockNumber](/interfaces/systemapi.md#getcurrentblocknumber)

#### Defined in

[src/parachain/system.ts:27](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/system.ts#L27)

___

### subscribeToNewBlockHeads

▸ **subscribeToNewBlockHeads**(`callback`): `Promise`<`fn`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[SystemAPI](/interfaces/systemapi.md).[subscribeToNewBlockHeads](/interfaces/systemapi.md#subscribetonewblockheads)

#### Defined in

[src/parachain/system.ts:37](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/system.ts#L37)
