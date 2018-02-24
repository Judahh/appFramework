// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';

export class ComponentGeneric extends Component {
    private static map: { [key: string]: string; } = {
        'ComponentDivisor': 'div'
    };

    private static generateTag(name?: string) {
        if (name === undefined || name === null) {
            return undefined
        } else {
            return ComponentGeneric.map[name];
        }
    }

    constructor(father?: any, name?: string) {
        super(father, ComponentGeneric.generateTag(name));
    }


}
ComponentGeneric.addConstructor(ComponentGeneric.name, ComponentGeneric);
