[@interlay/interbtc](/README.md) / [Exports](/modules.md) / ReplaceRequestExt

# Interface: ReplaceRequestExt

## Hierarchy

- `Omit`<`ReplaceRequest`, ``"btc_address"`` \| ``"new_vault"``\>

  ↳ **`ReplaceRequestExt`**

## Table of contents

### Properties

- [Type](/interfaces/replacerequestext.md#type)
- [[toStringTag]](/interfaces/replacerequestext.md#[tostringtag])
- [accept\_time](/interfaces/replacerequestext.md#accept_time)
- [amount](/interfaces/replacerequestext.md#amount)
- [btc\_address](/interfaces/replacerequestext.md#btc_address)
- [btc\_height](/interfaces/replacerequestext.md#btc_height)
- [collateral](/interfaces/replacerequestext.md#collateral)
- [createdAtHash](/interfaces/replacerequestext.md#createdathash)
- [defKeys](/interfaces/replacerequestext.md#defkeys)
- [encodedLength](/interfaces/replacerequestext.md#encodedlength)
- [griefing\_collateral](/interfaces/replacerequestext.md#griefing_collateral)
- [hash](/interfaces/replacerequestext.md#hash)
- [isEmpty](/interfaces/replacerequestext.md#isempty)
- [new\_vault](/interfaces/replacerequestext.md#new_vault)
- [old\_vault](/interfaces/replacerequestext.md#old_vault)
- [period](/interfaces/replacerequestext.md#period)
- [registry](/interfaces/replacerequestext.md#registry)
- [size](/interfaces/replacerequestext.md#size)
- [status](/interfaces/replacerequestext.md#status)

### Methods

- [[iterator]](/interfaces/replacerequestext.md#[iterator])
- [clear](/interfaces/replacerequestext.md#clear)
- [delete](/interfaces/replacerequestext.md#delete)
- [entries](/interfaces/replacerequestext.md#entries)
- [eq](/interfaces/replacerequestext.md#eq)
- [forEach](/interfaces/replacerequestext.md#foreach)
- [get](/interfaces/replacerequestext.md#get)
- [getAtIndex](/interfaces/replacerequestext.md#getatindex)
- [has](/interfaces/replacerequestext.md#has)
- [keys](/interfaces/replacerequestext.md#keys)
- [set](/interfaces/replacerequestext.md#set)
- [toArray](/interfaces/replacerequestext.md#toarray)
- [toHex](/interfaces/replacerequestext.md#tohex)
- [toHuman](/interfaces/replacerequestext.md#tohuman)
- [toJSON](/interfaces/replacerequestext.md#tojson)
- [toRawType](/interfaces/replacerequestext.md#torawtype)
- [toString](/interfaces/replacerequestext.md#tostring)
- [toU8a](/interfaces/replacerequestext.md#tou8a)
- [values](/interfaces/replacerequestext.md#values)

## Properties

### Type

• **Type**: `Object`

#### Inherited from

Omit.Type

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Omit.\_\_@toStringTag@2971

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### accept\_time

• `Readonly` **accept\_time**: `BlockNumber`

#### Inherited from

Omit.accept\_time

#### Defined in

src/interfaces/default/types.ts:195

___

### amount

• `Readonly` **amount**: `Wrapped`

#### Inherited from

Omit.amount

#### Defined in

src/interfaces/default/types.ts:192

___

### btc\_address

• **btc\_address**: `string`

#### Defined in

[src/parachain/replace.ts:19](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L19)

___

### btc\_height

• `Readonly` **btc\_height**: `u32`

#### Inherited from

Omit.btc\_height

#### Defined in

src/interfaces/default/types.ts:198

___

### collateral

• `Readonly` **collateral**: `Collateral`

#### Inherited from

Omit.collateral

#### Defined in

src/interfaces/default/types.ts:194

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Omit.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:25

___

### defKeys

• **defKeys**: `string`[]

#### Inherited from

Omit.defKeys

___

### encodedLength

• **encodedLength**: `number`

#### Inherited from

Omit.encodedLength

___

### griefing\_collateral

• `Readonly` **griefing\_collateral**: `Collateral`

#### Inherited from

Omit.griefing\_collateral

#### Defined in

src/interfaces/default/types.ts:193

___

### hash

• **hash**: `CodecHash`

#### Inherited from

Omit.hash

___

### isEmpty

• **isEmpty**: `boolean`

#### Inherited from

Omit.isEmpty

___

### new\_vault

• **new\_vault**: `string`

#### Defined in

[src/parachain/replace.ts:20](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/replace.ts#L20)

___

### old\_vault

• `Readonly` **old\_vault**: `AccountId`

#### Inherited from

Omit.old\_vault

#### Defined in

src/interfaces/default/types.ts:190

___

### period

• `Readonly` **period**: `BlockNumber`

#### Inherited from

Omit.period

#### Defined in

src/interfaces/default/types.ts:196

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Omit.registry

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:24

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Omit.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### status

• `Readonly` **status**: `ReplaceRequestStatus`

#### Inherited from

Omit.status

#### Defined in

src/interfaces/default/types.ts:199

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.\_\_@iterator@2969

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Omit.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### eq

▸ **eq**(`other?`): `boolean`

**`description`** Compares the value of the input to see if there is a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `unknown` |

#### Returns

`boolean`

#### Inherited from

Omit.eq

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:52

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Codec`, `key`: `string`, `map`: `Map`<`string`, `Codec`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Omit.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`name`): `undefined` \| `Codec`

**`description`** Returns a specific names entry in the structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the entry to retrieve |

#### Returns

`undefined` \| `Codec`

#### Inherited from

Omit.get

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:57

___

### getAtIndex

▸ **getAtIndex**(`index`): `Codec`

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Codec`

#### Inherited from

Omit.getAtIndex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:61

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Omit.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): `ReplaceRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

`ReplaceRequest`

#### Inherited from

Omit.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Omit.toArray

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:65

___

### toHex

▸ **toHex**(): `string`

**`description`** Returns a hex string representation of the value

#### Returns

`string`

#### Inherited from

Omit.toHex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:69

___

### toHuman

▸ **toHuman**(`isExtended?`): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:73

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:77

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Omit.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:81

___

### toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Omit.toString

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:85

___

### toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `BareOpts` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Omit.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:90

___

### values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Omit.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
