export class Child {
    protected father: Child;
    protected className: string;
    protected arrayVariable: Array<String>;
    protected arrayChild: Array<Child>;

    constructor() {
        this.className = 'Child';
        this.arrayChild = new Array<Child>();
        this.arrayVariable = new Array<String>();
    }

    public populate(jSON: JSON) {

    }

    public seekVariable(name: string) {
        if (this[name] !== undefined)
            return this[name];
        if (this.father !== undefined)
            return this.father.seekVariable(name);
        return undefined;
    }

    public initChild(child: Child, jSON?: JSON) {
        child.setFather(this);
        if (jSON)
            child.populate(jSON);
    }

    public getArryChild() {
        return this.arrayChild;
    }

    public addChild(child: Child, jSON?: JSON) {
        this.initChild(child, jSON);
        this.arrayChild.push(child);
    }

    public setChild(child: Child, index: number, jSON?: JSON) {
        this.initChild(child, jSON);
        this.arrayChild[index] = child;
    }

    public getFather() {
        return this.father;
    }

    public setFather(father) {
        if (this.father && this.father instanceof Component) {
            this.father.destroyChildElements();
        }

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
                    if ((<ComponentGeneric>this.father).generateMap(className)) {
                        if ((<ComponentGeneric>this.father).generateMap(className).tag === (<Component>this.father).getTag()) {
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
