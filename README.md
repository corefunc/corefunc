![CoreFunc](https://raw.githubusercontent.com/corefunc/corefunc/master/.github/assets/logo_128.png?raw=true "CoreFunc")

# CoreFunc

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

---

CoreFunc - is a collection of core functions for various tasks. It consists of useful one-liner helpers and more complicated functions.

Why.

- All functions are written to work with CommonJS and ECMAScript modules.

- .JS, .CJS, .MJS, .TS files are in package. Wherever you prefer.

- Don't extend any built-in objects. No prototype pollution at all.

- You can steal the code if you don't want to use the whole package.
  Most functions are not bound to other functions in the library.

- It's super easy for Tree Shaking, no need for Dead Code Hunting.

What is the purpose?

- Iterate, check, sort, find on primitives, arrays, objects.

- Manipulate, convert, generate values.

[📚 Documentation ➜ **corefunc.github.io**](https://corefunc.github.io/corefunc/)

---

**Recommended usage for Tree Shaking:**

**CommonJS import**

```javascript
const bubbleSort = require("@corefunc/corefunc/array/sort/bubble.cjs");
bubbleSort([3, 1, 2]);
```

**ECMAScript Module**

```javascript
import bubbleSort from "@corefunc/corefunc/array/sort/bubble.mjs";
bubbleSort([3, 1, 2]);
```

**TypeScript**

```javascript
import bubbleSort from "@corefunc/corefunc/array/sort/bubble";
bubbleSort([3, 1, 2]);
```

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img alt="Open Source Map" src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

---

Also there is more useful links:

-   [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)

-   [lodash](https://github.com/lodash/lodash)

-   [30secondsofcode](https://www.30secondsofcode.org/js/p/1)

-   [licia](https://github.com/liriliri/licia)

-   [voca](https://github.com/panzerdp/voca)

-   [mout](https://github.com/mout/mout)

-   [underwater](https://github.com/fabioars/underwater)

-   [collect.js](https://www.npmjs.com/package/collect.js)

-   [match-sorter](https://github.com/kentcdodds/match-sorter)

-   [1loc.dev](https://1loc.dev/)

-   [how-to-list-object-methods-javascript](https://flaviocopes.com/how-to-list-object-methods-javascript/)

---

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/corefunc/corefunc
[gh-stars-img]: https://badgen.net/github/stars/corefunc/corefunc?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/corefunc/corefunc
[lgtm-img]: https://badgen.net/lgtm/grade/g/corefunc/corefunc?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@corefunc/corefunc
[npm-version-img]: https://badgen.net/npm/v/@corefunc/corefunc?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/corefunc
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/corefunc?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/corefunc/corefunc?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.com/github/corefunc/corefunc
[travis-img]: https://badgen.net/travis/corefunc/corefunc?&icon=travis&label=build
[ts-url]: https://github.com/corefunc/corefunc/blob/master/dist/index.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/corefunc?&icon=typescript&label=types&color=1E90FF

