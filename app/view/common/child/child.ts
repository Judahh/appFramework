export class Child {
    protected father: any;
    protected className: string;
    protected arrayVariable: Array<String>;

    constructor(father?: any) {
        if (father) {
            this.father = father;
        }
        this.className = 'Child';
        this.arrayVariable = new Array<String>();
    }

    public getClassName() {
        return this.className;
    }

    public seekFather(className: string): Child {
        if (this.father !== undefined) {
            // console.log('FATHER NAME:' + this.father.getClassName());
            if (this.father.getClassName() === 'ComponentGeneric') {
                if (this.father.getClassName() === 'ComponentGeneric') {
                    if ((<ComponentGeneric>this.father).generateTag(className)) {
                        if ((<ComponentGeneric>this.father).generateTag(className).tag === (<Component>this.father).getTag()) {
                            return this.father;
                        }
                    } else {
                        return this.father.seekFather(className);
                    }
                }
            } else if (this.father.getClassName() === className) {
                return this.father;
            } else {
                return this.father.seekFather(className);
            }
        }
        return undefined;
    }

    protected seekVariable(name: string) {
        if (this[name] !== undefined)
            return this[name];
        if (this.father !== undefined)
            return this.father.seekVariable(name);
        return undefined;
    }
}

import { Component } from '../component/component';
import { ComponentGeneric } from '../component/generic/componentGeneric';
