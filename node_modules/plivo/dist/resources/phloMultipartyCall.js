'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhloMultiPartyCallInterface = exports.PhloMultiPartyCall = exports.RetrieveMultipartyCallResponse = exports.UpdateMultipartyCallResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phloMultiPartyCallMember = require('./phloMultiPartyCallMember');

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var idField = 'nodeId';

var UpdateMultipartyCallResponse = exports.UpdateMultipartyCallResponse = function UpdateMultipartyCallResponse(params) {
    _classCallCheck(this, UpdateMultipartyCallResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.error = params.error;
};

var RetrieveMultipartyCallResponse = exports.RetrieveMultipartyCallResponse = function RetrieveMultipartyCallResponse(params) {
    _classCallCheck(this, RetrieveMultipartyCallResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.nodeId = params.nodeId;
    this.phloId = params.phloId;
    this.name = params.name;
    this.nodeType = params.nodeType;
    this.createdOn = params.createdOn;
};

var PhloMultiPartyCall = exports.PhloMultiPartyCall = function (_PlivoResource) {
    _inherits(PhloMultiPartyCall, _PlivoResource);

    function PhloMultiPartyCall(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, PhloMultiPartyCall);

        var action = 'phlo/' + data.phloId + '/multi_party_call/';

        var _this = _possibleConstructorReturn(this, (PhloMultiPartyCall.__proto__ || Object.getPrototypeOf(PhloMultiPartyCall)).call(this, action, PhloMultiPartyCall, idField, client));

        (0, _common.extend)(_this, data);
        _this.action = action;
        _this.client = client;
        _this[clientKey] = client;

        // Define member getters
        var item = _this;
        _this.member = function (memberAddress) {
            var dd = new _phloMultiPartyCallMember.PhloMultiPartyCallMember(client, {
                phloId: item.phloId,
                nodeId: item.nodeId,
                memberAddress: memberAddress
            });
            return dd;
        };

        _this.member.get = function (memberAddress) {
            var dd = new _phloMultiPartyCallMember.PhloMultiPartyCallMemberInterface(client, {
                phloId: item.phloId,
                nodeId: item.nodeId,
                memberAddress: memberAddress
            });
            return dd.get(item.phloId, item.nodeId, memberAddress);
        };

        return _this;
    }

    _createClass(PhloMultiPartyCall, [{
        key: 'call',
        value: function call(triggerSource, to, role) {
            return this.update('call', triggerSource, to, role);
        }
    }, {
        key: 'warmTransfer',
        value: function warmTransfer(triggerSource, to, role) {
            return this.update('warm_transfer', triggerSource, to, role);
        }
    }, {
        key: 'coldTransfer',
        value: function coldTransfer(triggerSource, to, role) {
            return this.update('cold_transfer', triggerSource, to, role);
        }
    }, {
        key: 'abortTransfer',
        value: function abortTransfer(memberAddress) {
            return this.update('abort_transfer', null, memberAddress, null);
        }
    }, {
        key: 'update',
        value: function update(action, triggerSource, to, role) {
            // If role not specified, keep ‘agent’
            if (role === undefined || role == null) {
                role = 'agent';
            }

            var params = {
                action: action
            };

            // Url pattern for mp call update
            // https://phlorunnner.plivo.com/v1/phlo/{phlo_id}/{node_type}/{node_id} 
            var task = this.action + this.nodeId;
            if (action == 'abort_transfer') {
                task += '/members/' + to;
            } else {
                params.to = to;
                params.role = role;
                params.trigger_source = triggerSource;
            }

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', task, params).then(function (response) {
                    resolve(new UpdateMultipartyCallResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PhloMultiPartyCall;
}(_base.PlivoResource);

var PhloMultiPartyCallInterface = exports.PhloMultiPartyCallInterface = function (_PlivoResourceInterfa) {
    _inherits(PhloMultiPartyCallInterface, _PlivoResourceInterfa);

    function PhloMultiPartyCallInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, PhloMultiPartyCallInterface);

        var action = 'phlo/' + data.phloId + '/multi_party_call/';

        var _this2 = _possibleConstructorReturn(this, (PhloMultiPartyCallInterface.__proto__ || Object.getPrototypeOf(PhloMultiPartyCallInterface)).call(this, action, PhloMultiPartyCall, idField, client));

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


    _createClass(PhloMultiPartyCallInterface, [{
        key: 'get',
        value: function get(phloId, id) {
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
                phlo_id: phloId,
                node_type: 'multi_party_call',
                node_id: id
            };

            // Url pattern for getting phlo resource by id
            // https://phlorunner.plivo.com/v1/phlo/{phlo_id}
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new RetrieveMultipartyCallResponse(client, response.body));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PhloMultiPartyCallInterface;
}(_base.PlivoResourceInterface);