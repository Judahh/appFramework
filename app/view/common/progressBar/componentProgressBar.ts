import { Component } from './../component/component';
try { require('./componentProgressBar.css'); } catch (e) { };

export class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'progress');
  }
}