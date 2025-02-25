'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WifiOff = function WifiOff(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' }),
    _react2.default.createElement('path', { d: 'M16.72 11.06A10.94 10.94 0 0 1 19 12.55' }),
    _react2.default.createElement('path', { d: 'M5 12.55a10.94 10.94 0 0 1 5.17-2.39' }),
    _react2.default.createElement('path', { d: 'M10.71 5.05A16 16 0 0 1 22.58 9' }),
    _react2.default.createElement('path', { d: 'M1.42 9a15.91 15.91 0 0 1 4.7-2.88' }),
    _react2.default.createElement('path', { d: 'M8.53 16.11a6 6 0 0 1 6.95 0' }),
    _react2.default.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '20' })
  );
};

WifiOff.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

WifiOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = WifiOff;