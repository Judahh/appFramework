import { Child } from '../common/child/child';
export class Page extends Child {
    private currentFrame: ComponentPageFrame;
    private language: any;
    private unknown: boolean;

    constructor(geneticCode?: GeneticCode) {// {father: this, file: pageName}
        super({ ...{ className: 'Page' }, ...geneticCode });
        this.unknown = false;
        if (geneticCode.file)
            ServiceModel.getPromise(geneticCode.file + 'L').then((data) => this.checkLanguage(geneticCode.file, data)).fail((data) => this.checkFailed(data));
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
            let frame = new ComponentPageFrame({ father: this });
            this.setPage();
            frame.populate(jSON);
        }
    }

    protected checkFrame(jSON, fJSON) {
        // jSON = JSON.parse(jSON);
        let frame = new ComponentPageFrame({ father: this });
        frame.setMinWidth(fJSON.minWidth);
        frame.setMaxWidth(fJSON.maxWidth);
        frame.setMinHeight(fJSON.minHeight);
        frame.setMaxHeight(fJSON.maxHeight);
        this.setPage();
        frame.populate(jSON);
    }

    protected checkFailed(data) {
        // console.error('JSONT:' + data);
        if (this.father instanceof ComponentRouter)
            this.father.updateFailed(data, this);
    }

    public setPage() {// depois checar evento de resize e fazer esperar carregamento
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        for (let index = 0; index < this.getChildrenLength(); index++) {
            let frame = this.getChildAt(index);
            if (frame instanceof ComponentPageFrame && this.father instanceof ComponentRouter) {
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
    }

    public remove(child) {
        this.father.remove(child);
    }

    public insert(child) {
        this.father.insert(child);
    }

    public renderAfterUpdate() {
        this.father.renderAfterUpdate();
    }

    private refreshFrame(frame: ComponentPageFrame) {
        this.currentFrame = frame;
        (<Component>this.getFather()).destroyChildElements();
        // frame.setFather(this.getFather());
        this.insert(frame);
        this.renderAfterUpdate();
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
import { Component } from '../common/component/component';
