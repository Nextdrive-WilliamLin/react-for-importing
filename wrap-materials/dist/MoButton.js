'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        padding: '0 30px'
    }
};

function MoButton(props) {
    var classes = props.classes,
        label = props.label,
        click = props.click;

    return _react2.default.createElement(
        _Button2.default,
        { className: classes.root, onClick: click },
        label
    );
}

MoButton.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string,
    click: _propTypes2.default.func
};

exports.default = (0, _styles.withStyles)(styles)(MoButton);