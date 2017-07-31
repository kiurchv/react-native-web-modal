"use strict";

exports.__esModule = true;

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    var visible = this.props.visible;


    if (visible) this.handleShow();
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var visible = _ref.visible;

    if (visible && !this.props.visible) this.handleShow();
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        transparent = _props.transparent,
        visible = _props.visible,
        animationType = _props.animationType,
        children = _props.children;


    var baseStyle = {
      backgroundColor: transparent ? "transparent" : "#fff",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999
    };

    var displayStyles = {
      hidden: {
        display: "none"
      },
      visible: {
        display: "flex"
      }
    };

    var slideStyles = {
      hidden: {
        transform: "translateY(100%)",
        transition: "transform 300ms ease-in-out"
      },
      visible: {
        transform: "translateY(0%)",
        transition: "transform 500ms ease-in-out"
      }
    };

    var animationStyles = {
      none: displayStyles,
      fade: displayStyles,
      slide: slideStyles
    };

    var animationState = visible ? "visible" : "hidden";
    var animationStyle = animationStyles[animationType][animationState];

    var style = Object.assign({}, baseStyle, animationStyle);

    return (0, _react.createElement)("div", { style: style, children: children });
  };

  Modal.prototype.handleShow = function handleShow() {
    var _props2 = this.props,
        animationType = _props2.animationType,
        onShow = _props2.onShow;


    if (!onShow) return;

    if (animationType === "none") {
      onShow();
    } else {
      setTimeout(onShow, 300);
    }
  };

  return Modal;
}(_react.Component);

Modal.displayName = "Modal";
Modal.defaultProps = {
  animationType: "none",
  onShow: function onShow() {}
};
exports.default = Modal;