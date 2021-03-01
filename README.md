[![dev_with_vue](https://img.shields.io/badge/Dev_with_VUE-vue-green)](https://github.com/vuejs/vue) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

# Vue Modal Container

A simple Modal Container package to handle Modal and Notification package.
* **Node** v8.10.0
* **NPM** v5.6.0

## Project setup
```
npm install
```

### Create a package build, compiles and minifies for production
```
npm run build
```

### Run tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Usage
```html
import ModalContainer from "bqr-vue-modal-container"

<modal-container 
    :is-visible="isVisible"
    :position="position"
    :size="size"
    :class-name="className"
    :auto-hide="autoHide"
    :is-bg-visible="isBgVisible"
    :is-scroll-disabled="isScrollBlocked"
    @closeModa="closeModal"
>
    Any Content here
</modal-container>
```

| Name               | Type          | Default            | Description                                                  |
| ----------------   | ------------- | ------------------ | ------------------------------------------------------------ |
| position           | String        | 'center'           | Position in the screen where the `Modal Container` will be placed |
| is-visible         | Boolean       | false              | false: hide modal from DOM, true: display modal on the DOM   |
| class-name         | String        | 'modal-override'   | Class(es) name(s) to set over the Modal container            |
| auto-hide          | Number        | 0                  | If greater than zero, will hide the Modal after the `auto-hide` time interval is past |
| is-bg-visible      | Boolean       | true               | If true, Display a full screen gray background under the modal container |
| is-scroll-disabled | Boolean       | true               | If true, disabled the browser be able to scroll              |

#### Events
| Name               | Description                                                  |
| ----------------   | ------------------------------------------------------------ |
| closeModal         | This event is emmited when auto-hide prop is greater than 0  |

#### Live Example

[Modal Container example](https://codepen.io/bqroster/pen/dyOmrPo)


#### Author
Jose Burgos <jose@bqroster.com>
