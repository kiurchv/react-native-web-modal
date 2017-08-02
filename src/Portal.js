import { Component } from "react";
import {
  unstable_renderSubtreeIntoContainer,
  unmountComponentAtNode
} from "react-dom";

export default class Portal extends Component {
  static displayName = "Portal";

  componentDidMount() {
    this.renderPortal(this.props.children);
  }

  componentWillReceiveProps({ children }) {
    this.renderPortal(children);
  }

  componentWillUnmount() {
    if (!this.node) return;

    unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);

    this.portal = null;
    this.node = null;
  }

  render() {
    return null;
  }

  renderPortal(children) {
    if (!this.node) {
      this.node = document.createElement("div");
      document.body.appendChild(this.node);
    }

    this.portal = unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.node
    );
  }
}
