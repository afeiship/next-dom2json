const nx = require('@feizheng/next-js-core2');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
require('../src/next-dom2json');

describe('api.basic test', () => {
  test('nx.dom2json should return json', function () {
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

    expect(json).toEqual({
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
    });
  });
});
