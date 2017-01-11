import test from 'ava';
import { jsdom } from 'jsdom';
import React from 'react';

import { mountComponents } from '../src/react-sinatra-ujs';

global.document = jsdom(`
  <html>
    <head></head>
    <body>
      <div data-react-class="FooBox" data-react-props="{&quot;content&quot;:&quot;content&quot;}"></div>
      <div data-my-react-class="BazBox" data-react-props=""></div>
    </body>
  </html>
`);

global.window = document.defaultView;

test('mountComponents should mount react components', t => {
  const FooBox = ({ content }) => React.createElement('div', { className: 'foo' }, content);

  mountComponents({ FooBox });

  const elements = document.querySelectorAll('div.foo');
  t.is(elements.length, 1);
  t.is(elements[0].innerHTML, 'content');
});

test('mountComponents should throw an error when component is not found', t => {
  const BarBox = () => React.createElement('div', { className: 'bar' });
  t.throws(() => mountComponents({ FooBox }));
});

test('mountComponents should override configs', t => {
  const BazBox = () => React.createElement('div', { className: 'baz' });
  mountComponents({ BazBox }, { 'NAME_ATTR' : 'data-my-react-class' });
  t.is(document.querySelectorAll('div.baz').length, 1);
});
