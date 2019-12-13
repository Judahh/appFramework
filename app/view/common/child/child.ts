export class Child {
    protected father: Child;
    protected className: string;
    protected arrayVariable: Array<String>;
    protected arrayChild: Array<Child>;

    constructor(father?: Child) {
        if (father) {
            this.father = father;
            this.father.arrayChild.push(this);
        }
        this.className = 'Child';
        this.arrayChild = new Array<Child>();
        this.arrayVariable = new Array<String>();
    }

    public getFather() {
        return this.father;
    }

    public setFather(father) {
        this.father = father;
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


    public getChild(className) {
        for (let index = 0; index < this.arrayChild.length; index++) {
            const child = this.arrayChild[index];
            if (child.className === className) {
                return child;
            }
        }
        return undefined;
    }

    public getAllChildren(className) {
        let array = new Array<Child>();
        for (let index = 0; index < this.arrayChild.length; index++) {
            const child = this.arrayChild[index];
            if (child.className === className) {
                array.push(child);
            }
        }
        return array;
    }
}

import { Component } from '../component/component';
import { ComponentGeneric } from '../component/generic/componentGeneric';
