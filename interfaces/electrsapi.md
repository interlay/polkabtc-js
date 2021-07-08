[@interlay/interbtc](/README.md) / [Exports](/modules.md) / ElectrsAPI

# Interface: ElectrsAPI

Bitcoin Core API

## Implemented by

- [`DefaultElectrsAPI`](/classes/defaultelectrsapi.md)

## Table of contents

### Methods

- [getLatestBlock](/interfaces/electrsapi.md#getlatestblock)
- [getLatestBlockHeight](/interfaces/electrsapi.md#getlatestblockheight)
- [getMerkleProof](/interfaces/electrsapi.md#getmerkleproof)
- [getParsedExecutionParameters](/interfaces/electrsapi.md#getparsedexecutionparameters)
- [getRawTransaction](/interfaces/electrsapi.md#getrawtransaction)
- [getTransactionBlockHeight](/interfaces/electrsapi.md#gettransactionblockheight)
- [getTransactionStatus](/interfaces/electrsapi.md#gettransactionstatus)
- [getTx](/interfaces/electrsapi.md#gettx)
- [getTxIdByOpReturn](/interfaces/electrsapi.md#gettxidbyopreturn)
- [getTxIdByRecipientAddress](/interfaces/electrsapi.md#gettxidbyrecipientaddress)
- [getUtxoAmount](/interfaces/electrsapi.md#getutxoamount)
- [waitForOpreturn](/interfaces/electrsapi.md#waitforopreturn)

## Methods

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The block hash of the latest Bitcoin block

#### Defined in

[src/external/electrs.ts:55](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L55)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block

#### Defined in

[src/external/electrs.ts:59](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L59)

___

### getMerkleProof

▸ **getMerkleProof**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`string`\>

The merkle inclusion proof for the transaction using bitcoind's merkleblock format.

#### Defined in

[src/external/electrs.ts:64](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L64)

___

### getParsedExecutionParameters

▸ **getParsedExecutionParameters**(`txid`): `Promise`<[`Bytes`, `Bytes`]\>

Get the parsed (as Bytes) merkle proof and raw transaction

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

A tuple of Bytes object, representing [merkleProof, rawTx]

#### Defined in

[src/external/electrs.ts:142](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L142)

___

### getRawTransaction

▸ **getRawTransaction**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`string`\>

The raw transaction data, represented as a hex string

#### Defined in

[src/external/electrs.ts:80](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L80)

___

### getTransactionBlockHeight

▸ **getTransactionBlockHeight**(`txid`): `Promise`<`undefined` \| `number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`undefined` \| `number`\>

The height of the block the transaction was included in. If the block has not been confirmed, returns undefined.

#### Defined in

[src/external/electrs.ts:75](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L75)

___

### getTransactionStatus

▸ **getTransactionStatus**(`txid`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Defined in

[src/external/electrs.ts:70](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L70)

___

### getTx

▸ **getTx**(`txid`): `Promise`<`Transaction`\>

Fetch the Bitcoin transaction that matches the given TxId

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |

#### Returns

`Promise`<`Transaction`\>

A Bitcoin Transaction object

#### Defined in

[src/external/electrs.ts:119](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L119)

___

### getTxIdByOpReturn

▸ **getTxIdByOpReturn**(`opReturn`, `recipientAddress?`, `amount?`): `Promise`<`string`\>

Fetch the first bitcoin transaction ID based on the OP_RETURN field, recipient and amount.
Throw an error unless there is exactly one transaction with the given opcode.

**`remarks`**
Performs the lookup using an external service, Esplora. Requires the input string to be a hex

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opReturn` | `string` | Data string used for matching the OP_CODE of Bitcoin transactions |
| `recipientAddress?` | `string` | Match the receiving address of a transaction that contains said op_return |
| `amount?` | `BTCAmount` | Match the amount (in BTC) of a transaction that contains said op_return and recipientAddress. This parameter is only considered if `recipientAddress` is defined. |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Defined in

[src/external/electrs.ts:95](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L95)

___

### getTxIdByRecipientAddress

▸ **getTxIdByRecipientAddress**(`recipientAddress`, `amount?`): `Promise`<`string`\>

Fetch the last bitcoin transaction ID based on the recipient address and amount.
Throw an error if no such transaction is found.

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipientAddress` | `string` | Match the receiving address of a UTXO |
| `amount?` | `BTCAmount` | Match the amount (in BTC) of a UTXO that contains said recipientAddress. |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Defined in

[src/external/electrs.ts:108](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L108)

___

### getUtxoAmount

▸ **getUtxoAmount**(`txid`, `recipient`): `Promise`<`number`\>

Fetch the Bitcoin UTXO amount that matches the given TxId and recipient

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |
| `recipient` | `string` | A Bitcoin scriptpubkey address |

#### Returns

`Promise`<`number`\>

A UTXO amount if found, 0 otherwise

#### Defined in

[src/external/electrs.ts:131](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L131)

___

### waitForOpreturn

▸ **waitForOpreturn**(`data`, `timeoutMs`, `retryIntervalMs`): `Promise`<`string`\>

Return a promise that either resolves to the first txid with the given opreturn `data`,
or rejects if the `timeout` has elapsed.

**`remarks`**
Every 5 seconds, performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The opReturn of the bitcoin transaction |
| `timeoutMs` | `number` | The duration until the Promise times out (in milliseconds) |
| `retryIntervalMs` | `number` | The time to wait (in milliseconds) between retries |

#### Returns

`Promise`<`string`\>

The Bitcoin txid

#### Defined in

[src/external/electrs.ts:156](https://github.com/interlay/interbtc-js/blob/0c8155e/src/external/electrs.ts#L156)
