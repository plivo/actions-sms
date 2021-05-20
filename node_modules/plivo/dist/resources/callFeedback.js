'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallFeedbackInterface = exports.CallFeedback = exports.CallFeedbackResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _base = require('../base');

var _common = require('../utils/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CallFeedbackResponse = exports.CallFeedbackResponse = function CallFeedbackResponse(params) {
    _classCallCheck(this, CallFeedbackResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
    this.status = params.status;
};

var clientKey = Symbol();
var action = 'Call/';
var idField = 'callUuid';
var CALLINSIGHTS_BASE_URL = 'https://stats.plivo.com/';

var CallFeedback = exports.CallFeedback = function (_PlivoResource) {
    _inherits(CallFeedback, _PlivoResource);

    function CallFeedback(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, CallFeedback);

        var _this = _possibleConstructorReturn(this, (CallFeedback.__proto__ || Object.getPrototypeOf(CallFeedback)).call(this, action, Call, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }

        (0, _common.extend)(_this, data);
        _this[clientKey] = client;
        return _this;
    }

    return CallFeedback;
}(_base.PlivoResource);

/**
 * Represents a CallFeedback Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var CallFeedbackInterface = exports.CallFeedbackInterface = function (_PlivoResourceInterfa) {
    _inherits(CallFeedbackInterface, _PlivoResourceInterfa);

    function CallFeedbackInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, CallFeedbackInterface);

        var _this2 = _possibleConstructorReturn(this, (CallFeedbackInterface.__proto__ || Object.getPrototypeOf(CallFeedbackInterface)).call(this, action, CallFeedback, idField, client));

        (0, _common.extend)(_this2, data);

        _this2[clientKey] = client;
        return _this2;
    }

    _createClass(CallFeedbackInterface, [{
        key: 'create',
        value: function create(callUUID, rating) {
            var issues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var notes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

            var errors = (0, _common.validate)([{
                field: 'callUUId',
                value: callUUID,
                validators: ['isRequired']
            }, {
                field: 'rating',
                value: rating,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }

            var params = {};
            params.rating = rating;
            if (issues.length > 0) {
                params.issues = issues;
            }
            if (notes.length > 0) {
                params.notes = notes;
            }
            params.isCallInsightsRequest = "";
            params.CallInsightsBaseUrl = CALLINSIGHTS_BASE_URL;
            params.CallInsightsRequestPath = 'v1/Call/' + callUUID + '/Feedback/';

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new CallFeedbackResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return CallFeedbackInterface;
}(_base.PlivoResourceInterface);