import { Util } from './../../../util/util';
import { Component } from './../../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentGeneric.css'); } catch (e) { };

export class ComponentGeneric extends Component {
    private static map: { [key: string]: string; } = {
        'ComponentDivisor': 'div',
        'ComponentDiv': 'div',
        'ComponentForm': 'form',
        'ComponentAnimationSubEffectHolder': 'animationSubEffectHolder',
        'ComponentAnimationSubEffect': 'animationSubEffect',
        'ComponentAnimationEffect': 'animationEffect',
        'ComponentFont': 'font',
        'ComponentColorEffect': 'colorEffect',
        'ComponentLabel': 'label',
        'ComponentSource': 'source',
        'ComponentSrc': 'src',
        'ComponentVideo': 'video',
        'ComponentIframe': 'iframe',
        'ComponentVideoHolder': 'videoHolder',
        'ComponentImage': 'image',
        'ComponentImg': 'img',
        'ComponentTable': 'table',
        'ComponentTableLine': 'tr',
        'ComponentTableCell': 'th',
        'ComponentMenuHorizontal': 'menuHorizontal',
        'ComponentLeftHolder': 'leftHolder',
        'ComponentCenterHolder': 'centerHolder',
        'ComponentRightHolder': 'rightHolder',
        'ComponentMenuVertical': 'menuVertical',
        'ComponentBackground': 'background',
        'ComponentHeader': 'header',
        'ComponentFooter': 'footer'
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
        this.className = 'ComponentGeneric';
        if (this.tag === 'header' || this.tag === 'footer') {
            this.getJSONPromise(this.tag);
        }
    }

    public generateTag(name?: string) {
        return ComponentGeneric.generateTag(name);
    }
}
ComponentGeneric.addConstructor('ComponentGeneric', ComponentGeneric);
