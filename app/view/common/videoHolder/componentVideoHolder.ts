importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/videoHolder/video/componentVideo');
importJS('app/view/common/videoHolder/iframe/componentIframe');

import { Component } from './../component/component';
import { ComponentVideo } from './video/componentVideo';
import { ComponentIframe } from './iframe/componentIframe';

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