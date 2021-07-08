[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultElectrsAPI

# Class: DefaultElectrsAPI

## Implements

- [`ElectrsAPI`](/interfaces/electrsapi.md)

## Table of contents

### Constructors

- [constructor](/classes/defaultelectrsapi.md#constructor)

### Properties

- [addressApi](/classes/defaultelectrsapi.md#addressapi)
- [blockApi](/classes/defaultelectrsapi.md#blockapi)
- [scripthashApi](/classes/defaultelectrsapi.md#scripthashapi)
- [txApi](/classes/defaultelectrsapi.md#txapi)

### Methods

- [broadcastRawTransaction](/classes/defaultelectrsapi.md#broadcastrawtransaction)
- [getData](/classes/defaultelectrsapi.md#getdata)
- [getLatestBlock](/classes/defaultelectrsapi.md#getlatestblock)
- [getLatestBlockHeight](/classes/defaultelectrsapi.md#getlatestblockheight)
- [getMerkleProof](/classes/defaultelectrsapi.md#getmerkleproof)
- [getParsedExecutionParameters](/classes/defaultelectrsapi.md#getparsedexecutionparameters)
- [getRawTransaction](/classes/defaultelectrsapi.md#getrawtransaction)
- [getTransactionBlockHeight](/classes/defaultelectrsapi.md#gettransactionblockheight)
- [getTransactionStatus](/classes/defaultelectrsapi.md#gettransactionstatus)
- [getTx](/classes/defaultelectrsapi.md#gettx)
- [getTxIdByOpReturn](/classes/defaultelectrsapi.md#gettxidbyopreturn)
- [getTxIdByRecipientAddress](/classes/defaultelectrsapi.md#gettxidbyrecipientaddress)
- [getTxStatus](/classes/defaultelectrsapi.md#gettxstatus)
- [getUtxoAmount](/classes/defaultelectrsapi.md#getutxoamount)
- [txOutputHasRecipientAndAmount](/classes/defaultelectrsapi.md#txoutputhasrecipientandamount)
- [utxoHasAtLeastAmount](/classes/defaultelectrsapi.md#utxohasatleastamount)
- [waitForOpreturn](/classes/defaultelectrsapi.md#waitforopreturn)

## Constructors

### constructor

• **new DefaultElectrsAPI**(`network?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | `string` | `"mainnet"` |

#### Defined in

[src/external/electrs.ts:163](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L163)

## Properties

### addressApi

• `Private` **addressApi**: `AddressApi`

#### Defined in

[src/external/electrs.ts:163](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L163)

___

### blockApi

• `Private` **blockApi**: `BlockApi`

#### Defined in

[src/external/electrs.ts:160](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L160)

___

### scripthashApi

• `Private` **scripthashApi**: `ScripthashApi`

#### Defined in

[src/external/electrs.ts:162](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L162)

___

### txApi

• `Private` **txApi**: `TxApi`

#### Defined in

[src/external/electrs.ts:161](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L161)

## Methods

### broadcastRawTransaction

▸ **broadcastRawTransaction**(`hex`): `Promise`<`AxiosResponse`<`string`\>\>

Broadcasts a transaction to the Bitcoin network configured in the constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | A hex-encoded raw transaction to be broadcast to the Bitcoin blockchain |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

The txid of the transaction

#### Defined in

[src/external/electrs.ts:324](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L324)

___

### getData

▸ **getData**<`T`\>(`response`): `Promise`<`T`\>

Parse an AxiosResponse Promise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `Promise`<`AxiosResponse`<`T`\>\> | A generic AxiosResponse Promise |

#### Returns

`Promise`<`T`\>

The data in the response

#### Defined in

[src/external/electrs.ts:388](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L388)

___

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The block hash of the latest Bitcoin block

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getLatestBlock](/interfaces/electrsapi.md#getlatestblock)

#### Defined in

[src/external/electrs.ts:187](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L187)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getLatestBlockHeight](/interfaces/electrsapi.md#getlatestblockheight)

#### Defined in

[src/external/electrs.ts:191](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L191)

___

### getMerkleProof

▸ **getMerkleProof**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`string`\>

The merkle inclusion proof for the transaction using bitcoind's merkleblock format.

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getMerkleProof](/interfaces/electrsapi.md#getmerkleproof)

#### Defined in

[src/external/electrs.ts:195](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L195)

___

### getParsedExecutionParameters

▸ **getParsedExecutionParameters**(`txid`): `Promise`<[`Bytes`, `Bytes`]\>

Get the parsed (as Bytes) merkle proof and raw transaction

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

A tuple of Bytes object, representing [merkleProof, rawTx]

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getParsedExecutionParameters](/interfaces/electrsapi.md#getparsedexecutionparameters)

#### Defined in

[src/external/electrs.ts:355](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L355)

___

### getRawTransaction

▸ **getRawTransaction**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`string`\>

The raw transaction data, represented as a hex string

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getRawTransaction](/interfaces/electrsapi.md#getrawtransaction)

#### Defined in

[src/external/electrs.ts:370](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L370)

___

### getTransactionBlockHeight

▸ **getTransactionBlockHeight**(`txid`): `Promise`<`undefined` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`undefined` \| `number`\>

The height of the block the transaction was included in. If the block has not been confirmed, returns undefined.

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getTransactionBlockHeight](/interfaces/electrsapi.md#gettransactionblockheight)

#### Defined in

[src/external/electrs.ts:351](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L351)

___

### getTransactionStatus

▸ **getTransactionStatus**(`txid`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getTransactionStatus](/interfaces/electrsapi.md#gettransactionstatus)

#### Defined in

[src/external/electrs.ts:328](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L328)

___

### getTx

▸ **getTx**(`txid`): `Promise`<`Transaction`\>

Fetch the Bitcoin transaction that matches the given TxId

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`Transaction`\>

A Bitcoin Transaction object

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getTx](/interfaces/electrsapi.md#gettx)

#### Defined in

[src/external/electrs.ts:199](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L199)

___

### getTxIdByOpReturn

▸ **getTxIdByOpReturn**(`opReturn`, `recipientAddress?`, `amount?`): `Promise`<`string`\>

Fetch the first bitcoin transaction ID based on the OP_RETURN field, recipient and amount.
Throw an error unless there is exactly one transaction with the given opcode.

**`remarks`**
Performs the lookup using an external service, Esplora. Requires the input string to be a hex

#### Parameters

| Name | Type |
| :------ | :------ |
| `opReturn` | `string` |
| `recipientAddress?` | `string` |
| `amount?` | `BTCAmount` |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getTxIdByOpReturn](/interfaces/electrsapi.md#gettxidbyopreturn)

#### Defined in

[src/external/electrs.ts:253](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L253)

___

### getTxIdByRecipientAddress

▸ **getTxIdByRecipientAddress**(`recipientAddress`, `amount?`): `Promise`<`string`\>

Fetch the last bitcoin transaction ID based on the recipient address and amount.
Throw an error if no such transaction is found.

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientAddress` | `string` |
| `amount?` | `BTCAmount` |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getTxIdByRecipientAddress](/interfaces/electrsapi.md#gettxidbyrecipientaddress)

#### Defined in

[src/external/electrs.ts:220](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L220)

___

### getTxStatus

▸ `Private` **getTxStatus**(`txid`): `Promise`<`Status`\>

Use the TxAPI to get the confirmationation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`Status`\>

A Status object, containing transaction settlement information

#### Defined in

[src/external/electrs.ts:379](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L379)

___

### getUtxoAmount

▸ **getUtxoAmount**(`txid`, `recipient`): `Promise`<`number`\>

Fetch the Bitcoin UTXO amount that matches the given TxId and recipient

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |
| `recipient` | `string` |

#### Returns

`Promise`<`number`\>

A UTXO amount if found, 0 otherwise

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[getUtxoAmount](/interfaces/electrsapi.md#getutxoamount)

#### Defined in

[src/external/electrs.ts:203](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L203)

___

### txOutputHasRecipientAndAmount

▸ `Private` **txOutputHasRecipientAndAmount**(`vout`, `recipientAddress?`, `amount?`): `boolean`

Check if a given UTXO sends at least `amountAsBTC` to a certain `recipientAddress`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vout` | `VOut` | UTXO object |
| `recipientAddress?` | `string` | (Optional) Address of recipient |
| `amount?` | `BTCAmount` | - |

#### Returns

`boolean`

Boolean value

#### Defined in

[src/external/electrs.ts:309](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L309)

___

### utxoHasAtLeastAmount

▸ `Private` **utxoHasAtLeastAmount**(`utxo`, `amount?`): `boolean`

Check if a given UTXO has at least `amountAsBTC`

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxo` | `UTXO` \| `VOut` |
| `amount?` | `BTCAmount` |

#### Returns

`boolean`

Boolean value

#### Defined in

[src/external/electrs.ts:241](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L241)

___

### waitForOpreturn

▸ **waitForOpreturn**(`data`, `timeoutMs`, `retryIntervalMs`): `Promise`<`string`\>

Return a promise that either resolves to the first txid with the given opreturn `data`,
or rejects if the `timeout` has elapsed.

**`remarks`**
Every 5 seconds, performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `timeoutMs` | `number` |
| `retryIntervalMs` | `number` |

#### Returns

`Promise`<`string`\>

The Bitcoin txid

#### Implementation of

[ElectrsAPI](/interfaces/electrsapi.md).[waitForOpreturn](/interfaces/electrsapi.md#waitforopreturn)

#### Defined in

[src/external/electrs.ts:281](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L281)
