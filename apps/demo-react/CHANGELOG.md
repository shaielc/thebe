# demo-react

## 0.2.3

### Patch Changes

- b61fa4e: Changed core library loading strategy to load bundled code directly to the page. This is implemented as a new provider for now, so the previous core provider can still be used.
- Updated dependencies [b61fa4e]
  - thebe-react@0.2.4

## 0.2.1

### Patch Changes

- 7b3fd21: Changed core library loading strategy to load bundled code directly to the page. This is implemented as a new provider for now, so the previous core provider can still be used.
- Updated dependencies
- Updated dependencies [7b3fd21]
  - thebe-react@0.2.3

## 0.2.0

### Minor Changes

- 6eea92e: Made changes to the `thebe-core` APIs to make rendermime registries external, the caller now has to manage how registries are used across the other session nd notebook object. Updates the demos, `thebe` and `thebe-react` to reflect this base change. `thebe-react` now has a new provider making it easy to add a rendermine registry in the component tree.

### Patch Changes

- Updated dependencies [0a62e50]
- Updated dependencies [6eea92e]
  - thebe-react@0.2.2

## 0.1.5

### Patch Changes

- Updated interface to allow jupyterlite options to be passed into bundle. React provider updated to access useJuptyerLite prop and react-demo updated to use the new prop.
- Updated dependencies
  - thebe-react@0.2.1

## 0.1.4

### Patch Changes

- Improved all demos and setup autodeply for the simple demo
- Updated dependencies
  - thebe-react@1.0.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - thebe-react@0.0.7

## 0.1.2

### Patch Changes

- Updated dependencies [3bd3195]
  - thebe-react@0.0.6

## 0.1.1

### Patch Changes

- 7279d5b: fixed interact based ipywidgets and ipympl functionality, now aligning with behaviour seen in voila and jputyerlab. See [issue 608](https://github.com/executablebooks/thebe/issues/608)
- Updated dependencies [7279d5b]
  - thebe-react@0.0.5
