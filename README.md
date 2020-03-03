# CoreFunc

> **Please Note:** This is not a production-ready package. Expect long stretches of zero updates—that does not mean that the module is outdated. This is "Don’t repeat yourself" collection. Yes, it's working fine, but it is not complete neither consistent. Everything is a "Work in Progress".

## Recommended usage for Tree Shaking

```javascript
// CommonJS

const arraySortStrings =
  require("@corefunc/corefunc/array/sort/strings.cjs");

arraySortStrings(["c", "a", "b"]);
```

```javascript
// ECMAScript module

import arraySortStrings from "@corefunc/corefunc/array/sort/strings.mjs";

arraySortStrings(["c", "a", "b"]);
```