"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textBasicSlugify = void 0;
/**
 * @category Text Basic
 * @name textBasicSlugify
 * @description Minimalistic text slugify.
 * @summary ```import { textBasicSlugify } from "@corefunc/corefunc/text/basic/slugify";```
 * @returns {text} Slug text.
 * @since 0.3.27
 * @example ```textBasicSlugify("This is blog post link!"); ➜  "this-is-blog-post-link"```
 */
function textBasicSlugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}
exports.textBasicSlugify = textBasicSlugify;
