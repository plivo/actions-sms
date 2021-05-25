'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlivoRestError = require('./restException');

var ResourceNotFoundError = exports.ResourceNotFoundError = function (_PlivoRestError) {
  _inherits(ResourceNotFoundError, _PlivoRestError);

  function ResourceNotFoundError() {
    _classCallCheck(this, ResourceNotFoundError);

    return _possibleConstructorReturn(this, (ResourceNotFoundError.__proto__ || Object.getPrototypeOf(ResourceNotFoundError)).apply(this, arguments));
  }

  return ResourceNotFoundError;
}(PlivoRestError);

var ServerError = exports.ServerError = function (_PlivoRestError2) {
  _inherits(ServerError, _PlivoRestError2);

  function ServerError() {
    _classCallCheck(this, ServerError);

    return _possibleConstructorReturn(this, (ServerError.__proto__ || Object.getPrototypeOf(ServerError)).apply(this, arguments));
  }

  return ServerError;
}(PlivoRestError);

var InvalidRequestError = exports.InvalidRequestError = function (_PlivoRestError3) {
  _inherits(InvalidRequestError, _PlivoRestError3);

  function InvalidRequestError() {
    _classCallCheck(this, InvalidRequestError);

    return _possibleConstructorReturn(this, (InvalidRequestError.__proto__ || Object.getPrototypeOf(InvalidRequestError)).apply(this, arguments));
  }

  return InvalidRequestError;
}(PlivoRestError);

var PlivoXMLError = exports.PlivoXMLError = function (_PlivoRestError4) {
  _inherits(PlivoXMLError, _PlivoRestError4);

  function PlivoXMLError() {
    _classCallCheck(this, PlivoXMLError);

    return _possibleConstructorReturn(this, (PlivoXMLError.__proto__ || Object.getPrototypeOf(PlivoXMLError)).apply(this, arguments));
  }

  return PlivoXMLError;
}(PlivoRestError);

var PlivoXMLValidationError = exports.PlivoXMLValidationError = function (_PlivoRestError5) {
  _inherits(PlivoXMLValidationError, _PlivoRestError5);

  function PlivoXMLValidationError() {
    _classCallCheck(this, PlivoXMLValidationError);

    return _possibleConstructorReturn(this, (PlivoXMLValidationError.__proto__ || Object.getPrototypeOf(PlivoXMLValidationError)).apply(this, arguments));
  }

  return PlivoXMLValidationError;
}(PlivoRestError);

var AuthenticationError = exports.AuthenticationError = function (_PlivoRestError6) {
  _inherits(AuthenticationError, _PlivoRestError6);

  function AuthenticationError() {
    _classCallCheck(this, AuthenticationError);

    return _possibleConstructorReturn(this, (AuthenticationError.__proto__ || Object.getPrototypeOf(AuthenticationError)).apply(this, arguments));
  }

  return AuthenticationError;
}(PlivoRestError);