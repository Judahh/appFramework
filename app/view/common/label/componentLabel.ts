import { Component } from './../component/component';
try { require('./componentLabel.css'); } catch (e) { };

export class ComponentLabel extends Component {
    constructor(father?: Component, tag?) {
        super(father, 'label');
    }
}