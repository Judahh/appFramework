importJS('app/view/util/util');
importJS('app/view/common/component/component');
import { Component } from './../component/component';

export class ComponentLabel extends Component {
    constructor(father?: Component, tag?) {
        super(father, "label");
    }
}