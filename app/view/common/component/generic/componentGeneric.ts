import { Util } from './../../../util/util';
import { Component } from './../../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentGeneric.css'); } catch (e) { };

export class ComponentGeneric extends Component {
    private static map: { [key: string]: string; } = {
        'ComponentDivisor': 'div',
        'ComponentDiv': 'div',
        'ComponentForm' : 'form',
        'ComponentAnimationSubEffectHolder' : 'animationSubEffectHolder',
        'ComponentLabel' : 'label',
        'ComponentSource' : 'source',
        'ComponentSrc' : 'src',
        'ComponentVideo' : 'video',
        'ComponentIframe' : 'iframe',
        'ComponentVideoHolder' : 'videoHolder'
    };

    private static generateTag(name?: string) {
        if (name === undefined || name === null) {
            return undefined
        } else {
            return ComponentGeneric.map[name];
        }
    }

    constructor(father?: any, name?: string) {
        super(father, ComponentGeneric.generateTag(name));
    }

    public generateTag(name?: string) {
        return ComponentGeneric.generateTag(name);
    }
}
ComponentGeneric.addConstructor(ComponentGeneric.name, ComponentGeneric);
