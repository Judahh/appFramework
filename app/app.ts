// import * as React from "react";
// import * as ReactDOM from "react-dom";
importJS('app/props');

class App{
  render() {
    let a = new PropsT() 
    return "Hello"+a.render();
  }
}