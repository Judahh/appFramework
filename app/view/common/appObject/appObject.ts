import { Component } from './../component/component';

export class AppObject extends Component {
  public run() {

  }

  public static getInstance(father?: Component) {
    return new this(father);
  }
}
