// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
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