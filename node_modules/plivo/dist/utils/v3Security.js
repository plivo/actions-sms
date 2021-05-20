'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateV3Signature = validateV3Signature;

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
var qs = require('querystring');

function get_map_from_query(params1, params2) {
  var params = {};
  Object.keys(params1).forEach(function (key) {
    var val = params1[key];
    if (val instanceof Array) {
      params[key] = val;
    } else {
      params[key] = [val];
    }
  });
  Object.keys(params2).forEach(function (key) {
    var val = params2[key];
    if (!(val instanceof Array)) {
      val = [val];
    }
    if (key in params) {
      params[key] = params[key].concat(val);
    } else {
      params[key] = val;
    }
  });
  return params;
}

function get_sorted_query_string(params) {
  var query_string = [];
  Object.keys(params).sort().forEach(function (key) {
    var val = params[key];
    val.sort().forEach(function (value) {
      query_string.push(key.toString() + '=' + value.toString());
    });
  });
  return query_string.join('&');
}

function get_sorted_params_string(params) {
  var paramsString = [];
  Object.keys(params).sort().forEach(function (key) {
    var val = params[key];
    if (val instanceof Array) {
      val.sort().forEach(function (value) {
        paramsString.push(key.toString() + value.toString());
      });
    } else {
      paramsString.push(key.toString() + val.toString());
    }
  });
  return paramsString.join('');
}

function construct_get_url(uri, params) {
  var empty_post_params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var parsed_uri = parser.parse(uri);
  var url_protocol = parsed_uri.protocol === '' ? 'http://' : parsed_uri.protocol + '://';
  var proxy = parsed_uri.port === '' ? parsed_uri.host : parsed_uri.host + ':' + parsed_uri.port;
  var base_url = buildUrl(url_protocol + proxy, { path: parsed_uri.path });
  params = get_map_from_query(qs.parse(parsed_uri.query), params);
  var query_params = get_sorted_query_string(params);
  if (query_params.length > 0 || !empty_post_params) {
    base_url = base_url + '?' + query_params;
  }
  if (query_params.length > 0 && !empty_post_params) {
    base_url = base_url + '.';
  }
  return base_url;
}

function construct_post_url(uri, params) {
  var base_url = construct_get_url(uri, {}, _lodash2.default.isEmpty(params));
  return base_url + get_sorted_params_string(params);
}

function get_signature_v3(auth_token, base_url, nonce) {
  base_url = base_url + '.' + nonce;
  var hmac = _crypto2.default.createHmac('sha256', auth_token);
  var hmacBytes = base64.decode(hmac.update(base_url).digest('base64'));
  return base64.encode(hmacBytes);
}

function validateV3Signature(method, uri, nonce, auth_token, v3_signature) {
  var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  auth_token = utf8.encode(auth_token);
  nonce = utf8.encode(nonce);
  v3_signature = utf8.encode(v3_signature);
  uri = utf8.encode(uri);
  var base_url = uri;
  if (method === 'GET') {
    base_url = construct_get_url(uri, params);
  } else if (method === 'POST') {
    base_url = construct_post_url(uri, params);
  } else {
    throw new Error("Please provide authToken");
  }
  var signature = get_signature_v3(auth_token, base_url, nonce);
  var matched = false;
  _lodash2.default.split(v3_signature, ',').forEach(function (plivo_sign) {
    if (plivo_sign === signature) {
      matched = true;
    }
  });
  return matched;
}