import { Component } from './../component/component';
require('./componentProgressBar.css');

export class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'progress');
  }
}