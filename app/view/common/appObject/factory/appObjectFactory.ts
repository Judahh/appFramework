import { AppObject } from './../appObject';
import { GeneticCode } from '../../../../..';

export abstract class AppObjectFactory {
    private static elementTypes = {};

    public static cleanAddElements(tag: string) {
        if (AppObjectFactory.numberOfElements(tag) === 0 && document.getElementsByTagName(tag).length > 0) {
            AppObjectFactory.addElements(tag, document.getElementsByTagName(tag).length);
        }
    }

    public static addElements(tag: string, number: number) {
        if (AppObjectFactory.elementTypes[tag] === null || AppObjectFactory.elementTypes[tag] === undefined) {
            AppObjectFactory.elementTypes[tag] = new Array();
        }
        for (let index = 0; index < number; index++) {
            AppObjectFactory.elementTypes[tag].push('' + tag + 'Id' + AppObjectFactory.elementTypes[tag].length)
        }
    }

    public static addElement(tag: string) {
        if (AppObjectFactory.elementTypes[tag] === null || AppObjectFactory.elementTypes[tag] === undefined) {
            AppObjectFactory.elementTypes[tag] = new Array();
        }
        AppObjectFactory.elementTypes[tag].push('' + tag + 'Id' + AppObjectFactory.elementTypes[tag].length)
    }

    public static createElement(tag: string, id: string, sVG?: boolean) {
        let element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
        AppObjectFactory.clear(document.getElementById(id));
        if (tag === 'body') {
            element = document.body;
        } else {
            element = AppObjectFactory.newElement(tag, sVG);
        }
        element.id = id;
        return element;
    }

    public static clear(element?: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement) {
        if (element)
            element.innerHTML = '';
    }

    public static numberOfElements(tag: string): number {
        let number = 0;
        if (AppObjectFactory.elementTypes[tag] === null || AppObjectFactory.elementTypes[tag] === undefined) {
            AppObjectFactory.elementTypes[tag] = new Array();
        }
        number = AppObjectFactory.elementTypes[tag].length;
        return number;
    }

    public static create(name: string, geneticCode: GeneticCode) {
        let object;
        // console.log('object = window.exports.' + name + '.getInstance(father);');
        // tslint:disable-next-line: no-eval
        object = eval('window.exports.' + name + '.' + 'getInstance(geneticCode)');
        return object;
    }

    private static newElement(tag: string, sVG?: boolean) {
        let element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
        if (sVG) {
            element = document.createElementNS('http://www.w3.org/2000/svg', tag);
        } else {
            element = document.createElement(tag);
        }
        return element;
    }
}
