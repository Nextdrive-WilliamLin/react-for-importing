'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = MoAccordions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _Accordion = require('@material-ui/core/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionSummary = require('@material-ui/core/AccordionSummary');

var _AccordionSummary2 = _interopRequireDefault(_AccordionSummary);

var _AccordionDetails = require('@material-ui/core/AccordionDetails');

var _AccordionDetails2 = _interopRequireDefault(_AccordionDetails);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

MoAccordions.prototype = {
    data: _propTypes2.default.array,
    headerBgColor: _propTypes2.default.string,
    expandedHeaderBgColor: _propTypes2.default.string
};
var useStyles = (0, _styles.makeStyles)(function (aa) {
    console.log("check", aa);
    return {
        root: {
            backgroundColor: function backgroundColor(props) {
                return props.headerBgColor;
            },
            color: "#fff"
        },
        expanded: {
            backgroundColor: function backgroundColor(props) {
                return props.expandedHeaderBgColor;
            }
        }
    };
});
var Accordion = (0, _styles.withStyles)({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
    },
    expanded: {}
})(_Accordion2.default);

var AccordionDetails = (0, _styles.withStyles)(function (theme) {
    return {
        root: {
            padding: theme.spacing(2)
        }
    };
})(_AccordionDetails2.default);

function MoAccordions(_ref) {
    var data = _ref.data,
        headerBgColor = _ref.headerBgColor,
        expandedHeaderBgColor = _ref.expandedHeaderBgColor;

    var _React$useState = _react2.default.useState('panel1'),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

    var classes = useStyles({ headerBgColor: headerBgColor, expandedHeaderBgColor: expandedHeaderBgColor });
    var handleChange = function handleChange(panel) {
        return function (event, newExpanded) {
            setExpanded(newExpanded ? panel : false);
        };
    };

    var willReturn = data.map(function (item, index) {
        return _react2.default.createElement(
            Accordion,
            { square: true, key: index, expanded: expanded === 'panel' + index, onChange: handleChange('panel' + index) },
            _react2.default.createElement(
                _AccordionSummary2.default,
                {
                    classes: {
                        root: classes.root,
                        expanded: classes.expanded
                    }
                },
                _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Header #',
                    index
                )
            ),
            _react2.default.createElement(
                AccordionDetails,
                null,
                _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'ss'
                )
            )
        );
    });

    return _react2.default.createElement(
        'div',
        null,
        willReturn
    );
}