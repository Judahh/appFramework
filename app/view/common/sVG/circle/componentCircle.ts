import { Component } from './../../component/component';

export class ComponentCircle extends Component {
  constructor(father?: Component, tag?, sVG?) {
    super(father, 'circle', true);
  }
}