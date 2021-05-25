'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComplianceDocumentTypeInterface = exports.ComplianceDocumentType = exports.ListComplianceDocumentTypeResponse = exports.ComplianceDocumentTypeResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'ComplianceDocumentType/';
var idField = 'documentTypeID';

var ComplianceDocumentTypeResponse = exports.ComplianceDocumentTypeResponse = function ComplianceDocumentTypeResponse(params) {
    _classCallCheck(this, ComplianceDocumentTypeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.documentTypeId = params.documentTypeId;
    this.documentName = params.documentName;
    this.description = params.description;
    this.information = params.information;
    this.proofRequired = params.proofRequired;
    this.createdAt = params.createdAt;
};

var ListComplianceDocumentTypeResponse = exports.ListComplianceDocumentTypeResponse = function ListComplianceDocumentTypeResponse(params) {
    _classCallCheck(this, ListComplianceDocumentTypeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var ComplianceDocumentType = exports.ComplianceDocumentType = function (_PlivoResource) {
    _inherits(ComplianceDocumentType, _PlivoResource);

    function ComplianceDocumentType(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceDocumentType);

        var _this = _possibleConstructorReturn(this, (ComplianceDocumentType.__proto__ || Object.getPrototypeOf(ComplianceDocumentType)).call(this, action, ComplianceDocumentType, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    return ComplianceDocumentType;
}(_base.PlivoResource);

/**
 * Represents a Compliance Document Type interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ComplianceDocumentTypeInterface = exports.ComplianceDocumentTypeInterface = function (_PlivoResourceInterfa) {
    _inherits(ComplianceDocumentTypeInterface, _PlivoResourceInterfa);

    function ComplianceDocumentTypeInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceDocumentTypeInterface);

        var _this2 = _possibleConstructorReturn(this, (ComplianceDocumentTypeInterface.__proto__ || Object.getPrototypeOf(ComplianceDocumentTypeInterface)).call(this, action, ComplianceDocumentType, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get compliance document types by id
     * @method
     * @param {string} id - id of the compliane document type.
     * @promise {object} return {@link ComplianceDocumentType} object
     * @fail {Error} return Error
     */


    _createClass(ComplianceDocumentTypeInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var params = {};
            params.isVoiceRequest = 'false';
            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }

                client('GET', action + (id ? id + '/' : '')).then(function (response) {
                    resolve(new ComplianceDocumentTypeResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list compliance document types
         * @method
         * @param {object} params - params to list endusers
         * @param {string} [params.documentTypeID] - Document Type ID of the document id.
         * @param {string} [params.documentName] - Document name of the document if present.
         * @param {string} [params.description] - Description of the document type.
         * @param {string} [params.information] - Information about the document type.
         * @param {string} [params.proofRequired] - Proofs required for the document.
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    resolve(new ListComplianceDocumentTypeResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return ComplianceDocumentTypeInterface;
}(_base.PlivoResourceInterface);