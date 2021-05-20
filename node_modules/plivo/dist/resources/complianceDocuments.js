'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComplianceDocumentInterface = exports.ComplianceDocument = exports.UpdateComplianceDocumentResponse = exports.ListComplianceDocumentsResponse = exports.CreateComplianceDocumentResponse = exports.ComplianceDocumentResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'ComplianceDocument/';
var idField = 'complianceDocumentId';

var ComplianceDocumentResponse = exports.ComplianceDocumentResponse = function ComplianceDocumentResponse(params) {
    _classCallCheck(this, ComplianceDocumentResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.documentTypeId = params.documentTypeId;
    this.documentId = params.documentId;
    this.endUserId = params.endUserId;
    this.alias = params.alias;
    this.metaInformation = params.metaInformation;
    this.fileName = params.fileName, this.createdAt = params.createdAt;
};

var CreateComplianceDocumentResponse = exports.CreateComplianceDocumentResponse = function CreateComplianceDocumentResponse(params) {
    _classCallCheck(this, CreateComplianceDocumentResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.documentTypeId = params.documentTypeId;
    this.documentId = params.documentId;
    this.endUserId = params.endUserId;
    this.alias = params.alias;
    this.message = params.message;
    this.metaInformation = params.metaInformation;
    this.fileName = params.fileName, this.createdAt = params.createdAt;
};

var ListComplianceDocumentsResponse = exports.ListComplianceDocumentsResponse = function ListComplianceDocumentsResponse(params) {
    _classCallCheck(this, ListComplianceDocumentsResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var UpdateComplianceDocumentResponse = exports.UpdateComplianceDocumentResponse = function UpdateComplianceDocumentResponse(params) {
    _classCallCheck(this, UpdateComplianceDocumentResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
};

var ComplianceDocument = exports.ComplianceDocument = function (_PlivoResource) {
    _inherits(ComplianceDocument, _PlivoResource);

    function ComplianceDocument(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceDocument);

        var _this = _possibleConstructorReturn(this, (ComplianceDocument.__proto__ || Object.getPrototypeOf(ComplianceDocument)).call(this, action, ComplianceDocument, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    /**
    * update Compliance Document
    * @method
    * @param {string} id - compliance document id of the document.
    * @param {object} params - optional params array of updated values
    * @promise {object} return {@link ComplianceDocument} object if success
    * @fail {Error} return Error
    */


    _createClass(ComplianceDocument, [{
        key: 'update',
        value: function update(params, id) {
            var client = this[clientKey];
            var that = this;
            return new Promise(function (resolve, reject) {
                if (params.file != 'undefined') {
                    params.multipart = true;
                }

                client('POST', action + id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    (0, _common.extend)(that, params);
                    resolve(new UpdateComplianceDocumentResponse(that));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * delete an Compliance Document
        * @method
        * @param {string} id - id to delete
        * @promise {boolean} return true if success
        * @fail {Error} return Error
        */

    }, {
        key: 'delete',
        value: function _delete() {
            var client = this[clientKey];
            var id = this.id;
            return new Promise(function (resolve, reject) {
                client('DELETE', action + id + '/').then(function () {
                    resolve(true);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return ComplianceDocument;
}(_base.PlivoResource);

/**
 * Represents a Compliance Application interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ComplianceDocumentInterface = exports.ComplianceDocumentInterface = function (_PlivoResourceInterfa) {
    _inherits(ComplianceDocumentInterface, _PlivoResourceInterfa);

    function ComplianceDocumentInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceDocumentInterface);

        var _this2 = _possibleConstructorReturn(this, (ComplianceDocumentInterface.__proto__ || Object.getPrototypeOf(ComplianceDocumentInterface)).call(this, action, ComplianceDocument, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get compliance document by given id
     * @method
     * @param {string} id - id of the document
     * @promise {object} return {@link ComplianceDocument} object
     * @fail {Error} return Error
     */


    _createClass(ComplianceDocumentInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : '')).then(function (response) {
                    var object = new ComplianceDocumentResponse(response.body, client);
                    Object.keys(object).forEach(function (key) {
                        return object[key] === undefined && delete object[key];
                    });
                    resolve(object);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list all documents
         * @method
         * @param {object} params - params containing options to list compliance documents by.
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    resolve(new ListComplianceDocumentsResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create a complaince document
         * @method
         * @param {object} params
         * @param {string} [params.complianceRequirementId] - compliance requirement ID.
         * @param {string} [params.endUserId] - End user ID.
         * @param {string} [params.alias] - Alias
         * @param {string} [params.documentTypeId] - Document Type ID
         * @param {string} [params.file] - File array of the files to be uploaded
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            var errors = (0, _common.validate)([{ field: 'endUserId', value: params.endUserId, validators: ['isRequired', 'isString'] }]);

            errors = (0, _common.validate)([{ field: 'documentTypeId', value: params.documentTypeId, validators: ['isRequired', 'isString'] }]);

            errors = (0, _common.validate)([{ field: 'alias', value: params.alias, validators: ['isRequired', 'isString'] }]);

            if (errors) {
                return errors;
            }

            return new Promise(function (resolve, reject) {
                params.multipart = true;
                client('POST', action, params).then(function (response) {
                    var object = new CreateComplianceDocumentResponse(response.body, idField);
                    Object.keys(object).forEach(function (key) {
                        return object[key] === undefined && delete object[key];
                    });
                    resolve(object);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * update Compliance Document
        * @method
        * @param {string} id - compliance document id of the document.
        * @param {object} params - optional params array of updated values
        * @promise {object} return {@link ComplianceDocument} object if success
        * @fail {Error} return Error
        */

    }, {
        key: 'update',
        value: function update(id, params) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new ComplianceDocument(this[clientKey], {
                id: id
            }).update(params, id);
        }

        /**
        * delete a Compliance Document
        * @method
        * @param {string} id - id to delete
        * @promise {boolean} return true if success
        * @fail {Error} return Error
        */

    }, {
        key: 'delete',
        value: function _delete(id) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new ComplianceDocument(this[clientKey], {
                id: id
            }).delete();
        }
    }]);

    return ComplianceDocumentInterface;
}(_base.PlivoResourceInterface);