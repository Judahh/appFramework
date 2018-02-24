import { Component } from './../component/component';

export class ComponentLabel extends Component {
    constructor(father?: Component, tag?) {
        super(father, 'label');
    }
}
ComponentLabel.addConstructor(ComponentLabel.name, ComponentLabel);
