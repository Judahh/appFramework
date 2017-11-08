// import { Component } from './../component/component';

export class ComponentElementEvent {// extends Component{
  name: string;
  eventListener: boolean;

  constructor(father?: any /*Component*/, tag?: string) {
    // super(father, tag);
    this.eventListener = false;
  }
}
