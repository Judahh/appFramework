import { Component } from './../../component/component';

export abstract class AppObjectFactory{
    public static create(name:string, father?: Component){
        let object;
        // eval ('object = new window.exports.'+name+'(father);');
        eval ('object = window.exports.'+name+'.getInstance(father);');
        return object;
    }
}
