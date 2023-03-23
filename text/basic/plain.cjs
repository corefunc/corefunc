"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textBasicPlain = void 0;
/**
 * @category Text Basic
 * @name textBasicPlain
 * @description Remove all ANSI colors/styles from string.
 * @summary ```import { textBasicPlain } from "@corefunc/corefunc/text/basic/plain";```
 * @returns {text} Text.
 * @since 0.3.58
 */
function textBasicPlain(text) {
    return text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
}
exports.textBasicPlain = textBasicPlain;
