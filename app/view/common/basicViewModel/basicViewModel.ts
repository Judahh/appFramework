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

    public initAttributeValue(attribute: Attribute, value: string) {
        eval('this.' + attribute.getValueName() + ' = ko.observable("' + value + '")');
    }

    public setAttributeValue(attribute: Attribute, value: string) {
        eval('this.' + attribute.getValueName() + '("' + value + '")');
    }

    public applyBindings() {
        let _self = this;
        ko.applyBindings(_self, _self.element); // receive BasicModel in constructor and save
    }

    public resetAllAttributeValue() {
        let _self = this;
        for (let index = 0; index < this.arrayAttribute.length; index++) {
            const attribute = this.arrayAttribute[index];
            _self.initAttributeValue(attribute, '');
        }
    }

    public init() {
        let _self = this;
        _self.resetAllAttributeValue();
        _self.applyBindings();
    }

    private addBind(attribute: Attribute) {
        let dataBind: string = this.element.getAttribute('data-bind');
        if (dataBind)
            this.element.setAttribute('data-bind', dataBind + ',' + attribute)
        else
        this.element.setAttribute('data-bind', '' + attribute)
    }
}
