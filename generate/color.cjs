"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColor = void 0;
/**
 * @category Generate
 * @name generateColor
 * @description Generate random Hex color.
 * @summary ```import { generateColor } from "@corefunc/corefunc/generate/color";```
 * @returns {string} Hex color.
 * @since 0.3.27
 * @example ```generateColor(); ➜ '#d7bd4d'```
 */
function generateColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
exports.generateColor = generateColor;
