import { Component } from './../component/component';
import { Util } from './../../util/util';

export class AppObject extends Component {
  // protected util: Util;

  constructor(father?: Component) {
    super(father);
    // this.util = Util.getInstance();
  }

  public run() {

  }

  public static getInstance(father?: Component) {
    return new this(father);
  }
}
