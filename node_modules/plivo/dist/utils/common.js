'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var extend = exports.extend = function extend(instance, data) {
  data = data || {};
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      instance[key] = data[key];
    }
  }
};

var validate = exports.validate = function () {
  var Validators = {};
  Validators.isDataType = function () {
    var regExs = {
      String: /String/,
      Number: /Number/,
      Object: /Object/,
      Boolean: /Boolean/,
      Array: /Array/
    };
    return function (object, type) {
      return regExs[type].test(Object.prototype.toString.call(object));
    };
  }();

  // Validators.isEmpty = field => {
  //   if (Validators.isDataType(field, 'String')) {
  //     return !field.length;
  //   }
  //   return true;
  // };

  Validators.isRequired = function (field) {
    return !field;
  };

  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var errorText = [];

    data.forEach(function (item) {
      item.validators.forEach(function (validator) {
        switch (validator) {
          case 'isRequired':
            if (Validators.isRequired(item.value)) {
              errorText.push('Missing mandatory field: ' + item.field);
            }
            break;
          // case 'isObject':
          //   if (!Validators.isDataType(item.value, 'Object')) {
          //     errorText.push(item.field + ' should be object.');
          //   }
          //   break;
          case 'isString':
            if (!Validators.isDataType(item.value, 'String')) {
              errorText.push(item.field + ' should be string.');
            }
            break;
          default:
        }
      });
    });

    if (errorText.length) {
      return new Promise(function (resolve, reject) {
        reject(new Error(errorText.join(', ')));
      });
    }
    return false;
  };
}();