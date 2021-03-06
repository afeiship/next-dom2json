# next-dom2json
> Dom to json for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dom2json
```

## usage
```js
import '@jswork/next-dom2json';

const domElement = `
  <div class="list_item odd" data-value="v1" itemscope="" itemtype="http://schema.org/Movie">
    123
    <span>abc</span>
    <strong>def</strong>
  </div>
`;
const dom = new JSDOM(domElement);
const el = dom.window.document.querySelector('.list_item');
const json = nx.dom2json(el);

// results:
/*
{
  nodeName: 'div',
  nodeType: 1,
  attributes: {
    class: 'list_item odd',
    'data-value': 'v1',
    itemscope: '',
    itemtype: 'http://schema.org/Movie'
  },
  childNodes: [
    {
      nodeName: '#text',
      nodeType: 3,
      nodeValue: '\n        123\n        ',
      childNodes: []
    },
    {
      nodeName: 'span',
      nodeType: 1,
      attributes: {},
      childNodes: [
        {
          nodeName: '#text',
          nodeType: 3,
          nodeValue: 'abc',
          childNodes: []
        }
      ]
    },
    {
      nodeName: '#text',
      nodeType: 3,
      nodeValue: '\n        ',
      childNodes: []
    },
    {
      nodeName: 'strong',
      nodeType: 1,
      attributes: {},
      childNodes: [
        {
          nodeName: '#text',
          nodeType: 3,
          nodeValue: 'def',
          childNodes: []
        }
      ]
    },
    {
      nodeName: '#text',
      nodeType: 3,
      nodeValue: '\n      ',
      childNodes: []
    }
  ]
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-dom2json/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dom2json
[version-url]: https://npmjs.org/package/@jswork/next-dom2json

[license-image]: https://img.shields.io/npm/l/@jswork/next-dom2json
[license-url]: https://github.com/afeiship/next-dom2json/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dom2json
[size-url]: https://github.com/afeiship/next-dom2json/blob/master/dist/next-dom2json.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dom2json
[download-url]: https://www.npmjs.com/package/@jswork/next-dom2json
