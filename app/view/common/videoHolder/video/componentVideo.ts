import { Array } from 'simpleutils';
import { Component } from './../../component/component';
import { ComponentSource } from './../../source/componentSource';

export class ComponentVideo extends Component {
    arraySource: Array<ComponentSource>;
    
    constructor(father?: Component){
        super(father);
        this.arraySource = new Array<ComponentSource>();
        this.arraySource.type = ComponentSource;
    }
}