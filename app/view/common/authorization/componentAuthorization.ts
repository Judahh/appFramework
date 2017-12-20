// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';

export class ComponentAuthorization extends Component {

    constructor(father?: Component, tag?: string) {
        super(father, tag);
    }

    checkAuthorization(runFunction) {
        if (!runFunction()) {
            this.father.destroyElement();
            delete this.father;
        }
    }
}