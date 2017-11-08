import { Component } from './../component/component';
require('./ComponentProgressBar.css');

export class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'progress');
  }
}