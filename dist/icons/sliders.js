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

var Sliders = function Sliders(props) {
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
    _react2.default.createElement('line', { x1: '4', y1: '21', x2: '4', y2: '14' }),
    _react2.default.createElement('line', { x1: '4', y1: '10', x2: '4', y2: '3' }),
    _react2.default.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '12' }),
    _react2.default.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '3' }),
    _react2.default.createElement('line', { x1: '20', y1: '21', x2: '20', y2: '16' }),
    _react2.default.createElement('line', { x1: '20', y1: '12', x2: '20', y2: '3' }),
    _react2.default.createElement('line', { x1: '1', y1: '14', x2: '7', y2: '14' }),
    _react2.default.createElement('line', { x1: '9', y1: '8', x2: '15', y2: '8' }),
    _react2.default.createElement('line', { x1: '17', y1: '16', x2: '23', y2: '16' })
  );
};

Sliders.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sliders.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Sliders;