'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PowerpackInterface = exports.Tollfree = exports.Shortcode = exports.Numbers = exports.NumberPool = exports.Powerpack = exports.RetrieveShortCodeResponse = exports.RetrieveTollFreeResponse = exports.RetrieveNumberResponse = exports.AddTollFreeNumberresponse = exports.RemoveShortCodeResponse = exports.RemoveTollFreeNumberResponse = exports.RemoveNumberResponse = exports.AddNumberResponse = exports.ListTollFreeResponse = exports.ListShortCodeResponse = exports.UpdatePowerpackResponse = exports.CreatePowerpackResponse = exports.ListAllNumbersResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _base = require('../base');

var _common = require('../utils/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var action = 'Powerpack/';
var idField = 'uuid';
var numberpoolIdField = 'numberPool';
var clientKey = Symbol();

var ListAllNumbersResponse = exports.ListAllNumbersResponse = function ListAllNumbersResponse(params) {
    _classCallCheck(this, ListAllNumbersResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var CreatePowerpackResponse = exports.CreatePowerpackResponse = function CreatePowerpackResponse(params) {
    _classCallCheck(this, CreatePowerpackResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.applicationId = params.applicationId;
    this.applicationType = params.applicationType;
    this.createdOn = params.createdOn;
    this.localConnect = params.localConnect;
    this.name = params.name;
    this.numberPool = params.numberPool;
    this.numberPriority = params.numberPriority;
    this.stickySender = params.stickySender;
    this.uuid = params.uuid;
};

var UpdatePowerpackResponse = exports.UpdatePowerpackResponse = function UpdatePowerpackResponse(params) {
    _classCallCheck(this, UpdatePowerpackResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.applicationId = params.applicationId;
    this.applicationType = params.applicationType;
    this.createdOn = params.createdOn;
    this.localConnect = params.localConnect;
    this.name = params.name;
    this.numberPool = params.numberPool;
    this.stickySender = params.stickySender;
    this.numberPriority = params.numberPriority;
    this.uuid = params.uuid;
};

var ListShortCodeResponse = exports.ListShortCodeResponse = function ListShortCodeResponse(params) {
    _classCallCheck(this, ListShortCodeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var ListTollFreeResponse = exports.ListTollFreeResponse = function ListTollFreeResponse(params) {
    _classCallCheck(this, ListTollFreeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.meta = params.meta;
    this.objects = params.objects;
};

var AddNumberResponse = exports.AddNumberResponse = function AddNumberResponse(params) {
    _classCallCheck(this, AddNumberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.accountPhoneNumberResource = params.accountPhoneNumberResource;
    this.addedOn = params.addedOn;
    this.countryIso2 = params.countryIso2;
    this.number = params.number;
    this.numberPoolUuid = params.numberPoolUuid;
    this.type = params.type;
    this.service = params.service;
};

var RemoveNumberResponse = exports.RemoveNumberResponse = function RemoveNumberResponse(params) {
    _classCallCheck(this, RemoveNumberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.response = params.response;
};

var RemoveTollFreeNumberResponse = exports.RemoveTollFreeNumberResponse = function RemoveTollFreeNumberResponse(params) {
    _classCallCheck(this, RemoveTollFreeNumberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.response = params.response;
};

var RemoveShortCodeResponse = exports.RemoveShortCodeResponse = function RemoveShortCodeResponse(params) {
    _classCallCheck(this, RemoveShortCodeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.response = params.response;
};

var AddTollFreeNumberresponse = exports.AddTollFreeNumberresponse = function AddTollFreeNumberresponse(params) {
    _classCallCheck(this, AddTollFreeNumberresponse);

    params = params || {};
    this.apiId = params.apiId;
    this.accountPhoneNumberResource = params.accountPhoneNumberResource;
    this.addedOn = params.addedOn;
    this.countryIso2 = params.countryIso2;
    this.number = params.number;
    this.numberPoolUuid = params.numberPoolUuid;
    this.type = params.type;
    this.service = params.service;
};

var RetrieveNumberResponse = exports.RetrieveNumberResponse = function RetrieveNumberResponse(params) {
    _classCallCheck(this, RetrieveNumberResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.accountPhoneNumberResource = params.accountPhoneNumberResource;
    this.addedOn = params.addedOn;
    this.countryIso2 = params.countryIso2;
    this.number = params.number;
    this.numberPoolUuid = params.numberPoolUuid;
    this.type = params.type;
};

var RetrieveTollFreeResponse = exports.RetrieveTollFreeResponse = function RetrieveTollFreeResponse(params) {
    _classCallCheck(this, RetrieveTollFreeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.accountPhoneNumberResource = params.accountPhoneNumberResource;
    this.addedOn = params.addedOn;
    this.countryIso2 = params.countryIso2;
    this.number = params.number;
    this.numberPoolUuid = params.numberPoolUuid;
    this.type = params.type;
};

var RetrieveShortCodeResponse = exports.RetrieveShortCodeResponse = function RetrieveShortCodeResponse(params) {
    _classCallCheck(this, RetrieveShortCodeResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.addedOn = params.addedOn;
    this.countryIso2 = params.countryIso2;
    this.shortCode = params.shortCode;
    this.numberPoolUuid = params.numberPoolUuid;
};

/**
 * Represents a Powerpack
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var Powerpack = exports.Powerpack = function (_PlivoResource) {
    _inherits(Powerpack, _PlivoResource);

    function Powerpack(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Powerpack);

        var _this = _possibleConstructorReturn(this, (Powerpack.__proto__ || Object.getPrototypeOf(Powerpack)).call(this, action, Powerpack, idField, client));

        if (idField in data) {
            _this.uuid = data[idField];
        }
        if (numberpoolIdField in data) {
            _this.number_pool_id = data[numberpoolIdField].split('/')[5];
        }
        _this.number_pool = new NumberPool(client, {
            number_pool_id: _this.number_pool_id
        });
        (0, _common.extend)(_this, data);
        _this[clientKey] = client;
        return _this;
    }

    _createClass(Powerpack, [{
        key: 'list_numbers',
        value: function list_numbers(params) {
            var query = this.search_query(params);
            var queryparams = {};
            queryparams['search'] = 'hack';
            var path = 'NumberPool/' + this.number_pool_id + '/Number/?' + query;
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim(), queryparams).then(function (response) {
                    resolve(new ListAllNumbersResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'search_query',
        value: function search_query(params) {
            if (params === undefined) {
                params = {};
            }
            var query = '';
            if (params.type != undefined) {
                query = 'type=' + params.type;
            }
            if (params.starts_with != undefined) {
                if (query == '') {
                    query = 'starts_with=' + params.starts_with;
                } else {
                    query += '&starts_with=' + params.starts_with;
                }
            }
            // return params;
            if (params.country_iso2 != undefined) {
                if (query == '') {
                    query = 'country_iso2=' + params.country_iso2;
                } else {
                    query += '&country_iso2=' + params.country_iso2;
                }
            }
            if (params.limit != undefined) {
                if (query == '') {
                    query = 'limit=' + params.limit;
                } else {
                    query += '&limit=' + params.limit;
                }
            }
            if (params.offset != undefined) {
                if (query == '') {
                    query = 'offset=' + params.offset;
                } else {
                    query += '&offset=' + params.offset;
                }
            }

            if (params.service != undefined) {
                if (query == '') {
                    query = 'service=' + params.service;
                } else {
                    query += '&service=' + params.service;
                }
            }

            query = query + '&';

            return query;
        }
    }, {
        key: 'count_numbers',
        value: function count_numbers(params) {
            var query = this.search_query(params);
            var queryparams = {};
            queryparams['search'] = 'hack';
            var path = 'NumberPool/' + this.number_pool_id + '/Number/?' + query;
            return _get(Powerpack.prototype.__proto__ || Object.getPrototypeOf(Powerpack.prototype), 'getMetaResponse', this).call(this, path.toString().trim(), 'GET', queryparams);
        }
    }, {
        key: 'find_number',
        value: function find_number(number) {
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim()).then(function (response) {
                    resolve(new RetrieveNumberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'add_number',
        value: function add_number(number) {
            var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var params = {};
            params['rent'] = 'false';
            if (service != '') {
                params['service'] = service;
            }
            var client = this[clientKey];
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return new Promise(function (resolve, reject) {
                client('POST', path.toString().trim(), params).then(function (response) {
                    resolve(new AddNumberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'add_tollfree',
        value: function add_tollfree(tollfree) {
            var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var params = {};
            params['rent'] = 'false';
            if (service != '') {
                params['service'] = service;
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', path.toString().trim(), params).then(function (response) {
                    resolve(new AddTollFreeNumberresponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'remove_number',
        value: function remove_number(number) {
            var unrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var params = {};
            params['unrent'] = unrent.toString();
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('DELETE', path.toString().trim(), params).then(function (response) {
                    resolve(new RemoveNumberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'remove_tollfree',
        value: function remove_tollfree(tollfree) {
            var unrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var params = {};
            params['unrent'] = unrent.toString();
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('DELETE', path.toString().trim(), params).then(function (response) {
                    resolve(new RemoveTollFreeNumberResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'remove_shortcode',
        value: function remove_shortcode(shortcode) {
            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/' + shortcode + '/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('DELETE', path.toString().trim()).then(function (response) {
                    resolve(new RemoveShortCodeResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'list_shortcodes',
        value: function list_shortcodes(params) {
            if (params === undefined) {
                params = {};
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim(), params).then(function (response) {
                    resolve(new ListShortCodeResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'list_tollfree',
        value: function list_tollfree(params) {
            if (params === undefined) {
                params = {};
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/';
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim(), params).then(function (response) {
                    resolve(new ListTollFreeResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'find_shortcode',
        value: function find_shortcode(shortcode) {
            var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/' + shortcode + '/';
            if (service != '') {
                path = path + '&service=' + service;
            }
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim()).then(function (response) {
                    resolve(new RetrieveShortCodeResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'find_tollfree',
        value: function find_tollfree(tollfree) {
            var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            if (service != '') {
                path = path + '&service=' + service;
            }
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('GET', path.toString().trim()).then(function (response) {
                    resolve(new RetrieveTollFreeResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'buy_add_number',
        value: function buy_add_number(params) {
            var _this2 = this;

            var number = params.number;
            var rentparam = {};
            rentparam['rent'] = 'true';
            if (params.number == undefined) {
                try {
                    if (params.country_iso2 != undefined) {
                        params['country_iso'] = params.country_iso2;
                    }
                    if (params.service != undefined) {
                        params['service'] = params.service;
                    }
                    var test = _get(Powerpack.prototype.__proto__ || Object.getPrototypeOf(Powerpack.prototype), 'customexecuteGetNumberAction', this).call(this, 'PhoneNumber/', 'GET', params);
                    return test.then(function (val) {
                        var path = 'NumberPool/' + _this2.number_pool_id + '/Number/' + val + '/';
                        return _get(Powerpack.prototype.__proto__ || Object.getPrototypeOf(Powerpack.prototype), 'customexecuteAction', _this2).call(_this2, path.toString().trim(), 'POST', rentparam);
                    });
                } catch (err) {
                    return err.message;
                }
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return _get(Powerpack.prototype.__proto__ || Object.getPrototypeOf(Powerpack.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'POST', rentparam);
        }

        /**
        * update powerpack
        * @method
        * @param {object} params - to update Powerpack
        * @param {string} [params.name]
        * @param {string} [params.application_type]
        * @param {string} [params.application_id]
        * @param {string} [params.sticky_sender]
        * @param {string} [params.local_connect]
        * @param {object} [params.number_priority]
        * @promise {object} return {@link Powerpack} object
        * @fail {Error} return Error
        */

    }, {
        key: 'update',
        value: function update(params) {
            var path = 'Powerpack/' + this.uuid + '/';
            //return super.customexecuteAction(path.toString().trim(), 'POST', params);
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', path.toString().trim(), params).then(function (response) {
                    resolve(new UpdatePowerpackResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * delete Powerpack
         * @method
         * @promise {object} return true on success
         * @fail {Error} return Error
         */

    }, {
        key: 'delete',
        value: function _delete() {
            var unrent_numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var params = {};
            if (typeof unrent_numbers === 'boolean') {
                params.unrent_numbers = unrent_numbers.toString();
            }
            var path = 'Powerpack/' + this.uuid + '/';
            return _get(Powerpack.prototype.__proto__ || Object.getPrototypeOf(Powerpack.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'DELETE', params);
        }
    }]);

    return Powerpack;
}(_base.PlivoResource);

var numberPoolField = 'number_pool_id';

var NumberPool = exports.NumberPool = function (_PlivoResource2) {
    _inherits(NumberPool, _PlivoResource2);

    function NumberPool(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, NumberPool);

        var _this3 = _possibleConstructorReturn(this, (NumberPool.__proto__ || Object.getPrototypeOf(NumberPool)).call(this, action, NumberPool, numberPoolField, client));

        _this3.numbers = new Numbers(client, {
            number_pool_id: data.number_pool_id
        });
        _this3.shortcodes = new Shortcode(client, {
            number_pool_id: data.number_pool_id
        });
        _this3.tollfree = new Tollfree(client, {
            number_pool_id: data.number_pool_id
        });

        (0, _common.extend)(_this3, data);
        return _this3;
    }

    return NumberPool;
}(_base.PlivoResource);

var Numbers = exports.Numbers = function (_PlivoResource3) {
    _inherits(Numbers, _PlivoResource3);

    function Numbers(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Numbers);

        var _this4 = _possibleConstructorReturn(this, (Numbers.__proto__ || Object.getPrototypeOf(Numbers)).call(this, action, Numbers, numberPoolField, client));

        (0, _common.extend)(_this4, data);
        return _this4;
    }

    _createClass(Numbers, [{
        key: 'buy_add_number',
        value: function buy_add_number(params) {
            var _this5 = this;

            var number = params.number;
            var rentparam = {};
            rentparam['rent'] = 'true';
            if (params.number == undefined) {
                try {
                    if (params.country_iso2 != undefined) {
                        params['country_iso'] = params.country_iso2;
                    }
                    if (params.service != undefined) {
                        params['service'] = params.service;
                    }
                    var test = _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteGetNumberAction', this).call(this, 'PhoneNumber/', 'GET', params);
                    return test.then(function (val) {
                        var path = 'NumberPool/' + _this5.number_pool_id + '/Number/' + val + '/';
                        return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', _this5).call(_this5, path.toString().trim(), 'POST', rentparam);
                    });
                } catch (err) {
                    return err.message;
                }
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'POST', rentparam);
        }
    }, {
        key: 'list',
        value: function list(params) {
            var query = this.search_query(params);
            var queryparams = {};
            queryparams['search'] = 'hack';
            var path = 'NumberPool/' + this.number_pool_id + '/Number//?' + query;
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET', queryparams);
        }
    }, {
        key: 'count',
        value: function count(params) {
            var query = this.search_query(params);
            var queryparams = {};
            queryparams['search'] = 'hack';
            var path = 'NumberPool/' + this.number_pool_id + '/Number//?' + query;
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'getMetaResponse', this).call(this, path.toString().trim(), 'GET', queryparams);
        }
    }, {
        key: 'search_query',
        value: function search_query(params) {
            if (params === undefined) {
                params = {};
            }
            var query = '';
            if (params.type != undefined) {
                query = 'type=' + params.type;
            }
            if (params.starts_with != undefined) {
                if (query == '') {
                    query = 'starts_with=' + params.starts_with;
                } else {
                    query += '&starts_with=' + params.starts_with;
                }
            }
            // return params;
            if (params.country_iso2 != undefined) {
                if (query == '') {
                    query = 'country_iso2=' + params.country_iso2;
                } else {
                    query += '&country_iso2=' + params.country_iso2;
                }
            }
            if (params.limit != undefined) {
                if (query == '') {
                    query = 'limit=' + params.limit;
                } else {
                    query += '&limit=' + params.limit;
                }
            }
            if (params.offset != undefined) {
                if (query == '') {
                    query = 'offset=' + params.offset;
                } else {
                    query += '&offset=' + params.offset;
                }
            }
            if (params.service != undefined) {
                if (query == '') {
                    query = 'service=' + params.service;
                } else {
                    query += '&service=' + params.service;
                }
            }

            query = query + '&';

            return query;
        }
    }, {
        key: 'find',
        value: function find(number) {
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET');
        }
    }, {
        key: 'add',
        value: function add(number) {
            var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var params = {};
            params['rent'] = 'false';
            if (service != '') {
                params['service'] = service;
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'POST', params);
        }
    }, {
        key: 'remove',
        value: function remove(number) {
            var unrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var params = {};
            params['unrent'] = unrent.toString();
            var path = 'NumberPool/' + this.number_pool_id + '/Number/' + number + '/';
            return _get(Numbers.prototype.__proto__ || Object.getPrototypeOf(Numbers.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'DELETE', params);
        }
    }]);

    return Numbers;
}(_base.PlivoResource);

var Shortcode = exports.Shortcode = function (_PlivoResource4) {
    _inherits(Shortcode, _PlivoResource4);

    function Shortcode(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Shortcode);

        var _this6 = _possibleConstructorReturn(this, (Shortcode.__proto__ || Object.getPrototypeOf(Shortcode)).call(this, action, Shortcode, numberPoolField, client));

        (0, _common.extend)(_this6, data);
        _this6.number_pool_id = data.number_pool_id;
        return _this6;
    }

    _createClass(Shortcode, [{
        key: 'list',
        value: function list(params) {
            if (params === undefined) {
                params = {};
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/';
            return _get(Shortcode.prototype.__proto__ || Object.getPrototypeOf(Shortcode.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET', params);
        }
    }, {
        key: 'find',
        value: function find(shortcode) {
            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/' + shortcode + '/';
            return _get(Shortcode.prototype.__proto__ || Object.getPrototypeOf(Shortcode.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET');
        }
    }, {
        key: 'remove',
        value: function remove(shortcode) {
            var path = 'NumberPool/' + this.number_pool_id + '/Shortcode/' + shortcode + '/';
            return _get(Shortcode.prototype.__proto__ || Object.getPrototypeOf(Shortcode.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'DELETE');
        }
    }]);

    return Shortcode;
}(_base.PlivoResource);

var Tollfree = exports.Tollfree = function (_PlivoResource5) {
    _inherits(Tollfree, _PlivoResource5);

    function Tollfree(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Tollfree);

        var _this7 = _possibleConstructorReturn(this, (Tollfree.__proto__ || Object.getPrototypeOf(Tollfree)).call(this, action, Tollfree, numberPoolField, client));

        (0, _common.extend)(_this7, data);
        _this7.number_pool_id = data.number_pool_id;
        return _this7;
    }

    _createClass(Tollfree, [{
        key: 'add',
        value: function add(tollfree) {
            var params = {};
            params['rent'] = 'false';
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            return _get(Tollfree.prototype.__proto__ || Object.getPrototypeOf(Tollfree.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'POST', params);
        }
    }, {
        key: 'remove',
        value: function remove(tollfree) {
            var unrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var params = {};
            params['unrent'] = unrent.toString();
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            return _get(Tollfree.prototype.__proto__ || Object.getPrototypeOf(Tollfree.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'DELETE', params);
        }
    }, {
        key: 'list',
        value: function list(params) {
            if (params === undefined) {
                params = {};
            }
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/';
            return _get(Tollfree.prototype.__proto__ || Object.getPrototypeOf(Tollfree.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET', params);
        }
    }, {
        key: 'find',
        value: function find(tollfree) {
            var path = 'NumberPool/' + this.number_pool_id + '/Tollfree/' + tollfree + '/';
            return _get(Tollfree.prototype.__proto__ || Object.getPrototypeOf(Tollfree.prototype), 'customexecuteAction', this).call(this, path.toString().trim(), 'GET');
        }
    }]);

    return Tollfree;
}(_base.PlivoResource);
/**
 * Represents a Powerpack interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var PowerpackInterface = exports.PowerpackInterface = function (_PlivoResourceInterfa) {
    _inherits(PowerpackInterface, _PlivoResourceInterfa);

    function PowerpackInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, PowerpackInterface);

        var _this8 = _possibleConstructorReturn(this, (PowerpackInterface.__proto__ || Object.getPrototypeOf(PowerpackInterface)).call(this, action, Powerpack, idField, client));

        (0, _common.extend)(_this8, data);
        _this8[clientKey] = client;
        return _this8;
    }

    /**
     * get Powerpack by given id
     * @method
     * @param {string} uuid - id of Powerpack
     * @promise {object} return {@link Powerpack} object
     * @fail {Error} return Error
     */


    _createClass(PowerpackInterface, [{
        key: 'get',
        value: function get(uuid) {
            return _get(PowerpackInterface.prototype.__proto__ || Object.getPrototypeOf(PowerpackInterface.prototype), 'get', this).call(this, uuid);
        }
        /**
         * create Powerpack
         * @method
         * @param {string} name - name of Powerpack
         * @param {object} params - params to create Powerpack
         * @param {string} [params.sticky_sender] -
         * @param {string} [params.local_connect]
         * @param {string} [params.application_type]
         * @param {string} [params.application_id]
         * @param {object} [params.number_priority]
         * @promise {object} return {@link PlivoGenericResponse} object
         * @fail {Error} return Error
         */

    }, {
        key: 'create',
        value: function create(name) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var errors = (0, _common.validate)([{
                field: 'name',
                value: name,
                validators: ['isRequired', 'isString']
            }]);

            if (errors) {
                return errors;
            }

            params.name = name;

            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new CreatePowerpackResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * update Powerpack
         * @method
         * @param {string} uuid - id of Powerpack
         * @param {object} params - to update Powerpack
         * @param {string} [params.name]
         * @param {string} [params.sticky_sender]
         * @param {string} [params.local_connect]
         * @param {string} [params.application_type]
         * @param {string} [params.application_id]
         * @param {object} [params.number_priority]
         * @promise {object} return {@link Powerpack} object
         * @fail {Error} return Error
         */

    }, {
        key: 'update',
        value: function update(uuid, params) {
            var errors = (0, _common.validate)([{
                field: 'uuid',
                value: uuid,
                validators: ['isRequired']
            }]);

            if (errors) {
                return errors;
            }
            return new Powerpack(this[clientKey], {
                uuid: uuid
            }).update(params);
        }

        /**
         * Get All Call Detail
         * @method
         * @param {object} params - params to get all call details.
         * @promise {object[]} returns list of Call Object
         * @fail {Error} returns Error
         */

    }, {
        key: 'list',
        value: function list(params) {
            return _get(PowerpackInterface.prototype.__proto__ || Object.getPrototypeOf(PowerpackInterface.prototype), 'list', this).call(this, params);
        }
    }]);

    return PowerpackInterface;
}(_base.PlivoResourceInterface);