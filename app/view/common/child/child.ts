export class Child {
    protected father: Child;
    protected className: string;
    public properties: Object;
    protected arrayVariable: Array<String>;
    public arrayChild: ObservableArray<Child>;

    public getArrayChild: Array<Child>;

    constructor(geneticCode: GeneticCode) {
        let _self = this;
        _self.initGeneticCode(geneticCode);
        if (geneticCode.father)
            if (geneticCode.position)
                geneticCode.father.setChild(this, geneticCode.position, geneticCode.jSON);
            else
                geneticCode.father.addChild(this, geneticCode.jSON);
        this.className = 'Child';
        this.arrayChild = ko.observableArray<Child>();
        this.arrayChild.subscribe((changes) => {
            _self.arrayChange(changes);
        }, null, 'arrayChange');
        this.getArrayChild = this.arrayChild();
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

    public getChildAt(index: number) {
        return this.arrayChild[index];
    }

    public getChildLength() {
        return this.arrayChild.length;
    }

    public addChild(child: Child, jSON?: JSON) {
        this.initChild(child, jSON);
        this.arrayChild.push(child);
    }

    public spliceChild(start: number, deleteCount?: number, ...children: Child[]) {
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            this.initChild(child);
        }
        this.arrayChild.splice(start, deleteCount, ...children);
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

    protected initGeneticCode(geneticCode: GeneticCode) {
        let _self = this;
        let arrayBindHandlers;

        if (_self.properties && geneticCode.arrayType) {
            arrayBindHandlers = [...geneticCode.arrayType];
            for (const property of Object.keys(_self.properties)) {
                Array.cleanPush(geneticCode.arrayType, property);
                if (property !== 'text')
                    Array.cleanPush(arrayBindHandlers, property);
            }
        }

        geneticCode.arrayBindHandlers = arrayBindHandlers;
        return geneticCode;
    }

    private initChild(child: Child, jSON?: JSON) {
        child.setFather(this);
        if (jSON)
            child.populate(jSON);
    }

    private arrayChange(changes) {
        for (let index = 0; index < changes.length; index++) {
            const change = changes[index];
            // TODO missing status
            if (change.status === 'added') {
                this.addChange(change);
            }
        }
    }

    private addChange(change) {
        if (change.value === undefined) {
            delete change.status;
            this.initChild(change);
        } else {
            this.initChild(change.value);
        }
    }
}

import { GeneticCode } from './geneticCode';
import { Component } from '../component/component';
import { ComponentGeneric } from '../component/generic/componentGeneric';
import { ObservableArray, SubscriptionCallback } from 'knockout';
import * as ko from 'knockout';

