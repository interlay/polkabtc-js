[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DecodedRequestExt

# Interface: DecodedRequestExt

## Hierarchy

- `Omit`<[`DecodedRequest`](/interfaces/decodedrequest.md), ``"btc_address"``\>

  ↳ **`DecodedRequestExt`**

## Table of contents

### Properties

- [Type](/interfaces/decodedrequestext.md#type)
- [[toStringTag]](/interfaces/decodedrequestext.md#[tostringtag])
- [btc\_address](/interfaces/decodedrequestext.md#btc_address)
- [createdAtHash](/interfaces/decodedrequestext.md#createdathash)
- [defKeys](/interfaces/decodedrequestext.md#defkeys)
- [encodedLength](/interfaces/decodedrequestext.md#encodedlength)
- [hash](/interfaces/decodedrequestext.md#hash)
- [isEmpty](/interfaces/decodedrequestext.md#isempty)
- [registry](/interfaces/decodedrequestext.md#registry)
- [size](/interfaces/decodedrequestext.md#size)

### Methods

- [[iterator]](/interfaces/decodedrequestext.md#[iterator])
- [clear](/interfaces/decodedrequestext.md#clear)
- [delete](/interfaces/decodedrequestext.md#delete)
- [entries](/interfaces/decodedrequestext.md#entries)
- [eq](/interfaces/decodedrequestext.md#eq)
- [forEach](/interfaces/decodedrequestext.md#foreach)
- [get](/interfaces/decodedrequestext.md#get)
- [getAtIndex](/interfaces/decodedrequestext.md#getatindex)
- [has](/interfaces/decodedrequestext.md#has)
- [keys](/interfaces/decodedrequestext.md#keys)
- [set](/interfaces/decodedrequestext.md#set)
- [toArray](/interfaces/decodedrequestext.md#toarray)
- [toHex](/interfaces/decodedrequestext.md#tohex)
- [toHuman](/interfaces/decodedrequestext.md#tohuman)
- [toJSON](/interfaces/decodedrequestext.md#tojson)
- [toRawType](/interfaces/decodedrequestext.md#torawtype)
- [toString](/interfaces/decodedrequestext.md#tostring)
- [toU8a](/interfaces/decodedrequestext.md#tou8a)
- [values](/interfaces/decodedrequestext.md#values)

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

### btc\_address

• **btc\_address**: `string`

#### Defined in

[src/utils/encoding.ts:106](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/encoding.ts#L106)

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

▸ **set**(`key`, `value`): [`DecodedRequest`](/interfaces/decodedrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

[`DecodedRequest`](/interfaces/decodedrequest.md)

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
