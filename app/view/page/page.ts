import { ComponentPageFrame } from './componentPageFrame';
import { ServiceModel } from '../serviceModel/serviceModel';
import { ComponentRouter } from '../common/component/generic/router/componentRouter';

export class Page {
    private arrayFrame: Array<ComponentPageFrame>;
    private currentFrame: ComponentPageFrame;
    private father: ComponentRouter;
    private language: any;
    private unknown: boolean;

    constructor(father: ComponentRouter, file) {
        this.arrayFrame = new Array<ComponentPageFrame>();
        this.father = father;
        this.unknown = false;
        ServiceModel.getPromise(file + 'L').then((data) => this.checkLanguage(file, data)).fail((data) => this.checkFailed(data));
    }

    public getLanguage() {
        return this.language;
    }

    public getUnknown() {
        return this.unknown;
    }

    public setUnknown(unknown) {
        this.unknown = unknown;
    }

    protected checkLanguage(file, jSON) {
        // jSON = JSON.parse(jSON);
        this.language = jSON;
        ServiceModel.getPromise(file).then((data) => this.checkArray(data)).fail((data) => this.checkFailed(data));
    }

    protected checkArray(jSON) {
        // jSON = JSON.parse(jSON);
        if (jSON.constructor === Array) {
            for (let index = 0; index < jSON.length; index++) {
                let fJSON = {
                    minWidth: jSON[index]['minWidth'],
                    maxWidth: jSON[index]['maxWidth'],
                    minHeight: jSON[index]['minHeight'],
                    maxHeight: jSON[index]['maxHeight'],
                };
                ServiceModel.getPromise(jSON[index]['file']).then((data) => this.checkFrame(data, fJSON)).fail((data) => this.checkFailed(data));
            }
        } else {
            let frame = new ComponentPageFrame(this);
            frame.init(jSON);
            this.arrayFrame.push(frame);
            this.setPage();
        }
    }

    protected checkFrame(jSON, fJSON) {
        // jSON = JSON.parse(jSON);
        let frame = new ComponentPageFrame(this);
        frame.setMinWidth(fJSON.minWidth);
        frame.setMaxWidth(fJSON.maxWidth);
        frame.setMinHeight(fJSON.minHeight);
        frame.setMaxHeight(fJSON.maxHeight);
        frame.init(jSON);
        this.arrayFrame.push(frame);
        this.setPage();
    }

    protected checkFailed(data) {
        // console.error('JSONT:' + data);
        this.father.updateFailed(data, this);
        // this.element.innerHTML = data;
    }

    public setPage() {// depois checar evento de resize e fazer esperar carregamento
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        for (let index = 0; index < this.arrayFrame.length; index++) {
            let frame = this.arrayFrame[index];
            if (frame.getMaxHeight() === undefined || frame.getMaxHeight() >= height) {
                if (frame.getMinHeight() === undefined || frame.getMinHeight() <= height) {
                    if (frame.getMaxWidth() === undefined || frame.getMaxWidth() >= width) {
                        if (frame.getMinWidth() === undefined || frame.getMinWidth() <= width) {
                            if (this.currentFrame === undefined || this.currentFrame !== frame || this.father.toGo()) {
                                this.father.went();
                                this.refreshFrame(frame);
                            }
                        }
                    }
                }
            }
        }
    }

    private refreshFrame(frame: ComponentPageFrame) {
        this.currentFrame = frame;
        this.father.destroyChildElements();
        frame.setFather(this.father);
        frame.insert(this.father);
        this.father.renderAfterUpdate();
        this.currentFrame.renderAfterFullUpdate(this.currentFrame);
    }
}
