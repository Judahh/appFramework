import { Util } from './../../util/util';
import { Component } from './../component/component';

export class ComponentDivisor extends Component {

    constructor(father?: Component) {
        super(father, 'div');
    }
}
ComponentDivisor.addConstructor(ComponentDivisor.name, ComponentDivisor);
