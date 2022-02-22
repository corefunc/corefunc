"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textEmojiJoin = void 0;
/**
 * @category Text Emoji
 * @name textEmojiJoin
 * @description Join emoji.
 * @summary ```import { textEmojiJoin } from "@corefunc/corefunc/text/emoji/join";```
 * @param {string} emoji Emoji.
 * @param {...string} emojis Emojis to join.
 * @returns {string} Joined emoji.
 * @since 0.3.27
 * @example ```"👨" + "💻" ➜  "👨💻"```
 * @example ```textEmojiJoin("👨", "💻") ➜  "👨‍💻"```
 */
function textEmojiJoin(emoji, ...emojis) {
    return [emoji, ...emojis].join("\u200D");
}
exports.textEmojiJoin = textEmojiJoin;
