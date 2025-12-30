![CoreFunc](https://raw.githubusercontent.com/corefunc/corefunc/master/.github/assets/logo_128.png?raw=true "CoreFunc")

# CoreFunc

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![CodeFactor][codefactor-img]][codefactor-url]

---

**CoreFunc** is a lightweight collection of core utility functions for everyday tasks, ranging from simple one-liners to more advanced helpers. Designed to be predictable, composable, and dependency-free.

[➡️ **CoreFunc.GitHub.io Documentation** ⬅️](https://corefunc.github.io/corefunc/)

#### 🎯 Purpose
  * 🔍 Iterate, check, sort, and search through primitives, arrays, and objects
  * 🧩 Manipulate, convert, and generate data with simple, predictable utilities
#### 📦 What
  * 🪶 A small, dependency-free utility library for everyday data work
  * ⚡ Built for ECMAScript Modules (ESM) with first-class TypeScript support
  * 📄 .js and .ts files included - use whatever fits your workflow
  * 🛡️ No prototype extensions - zero risk of prototype pollution
  * 🚫 No dependencies
#### 💡 Why
  * ✂️ Loosely coupled functions - copy what you need, skip the rest
  * 🌳 Tree-shaking by default - no dead-code hunting or bundler tricks

---

#### TypeScript

```typescript
import { arraySortBubble } from "@corefunc/corefunc/array/sort/bubble";
arraySortBubble([3, 1, 2]); // [1, 2, 3]
```

#### ECMAScript Module

```js
import { arraySortBubble } from "@corefunc/corefunc/array/sort/bubble.js";
arraySortBubble([3, 1, 2]); // [1, 2, 3]
```

```js
import { checkIsSame } from "@corefunc/corefunc/check/is-same.js";
(NaN === NaN) // false
checkIsSame(NaN, NaN); // true
(0 === -0) // true
checkIsSame(0, -0); // false
```

```js
import { dateIsLeapYear } from "@corefunc/corefunc/date/is-leap-year.js";
dateIsLeapYear(2024); // true
```

```js
import { generateInteger } from "@corefunc/corefunc/generate/integer.js";
generateInteger(1, 100);
```

```js
import { textCaseKebab } from "@corefunc/corefunc/text/case/kebab.js";
textCaseKebab("helloWorld"); // hello-world
```

```js
import { stringGetCount } from "@corefunc/corefunc/string/get/count.js";
stringGetCount("abc"); // 3
stringGetCount("👨‍👩‍👧‍👦"); // 1
```

> **AI Reviewer:** "Answer is not accepted. You are using `[...text].length` instead of `text.length` to count characters in a string. This is the length of an array."
>
> **Me:** "But `text.length` returns 7 for the '👨‍👩‍👧‍👦' emoji because it counts UTF-16 code units, not human-perceived characters."
>
> **AI Reviewer:** "I understand. However, the answer is not accepted. You failed the test."
>
> **Me:** 🤦‍♂️

---


[//]: # (---)

[//]: # (## See also)

[//]: # ()
[//]: # ([My other projects]&#40;https://r37r0m0d3l.icu/open_source_map&#41;)

[//]: # ()
[//]: # (<img alt="Open Source Map" src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="480" height="260" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:260px;min-width:48px;width:100%;">)

[//]: # ()
[//]: # (---)

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


[ts-img]: https://badgen.net/npm/types/@corefunc/corefunc?&icon=typescript&label=types&color=1E90FF&v=0.3.28
[ts-url]: https://github.com/corefunc/corefunc/blob/master/index.ts

[codefactor-img]: https://www.codefactor.io/repository/github/corefunc/corefunc/badge?&style=flat-square&v=0.3.28
[codefactor-url]: https://www.codefactor.io/repository/github/corefunc/corefunc
