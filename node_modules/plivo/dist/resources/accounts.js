'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountInterface = exports.Account = exports.SubaccountInterface = exports.Subaccount = exports.GetSubAccountDetails = exports.UpdateAccountDetailsResponse = exports.UpdateSubAccountDetails = exports.CreateSubAccountResponse = exports.GetAccountDetails = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _common = require('../utils/common.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientKey = Symbol();
var action = 'Subaccount/';
var idField = 'authId';

/**
 * Represents a SubAccount
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */

var GetAccountDetails = exports.GetAccountDetails = function GetAccountDetails(params) {
  _classCallCheck(this, GetAccountDetails);

  params = params || {};
  this.accountType = params.accountType;
  this.address = params.address;
  this.apiId = params.apiId;
  this.autoRecharge = params.autoRecharge;
  this.billingMode = params.billingMode;
  this.cashCredits = params.cashCredits;
  this.city = params.city;
  this.name = params.name;
  this.resourceUri = params.resourceUri;
  this.state = params.state;
  this.timezone = params.timezone;
};

var CreateSubAccountResponse = exports.CreateSubAccountResponse = function CreateSubAccountResponse(params) {
  _classCallCheck(this, CreateSubAccountResponse);

  params = params || {};
  this.apiId = params.apiId;
  this.authId = params.authId;
  this.authToken = params.authToken;
  this.message = params.message;
};

var UpdateSubAccountDetails = exports.UpdateSubAccountDetails = function UpdateSubAccountDetails(params) {
  _classCallCheck(this, UpdateSubAccountDetails);

  params = params || {};
  this.apiId = params.apiId;
  this.message = params.message;
};

var UpdateAccountDetailsResponse = exports.UpdateAccountDetailsResponse = function UpdateAccountDetailsResponse(params) {
  _classCallCheck(this, UpdateAccountDetailsResponse);

  params = params || {};
  this.apiId = params.apiId;
  this.message = params.message;
};

var GetSubAccountDetails = exports.GetSubAccountDetails = function GetSubAccountDetails(params) {
  _classCallCheck(this, GetSubAccountDetails);

  params = params || {};
  this.account = params.account;
  this.apiId = params.apiId;
  this.authId = params.authId;
  this.authToken = params.authToken;
  this.created = params.created;
  this.enabled = params.enabled;
  this.modified = params.modified;
  this.name = params.name;
  this.resourceUri = params.resourceUri;
};

