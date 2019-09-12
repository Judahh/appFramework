export class BasicViewModel{
    constructor(type: string, element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement, ko) {
        let varName =  type + element.id;
        eval('this.' + varName + ' = ko.observable("")');
        element.setAttribute('data-bind', type + ':' + varName);
      }
}