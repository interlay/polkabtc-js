import { encodeBtcAddress, FIXEDI128_SCALING_FACTOR } from ".";
import { SignedFixedPoint, UnsignedFixedPoint, BtcAddress } from "../interfaces";
import { H256 } from "@polkadot/types/interfaces";
import Big from "big.js";
import { ApiPromise } from "@polkadot/api";
import type { Struct } from "@polkadot/types";
import { Network } from "bitcoinjs-lib";
import { StorageKey } from "@polkadot/types/primitive/StorageKey";
import { Codec } from "@polkadot/types/types";

/**
 * Converts endianness of a Uint8Array
 * @param bytes Uint8Array, to be converted LE<>BE
 */
export function reverseEndianness(bytes: Uint8Array): Uint8Array {
    let offset = bytes.length;
    for (let index = 0; index < bytes.length; index += bytes.length) {
        offset--;
        for (let x = 0; x < offset; x++) {
            const b = bytes[index + x];
            bytes[index + x] = bytes[index + offset];
            bytes[index + offset] = b;
            offset--;
        }
    }
    return bytes;
}

function isHexPrefixed(str: string): boolean {
    return str.slice(0, 2) === "0x";
}

/**
 * Remove the `0x` hex prefix if present
 * @param str
 */
export function stripHexPrefix(str: string): string {
    return isHexPrefixed(str) ? str.slice(2) : str;
}

/**
 * Ensure the `0x` hex prefix is present
 * @param str
 **/
export function addHexPrefix(str: string): string {
    return isHexPrefixed(str) ? str : "0x" + str;
}

/**
 * Ensure a hash value is an encoded H256
 * @param api The polkadot API promise used to encode if necessary
 * @param hash The either H256 or string encoded hash
 **/
export function ensureHashEncoded(api: ApiPromise, hash: H256 | string): H256 {
    if (typeof hash === "string") {
        return api.createType("H256", addHexPrefix(hash as string));
    } else {
        return hash as H256;
    }
}

/**
 * Reverse the endianness of the given hex string
 * @dev Will remove `0x` prefix if present
 * @param hex
 */
export function reverseEndiannessHex(hex: string): string {
    const arr = stripHexPrefix(hex).match(/.{1,2}/g) || [];
    const bytes = new Uint8Array(arr.map((byte) => parseInt(byte, 16)));
    return reverseEndianness(bytes).reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
}

/**
 * Converts a Uint8Array to string
 * @dev Will remove `0x` prefix if present
 * @param bytes
 */
export function uint8ArrayToString(bytes: Uint8Array): string {
    return stripHexPrefix(bytes.toString()).split("").join("");
}

export function decodeFixedPointType(x: SignedFixedPoint | UnsignedFixedPoint): Big {
    const xBig = new Big(x.toString());
    const scalingFactor = new Big(Math.pow(10, FIXEDI128_SCALING_FACTOR));
    return xBig.div(scalingFactor);
}

export function encodeUnsignedFixedPoint(api: ApiPromise, x: Big): UnsignedFixedPoint {
    const scalingFactor = new Big(Math.pow(10, FIXEDI128_SCALING_FACTOR));
    // If there are any decimals left after scaling up by the scaling factor,
    // the resulting FixedU128 will be wrong. As such, trim any decimals.
    const xScaled = x.mul(scalingFactor).round(0, 0);
    return api.createType("FixedU128", xScaled.toFixed());
}

export function storageKeyToNthInner<T extends Codec>(s: StorageKey<T[]>, n = 0): T {
    return s.args[n];
}

export interface DecodedRequest extends Struct {
    readonly btc_address: BtcAddress;
}

export interface DecodedRequestExt extends Omit<DecodedRequest, "btc_address"> {
    // network encoded btc address
    btc_address: string;
}

export function encodeParachainRequest<T extends DecodedRequest, K extends DecodedRequestExt>(
    req: T,
    network: Network
): K {
    return {
        ...req,
        btc_address: encodeBtcAddress(req.btc_address, network),
    } as unknown as K;
}
