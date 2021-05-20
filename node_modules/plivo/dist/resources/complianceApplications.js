'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComplianceApplicationInterface = exports.ComplianceApplication = exports.UpdateComplianceApplicationResponse = exports.ListComplianceApplicationResponse = exports.CreateComplianceApplicationResponse = exports.ComplianceApplicationResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'ComplianceApplication/';
var idField = 'complianceApplicationId';

var ComplianceApplicationResponse = exports.ComplianceApplicationResponse = function ComplianceApplicationResponse(params) {
    _classCallCheck(this, ComplianceApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.complianceApplicationId = params.complianceApplicationId;
    this.alias = params.alias;
    this.status = params.status;
    this.endUserType = params.endUserType;
    this.endUserId = params.endUserId;
    this.countryIso2 = params.countryIso2;
    this.numberType = params.numberType;
    this.complianceRequirementId = params.complianceRequirementId;
    this.documents = params.documents;
    this.createdAt = params.createdAt;
};

var CreateComplianceApplicationResponse = exports.CreateComplianceApplicationResponse = function CreateComplianceApplicationResponse(params) {
    _classCallCheck(this, CreateComplianceApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.complianceApplicationId = params.complianceApplicationId;
    this.alias = params.alias;
    this.status = params.status;
    this.endUserType = params.endUserType;
    this.endUserId = params.endUserId;
    this.countryIso2 = params.countryIso2;
    this.numberType = params.numberType;
    this.message = params.message;
    this.complianceRequirementId = params.complianceRequirementId;
    this.documents = params.documents;
    this.createdAt = params.createdAt;
};

var ListComplianceApplicationResponse = exports.ListComplianceApplicationResponse = function ListComplianceApplicationResponse(params) {
    _classCallCheck(this, ListComplianceApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var UpdateComplianceApplicationResponse = exports.UpdateComplianceApplicationResponse = function UpdateComplianceApplicationResponse(params) {
    _classCallCheck(this, UpdateComplianceApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
};

var ComplianceApplication = exports.ComplianceApplication = function (_PlivoResource) {
    _inherits(ComplianceApplication, _PlivoResource);

    function ComplianceApplication(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceApplication);

        var _this = _possibleConstructorReturn(this, (ComplianceApplication.__proto__ || Object.getPrototypeOf(ComplianceApplication)).call(this, action, ComplianceApplication, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    /**
    * update ComplianceApplication
    * @method
    * @param {string} id - id to update
    * @param {object} params
    * @param {string} [params.documentIds] - Document IDs
    * @promise {object} return {@link ComplianceApplication} object if success
    * @fail {Error} return Error
    */


    _createClass(ComplianceApplication, [{
        key: 'update',
        value: function update(params, id) {
            var client = this[clientKey];
            var that = this;
            return new Promise(function (resolve, reject) {
                client('POST', action + id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    (0, _common.extend)(that, params);
                    resolve(new UpdateComplianceApplicationResponse(that));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * delete an Compliance application
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

    return ComplianceApplication;
}(_base.PlivoResource);

/**
 * Represents a Compliance Application interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ComplianceApplicationInterface = exports.ComplianceApplicationInterface = function (_PlivoResourceInterfa) {
    _inherits(ComplianceApplicationInterface, _PlivoResourceInterfa);

    function ComplianceApplicationInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ComplianceApplicationInterface);

        var _this2 = _possibleConstructorReturn(this, (ComplianceApplicationInterface.__proto__ || Object.getPrototypeOf(ComplianceApplicationInterface)).call(this, action, ComplianceApplication, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get application by given id
     * @method
     * @param {string} id - id of application
     * @promise {object} return {@link EndUser} object
     * @fail {Error} return Error
     */


    _createClass(ComplianceApplicationInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : '')).then(function (response) {
                    resolve(new ComplianceApplicationResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list all applications
         * @method
         * @param {object} params - params to list endusers
         * @param {string} [params.status] - Status of the application
         * @param {string} [params.endUserId] - End user ID related to application
         * @param {string} [params.numberType] -Number Type related to application
         * @param {integer} [params.offset] - No of value items by which results should be offset
         * @param {integer} [params.limit] - No of value items by which results should be offset
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    resolve(new ListComplianceApplicationResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create a complaince application
         * @method
         * @param {object} params
         * @param {string} [params.complianceRequirementId] - compliance requirement ID.
         * @param {string} [params.endUserId] - End user ID.
         * @param {string} [params.alias] - Alias
         * @param {string} [params.documentIds] - Document IDs
         * @param {string} [params.endUserType] - End user type
         * @param {string} [params.countryIso2] - CountryISo2
         * @param {string} [params.numberType] - Number Type
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new CreateComplianceApplicationResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * update ComplianceApplication
        * @method
        * @param {string} id - id to update
        * @param {object} params
        * @param {string} [params.documentIds] - Document IDs
        * @promise {object} return {@link ComplianceApplication} object if success
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
            return new ComplianceApplication(this[clientKey], {
                id: id
            }).update(params, id);
        }

        /**
        * delete ComplianceApplication
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
            return new ComplianceApplication(this[clientKey], {
                id: id
            }).delete();
        }

        /**
         * submit an application by given id
         * @method
         * @param {string} id - id of application
         * @fail {Error} return Error
         */

    }, {
        key: 'submit',
        value: function submit(id) {
            var _this4 = this;

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this4[idKey] + ' must be set'));
                }

                client('POST', action + (id ? id + '/Submit/' : '')).then(function (response) {
                    resolve(new ComplianceApplicationResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return ComplianceApplicationInterface;
}(_base.PlivoResourceInterface);