import { Component } from './../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentLabel.css'); } catch (e) { };

export class ComponentLabel extends Component {
    constructor(father?: Component, tag?) {
        super(father, 'label');
    }
}
ComponentLabel.addConstructor(ComponentLabel.name, ComponentLabel);