var Subaccount = exports.Subaccount = function (_PlivoResource) {
  _inherits(Subaccount, _PlivoResource);

  function Subaccount(client) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Subaccount);

    var _this = _possibleConstructorReturn(this, (Subaccount.__proto__ || Object.getPrototypeOf(Subaccount)).call(this, 'Subaccount/', Subaccount, idField, client));

    _this[clientKey] = client;
    if (idField in data) {
      _this.id = data[idField];
    }

    (0, _common.extend)(_this, data);
    return _this;
  }

  /**
   * update subaccount
   * @method
   * @param {string} name - name of subaccount
   * @param {boolean} enabled - make account enable or disable
   * @promise {Subaccount} return object of subaccount
   * @fail {Error} return Error
   */


  _createClass(Subaccount, [{
    key: 'update',
    value: function update(name, enabled) {
      var params = {};

      var errors = (0, _common.validate)([{ field: 'name', value: name, validators: ['isRequired', 'isString'] }]);

      if (errors) {
        return errors;
      }

      params.name = name;

      if (typeof enabled === 'boolean') {
        params.enabled = enabled.toString();
      }

      var client = this[clientKey];
      var that = this;
      return new Promise(function (resolve, reject) {
        client('POST', action + that.id + '/', params).then(function (response) {
          (0, _common.extend)(that, response.body);
          if (params.hasOwnProperty('isVoiceRequest')) {
            delete params.isVoiceRequest;
          }
          (0, _common.extend)(that, params);
          resolve(new UpdateSubAccountDetails(that));
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * delete subaccount
     * @method
     * @param {boolean} cascade - delete associated applications, phonenumbers & endpoints
     * @promise {boolean} return true if subaccount deleted
     * @fail {Error} return Error
     */

  }, {
    key: 'delete',
    value: function _delete(cascade) {
      var params = {};

      if (typeof cascade === 'boolean') {
        params.cascade = cascade.toString();
      }
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

  return Subaccount;
}(_base.PlivoResource);

/**
 * Represents a Subaccount Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var SubaccountInterface = exports.SubaccountInterface = function (_PlivoResourceInterfa) {
  _inherits(SubaccountInterface, _PlivoResourceInterfa);

  function SubaccountInterface(client) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SubaccountInterface);

    var _this2 = _possibleConstructorReturn(this, (SubaccountInterface.__proto__ || Object.getPrototypeOf(SubaccountInterface)).call(this, 'Subaccount/', Subaccount, idField, client));

    (0, _common.extend)(_this2, data);
    _this2[clientKey] = client;
    return _this2;
  }

  /**
   * get subaccount by id
   * @method
   * @param {string} id - id of subaccount
   * @promise {Subaccount} return object of subaccount
   * @fail {Error} return Error
   */


  _createClass(SubaccountInterface, [{
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
          resolve(new GetSubAccountDetails(response.body, client));
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * create subaccount
     * @method
     * @param {string} name - name of subaccount
     * @param {boolean} enabled - enable or disable subaccount
     * @promise {PlivoGenericResponse} return object of PlivoGenericObject
     * @fail {Error} return Error
     */

  }, {
    key: 'create',
    value: function create(name, enabled) {
      var _this4 = this;

      var params = {};

      var errors = (0, _common.validate)([{ field: 'name', value: name, validators: ['isRequired'] }]);

      if (errors) {
        return errors;
      }

      params.name = name;

      if (typeof enabled === 'boolean') {
        params.enabled = enabled.toString();
      }
      var client = this[clientKey];
      return new Promise(function (resolve, reject) {
        client('POST', action + (_this4.id ? _this4.id + '/' : ''), params).then(function (response) {
          resolve(new CreateSubAccountResponse(response.body, idField));
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * update subaccount
     * @method
     * @param {id} id - id of subaccount
     * @param {string} name - name of subaccount
     * @param {boolean} enabled - make account enable or disable
     * @promise {Subaccount} return object of subaccount
     * @fail {Error} return Error
     */

  }, {
    key: 'update',
    value: function update(id, name, enabled) {
      var errors = (0, _common.validate)([{ field: 'id', value: id, validators: ['isRequired'] }]);

      if (errors) {
        return errors;
      }
      return new Subaccount(this[clientKey], {
        id: id
      }).update(name, enabled);
    }

    /**
     * delete subaccount
     * @method
     * @param {id} id - id of subaccount
     * @param {boolean} cascade - delete associated applications, phonenumbers & endpoints
     * @promise {boolean} return true if subaccount deleted
     * @fail {Error} return Error
     */

  }, {
    key: 'delete',
    value: function _delete(id, cascade) {
      var errors = (0, _common.validate)([{ field: 'id', value: id, validators: ['isRequired'] }]);

      if (errors) {
        return errors;
      }
      return new Subaccount(this[clientKey], {
        id: id
      }).delete(cascade);
    }
  }]);

  return SubaccountInterface;
}(_base.PlivoResourceInterface);

/**
 * Represents a Account
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var Account = exports.Account = function (_PlivoResource2) {
  _inherits(Account, _PlivoResource2);

  function Account(client) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Account);

    var _this5 = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, action, Account, idField, client));

    (0, _common.extend)(_this5, data);

    if (idField in data) {
      _this5.id = data[idField];
    }

    _this5[clientKey] = client;
    return _this5;
  }

  /**
   * get account detail
   * @method
   * @promise {PlivoGenericResponse} return PlivoGenericResponse object
   * @fail {Error} return Error
   */


  _createClass(Account, [{
    key: 'get',
    value: function get() {
      return new AccountInterface(this[clientKey]).get();
    }

    /**
     * update account detail
     * @method
     * @param {object} params - parameters
     * @param {string} [params.name] - name of account
     * @param {string} [params.city] - city of account
     * @param {string} [params.address] - address of account
     * @promise {Account} return Account object
     * @fail {Error} return Error
     */

  }, {
    key: 'update',
    value: function update(params) {

      var client = this[clientKey];
      var that = this;
      return new Promise(function (resolve, reject) {
        client('POST', '/', params).then(function (response) {
          (0, _common.extend)(that, response.body);
          if (params.hasOwnProperty('isVoiceRequest')) {
            delete params.isVoiceRequest;
          }
          (0, _common.extend)(that, params);
          resolve(new UpdateAccountDetailsResponse(that));
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }]);

  return Account;
}(_base.PlivoResource);

/**
 * Represents a Account Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var AccountInterface = exports.AccountInterface = function (_PlivoResourceInterfa2) {
  _inherits(AccountInterface, _PlivoResourceInterfa2);

  function AccountInterface(client) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AccountInterface);

    var _this6 = _possibleConstructorReturn(this, (AccountInterface.__proto__ || Object.getPrototypeOf(AccountInterface)).call(this, action, Account, idField, client));

    (0, _common.extend)(_this6, data);

    _this6[clientKey] = client;
    return _this6;
  }

  /**
   * get account detail
   * @method
   * @promise {PlivoGenericResponse} return PlivoGenericResponse object
   * @fail {Error} return Error
   */


  _createClass(AccountInterface, [{
    key: 'get',
    value: function get() {
      var client = this[clientKey];
      return new Promise(function (resolve, reject) {
        client('GET', '/').then(function (response) {
          resolve(new GetAccountDetails(response.body, client));
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * update account detail
     * @method
     * @param {object} params - parameters
     * @param {string} [params.name] - name of account
     * @param {string} [params.city] - city of account
     * @param {string} [params.address] - address of account
     * @promise {Account} return Account object
     * @fail {Error} return Error
     */

  }, {
    key: 'update',
    value: function update(params) {
      return new Account(this[clientKey]).update(params);
    }
  }]);

  return AccountInterface;
}(_base.PlivoResourceInterface);