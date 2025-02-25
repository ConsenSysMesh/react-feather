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

var CloudDrizzle = function CloudDrizzle(props) {
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
    _react2.default.createElement('line', { x1: '8', y1: '19', x2: '8', y2: '21' }),
    _react2.default.createElement('line', { x1: '8', y1: '13', x2: '8', y2: '15' }),
    _react2.default.createElement('line', { x1: '16', y1: '19', x2: '16', y2: '21' }),
    _react2.default.createElement('line', { x1: '16', y1: '13', x2: '16', y2: '15' }),
    _react2.default.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
    _react2.default.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '17' }),
    _react2.default.createElement('path', { d: 'M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' })
  );
};

CloudDrizzle.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = CloudDrizzle;