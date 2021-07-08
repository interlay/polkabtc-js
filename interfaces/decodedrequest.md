[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DecodedRequest

# Interface: DecodedRequest

## Hierarchy

- `Struct`

  ↳ **`DecodedRequest`**

## Table of contents

### Properties

- [#private](/interfaces/decodedrequest.md##private)
- [[toStringTag]](/interfaces/decodedrequest.md#[tostringtag])
- [btc\_address](/interfaces/decodedrequest.md#btc_address)
- [createdAtHash](/interfaces/decodedrequest.md#createdathash)
- [registry](/interfaces/decodedrequest.md#registry)
- [size](/interfaces/decodedrequest.md#size)

### Accessors

- [Type](/interfaces/decodedrequest.md#type)
- [defKeys](/interfaces/decodedrequest.md#defkeys)
- [encodedLength](/interfaces/decodedrequest.md#encodedlength)
- [hash](/interfaces/decodedrequest.md#hash)
- [isEmpty](/interfaces/decodedrequest.md#isempty)

### Methods

- [[iterator]](/interfaces/decodedrequest.md#[iterator])
- [clear](/interfaces/decodedrequest.md#clear)
- [delete](/interfaces/decodedrequest.md#delete)
- [entries](/interfaces/decodedrequest.md#entries)
- [eq](/interfaces/decodedrequest.md#eq)
- [forEach](/interfaces/decodedrequest.md#foreach)
- [get](/interfaces/decodedrequest.md#get)
- [getAtIndex](/interfaces/decodedrequest.md#getatindex)
- [has](/interfaces/decodedrequest.md#has)
- [keys](/interfaces/decodedrequest.md#keys)
- [set](/interfaces/decodedrequest.md#set)
- [toArray](/interfaces/decodedrequest.md#toarray)
- [toHex](/interfaces/decodedrequest.md#tohex)
- [toHuman](/interfaces/decodedrequest.md#tohuman)
- [toJSON](/interfaces/decodedrequest.md#tojson)
- [toRawType](/interfaces/decodedrequest.md#torawtype)
- [toString](/interfaces/decodedrequest.md#tostring)
- [toU8a](/interfaces/decodedrequest.md#tou8a)
- [values](/interfaces/decodedrequest.md#values)

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

Struct.#private

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:23

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Struct.\_\_@toStringTag@2971

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### btc\_address

• `Readonly` **btc\_address**: `BtcAddress`

#### Defined in

[src/utils/encoding.ts:101](https://github.com/interlay/interbtc-js/blob/0c8155e/src/utils/encoding.ts#L101)

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Struct.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:25

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Struct.registry

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:24

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Struct.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

### Type

• `get` **Type**(): `E`

**`description`** Returns the Type description to sthe structure

#### Returns

`E`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:40

___

### defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this enum

#### Returns

`string`[]

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:32

___

### encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:44

___

### hash

• `get` **hash**(): `CodecHash`

**`description`** returns a hash of the contents

#### Returns

`CodecHash`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:48

___

### isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:36

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.\_\_@iterator@2969

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Struct.clear

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

Struct.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.entries

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

Struct.eq

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

Struct.forEach

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

Struct.get

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

Struct.getAtIndex

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

Struct.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Struct.keys

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

Struct.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Struct.toArray

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:65

___

### toHex

▸ **toHex**(): `string`

**`description`** Returns a hex string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toHex

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

Struct.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:73

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Struct.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:77

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Struct.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:81

___

### toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toString

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

Struct.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:90

___

### values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Struct.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
