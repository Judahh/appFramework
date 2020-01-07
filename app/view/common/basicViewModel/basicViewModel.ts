import { Attribute } from './attribute'
import * as ko from 'knockout';
import { AppObjectFactory } from '../appObject/factory/appObjectFactory';
import { GeneticCode } from '../child/geneticCode';
export class BasicViewModel {
    protected arrayAttribute: Array<Attribute>;
    protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
    protected sVG: boolean;
    constructor(geneticCode?: GeneticCode) {
        let _self = this;
        if (geneticCode.arrayBindHandlers)
            for (let index = 0; index < geneticCode.arrayBindHandlers.length; index++)
                this.addBindHandler(geneticCode.arrayBindHandlers[index]);
        this.arrayAttribute = new Array<Attribute>();

        AppObjectFactory.cleanAddElements(geneticCode.tag);

        let nodes = AppObjectFactory.numberOfElements(geneticCode.tag);
        _self.element = AppObjectFactory.createElement(geneticCode.tag, geneticCode.tag + 'Id' + nodes, geneticCode.sVG);
        _self.sVG = geneticCode.sVG;

        AppObjectFactory.addElement(geneticCode.tag);

        if  (geneticCode.arrayType)
            for (let index = 0; index < geneticCode.arrayType.length; index++) {
                const type = geneticCode.arrayType[index];
                const attribute = new Attribute(type, type + _self.element.id);
                this.addBind(attribute);
            }
    }

    public getElement() {
        return this.element;
    }

    public initAttributeValue(attribute: Attribute) {
        // tslint:disable-next-line: no-eval
        eval(attribute.getInit());
    }

    public setAttributeValue(attributeName: String, value: string) {
        // tslint:disable-next-line: no-eval
        eval(this.arrayAttribute.find(attribute => attribute.getName() === attributeName).getSet(value));
    }

    public applyBindings() {
        let _self = this;
        ko.applyBindings(_self, _self.element); // receive BasicModel in constructor and save
    }

    public resetAllAttributeValue() {
        let _self = this;
        for (let index = 0; index < this.arrayAttribute.length; index++) {
            const attribute = this.arrayAttribute[index];
            _self.initAttributeValue(attribute);
        }
    }

    public init() {
        let _self = this;
        _self.resetAllAttributeValue();
        _self.applyBindings();
    }

    public addBind(attribute: Attribute) {
        this.arrayAttribute.push(attribute);
        let dataBind: string = this.element.getAttribute('data-bind');
        if (dataBind)
            this.element.setAttribute('data-bind', dataBind + ',' + attribute.getLink());
        else
            this.element.setAttribute('data-bind', attribute.getLink());
    }

    private addBindHandler(bindHandler: string) {
        let _self = this;
        ko.bindingHandlers[bindHandler] = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                let underlyingObservable = valueAccessor();
                let binding = { attr: {} };
                binding.attr[bindHandler] = underlyingObservable;
                ko.applyBindingsToNode(element, binding, _self);
            }
        };
    }
}
