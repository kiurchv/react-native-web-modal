import { Component, createElement } from "react";

export default class Modal extends Component {
  static displayName = "Modal";

  static defaultProps = {
    animationType: "none",
    onShow: () => {}
  };

  componentDidMount() {
    const { visible } = this.props;

    if (visible) this.handleShow();
  }

  componentWillReceiveProps({ visible }) {
    if (visible && !this.props.visible) this.handleShow();
  }

  render() {
    const { transparent, visible, animationType, children } = this.props;

    const baseStyle = {
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

    const displayStyles = {
      hidden: {
        display: "none"
      },
      visible: {
        display: "flex"
      }
    };

    const slideStyles = {
      hidden: {
        transform: "translateY(100%)",
        transition: "transform 300ms ease-in-out"
      },
      visible: {
        transform: "translateY(0%)",
        transition: "transform 500ms ease-in-out"
      }
    };

    const animationStyles = {
      none: displayStyles,
      fade: displayStyles,
      slide: slideStyles
    };

    const animationState = visible ? "visible" : "hidden";
    const animationStyle = animationStyles[animationType][animationState];

    const style = { ...baseStyle, ...animationStyle };

    return createElement("div", { style, children });
  }

  handleShow() {
    const { animationType, onShow } = this.props;

    if (!onShow) return;

    if (animationType === "none") {
      onShow();
    } else {
      setTimeout(onShow, 300);
    }
  }
}
