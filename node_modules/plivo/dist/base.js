'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlivoResourceInterface = exports.PlivoSecondaryResource = exports.PlivoResource = exports.PlivoGenericResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('./utils/common.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actionKey = Symbol('api action');
var klassKey = Symbol('constructor');
var idKey = Symbol('id filed');
var clientKey = Symbol('make api call');
var secondaryActionKey = Symbol('api action');
var secondaryKlassKey = Symbol('constructor');
var secondaryIdKey = Symbol('id filed');

var PlivoGenericResponse = exports.PlivoGenericResponse = function PlivoGenericResponse(params, idString) {
    _classCallCheck(this, PlivoGenericResponse);

    params = params || {};
    if (typeof idString !== 'undefined' && idString in params) {
        this.id = params[idString];
    } else if ('request_uuid' in params) {
        this.id = params.request_uuid;
    }
    (0, _common.extend)(this, params);
};

var PlivoResource = exports.PlivoResource = function () {
    function PlivoResource(action, klass, idField, request) {
        _classCallCheck(this, PlivoResource);

        this[actionKey] = action;
        this[klassKey] = klass;
        this[idKey] = idField;
        this[clientKey] = request;
    }

    _createClass(PlivoResource, [{
        key: 'update',
        value: function update(params, id) {
            var client = this[clientKey];
            var action = this[actionKey];
            var that = this;
            id = typeof id !== 'undefined' ? id : that.id;

            return new Promise(function (resolve, reject) {
                client('POST', action + id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    if (params.hasOwnProperty('isVoiceRequest')) {
                        delete params.isVoiceRequest;
                    }
                    (0, _common.extend)(that, params);
                    resolve(that);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'delete',
        value: function _delete(params) {
            var client = this[clientKey];
            var action = this[actionKey];
            var id = this.id;

            return new Promise(function (resolve, reject) {
                client('DELETE', action + id + '/', params).then(function () {
                    resolve(true);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'executeAction',
        value: function executeAction() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var action = arguments[3];

            var client = this[clientKey];
            action = action == null ? this[actionKey] : action;
            var idField = this[idKey];

            return new Promise(function (resolve, reject) {
                client(method, action + task, params).then(function (response) {
                    resolve(new PlivoGenericResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'customexecuteAction',
        value: function customexecuteAction(url) {
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var client = this[clientKey];
            var idField = this[idKey];
            return new Promise(function (resolve, reject) {
                client(method, url, params).then(function (response) {
                    resolve(new PlivoGenericResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'customexecuteGetNumberAction',
        value: function customexecuteGetNumberAction(url) {
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var client = this[clientKey];
            var idField = this[idKey];
            var number = "";
            var promise = client(method, url, params).then(function (response) {
                number = response.body.objects[0].number;
                return number;
            }).catch(function (error) {
                console.log(error);
                return error;
            });
            return promise;
        }
    }, {
        key: 'getMetaResponse',
        value: function getMetaResponse(url) {
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var client = this[clientKey];
            var idField = this[idKey];
            var count = 0;
            return new Promise(function (resolve, reject) {
                client(method, url, params).then(function (response) {
                    count = response.body.meta.totalCount;
                    resolve(count);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PlivoResource;
}();

var PlivoSecondaryResource = exports.PlivoSecondaryResource = function () {
    function PlivoSecondaryResource(action, klass, idField, secondaryAction, secondaryKlass, secondaryIdField, request) {
        _classCallCheck(this, PlivoSecondaryResource);

        this[actionKey] = action;
        this[klassKey] = klass;
        this[idKey] = idField;
        this[clientKey] = request;
        this[secondaryActionKey] = secondaryAction;
        this[secondaryKlassKey] = secondaryKlass;
        this[secondaryIdKey] = secondaryIdField;
    }

    _createClass(PlivoSecondaryResource, [{
        key: 'executeAction',
        value: function executeAction() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var secondaryTask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var action = arguments[4];
            var secondaryAction = arguments[5];

            var client = this[clientKey];
            action = action == null ? this[actionKey] : action;
            var idField = this[idKey];
            secondaryAction = secondaryAction == null ? this[secondaryActionKey] : secondaryAction;
            var secondaryIdField = this[secondaryIdKey];

            return new Promise(function (resolve, reject) {
                client(method, action + task + '/' + secondaryAction + secondaryTask + '/', params).then(function (response) {
                    resolve(new PlivoGenericResponse(response.body, secondaryIdField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PlivoSecondaryResource;
}();

var PlivoResourceInterface = exports.PlivoResourceInterface = function () {
    function PlivoResourceInterface(action, klass, idField, request) {
        _classCallCheck(this, PlivoResourceInterface);

        this[actionKey] = action;
        this[klassKey] = klass;
        this[idKey] = idField;
        this[clientKey] = request;
    }

    _createClass(PlivoResourceInterface, [{
        key: 'get',
        value: function get(id) {
            var _this = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var client = this[clientKey];
            var action = this[actionKey];
            var Klass = this[klassKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this[idKey] + ' must be set'));
                }

                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new Klass(client, response.body));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'list',
        value: function list(params) {
            var client = this[clientKey];
            var action = this[actionKey];
            var Klass = this[klassKey];

            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    var objects = [];
                    Object.defineProperty(objects, 'meta', {
                        value: response.body.meta,
                        enumerable: true
                    });
                    response.body.objects.forEach(function (item) {
                        objects.push(new Klass(client, item));
                    });
                    resolve(objects);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'create',
        value: function create(params) {
            var client = this[clientKey];
            var idField = this[idKey];
            var action = this[actionKey] + (this.id ? this.id + '/' : '');

            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new PlivoGenericResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PlivoResourceInterface;
}();