/**
 * @category Text Basic
 * @name textBasicSlugify
 * @description Minimalistic text slugify.
 * @summary ```import { textBasicSlugify } from "@corefunc/corefunc/text/basic/slugify";```
 * @returns {text} Slug text.
 * @since 0.3.27
 * @example Usage:
 * ```ts
 * textBasicSlugify("This is blog post link!") // ➜ "this-is-blog-post-link"
 * ```
 */
export function textBasicSlugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}
