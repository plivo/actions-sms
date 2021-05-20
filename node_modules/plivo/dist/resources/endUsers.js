'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndUserInterface = exports.EndUser = exports.UpdateEndUsersResponse = exports.ListEndUsersResponse = exports.CreateEndUsersResponse = exports.EndUsersResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'EndUser/';
var idField = 'endUserId';

var EndUsersResponse = exports.EndUsersResponse = function EndUsersResponse(params) {
    _classCallCheck(this, EndUsersResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.endUserId = params.endUserId;
    this.endUserType = params.endUserType;
    this.name = params.name;
    this.lastName = params.lastName;
    this.createdAt = params.createdAt;
};

var CreateEndUsersResponse = exports.CreateEndUsersResponse = function CreateEndUsersResponse(params) {
    _classCallCheck(this, CreateEndUsersResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.endUserId = params.endUserId;
    this.endUserType = params.endUserType;
    this.name = params.name;
    this.lastName = params.lastName;
    this.message = params.message;
    this.createdAt = params.createdAt;
};

var ListEndUsersResponse = exports.ListEndUsersResponse = function ListEndUsersResponse(params) {
    _classCallCheck(this, ListEndUsersResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var UpdateEndUsersResponse = exports.UpdateEndUsersResponse = function UpdateEndUsersResponse(params) {
    _classCallCheck(this, UpdateEndUsersResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
};

var EndUser = exports.EndUser = function (_PlivoResource) {
    _inherits(EndUser, _PlivoResource);

    function EndUser(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, EndUser);

        var _this = _possibleConstructorReturn(this, (EndUser.__proto__ || Object.getPrototypeOf(EndUser)).call(this, action, EndUser, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    /**
     * update end user
     * @method
     * @param {object} params - to update end user
     * @param {string} [params.name] - Name of the endUser if present.
     * @param {string} [params.last_name] - Last name of the endUser if present.
     * @param {string} [params.end_user_type] - Type of the end user.
     * @fail {Error} return Error
     */


    _createClass(EndUser, [{
        key: 'update',
        value: function update(params, id) {
            var client = this[clientKey];
            var that = this;

            return new Promise(function (resolve, reject) {
                client('POST', action + id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    (0, _common.extend)(that, params);
                    resolve(new UpdateEndUsersResponse(that));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * delete an EndUser
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

    return EndUser;
}(_base.PlivoResource);

/**
 * Represents a End Users interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var EndUserInterface = exports.EndUserInterface = function (_PlivoResourceInterfa) {
    _inherits(EndUserInterface, _PlivoResourceInterfa);

    function EndUserInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, EndUserInterface);

        var _this2 = _possibleConstructorReturn(this, (EndUserInterface.__proto__ || Object.getPrototypeOf(EndUserInterface)).call(this, action, EndUser, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get an enduser by given id
     * @method
     * @param {string} id - id of the endUser
     * @promise {object} return {@link EndUser} object
     * @fail {Error} return Error
     */


    _createClass(EndUserInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var errors = (0, _common.validate)([{ field: 'id', value: id, validators: ['isRequired'] }]);

            if (errors) {
                return errors;
            }

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : '')).then(function (response) {
                    resolve(new EndUsersResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list EndUsers
         * @method
         * @param {object} params - params to list endusers
         * @param {string} [params.name] - Name of the endUser, if present.
         * @param {string} [params.lastName] - Last name of the endUser, if present.
         * @param {string} [params.endUserType] - Type of an end user.
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
                    resolve(new ListEndUsersResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create end user
         * @method
         * @param {object} params - to update end user
         * @param {string} [params.name] - Name of the endUser if present.
         * @param {string} [params.lastName] - Last name of the endUser if present.
         * @param {string} [params.endUserType] - Type of the end user.
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new CreateEndUsersResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
        * update end user
        * @method
        * @param {object} params - to update end user
        * @param {string} [params.name] - Name of the endUser if present.
        * @param {string} [params.lastName] - Last name of the endUser if present.
        * @param {string} [params.endUserType] - Type of the end user.
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

            return new EndUser(this[clientKey], {
                id: id
            }).update(params, id);
        }

        /**
        * delete EndUser
        * @method
        * @param {string} id - id to delete an enduser with
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

            return new EndUser(this[clientKey], {
                id: id
            }).delete();
        }
    }]);

    return EndUserInterface;
}(_base.PlivoResourceInterface);