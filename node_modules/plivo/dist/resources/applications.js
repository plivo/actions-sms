'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationInterface = exports.Application = exports.ListAllApplicationResponse = exports.RetrieveApplicationResponse = exports.CreateApplicationResponse = exports.UpdateApplicationResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Application/';
var idField = 'appId';

/**
 * Represents a Application
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */

var UpdateApplicationResponse = exports.UpdateApplicationResponse = function UpdateApplicationResponse(params) {
    _classCallCheck(this, UpdateApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
};

var CreateApplicationResponse = exports.CreateApplicationResponse = function CreateApplicationResponse(params) {
    _classCallCheck(this, CreateApplicationResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.appId = params.appId;
    this.message = params.message;
};

var RetrieveApplicationResponse = exports.RetrieveApplicationResponse = function RetrieveApplicationResponse(params) {
    _classCallCheck(this, RetrieveApplicationResponse);

    params = params || {};
    this.answerMethod = params.answerMethod;
    this.answerUrl = params.answerUrl;
    this.apiId = params.apiId;
    this.appId = params.appId;
    this.appName = params.appName;
    this.applicationType = params.applicationType;
    this.defaultApp = params.defaultApp;
    this.defaultEndpointApp = params.defaultEndpointApp;
    this.enabled = params.enabled;
    this.fallbackAnswerUrl = params.fallbackAnswerUrl;
    this.fallbackMethod = params.fallbackMethod;
    this.hangupMethod = params.hangupMethod;
    this.logIncomingMessage = params.logIncomingMessage;
    this.messageMethod = params.messageMethod;
    this.resourceUri = params.resourceUri;
    this.sipUri = params.sipUri;
    this.subAccount = params.subAccount;
};

var ListAllApplicationResponse = exports.ListAllApplicationResponse = function ListAllApplicationResponse(params) {
    _classCallCheck(this, ListAllApplicationResponse);

    params = params || {};
    this.answerMethod = params.answerMethod;
    this.answerUrl = params.answerUrl;
    this.apiId = params.apiId;
    this.appId = params.appId;
    this.appName = params.appName;
    this.applicationType = params.applicationType;
    this.defaultApp = params.defaultApp;
    this.defaultEndpointApp = params.defaultEndpointApp;
    this.enabled = params.enabled;
    this.fallbackAnswerUrl = params.fallbackAnswerUrl;
    this.fallbackMethod = params.fallbackMethod;
    this.hangupMethod = params.hangupMethod;
    this.logIncomingMessage = params.logIncomingMessage;
    this.messageMethod = params.messageMethod;
    this.resourceUri = params.resourceUri;
    this.sipUri = params.sipUri;
    this.subAccount = params.subAccount;
};

var Application = exports.Application = function (_PlivoResource) {
    _inherits(Application, _PlivoResource);

    function Application(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Application);

        var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, action, Application, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }
        _this[clientKey] = client;
        (0, _common.extend)(_this, data);
        return _this;
    }

    /**
     * update application
     * @method
     * @param {object} params - to update application
     * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
     * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
     * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
     * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
     * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
     * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
     * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
     * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
     * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
     * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
     * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
     * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.
      * @promise {object} return {@link Application} object
     * @fail {Error} return Error
     */


    _createClass(Application, [{
        key: 'update',
        value: function update(params) {
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            var that = this;
            return new Promise(function (resolve, reject) {
                client('POST', action + that.id + '/', params).then(function (response) {
                    (0, _common.extend)(that, response.body);
                    if (params.hasOwnProperty('isVoiceRequest')) {
                        delete params.isVoiceRequest;
                    }
                    (0, _common.extend)(that, params);
                    resolve(new UpdateApplicationResponse(that));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * delete application
         * @method
         * @param {object} params - params to delete application
         * @param {boolean} [params.cascade] - delete associated endpoints
         * @param {string} [params.newEndpointApplication] - link associated endpoints with app
         * @promise {object} return true on success
         * @fail {Error} return Error
         */

    }, {
        key: 'delete',
        value: function _delete(params, id) {
            var client = this[clientKey];
            params.isVoiceRequest = 'true';
            return new Promise(function (resolve, reject) {
                client('DELETE', action + id + '/', params).then(function () {
                    resolve(true);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return Application;
}(_base.PlivoResource);

/**
 * Represents a Application interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ApplicationInterface = exports.ApplicationInterface = function (_PlivoResourceInterfa) {
    _inherits(ApplicationInterface, _PlivoResourceInterfa);

    function ApplicationInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ApplicationInterface);

        var _this2 = _possibleConstructorReturn(this, (ApplicationInterface.__proto__ || Object.getPrototypeOf(ApplicationInterface)).call(this, action, Application, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * get application by given id
     * @method
     * @param {string} id - id of application
     * @promise {object} return {@link Application} object
     * @fail {Error} return Error
     */


    _createClass(ApplicationInterface, [{
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
                    resolve(new RetrieveApplicationResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list applications
         * @method
         * @param {object} params - params to list applications
         * @param {string} [params.subaccount] - ID of the subaccount if present
         * @param {integer} [params.limit] - To display no of results per page
         * @param {integer} [params.offset] - No of value items by which results should be offset
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var client = this[clientKey];
            params.isVoiceRequest = true;
            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    var objects = [];
                    Object.defineProperty(objects, 'meta', {
                        value: response.body.meta,
                        enumerable: true
                    });
                    response.body.objects.forEach(function (item) {
                        objects.push(new ListAllApplicationResponse(item, client));
                    });
                    resolve(objects);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * create Application
         * @method
         * @param {string} appName - name of application
         * @param {object} params - params to create application
         * @param {string} [params.answerUrl] - answer url
         * @param {string} [params.appName] The name of your application
         * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
         * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
         * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
         * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
         * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
         * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
         * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
         * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
         * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
         * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
         * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
         * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.
         * @promise {object} return {@link PlivoGenericResponse} object
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create(appName) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            var errors = (0, _common.validate)([{
                field: 'app_name',
                value: appName,
                validators: ['isRequired', 'isString']
            }]);

            if (errors) {
                return errors;
            }
            params.app_name = appName;
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                console.log(action, params);
                client('POST', action, params).then(function (response) {
                    resolve(new CreateApplicationResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * update Application
         * @method
         * @param {string} id - id of application
         * @param {object} params - to update application
         * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
         * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
         * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
         * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
         * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
         * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
         * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
         * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
         * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
         * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
         * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
         * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.
         * @promise {object} return {@link Application} object
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
            return new Application(this[clientKey], {
                id: id
            }).update(params);
        }

        /**
         * delete Application
         * @method
         * @param {string} id - id of application
         * @param {object} params - params to delete application
         * @param {boolean} [params.cascade] - delete associated endpoints
         * @param {string} [params.newEndpointApplication] - link associated endpoints with app
         * @promise {object} return true on success
         * @fail {Error} return Error
         */

    }, {
        key: 'delete',
        value: function _delete(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (typeof params.cascade === 'boolean') {
                params.cascade = params.cascade.toString();
            }
            return new Application(this[clientKey], {
                id: id
            }).delete(params, id);
        }
    }]);

    return ApplicationInterface;
}(_base.PlivoResourceInterface);