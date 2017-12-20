// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';

export class ComponentRouter extends Component {
    link: string;

    constructor(father?: Component, tag?: string) {
        super(father, tag);
    }

    checkRouterLink(runFunction) {
        if (runFunction(this.link)) {
            return this.link;
        }
        return null
    }
}