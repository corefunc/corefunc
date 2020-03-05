# CoreFunc

[![NPM Version](https://img.shields.io/npm/v/@corefunc/corefunc.svg?style=flat)]()
[![NPM Downloads](https://img.shields.io/npm/dt/@corefunc/corefunc.svg?style=flat)]()
[![Dependency Status](https://david-dm.org/@corefunc/corefunc.svg)](https://david-dm.org/@corefunc/corefunc)
[![devDependencies Status](https://david-dm.org/@corefunc/corefunc/dev-status.svg)](https://david-dm.org/@corefunc/corefunc?type=dev)

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