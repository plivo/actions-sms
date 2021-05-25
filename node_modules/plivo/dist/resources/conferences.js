'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConferenceInterface = exports.Conference = exports.DeafMemberResponse = exports.PlayAudioMemberResponse = exports.SpeakMemberResponse = exports.ListAllConferenceResponse = exports.RetrieveConferenceResponse = exports.StartRecordingConferenceResponse = exports.MuteMemberResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Conference/';
var idField = 'conferenceName';

/**
 * Represents a Conference
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */

var MuteMemberResponse = exports.MuteMemberResponse = function MuteMemberResponse(params) {
    _classCallCheck(this, MuteMemberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.memberId = params.memberId;
    this.message = params.message;
};

var StartRecordingConferenceResponse = exports.StartRecordingConferenceResponse = function StartRecordingConferenceResponse(params) {
    _classCallCheck(this, StartRecordingConferenceResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.message = params.message;
    this.recordingId = params.recordingId;
    this.url = params.url;
};

var RetrieveConferenceResponse = exports.RetrieveConferenceResponse = function RetrieveConferenceResponse(params) {
    _classCallCheck(this, RetrieveConferenceResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.conferenceMemberCount = params.conferenceMemberCount;
    this.conferenceName = params.conferenceName;
    this.conferenceRunTime = params.conferenceRunTime;
    this.members = params.members;
};

var ListAllConferenceResponse = exports.ListAllConferenceResponse = function ListAllConferenceResponse(params) {
    _classCallCheck(this, ListAllConferenceResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.conferences = params.conferences;
};

var SpeakMemberResponse = exports.SpeakMemberResponse = function SpeakMemberResponse(params) {
    _classCallCheck(this, SpeakMemberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.memberId = params.memberId;
    this.message = params.message;
};

var PlayAudioMemberResponse = exports.PlayAudioMemberResponse = function PlayAudioMemberResponse(params) {
    _classCallCheck(this, PlayAudioMemberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.memberId = params.memberId;
    this.message = params.message;
};

var DeafMemberResponse = exports.DeafMemberResponse = function DeafMemberResponse(params) {
    _classCallCheck(this, DeafMemberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.memberId = params.memberId;
    this.message = params.message;
};

var Conference = exports.Conference = function (_PlivoResource) {
    _inherits(Conference, _PlivoResource);

    function Conference(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Conference);

        var _this = _possibleConstructorReturn(this, (Conference.__proto__ || Object.getPrototypeOf(Conference)).call(this, action, Conference, idField, client));

        if (idField in data) {
            _this.id = data[idField];
        }

        (0, _common.extend)(_this, data);
        _this[clientKey] = client;
        return _this;
    }

    /**
     * hangup conference
     * @method
     * @promise {Boolean} return true if call hung up
     * @fail {Error} return Error
     */


    _createClass(Conference, [{
        key: 'hangup',
        value: function hangup() {
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'delete', this).call(this, params);
        }

        /**
         * hangup member from conference
         * @method
         * @param {string} memberId - id of member to be hangup
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'hangupMember',
        value: function hangupMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/', 'DELETE', params);
        }

        /**
         * kick member from conference
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'kickMember',
        value: function kickMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/Kick/', 'POST', params);
        }

        /**
         * mute member from conference
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'muteMember',
        value: function muteMember(memberId) {
            var _this2 = this;

            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action + _this2.id + '/Member/' + memberId + '/Mute/', params).then(function (response) {
                    resolve(new MuteMemberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * unmute member from conference
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'unmuteMember',
        value: function unmuteMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/Mute/', 'DELETE', params);
        }

        /**
         * deaf member from conference
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'deafMember',
        value: function deafMember(memberId) {
            var _this3 = this;

            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action + _this3.id + '/Member/' + memberId + '/Deaf/', params).then(function (response) {
                    resolve(new DeafMemberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * undeaf member from conference
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'undeafMember',
        value: function undeafMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/Deaf/', 'DELETE', params);
        }

        /**
         * play audio to member
         * @method
         * @param {string} memberId - id of member
         * @param {string} url - url for audio
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'playAudioToMember',
        value: function playAudioToMember(memberId, url) {
            var _this4 = this;

            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }, {
                field: 'url',
                value: url,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {
                url: url
            };
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action + _this4.id + '/Member/' + memberId + '/Play/', params).then(function (response) {
                    resolve(new PlayAudioMemberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * stop playing audio to member
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopPlayingAudioToMember',
        value: function stopPlayingAudioToMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/Play/', 'DELETE', params);
        }

        /**
         * speak text to member
         * @method
         * @param {string} memberId - id of member
         * @param {string} text - text to be speak to member
         * @param {object} optionalParams - optionalPrams to speak text
         * @param {string} [optionalParams.voice] The voice to be used. Can be MAN or WOMAN. Defaults to WOMAN.
         * @param {string} [optionalParams.language] The language to be used. Defaults to en-US.
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'speakTextToMember',
        value: function speakTextToMember(memberId, text, optionalParams) {
            var _this5 = this;

            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }, {
                field: 'text',
                value: text,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = optionalParams || {};
            params.text = text;
            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action + _this5.id + '/Member/' + memberId + '/Speak/', params).then(function (response) {
                    resolve(new SpeakMemberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * stop speaking text to member
         * @method
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopSpeakingTextToMember',
        value: function stopSpeakingTextToMember(memberId) {
            var errors = (0, _common.validate)([{
                field: 'member_id',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Member/' + memberId + '/Speak/', 'DELETE');
        }

        /**
         * Record conference
         * @method
         * @param {object} params - optional params to record conference
         * @param {string} [params.fileFormat] The file format of the record can be of mp3 or wav format. Defaults to mp3 format.
         * @param {string} [params.transcriptionType] The type of transcription required. The following values are allowed:
         * - auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes.
         * - hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes.
         * @param {string} [params.transcriptionUrl] The URL where the transcription is available.
         * @param {string} [params.transcriptionMethod] The method used to invoke the transcription_url. Defaults to POST.
         * @param {string} [params.callbackUrl] The URL invoked by the API when the recording ends.
         * @param {string} [params.callbackMethod] The method which is used to invoke the callback_url URL. Defaults to POST.
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'record',
        value: function record(params) {
            return this.startRecording(params);
        }

        /**
         * Record conference
         * @method
         * @param {object} params - optional params to record conference
         * @param {string} [params.fileFormat] The file format of the record can be of mp3 or wav format. Defaults to mp3 format.
         * @param {string} [params.transcriptionType] The type of transcription required. The following values are allowed:
         * - auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes.
         * - hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes.
         * @param {string} [params.transcriptionUrl] The URL where the transcription is available.
         * @param {string} [params.transcriptionMethod] The method used to invoke the transcription_url. Defaults to POST.
         * @param {string} [params.callbackUrl] The URL invoked by the API when the recording ends.
         * @param {string} [params.callbackMethod] The method which is used to invoke the callback_url URL. Defaults to POST.
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'startRecording',
        value: function startRecording() {
            var _this6 = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            params.isVoiceRequest = 'true';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action + _this6.id + '/Record/', params).then(function (response) {
                    resolve(new StartRecordingConferenceResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * stop recording conference
         * @method
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopRecording',
        value: function stopRecording() {
            var params = {};
            params.isVoiceRequest = 'true';
            return _get(Conference.prototype.__proto__ || Object.getPrototypeOf(Conference.prototype), 'executeAction', this).call(this, this.id + '/Record/', 'DELETE', params);
        }
    }]);

    return Conference;
}(_base.PlivoResource);

/**
 * Represents a Conference Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ConferenceInterface = exports.ConferenceInterface = function (_PlivoResourceInterfa) {
    _inherits(ConferenceInterface, _PlivoResourceInterfa);

    function ConferenceInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ConferenceInterface);

        var _this7 = _possibleConstructorReturn(this, (ConferenceInterface.__proto__ || Object.getPrototypeOf(ConferenceInterface)).call(this, action, Conference, idField, client));

        (0, _common.extend)(_this7, data);

        _this7[clientKey] = client;
        return _this7;
    }

    /**
     * get conference by id
     * @method
     * @param {string} id - id of conference
     * @promise {@link Conference} return {@link Conference} object if success
     * @fail {Error} return Error
     */


    _createClass(ConferenceInterface, [{
        key: 'get',
        value: function get(id) {
            var _this8 = this;

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
            //return super.get(id, params);
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                if (action !== '' && !id) {
                    reject(new Error(_this8[idKey] + ' must be set'));
                }
                client('GET', action + (id ? id + '/' : ''), params).then(function (response) {
                    resolve(new RetrieveConferenceResponse(response.body, client));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * get all conferences. returns name of all conferences
         * @method
         * @promise {@link [Conference]} returns list of {@link Conference} objects if success
         * @fail {Error} return Error
         */

    }, {
        key: 'list',
        value: function list() {
            var client = this[clientKey];
            var params = {};
            params.isVoiceRequest = 'true';
            return new Promise(function (resolve, reject) {
                client('GET', action, params).then(function (response) {
                    var conferences = [];
                    response.body.conferences.forEach(function (conference) {
                        conferences.push(new Conference(client, {
                            name: conference
                        }));
                    });
                    resolve(new ListAllConferenceResponse(response.body));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * hangup conference
         * @method
         * @param {string} conferenceName - name of conference
         * @promise {@link Conference} return {@link Conference} object if success
         * @fail {Error} return Error
         */

    }, {
        key: 'hangup',
        value: function hangup(conferenceName) {
            var errors = (0, _common.validate)([{
                field: 'conference_name',
                value: conferenceName,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            var params = {};
            params.isVoiceRequest = 'true';
            return new Conference(this[clientKey], {
                id: conferenceName
            }).delete(params);
        }

        /**
         * hangup all
         * @method
         * @promise {@link PlivoGenericResponse} returns object of PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'hangupAll',
        value: function hangupAll() {
            var params = {};
            params.isVoiceRequest = 'true';
            return new Conference(this[clientKey]).executeAction('', 'DELETE', params);
        }

        /**
         * hangup member from conference
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member to be hangup
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'hangupMember',
        value: function hangupMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).hangupMember(memberId);
        }

        /**
         * kick member from conference
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'kickMember',
        value: function kickMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).kickMember(memberId);
        }

        /**
         * mute member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'muteMember',
        value: function muteMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).muteMember(memberId);
        }

        /**
         * unmute member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'unmuteMember',
        value: function unmuteMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).unmuteMember(memberId);
        }

        /**
         * deaf member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'deafMember',
        value: function deafMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).deafMember(memberId);
        }

        /**
         * undeaf member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'undeafMember',
        value: function undeafMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).undeafMember(memberId);
        }
        /**
         * play audio to member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @param {string} url - urls for audio
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'playAudioToMember',
        value: function playAudioToMember(id, memberId, url) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }, {
                field: 'url',
                value: url,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).playAudioToMember(memberId, url);
        }

        /**
         * stop playing audio to member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopPlayingAudioToMember',
        value: function stopPlayingAudioToMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).stopPlayingAudioToMember(memberId);
        }

        /**
         * speak text to member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @param {string} text - text to speak
         * @param {object} optionalParams - optional params
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'speakTextToMember',
        value: function speakTextToMember(id, memberId, text, optionalParams) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }, {
                field: 'text',
                value: text,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).speakTextToMember(memberId, text, optionalParams);
        }

        /**
         * stop speaking text to member
         * @method
         * @param {string} id - id of conference
         * @param {string} memberId - id of member
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopSpeakingTextToMember',
        value: function stopSpeakingTextToMember(id, memberId) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }, {
                field: 'memberId',
                value: memberId,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).stopSpeakingTextToMember(memberId);
        }

        /**
         * record conference
         * @method
         * @param {string} id - id of conference
         * @param {object} params - optional params to record conference
         * @param {string} [params.fileFormat] The file format of the record can be of mp3 or wav format. Defaults to mp3 format.
         * @param {string} [params.transcriptionType] The type of transcription required. The following values are allowed:
         * - auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes.
         * - hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes.
         * @param {string} [params.transcriptionUrl] The URL where the transcription is available.
         * @param {string} [params.transcriptionMethod] The method used to invoke the transcription_url. Defaults to POST.
         * @param {string} [params.callbackUrl] The URL invoked by the API when the recording ends.
         * @param {string} [params.callbackMethod] The method which is used to invoke the callback_url URL. Defaults to POST.
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'record',
        value: function record(id, params) {
            return this.startRecording(id, params);
        }

        /**
         * record conference
         * @method
         * @param {string} id - id of conference
         * @param {object} params - optional params to record conference
         * @param {string} [params.fileFormat] The file format of the record can be of mp3 or wav format. Defaults to mp3 format.
         * @param {string} [params.transcriptionType] The type of transcription required. The following values are allowed:
         * - auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes.
         * - hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes.
         * @param {string} [params.transcriptionUrl] The URL where the transcription is available.
         * @param {string} [params.transcriptionMethod] The method used to invoke the transcription_url. Defaults to POST.
         * @param {string} [params.callbackUrl] The URL invoked by the API when the recording ends.
         * @param {string} [params.callbackMethod] The method which is used to invoke the callback_url URL. Defaults to POST.
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'startRecording',
        value: function startRecording(id, params) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }

            return new Conference(this[clientKey], {
                id: id
            }).startRecording(params);
        }

        /**
         * stop recording
         * @method
         * @param {string} id - id of conference
         * @promise {PlivoGenericResponse} return PlivoGenericResponse if success
         * @fail {Error} return Error
         */

    }, {
        key: 'stopRecording',
        value: function stopRecording(id) {
            var errors = (0, _common.validate)([{
                field: 'id',
                value: id,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Conference(this[clientKey], {
                id: id
            }).stopRecording();
        }
    }]);

    return ConferenceInterface;
}(_base.PlivoResourceInterface);