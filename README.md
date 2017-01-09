# react-sinatra-ujs

`react-sinatra-ujs` mounts components built with webpack.

This is for [react-sinatra](https://github.com/namusyaka/react-sinatra)

## Install

`npm i --save react-sinatra-ujs`

## Usage

### Renders react component in your views

Add your react component in your views by using the `react_component` helper.

```erb
<%= react_component('CommentBox', name: 'namusyaka') %>
```

### Mount webpack bundled components

```js
import { mountComponents } from './react-sinatra-ujs';

import { CommentBox } from './components/CommentBox';

mountComponents({ CommentBox });
```

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
