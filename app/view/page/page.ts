import { Component } from '../common/component/component';
export class Page extends Component {
    private currentFrame: ComponentPageFrame;
    private language: any;
    private unknown: boolean;

    constructor(geneticCode?: GeneticCode) {// {father: this, file: pageName}
        super({ ...{ className: 'Page', tag: 'page' }, ...geneticCode });
        this.unknown = false;
        if (geneticCode.file)
            ServiceModel.getPromise(geneticCode.file + 'L').then((data) => this.checkLanguage(geneticCode.file, data)).fail((data) => this.checkFailed(data));
    }

    public getLanguage() {
        return this.language;
    }

    public getCurrentLanguage() {
        let jSON = this.language;
        let property;
        for (property in jSON) {
            if (property !== undefined) {
                if (!jSON.hasOwnProperty(property)) {
                    continue;
                }

                if (jSON[property]['language'] === this.getCurrentLanguage()) {
                    // console.log('LANG:'+jSON[property]['language']);
                    break;
                }
            }
        }
        return jSON[property];
    }

    public getUnknown() {
        return this.unknown;
    }

    public setUnknown(unknown) {
        this.unknown = unknown;
    }

    protected checkLanguage(file, jSON) {
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
                ServiceModel.getPromise(jSON[index]['file']).then((data) => this.setCurrentPage(data, fJSON)).fail((data) => this.checkFailed(data));
            }
        } else {
            this.setCurrentPage(jSON);
        }
    }

    protected checkFailed(data) {
        // console.error('JSONT:' + data);
        if (this.father instanceof ComponentRouter)
            this.father.updateFailed(data, this);
    }

    private setCurrentPage(jSON, fJSON?) {// depois checar evento de resize e fazer esperar carregamento
        let frame = this.newFrame(fJSON);
        let refresh = this.checkSize(frame);
        frame.populate(jSON);
        if (refresh) {
            this.refreshFrame(frame);
        }
    }

    private checkFrame(frame: ComponentPageFrame) {
        return ((this.father instanceof ComponentRouter) && (this.currentFrame === undefined || this.currentFrame !== frame || this.father.toGo()));
    }

    private checkSize(frame: ComponentPageFrame) {
        let refresh = false;
        if (this.checkFrame(frame) && this.checkHeight(frame) && this.checkWidth(frame)) {
            (<ComponentRouter>this.father).went();
            refresh = true;
        }
        return refresh;
    }

    private checkHeight(frame: ComponentPageFrame) {
        let height = document.documentElement.clientHeight;
        return ((frame.getMaxHeight() === undefined || frame.getMaxHeight() >= height) && (frame.getMinHeight() === undefined || frame.getMinHeight() <= height));
    }

    private checkWidth(frame: ComponentPageFrame) {
        let width = document.documentElement.clientWidth;
        return ((frame.getMaxWidth() === undefined || frame.getMaxWidth() >= width) && (frame.getMinWidth() === undefined || frame.getMinWidth() <= width));
    }

    private refreshFrame(frame: ComponentPageFrame) {
        this.currentFrame = frame;
        this.destroyChildElements();
        this.insert(frame);
        this.renderAfterUpdate();
    }

    private newFrame(fJSON?) {
        let frame = new ComponentPageFrame({ father: this });
        if (fJSON) {
            frame.setMinWidth(fJSON.minWidth);
            frame.setMaxWidth(fJSON.maxWidth);
            frame.setMinHeight(fJSON.minHeight);
            frame.setMaxHeight(fJSON.maxHeight);
        }
        return frame;
    }

    private addFrame(frame: ComponentPageFrame, jSON?) {
        if (this.getArrayChild.indexOf(frame) === -1) {
            this.addChild({ child: frame });
            frame.populate(jSON);
        }
    }
}
import { ComponentPageFrame } from './componentPageFrame';
import { ServiceModel } from '../serviceModel/serviceModel';
import { ComponentRouter } from '../common/component/generic/router/componentRouter';
import { GeneticCode } from '../common/child/geneticCode';
