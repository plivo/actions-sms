'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LookupInterface = exports.Number = exports.LookupResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _base = require('../base');

var _common = require('../utils/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Number/'; // unused as it is overridden, only for unit tests
var idField = 'OVERRIDDEN';
var LOOKUP_API_BASE_URL = 'https://lookup.plivo.com/v1/Number';

var LookupResponse = exports.LookupResponse = function LookupResponse(params) {
    _classCallCheck(this, LookupResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.phoneNumber = params.phoneNumber;
    this.country = params.country;
    this.format = params.format;
    this.carrier = params.carrier;
    this.resourceUri = params.resourceUri;
};

var Number = exports.Number = function (_PlivoResource) {
    _inherits(Number, _PlivoResource);

    function Number(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Number);

        var _this = _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this, action, Number, idField, client));

        (0, _common.extend)(_this, data);
        _this[clientKey] = client;
        return _this;
    }

    return Number;
}(_base.PlivoResource);

var LookupInterface = exports.LookupInterface = function (_PlivoResourceInterfa) {
    _inherits(LookupInterface, _PlivoResourceInterfa);

    function LookupInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, LookupInterface);

        var _this2 = _possibleConstructorReturn(this, (LookupInterface.__proto__ || Object.getPrototypeOf(LookupInterface)).call(this, action, Number, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    _createClass(LookupInterface, [{
        key: 'get',
        value: function get(number) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'carrier';

            var errors = (0, _common.validate)([{
                field: 'number',
                value: number,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }

            var params = {
                type: type,
                overrideUrl: LOOKUP_API_BASE_URL + '/' + number
            };

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', action + '/', params).then(function (response) {
                    resolve(new LookupResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return LookupInterface;
}(_base.PlivoResourceInterface);