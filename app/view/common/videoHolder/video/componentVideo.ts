importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/source/componentSource');

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