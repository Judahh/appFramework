import { Component } from './../../component/component';

export class ComponentPath extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'path', true);
  }
}