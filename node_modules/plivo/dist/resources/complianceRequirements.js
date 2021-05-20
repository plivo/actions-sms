'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComplianceRequirementInterface = exports.ComplianceRequirement = exports.ComplianceRequirementResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'ComplianceRequirement/';
var idField = 'ComplianceRequirementId';

var ComplianceRequirementResponse = exports.ComplianceRequirementResponse = function ComplianceRequirementResponse(params) {
    _classCallCheck(this, ComplianceRequirementResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.complianceRequirementId = params.complianceRequirementId;
    this.countryIso2 = params.countryIso2;
    this.numberType = params.numberType;
    this.endUserType = params.endUserType;
    this.acceptableDocumentTypes = params.acceptableDocumentTypes;
};

var ComplianceRequirement = exports.ComplianceRequirement = function (_PlivoResource) {
    _inherits(ComplianceRequirement, _PlivoResource);

    function ComplianceRequirement(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceRequirement);

        var _this = _possibleConstructorReturn(this, (ComplianceRequirement.__proto__ || Object.getPrototypeOf(ComplianceRequirement)).call(this, action, ComplianceRequirement, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    return ComplianceRequirement;
}(_base.PlivoResource);

/**
 * Represents a Compliance Requirement
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ComplianceRequirementInterface = exports.ComplianceRequirementInterface = function (_PlivoResourceInterfa) {
    _inherits(ComplianceRequirementInterface, _PlivoResourceInterfa);

    function ComplianceRequirementInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceRequirementInterface);

        var _this2 = _possibleConstructorReturn(this, (ComplianceRequirementInterface.__proto__ || Object.getPrototypeOf(ComplianceRequirementInterface)).call(this, action, ComplianceRequirement, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get compliance requirement by given id
     * @method
     * @param {string} id - id of the compliance requirement
     * @promise {object} return {@link ComplianceRequirement} object
     * @fail {Error} return Error
     */


    _createClass(ComplianceRequirementInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : '')).then(function (response) {
                    resolve(new ComplianceRequirementResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list compliance requirements
         * @method
         * @param {object} params - params to list endusers
         * @param {string} [params.countryIso2] - Document Type ID of the document id.
         * @param {string} [params.numberType] - Document name of the document if present.
         * @param {string} [params.phoneNumber] - Description of the document type.
         * @param {string} [params.endUserType] - Information about the document type.
         * A combination of countryIso2, numberType, endUserType OR
         * phoneNumber, endUserType can be used to fetch compliance requirements.
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    resolve(new ComplianceRequirementResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return ComplianceRequirementInterface;
}(_base.PlivoResourceInterface);