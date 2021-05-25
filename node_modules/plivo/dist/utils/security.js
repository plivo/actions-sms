'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeOldSignature = computeOldSignature;
exports.verifyOldSignature = verifyOldSignature;
exports.validateSignature = validateSignature;

var _uriParser = require('uri-parser');

var parser = _interopRequireWildcard(_uriParser);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var utf8 = require('utf8');
var buildUrl = require('build-url');
var base64 = require('base-64');

function computeOldSignature(authId, uri, params) {
  var joinedParams = uri + _lodash2.default.join(_lodash2.default.map(_lodash2.default.sortBy(_lodash2.default.toPairs(params)), function (item) {
    return item[0] + item[1];
  }), '');
  // console.log(joinedParams);
  return _crypto2.default.createHmac('sha1', authId).update(joinedParams).digest('base64');
}

function verifyOldSignature(authId, uri, params, signature) {
  return computeOldSignature(authId, uri, params) === signature;
}

function validateSignature(uri, nonce, signature, auth_token) {
  nonce = utf8.encode(nonce);
  signature = utf8.encode(signature);
  auth_token = utf8.encode(auth_token);
  uri = utf8.encode(uri);
  var parsed_uri = parser.parse(uri);
  var url_protocol = parsed_uri.protocol == '' ? 'http://' : parsed_uri.protocol + '://';
  var proxy = parsed_uri.port == '' ? parsed_uri.host : parsed_uri.host + ':' + parsed_uri.port;
  var base_url = buildUrl(url_protocol + proxy, { path: parsed_uri.path });
  var hmac = _crypto2.default.createHmac('sha256', auth_token);
  var hmacBytes = base64.decode(hmac.update(base_url + nonce).digest('base64'));
  var authentication_string = base64.encode(hmacBytes);
  return authentication_string == signature;
}