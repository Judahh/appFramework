import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
    name: string;
}

export default class App extends React.Component<Props, {}> {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      React.PropTypes.string.name
    );
  }
}