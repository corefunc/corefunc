"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicShuffle = void 0;
/**
 * @category Array Basic
 * @name arrayBasicShuffle
 * @description Shuffles array. Modified by reference.
 * @summary ```import { arrayBasicShuffle } from "@corefunc/corefunc/array/basic/shuffle";```
 * @param {Array} array Array to be shuffled.
 * @returns {Array} Modified array.
 * @since 0.3.27
 * @example ```arrayBasicShuffle([2, 11, 37, 42])```
 */
function arrayBasicShuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
exports.arrayBasicShuffle = arrayBasicShuffle;
