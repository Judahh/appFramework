import { AppObject } from './../appObject';

export abstract class AppObjectFactory {
    private static elementTypes = {};

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

    public static numberOfElements(tag: string): number {
        let number = 0;
        if (AppObjectFactory.elementTypes[tag] === null || AppObjectFactory.elementTypes[tag] === undefined) {
            AppObjectFactory.elementTypes[tag] = new Array();
        }
        number = AppObjectFactory.elementTypes[tag].length;
        return number;
    }

    public static create(name: string, father?: AppObject) {
        let object;
        // console.log('object = window.exports.' + name + '.getInstance(father);');
        // tslint:disable-next-line:no-eval
        eval('object = window.exports.' + name + '.getInstance(father);');
        return object;
    }
}
