import { Util } from './../../../util/util';
import { Component } from './../../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentVideo.css'); } catch (e) { };

export class ComponentVideo extends Component {
    // arraySource: Array<ComponentGeneric>;

    constructor(father?: Component) {
        super(father);
    }
}
ComponentVideo.addConstructor(ComponentVideo.name, ComponentVideo);
