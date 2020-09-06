/*!
 * name: @feizheng/next-dom2json
 * description: Dom to json for next.
 * homepage: https://github.com/afeiship/next-dom2json
 * version: 1.0.0
 * date: 2020-09-06T04:34:14.211Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var isNodeList = function (inNode) {
    return 'forEach' in inNode && typeof inNode.length === 'number';
  };

  nx.dom2json = function (inNode) {
    if (!inNode) return null;
    if (!isNodeList(inNode)) {
      var result = {};
      var nodeName = inNode.nodeName;
      var nodeValue = inNode.nodeValue;
      var nodeType = inNode.nodeType;
      var childNodes = inNode.childNodes;
      var attributes = inNode.attributes;
      var i = 0;

      result.nodeName = nodeName.toLowerCase();
      result.nodeType = nodeType;
      nodeValue && (result.nodeValue = nodeValue);

      if (attributes) {
        var obj = (result.attributes = {});
        for (i = 0; i < attributes.length; i++) {
          var attr = attributes[i];
          obj[attr.nodeName] = attr.nodeValue;
        }
      }

      if (childNodes) {
        var length = childNodes.length;
        var arr = (result.childNodes = new Array(length));
        for (i = 0; i < length; i++) {
          arr[i] = nx.dom2json(childNodes[i]);
        }
      }

      return result;
    } else {
      var nodes = nx.slice(inNode);
      return nodes.map(function (node) {
        return nx.dom2json(node);
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dom2json;
  }
})();
