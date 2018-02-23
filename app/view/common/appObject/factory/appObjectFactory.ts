import { AppObject } from './../appObject';

export abstract class AppObjectFactory {
    public static create(name: string, father?: AppObject) {
        let object;
        // console.log('object = window.exports.' + name + '.getInstance(father);');
        // tslint:disable-next-line:no-eval
        eval('object = window.exports.' + name + '.getInstance(father);');
        return object;
    }
}
