import { Component } from './../../component/component';
try {require('./componentTextArea.css');}catch(e){};


export class ComponentTextArea extends Component {
  //IF DATALIST IT NEEDS A INPUT
  //<input list='datalistID' name='inputNAME'>
  //<datalist id='datalistID'>

  constructor(father?: Component, tag?) {
    super(father, 'textarea');
  }
}