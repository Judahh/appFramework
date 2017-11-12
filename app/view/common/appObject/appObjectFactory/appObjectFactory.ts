import { Component } from './../../component/component';

export abstract class AppObjectFactory {
    public static create(name: string, father?: Component) {
        let object;
        // tslint:disable-next-line:no-eval
        eval('object = window.exports.' + name + '.getInstance(father);');
        return object;
    }
}
