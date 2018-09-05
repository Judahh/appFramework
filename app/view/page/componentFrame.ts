import { AppObject } from '../common/appObject/appObject';
import { Component } from '../common/component/component';
import { ComponentGeneric } from '../common/component/generic/componentGeneric';
import { Page } from './page';

export class ComponentFrame extends Component {
    background: ComponentGeneric;
    private minWidth: number;
    private maxWidth: number;
    private minHeight: number;
    private maxHeight: number;
    private fullPage: Page;

    constructor(page: Page, jSON?) {
        super('frame');
        this.fullPage = page;
        this.className = 'ComponentFrame';
        this.background = new ComponentGeneric(this, 'ComponentBackground');
        if (jSON !== undefined) {
            this.updateJSON(jSON);
        }
    }

    public setMinWidth(minWidth: number) {
        this.minWidth = minWidth;
    }

    public setMaxWidth(maxWidth: number) {
        this.maxWidth = maxWidth;
    }

    public setMinHeight(minHeight: number) {
        this.minHeight = minHeight;
    }

    public setMaxHeight(maxHeight: number) {
        return this.maxHeight;
    }

    public getMinWidth() {
        return this.minWidth;
    }

    public getMaxWidth() {
        return this.maxWidth;
    }

    public getMinHeight() {
        return this.minHeight;
    }

    public getMaxHeight() {
        return this.maxHeight;
    }

    protected updateFailed(data) {
        console.error('JSONT:' + data);
        // this.element.innerHTML = data;
    }

    private updateJSONWithArray(jSON, property: any) {
        this.clearProperty(property);

        if (this[property].type !== undefined) {
            jSON[property].forEach(element => {
                let properElement = new this[property].type(this);
                // console.log(properElement);
                properElement.updateJSON(element);
                this[property].push(properElement);
            });
        } else {
            jSON[property].forEach(element => {
                // console.log('START');
                // console.log('type', element.type);
                let object = AppObject.getTypes()[element.type];
                let properElement;
                if (object !== null && object !== undefined) {
                    properElement = new object(this);
                } else {
                    object = AppObject.getTypes()['ComponentGeneric'];
                    properElement = new object(this, element.type);
                }
                // console.log('object', object);
                // console.log('properElement', properElement);
                properElement.updateJSON(element);
                this[property].push(properElement);

            });
        }
    }

    private updateJSONWithType(jSON, property: any, type: number) {
        // console.log('Prop2');
        if (type === 2) {
            // console.log('Prop3 is var');
            this.elementStyle(jSON, property);
        } else {
            if (property === 'style') {
                // console.log('Prop is style');
                this.updateJSON(jSON[property], 2);
            } else if (property === 'special') {
                // console.log('Prop is special');
                this.updateJSONWithSpecialType(jSON, property, type);
            } else {
                // console.log('Prop is not style or special');
                this.elementVar(jSON, property);
            }
        }
    }

    private updateJSONWithSpecialType(jSON, property: any, type: number) {
        for (let property2 in jSON[property]) {
            if (jSON[property].hasOwnProperty(property2)) {
                // console.log('ValueSP:' + property2);
                // console.log('ValueS:' + jSON[property][property2]);
                this.elementSpecial(jSON, property, property2);
            }
        }
    }

    private updateJSONWithObject(jSON, property: any) {
        // console.log('Prop is object');
        if (property === 'element') {
            // console.log('Prop is element');
            this.updateJSON(jSON[property], 1);
            // // console.log('Prop is element OUT');
        } else {
            // console.log('Prop is regular');
            if (this[property] === undefined) {
                this[property] = jSON[property];
                // this[property].insert(this);
            } else {
                if (this[property].constructor === Array) {
                    this.updateJSONWithArray(jSON, property);
                } else {
                    this[property].updateJSON(jSON[property]);
                    // this[property].insert(this);
                }
            }
        }
    }
    private updateJSON(jSON, type?: number) {
        this.fullPage.renderBeforeUpdate();
        // console.log('UPDATE!');
        for (let property in jSON) {
            // console.log('Prop:' + property);
            if (property !== undefined) {
                // console.log('DEFINED!');
                if (!jSON.hasOwnProperty(property)) {
                    continue;
                }
                // console.log('TYPE:'+type);
                if (type) {
                    this.updateJSONWithType(jSON, property, type);
                } else {
                    if (typeof jSON[property] === 'object') {
                        this.updateJSONWithObject(jSON, property);
                    } else {
                        // console.log('Prop is var:' + jSON[property]);
                        this[property] = jSON[property];
                    }
                }
            }
        }
        this.fullPage.renderAfterUpdate();
    }

    // tslint:disable-next-line:no-empty
    protected clearProperty(property) { }

    // tslint:disable-next-line:no-empty
    protected elementStyle(jSON, property) { }

    // tslint:disable-next-line:no-empty
    protected elementVar(jSON, property) { }

    // tslint:disable-next-line:no-empty
    protected elementSpecial(jSON, property, property2) { }
}
ComponentFrame.addConstructor('ComponentFrame', ComponentFrame);