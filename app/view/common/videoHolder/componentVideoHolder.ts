// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentVideo } from './video/componentVideo';
import { ComponentIframe } from './iframe/componentIframe';
require('./componentVideoHolder.css');

export class ComponentVideoHolder extends Component {
    arrayVideo:Array<ComponentVideo>;
    arrayIframe:Array<ComponentIframe>;
    
    constructor(father?: Component){
        super(father);
        this.arrayVideo = new Array<ComponentVideo>();
        this.arrayVideo.type = ComponentVideo;
        this.arrayIframe = new Array<ComponentIframe>();
        this.arrayIframe.type = ComponentIframe;
    }
}