import { Attribute } from './attribute'
import * as ko from 'knockout';
export class BasicViewModel {

    protected arrayAttribute: Array<Attribute>;
    protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;

    constructor(arrayType: Array<string>, element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement) {
        this.arrayAttribute = new Array<Attribute>();
        this.element = element;
        for (let index = 0; index < arrayType.length; index++) {
            const type = arrayType[index];
            const attribute = new Attribute(type, type + element.id);
            this.arrayAttribute.push(attribute);
            this.addBind(attribute);
        }
        this.init();
    }

    public init() {
        let _self = this;
        for (let index = 0; index < this.arrayAttribute.length; index++) {
            const attribute = this.arrayAttribute[index];
            eval('this.' + attribute.getValue() + ' = ko.observable("")');
        }
        ko.applyBindings(_self, _self.element); // receive BasicModel in constructor and save
    }

    private addBind(attribute: Attribute) {
        let dataBind: string = this.element.getAttribute('data-bind');
        if (dataBind)
            this.element.setAttribute('data-bind', dataBind + ',' + attribute)
        else
        this.element.setAttribute('data-bind', '' + attribute)
    }
}
