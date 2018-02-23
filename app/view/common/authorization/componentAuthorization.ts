// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';

export class ComponentAuthorization extends Component {

    constructor(father?: Component, tag?: string) {
        super(father, tag);
    }

    renderAfterUpdateJSON() {
        this.checkAuthorization();
    }

    checkAuthorization() {
        if (!this.father.runObjectFunction(this)) {
            this.father.destroyElement();
            delete this.father;
        }
    }
}
ComponentAuthorization.addConstructor(ComponentAuthorization.name, ComponentAuthorization);
