[@interlay/interbtc](/README.md) / [Exports](/modules.md) / RefundRequestExt

# Interface: RefundRequestExt

## Hierarchy

- `Omit`<`RefundRequest`, ``"btc_address"``\>

  ↳ **`RefundRequestExt`**

## Table of contents

### Properties

- [Type](/interfaces/refundrequestext.md#type)
- [[toStringTag]](/interfaces/refundrequestext.md#[tostringtag])
- [amount\_btc](/interfaces/refundrequestext.md#amount_btc)
- [amount\_issuing](/interfaces/refundrequestext.md#amount_issuing)
- [btc\_address](/interfaces/refundrequestext.md#btc_address)
- [completed](/interfaces/refundrequestext.md#completed)
- [createdAtHash](/interfaces/refundrequestext.md#createdathash)
- [defKeys](/interfaces/refundrequestext.md#defkeys)
- [encodedLength](/interfaces/refundrequestext.md#encodedlength)
- [fee](/interfaces/refundrequestext.md#fee)
- [hash](/interfaces/refundrequestext.md#hash)
- [isEmpty](/interfaces/refundrequestext.md#isempty)
- [issue\_id](/interfaces/refundrequestext.md#issue_id)
- [issuer](/interfaces/refundrequestext.md#issuer)
- [registry](/interfaces/refundrequestext.md#registry)
- [size](/interfaces/refundrequestext.md#size)
- [vault](/interfaces/refundrequestext.md#vault)

### Methods

- [[iterator]](/interfaces/refundrequestext.md#[iterator])
- [clear](/interfaces/refundrequestext.md#clear)
- [delete](/interfaces/refundrequestext.md#delete)
- [entries](/interfaces/refundrequestext.md#entries)
- [eq](/interfaces/refundrequestext.md#eq)
- [forEach](/interfaces/refundrequestext.md#foreach)
- [get](/interfaces/refundrequestext.md#get)
- [getAtIndex](/interfaces/refundrequestext.md#getatindex)
- [has](/interfaces/refundrequestext.md#has)
- [keys](/interfaces/refundrequestext.md#keys)
- [set](/interfaces/refundrequestext.md#set)
- [toArray](/interfaces/refundrequestext.md#toarray)
- [toHex](/interfaces/refundrequestext.md#tohex)
- [toHuman](/interfaces/refundrequestext.md#tohuman)
- [toJSON](/interfaces/refundrequestext.md#tojson)
- [toRawType](/interfaces/refundrequestext.md#torawtype)
- [toString](/interfaces/refundrequestext.md#tostring)
- [toU8a](/interfaces/refundrequestext.md#tou8a)
- [values](/interfaces/refundrequestext.md#values)

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

### amount\_btc

• `Readonly` **amount\_btc**: `Wrapped`

#### Inherited from

Omit.amount\_btc

#### Defined in

src/interfaces/default/types.ts:175

___

### amount\_issuing

• `Readonly` **amount\_issuing**: `Wrapped`

#### Inherited from

Omit.amount\_issuing

#### Defined in

src/interfaces/default/types.ts:173

___

### btc\_address

• **btc\_address**: `string`

#### Defined in

[src/parachain/refund.ts:14](https://github.com/interlay/interbtc-js/blob/0c8155e/src/parachain/refund.ts#L14)

___

### completed

• `Readonly` **completed**: `bool`

#### Inherited from

Omit.completed

#### Defined in

src/interfaces/default/types.ts:179

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

### fee

• `Readonly` **fee**: `Wrapped`

#### Inherited from

Omit.fee

#### Defined in

src/interfaces/default/types.ts:174

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

### issue\_id

• `Readonly` **issue\_id**: `H256`

#### Inherited from

Omit.issue\_id

#### Defined in

src/interfaces/default/types.ts:178

___

### issuer

• `Readonly` **issuer**: `AccountId`

#### Inherited from

Omit.issuer

#### Defined in

src/interfaces/default/types.ts:176

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

### vault

• `Readonly` **vault**: `AccountId`

#### Inherited from

Omit.vault

#### Defined in

src/interfaces/default/types.ts:172

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

▸ **set**(`key`, `value`): `RefundRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

`RefundRequest`

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
