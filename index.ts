import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app/app';
// import './index.css';

ReactDOM.render(React.createElement(App, { name: "Jane" }), document.getElementById('root'));