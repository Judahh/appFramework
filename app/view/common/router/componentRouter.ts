// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';
try { require('./componentRouter.css'); } catch (e) { };

export class ComponentRouter extends Component {
    routerLink: string;

    constructor(father?: Component, tag?: string) {
        super(father, tag);
    }

    checkRouterLink(runFunction) {
        if (runFunction(this.routerLink)) {
            return this.routerLink;
        }
        return null
    }
}