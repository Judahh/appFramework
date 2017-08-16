importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/videoHolder/video/componentVideo');
importJS('app/view/common/videoHolder/iframe/componentIframe');

class ComponentVideoHolder extends Component {
    video:ComponentVideo;
    iframe:ComponentIframe;
    
    constructor(father?: Component){
        super(father);
        this.video = new ComponentVideo(this);
        this.iframe = new ComponentIframe(this);
    }
}