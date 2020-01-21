export class Child {
    protected father: Child;
    protected className: string;
    public properties: Object;
    protected arrayVariable: Array<String>;
    public arrayChild: ObservableArray<Child>;

    public getArrayChild: Array<Child>;

    constructor(geneticCode?: GeneticCode) {
        let _self = this;
        _self.arrayChild = ko.observableArray<Child>();
        _self.arrayChild.subscribe((changes) => {
            _self.arrayChange(changes);
        }, null, 'arrayChange');
        _self.getArrayChild = _self.arrayChild();
        _self.arrayVariable = new Array<String>();
        _self.className = 'Child';
        if (!geneticCode)
            geneticCode = {};
        if (geneticCode.className)
            _self.className = geneticCode.className;
        _self.initGeneticCode(geneticCode);
        if (geneticCode.father)
            if (geneticCode.position)
                geneticCode.father.setChild({ child: _self, index: geneticCode.position, jSON: geneticCode.jSON });
            else
                geneticCode.father.addChild({ child: _self, jSON: geneticCode.jSON });
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
        return this.getArrayChild[index];
    }

    public getChildrenLength() {
        return this.getArrayChild.length;
    }

    public addChild({ child, index, jSON }: { child: Child; index?: number; jSON?: JSON; }) {
        this.initChild(child, jSON);
        if (index) {
            this.arrayChild.splice(index, 0, child);
        } else {
            this.arrayChild.push(child);
        }
    }

    public spliceChild(start: number, deleteCount?: number, ...children: Child[]) {
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            this.initChild(child);
        }
        this.arrayChild.splice(start, deleteCount, ...children);
    }

    public setChild({ child, index, jSON }: { child: Child; index: number; jSON?: JSON; }) {
        this.initChild(child, jSON);
        this.arrayChild.splice(index, 1, child);
    }

    public getFather() {
        return this.father;
    }

    public setFather(father) {
        let _self = this;
        if (_self.father !== father) {
            if (_self.father && _self.father instanceof AppObject) {
                _self.father.spliceChild(_self.father.getArrayChild.findIndex((element) => {return element === _self; } ), 1);
            } else if (_self.father && _self.father.father instanceof Component) {
                // destroy just this child from old father
                _self.father.father.destroyChildElements();
            }
            _self.father = father;
        }
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
        for (let index = 0; index < this.getChildrenLength(); index++) {
            const child = this.getArrayChild[index];
            if (child.className === className) {
                return child;
            }
        }
        return undefined;
    }

    public getAllChildren(className) {
        let array = new Array<Child>();
        for (let index = 0; index < this.getChildrenLength(); index++) {
            const child = this.getArrayChild[index];
            if (child.className === className) {
                array.push(child);
            }
        }
        return array;
    }

    public remove(child: Child) {
    }

    public insert(child: Child) {
    }

    public renderAfterUpdate() {

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
            switch (change.status) {
                case 'added':
                    this.initChild(change.value);
                    if (this.father) {
                        // console.log('_self.father.tag:' + _self.father.tag);
                        this.father.insert(this);
                        this.father.renderAfterUpdate();
                    }
                    break;

                case 'deleted':
                    if (this.father) {
                        this.remove(change.value);
                        this.father.renderAfterUpdate();
                    }
                    break;

                default:
                    break;
            }
        }
    }
}

import { GeneticCode } from './geneticCode';
import { Component } from '../component/component';
import { ComponentGeneric } from '../component/generic/componentGeneric';
import { ObservableArray } from 'knockout';
import * as ko from 'knockout';
import { AppObject } from '../appObject/appObject';

