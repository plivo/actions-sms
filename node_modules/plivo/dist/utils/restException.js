'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlivoRestError = function (_Error) {
  _inherits(PlivoRestError, _Error);

  function PlivoRestError(response) {
    _classCallCheck(this, PlivoRestError);

    response = response.response;
    var body;

    var _this = _possibleConstructorReturn(this, (PlivoRestError.__proto__ || Object.getPrototypeOf(PlivoRestError)).call(this, '[HTTP ' + response.status + '] Failed to execute request'));

    try {
      body = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
    } catch (err) {
      body = { "error": response.data, "api_id": '' };
    }
    _this.status = response.status;
    _this.statusText = response.statusText;
    _this.message = body.error;
    _this.apiID = body.api_id;
    _this.moreInfo = response.config.data;
    return _this;
  }

  return PlivoRestError;
}(Error);

module.exports = PlivoRestError;