export class BasicViewModel {

    protected varName: string;

    constructor(type: string, element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement, ko) {
        this.varName =  type + element.id;
        this.init();
        element.setAttribute('data-bind', type + ':' + this.varName);
    }

    init() {
        eval('this.' + this.varName + ' = ko.observable("")');
    }
}
