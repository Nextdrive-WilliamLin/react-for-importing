'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = MoSnackBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _MoButton = require('./MoButton');

var _MoButton2 = _interopRequireDefault(_MoButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MoSnackBar(_ref) {
    var position = _ref.position,
        show = _ref.show;

    var _React$useState = _react2.default.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    var handleClose = function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'sdsds',
            show
        ),
        _react2.default.createElement(_Snackbar2.default, {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: position
            },
            open: show,
            autoHideDuration: 6000,
            onClose: handleClose,
            message: 'Note archived',
            action: _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _Button2.default,
                    { color: 'secondary', size: 'small', onClick: handleClose },
                    'UNDO'
                ),
                _react2.default.createElement(
                    _IconButton2.default,
                    { size: 'small', 'aria-label': 'close', color: 'inherit', onClick: handleClose },
                    _react2.default.createElement(_Close2.default, { fontSize: 'small' })
                )
            )
        })
    );
}