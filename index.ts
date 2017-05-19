// import * as React from "react";
// import * as ReactDOM from "react-dom";
// let App= require("./app/app");
// // import './index.css';
importJS('app/app');


// ReactDOM.render(React.createElement(App, { name: "Jane" }), document.getElementById('root'));

function onLoad(){
    let app=new App();
    document.getElementById('root').innerHTML=app.render();
}