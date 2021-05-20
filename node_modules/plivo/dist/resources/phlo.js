"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhloInterface = exports.Phlo = exports.RetrievePHLOResponse = exports.RunPHLOResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

var _phloMultipartyCall = require("../resources/phloMultipartyCall");

var _base = require("../base");

var _common = require("../utils/common.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'phlo/';
var idField = 'phloUuid';

var RunPHLOResponse = exports.RunPHLOResponse = function RunPHLOResponse(params) {
    _classCallCheck(this, RunPHLOResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.phloId = params.phloId;
    this.message = params.message;
};

var RetrievePHLOResponse = exports.RetrievePHLOResponse = function RetrievePHLOResponse(params) {
    _classCallCheck(this, RetrievePHLOResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.phloId = params.phloId;
    this.name = params.name;
    this.createdOn = params.createdOn;
};

/**
 * Represents a Phlo
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of phlo
 */


var Phlo = exports.Phlo = function (_PlivoResource) {
    _inherits(Phlo, _PlivoResource);

    function Phlo(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Phlo);

        var _this = _possibleConstructorReturn(this, (Phlo.__proto__ || Object.getPrototypeOf(Phlo)).call(this, action, Phlo, idField, client));

        (0, _common.extend)(_this, data);
        _this.client = client;

        // Define multiparty call getters
        var item = _this;
        _this.multiPartyCall = function (nodeId) {
            var dd = new _phloMultipartyCall.PhloMultiPartyCall(client, {
                phloId: item.phloId,
                nodeId: nodeId
            });
            return dd;
        };

        _this.multiPartyCall.get = function (nodeId) {
            var dd = new _phloMultipartyCall.PhloMultiPartyCallInterface(client, {
                phloId: item.phloId,
                nodeId: nodeId
            });
            return dd.get(item.phloId, nodeId);
        };

        _this[clientKey] = client;

        return _this;
    }

    /**
     * run phlo
     * @method
     * @promise {Boolean} return true if phlo is complete
     * @fail {Error} return Error
     */


    _createClass(Phlo, [{
        key: "run",
        value: function run(params) {

            //Url for phlo running
            // https://phlorunner.plivo.com/v1/account/{AUTH_ID}/phlo/{PHLO_ID} 
            var action = 'account/' + this.authId + '/phlo/' + this.phloId;
            var client = this[clientKey];
            action = action == null ? this[actionKey] : action;

            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new RunPHLOResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return Phlo;
}(_base.PlivoResource);

/**
 * Represents a Phlo Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var PhloInterface = exports.PhloInterface = function (_PlivoResourceInterfa) {
    _inherits(PhloInterface, _PlivoResourceInterfa);

    function PhloInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, PhloInterface);

        var _this2 = _possibleConstructorReturn(this, (PhloInterface.__proto__ || Object.getPrototypeOf(PhloInterface)).call(this, action, Phlo, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * Get A Phlo Detail
     * @method
     * @param {string} id - phlo uuid to get information of.
     * @promise {object} returns Phlo Object
     * @fail {Error} returns Error
     */


    _createClass(PhloInterface, [{
        key: "get",
        value: function get(id) {
            var _this3 = this;

            //Validate id first
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }

            var params = {
                phlo_id: id
            };

            // Url pattern for getting phlo resource by id
            // https://phlorunner.plivo.com/v1/phlo/{phlo_id}
            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }

                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new RetrievePHLOResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PhloInterface;
}(_base.PlivoResourceInterface);