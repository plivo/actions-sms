'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointInterface = exports.Endpoint = exports.CreateEndpointResponse = exports.ListAllEndpointResponse = exports.RetrieveEndpointResponse = exports.UpdateEndpointResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Endpoint/';
var idField = 'endpointId';

var UpdateEndpointResponse = exports.UpdateEndpointResponse = function UpdateEndpointResponse(params) {
    _classCallCheck(this, UpdateEndpointResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
    this.alias = params.alias;
};

var RetrieveEndpointResponse = exports.RetrieveEndpointResponse = function RetrieveEndpointResponse(params) {
    _classCallCheck(this, RetrieveEndpointResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.alias = params.alias;
    this.application = params.application;
    this.endpointId = params.endpointId;
    this.password = params.password;
    this.resourceUri = params.resourceUri;
    this.sipRegistered = params.sipRegistered;
    this.sipUri = params.sipUri;
    this.subAccount = params.subAccount;
    this.username = params.username;
};

var ListAllEndpointResponse = exports.ListAllEndpointResponse = function ListAllEndpointResponse(params) {
    _classCallCheck(this, ListAllEndpointResponse);

    params = params || {};
    this.alias = params.alias;
    this.application = params.application;
    this.endpointId = params.endpointId;
    this.password = params.password;
    this.resourceUri = params.resourceUri;
    this.sipRegistered = params.sipRegistered;
    this.sipUri = params.sipUri;
    this.subAccount = params.subAccount;
    this.username = params.username;
};

var CreateEndpointResponse = exports.CreateEndpointResponse = function CreateEndpointResponse(params) {
    _classCallCheck(this, CreateEndpointResponse);

    params = params || {};
    this.alias = params.alias;
    this.apiId = params.apiId;
    this.endpointId = params.endpointId;
    this.message = params.message;
    this.username = params.username;
};

/**
* Represents a Endpoint
* @constructor
* @param {function} client - make api call
* @param {object} [data] - data of call
*/

var Endpoint = exports.Endpoint = function (_PlivoResource) {
    _inherits(Endpoint, _PlivoResource);

    function Endpoint(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Endpoint);

        var _this = _possibleConstructorReturn(this, (Endpoint.__proto__ || Object.getPrototypeOf(Endpoint)).call(this, action, Endpoint, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }

        (0, _common.extend)(_this, data);
        _this[clientKey] = client;
        return _this;
    }

    /**
     * update Endpoint
     * @method
     * @param {object} params
     * @param {string} [params.username] - username to update
     * @param {string} [params.password] - password to update
     * @param {string} [params.alias] - alias to update
     * @param {string} [params.appId] - app id to update
     * @promise {object} return {@link Endpoint} object if success
     * @fail {Error} return Error
     */


    _createClass(Endpoint, [{
        key: 'update',
        value: function update(params, id) {
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            var that = this;
            return new Promise(function (resolve, reject) {
                client('POST', action + id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    if (params.hasOwnProperty('isVoiceRequest')) {
                        delete params.isVoiceRequest;
                    }
                    (0, _common.extend)(that, params);
                    resolve(new UpdateEndpointResponse(that));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * delete Endpoint
         * @method
         * @promise {boolean} return true if success
         * @fail {Error} return Error
         */

    }, {
        key: 'delete',
        value: function _delete() {
            var params = {};
            params.isVoiceRequest = 'true';

            var client = this[clientKey];
            var id = this.id;

            return new Promise(function (resolve, reject) {
                client('DELETE', action + id + '/', params).then(function () {
                    resolve(true);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return Endpoint;
}(_base.PlivoResource);
/**
* Represents a Endpoint Interface
* @constructor
* @param {function} client - make api call
* @param {object} [data] - data of call
*/

var EndpointInterface = exports.EndpointInterface = function (_PlivoResourceInterfa) {
    _inherits(EndpointInterface, _PlivoResourceInterfa);

    function EndpointInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, EndpointInterface);

        var _this2 = _possibleConstructorReturn(this, (EndpointInterface.__proto__ || Object.getPrototypeOf(EndpointInterface)).call(this, action, Endpoint, idField, client));

        (0, _common.extend)(_this2, data);

        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * Get Endpoint by given id
     * @method
     * @param {string} id - id of endpoint
     * @promise {object} return {@link Endpoint} object if success
     * @fail {Error} return Error
     */


    _createClass(EndpointInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var params = {};
            params.isVoiceRequest = 'true';
            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new RetrieveEndpointResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'list',
        value: function list() {
            var params = {};
            params.isVoiceRequest = 'true';

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    var objects = [];
                    Object.defineProperty(objects, 'meta', {
                        value: response.body.meta,
                        enumerable: true
                    });
                    response.body.objects.forEach(function (item) {
                        objects.push(new ListAllEndpointResponse(item, client));
                    });
                    console.log(objects);
                    resolve(objects);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create Endpoint
         * @method
         * @param {string} username - username to create
         * @param {string} passwowrd - password to create
         * @param {string} alias - alias to create
         * @param {string} appId - app id to create
         * @promise {object} return {@link PlivoGenericResponse} object if success
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create(username, password, alias, appId) {
            var params = {};

            var errors = (0, _common.validate)([{
                field: 'username',
                value: username,
                validators: ['isRequired']
            }, {
                field: 'password',
                value: password,
                validators: ['isRequired']
            }, {
                field: 'alias',
                value: alias,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }

            params.username = username;
            params.password = password;
            params.alias = alias;
            if (appId) {
                params.app_id = appId;
            }
            params.isVoiceRequest = 'true';
            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new CreateEndpointResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * update Endpoint
         * @method
         * @param {string} id - id to update
         * @param {object} params
         * @param {string} [params.username] - username to update
         * @param {string} [params.password] - password to update
         * @param {string} [params.alias] - alias to update
         * @param {string} [params.appId] - app id to update
         * @promise {object} return {@link Endpoint} object if success
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
            return new Endpoint(this[clientKey], {
                id: id
            }).update(params, id);
        }

        /**
         * delete Endpoint
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
            return new Endpoint(this[clientKey], {
                id: id
            }).delete();
        }
    }]);

    return EndpointInterface;
}(_base.PlivoResourceInterface);