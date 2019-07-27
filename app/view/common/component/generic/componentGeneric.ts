import { Util } from './../../../util/util';
import { Component } from './../../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentGeneric.css'); } catch (e) { };
try { require('./componentGeneric2.css'); } catch (e) { };
try { require('./componentGeneric3.css'); } catch (e) { };
try { require('./componentGeneric4.css'); } catch (e) { };
try { require('./componentGeneric5.css'); } catch (e) { };
try { require('./componentGeneric6.css'); } catch (e) { };

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
        'ComponentList': 'ul',
        'ComponentUnorderedList': 'ul',
        'ComponentOrderedList': 'ol',
        'ComponentListItem': 'li',
        'ComponentSpan': 'span',
        'ComponentMenuHorizontal': 'menuHorizontal',
        'ComponentLeftHolder': 'leftHolder',
        'ComponentCenterHolder': 'centerHolder',
        'ComponentRightHolder': 'rightHolder',
        'ComponentMenuVertical': 'menuVertical',
        'ComponentBackground': 'background',
        'ComponentHeader': 'header',
        'ComponentFooter': 'footer',
        'ComponentItalic': 'i',
        'ComponentPageBody': 'pageBody',
        'ComponentNotification': 'notification',
        'ComponentFontAwesome': 'i'
    };

    private static generateTag(name?: string) {
        if (name === undefined || name === null) {
            return undefined
        } else {
            return ComponentGeneric.map[name];
        }
    }

    constructor(father?: any, name?: string) {
        super(ComponentGeneric.generateTag(name), father);
        this.className = 'ComponentGeneric';
    }

    public generateTag(name?: string) {
        return ComponentGeneric.generateTag(name);
    }
}
ComponentGeneric.addConstructor('ComponentGeneric', ComponentGeneric);
