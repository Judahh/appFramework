import { Component } from './../component/component';

export class ComponentElementEvent extends Component{
  name: string;
  eventListener: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.eventListener = false;
  }
}