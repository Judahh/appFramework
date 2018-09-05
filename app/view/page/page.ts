import { ComponentFrame } from './componentFrame';
import { ServiceModel } from '../serviceModel/serviceModel';
import { Component } from '../common/component/component';

export class Page {
    private arrayFrame: Array<ComponentFrame>;
    private currentFrame: ComponentFrame;
    private father: Component;
    private language: any;

    constructor(father: Component, file) {
        this.arrayFrame = new Array<ComponentFrame>();
        this.father = father;  
        ServiceModel.getPromise(file).then((data) => this.checkLanguage(file, data)).fail((data) => this.checkFailed(data));
    }

    protected checkLanguage(file, jSON) {
        this.language = jSON;
        ServiceModel.getPromise(file).then((data) => this.checkArray(data)).fail((data) => this.checkFailed(data));
    }

    protected checkArray(jSON) {
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
            this.arrayFrame.push(new ComponentFrame(jSON));
        }
    }

    protected checkFrame(jSON, fJSON) {
        let frame = new ComponentFrame(jSON);
        frame.setMinWidth(fJSON.minWidth);
        frame.setMaxWidth(fJSON.maxWidth);
        frame.setMinHeight(fJSON.minHeight);
        frame.setMaxHeight(fJSON.maxHeight);
        this.arrayFrame.push(frame);

    }

    protected checkFailed(data) {
        console.error('JSONT:' + data);
        // this.element.innerHTML = data;
    }

    public setPage() {//depois checar evento de resize e fazer esperar carregamento
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        for (let index = 0; index < this.arrayFrame.length; index++) {
            let frame = this.arrayFrame[index];
            if (frame.getMaxHeight() === undefined || frame.getMaxHeight() >= height) {
                if (frame.getMinHeight() === undefined || frame.getMinHeight() <= height) {
                    if (frame.getMaxWidth() === undefined || frame.getMaxWidth() >= width) {
                        if (frame.getMinWidth() === undefined || frame.getMinWidth() <= width) {
                            if (this.currentFrame === undefined || this.currentFrame !== frame) {
                                this.refreshFrame(frame);
                            }
                        }
                    }
                }
            }
        }
    }

    private refreshFrame(frame: ComponentFrame) {
        this.father.destroyChildElements();
        frame.setFather(this.father);
    }

    // tslint:disable-next-line:no-empty
    public renderBeforeUpdate() { }

    public renderAfterUpdate() { 
        this.father.renderAfterUpdate();
    }
}