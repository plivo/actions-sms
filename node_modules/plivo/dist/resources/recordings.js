'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecordingInterface = exports.Recording = exports.ListRecordingResponse = exports.RetrieveRecordingResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Recording/';
var idField = 'recordingId';

var RetrieveRecordingResponse = exports.RetrieveRecordingResponse = function RetrieveRecordingResponse(params) {
    _classCallCheck(this, RetrieveRecordingResponse);

    params = params || {};
    this.addTime = params.addTime;
    this.apiId = params.apiId;
    this.callUuid = params.callUuid;
    this.conferenceName = params.conferenceName;
    this.recordingDurationMs = params.recordingDurationMs;
    this.recordingEndMs = params.recordingEndMs;
    this.recordingFormat = params.recordingFormat;
    this.recordingId = params.recordingId;
    this.recordingStartMs = params.recordingStartMs;
    this.recordingType = params.recordingType;
    this.recordingUrl = params.recordingUrl;
    this.resourceUri = params.resourceUri;
};

var ListRecordingResponse = exports.ListRecordingResponse = function ListRecordingResponse(params) {
    _classCallCheck(this, ListRecordingResponse);

    params = params || {};
    this.addTime = params.addTime;
    this.apiId = params.apiId;
    this.callUuid = params.callUuid;
    this.conferenceName = params.conferenceName;
    this.recordingDurationMs = params.recordingDurationMs;
    this.recordingEndMs = params.recordingEndMs;
    this.recordingFormat = params.recordingFormat;
    this.recordingId = params.recordingId;
    this.recordingStartMs = params.recordingStartMs;
    this.recordingType = params.recordingType;
    this.recordingUrl = params.recordingUrl;
    this.resourceUri = params.resourceUri;
};

/**
* Represents a Recording
* @constructor
* @param {function} client - make api call
* @param {object} [data] - data of call
*/


var Recording = exports.Recording = function (_PlivoResource) {
    _inherits(Recording, _PlivoResource);

    function Recording(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Recording);

        var _this = _possibleConstructorReturn(this, (Recording.__proto__ || Object.getPrototypeOf(Recording)).call(this, action, Recording, idField, client));

        _this[clientKey] = client;

        if (idField in data) {
            _this.id = data[idField];
        }
        (0, _common.extend)(_this, data);
        return _this;
    }

    /**
     * Delete recording
     * @method
     * @promise {boolean} return true if success
     * @fail {Error} return Error
     */


    _createClass(Recording, [{
        key: 'delete',
        value: function _delete(id) {
            var params = {};
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('DELETE', action + id + '/', params).then(function () {
                    resolve(true);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return Recording;
}(_base.PlivoResource);

/**
* Represents a Recording Interface
* @constructor
* @param {function} client - make api call
* @param {object} [data] - data of call
*/


var RecordingInterface = exports.RecordingInterface = function (_PlivoResourceInterfa) {
    _inherits(RecordingInterface, _PlivoResourceInterfa);

    function RecordingInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, RecordingInterface);

        var _this2 = _possibleConstructorReturn(this, (RecordingInterface.__proto__ || Object.getPrototypeOf(RecordingInterface)).call(this, action, Recording, idField, client));

        (0, _common.extend)(_this2, data);

        _this2[clientKey] = client;
        return _this2;
    }

    /**
     * Get recording by id
     * @method
     * @param {string} id - id to get recording information
     * @promise {object} return {@link Pricing} object
     * @fail {Error} return Error
     */


    _createClass(RecordingInterface, [{
        key: 'get',
        value: function get(id) {
            var _this3 = this;

            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';

            var client = this[clientKey];

            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this3[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new RetrieveRecordingResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * list recordings
         * @method
         * @param {object} params - params to list recordings
         * @param {string} [params.subaccount] - ID of the subaccount if present
         * @param {string} [params.callUuid] - Call UUID of the call to filter recordings associated with it
         * @param {string} [params.addTime] - Filter based on the timings they were added
         * @param {string} [params.limit] - Display no of results per page
         * @param {string} [params.offset] - No of value items by which results should be offset
         */

    }, {
        key: 'list',
        value: function list() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
                        objects.push(new ListRecordingResponse(item, client));
                    });
                    resolve(objects);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Delete recording by id
         * @method
         * @param {string} id - id to delete recording
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
            return new Recording(this[clientKey], {
                id: id
            }).delete(id);
        }
    }]);

    return RecordingInterface;
}(_base.PlivoResourceInterface);