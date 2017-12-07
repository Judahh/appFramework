import { Component } from './../component/component';
import { Util } from './../../util/util';

export class AppObject extends Component {

  constructor(father?: Component) {
    super(father);
  }

  public static getInstance(father?: Component) {
    return new this(father);
  }
}
