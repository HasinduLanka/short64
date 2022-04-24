"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alphabet;
// binary to string lookup table
let b2s;
// string to binary lookup table
// 123 == 'z'.charCodeAt(0) + 1
let s2b;
const SetAlphabet = (newalphabet) => {
    alphabet = newalphabet;
    b2s = alphabet.split('');
    s2b = new Array(123);
    for (let i = 0; i < alphabet.length; i++) {
        s2b[alphabet.charCodeAt(i)] = i;
    }
};
SetAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-');
// number to short64
const From = (number) => {
    let lo = number >>> 0;
    let hi = (number / 4294967296) >>> 0;
    let right = '';
    while (hi > 0) {
        right = b2s[0x3f & lo] + right;
        lo >>>= 6;
        lo |= (0x3f & hi) << 26;
        hi >>>= 6;
    }
    let left = '';
    do {
        left = b2s[0x3f & lo] + left;
        lo >>>= 6;
    } while (lo > 0);
    return left + right;
};
// short64 to number
const ToInt = (short64) => {
    let number = 0;
    for (let i = 0; i < short64.length; i++) {
        number = number * 64 + s2b[short64.charCodeAt(i)];
    }
    return number;
};
exports.default = { From, ToInt, SetAlphabet };
