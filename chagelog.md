# Changelog

---

## [0.3.67] - 2023-07-18

### Added

- `generateInteger` - Generate random integer.

---

## [0.3.66] - 2023-06-06

### Fixed

- `objectSetDefaults` - Fix deep merge on native objects: Date, Error, Map, RegExp, Set, WeakMap, WeakSet.

---

## [0.3.65] - 2023-05-24

### Changed

- `objectSetDefaults` - Add option `undefinedPreservation` to preserve keys with `undefined` values.

---

## [0.3.64] - 2023-05-24

### Changed

- `objectBasicClone` - Update `transfer` value to match typings of NodeJS ver. 17 and above.

### Fixed

- `objectSetDefaults` - Target object always have all properties from source object regardless of `null` or `undefined` values.

---

## [0.3.63] - 2023-05-17

### Added

- `objectSetTarget` -  Set source object to target object. Override properties in target object. Do not create new object.

---

## [0.3.62] - 2023-05-16

### Added

- `arrayBasicWith` - copying method of native mutable `Array.prototype.with` method with error suppression.
- `arrayToReversed` - copying method of native mutable `Array.prototype.reverse` method.
- `arrayToSorted` - copying method of native mutable `Array.prototype.sort` method.
- `arrayToSpliced` - copying method of native mutable `Array.prototype.splice` method.

### Changed

- `arrayBasicPull` now returns new array instead of modifying the original one.
- `arraySortNumbers` now returns new array instead of modifying the original one.
- `arraySortStrings` now returns new array instead of modifying the original one.
- `objectSetDefaults` now have option to consider `null` as empty value.

### Deprecated

- `objectGetProperty` deprecated in favor of native optional object chaining.

### Fixed

---

## [0.3.61]

### Fixed

- `objectKeysSort` - fix sorting when not using deep sort.

---

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).