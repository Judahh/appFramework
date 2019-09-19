import 'simpleutils';
import { Component } from './../../component/component';

try { require('./componentGeneric.css'); } catch (e) { };
try { require('./componentGeneric2.css'); } catch (e) { };
try { require('./componentGeneric3.css'); } catch (e) { };
try { require('./componentGeneric4.css'); } catch (e) { };
try { require('./componentGeneric5.css'); } catch (e) { };
try { require('./componentGeneric6.css'); } catch (e) { };

export class ComponentGeneric extends Component {
    private static map: { [key: string]: { tag: string, sVG: boolean } } = {
        'ComponentDivisor': { tag: 'div', sVG: false },
        'ComponentDiv': { tag: 'div', sVG: false },
        'ComponentForm': { tag: 'form', sVG: false },
        'ComponentAnimationSubEffectHolder': { tag: 'animationSubEffectHolder', sVG: false },
        'ComponentAnimationSubEffect': { tag: 'animationSubEffect', sVG: false },
        'ComponentAnimationEffect': { tag: 'animationEffect', sVG: false },
        'ComponentFont': { tag: 'font', sVG: false },
        'ComponentColorEffect': { tag: 'colorEffect', sVG: false },
        'ComponentLabel': { tag: 'label', sVG: false },
        'ComponentSource': { tag: 'source', sVG: false },
        'ComponentSrc': { tag: 'src', sVG: false },
        'ComponentVideo': { tag: 'video', sVG: false },
        'ComponentIframe': { tag: 'iframe', sVG: false },
        'ComponentVideoHolder': { tag: 'videoHolder', sVG: false },
        'ComponentImage': { tag: 'image', sVG: false },
        'ComponentImg': { tag: 'img', sVG: false },
        'ComponentTable': { tag: 'table', sVG: false },
        'ComponentTableLine': { tag: 'tr', sVG: false },
        'ComponentTableCell': { tag: 'th', sVG: false },
        'ComponentList': { tag: 'ul', sVG: false },
        'ComponentUnorderedList': { tag: 'ul', sVG: false },
        'ComponentOrderedList': { tag: 'ol', sVG: false },
        'ComponentListItem': { tag: 'li', sVG: false },
        'ComponentSpan': { tag: 'span', sVG: false },
        'ComponentMenuHorizontal': { tag: 'menuHorizontal', sVG: false },
        'ComponentLeftHolder': { tag: 'leftHolder', sVG: false },
        'ComponentCenterHolder': { tag: 'centerHolder', sVG: false },
        'ComponentRightHolder': { tag: 'rightHolder', sVG: false },
        'ComponentMenuVertical': { tag: 'menuVertical', sVG: false },
        'ComponentBackground': { tag: 'background', sVG: false },
        'ComponentHeader': { tag: 'header', sVG: false },
        'ComponentFooter': { tag: 'footer', sVG: false },
        'ComponentItalic': { tag: 'i', sVG: false },
        'ComponentTemplate': { tag: 'template', sVG: false },
        'ComponentPageBody': { tag: 'pageBody', sVG: false },
        'ComponentProgressBar': { tag: 'progress', sVG: false },
        'ComponentNotification': { tag: 'notification', sVG: false },
        'ComponentFontAwesome': { tag: 'i', sVG: false },
        'ComponentCircle': { tag: 'circle', sVG: true },
        'ComponentStop': { tag: 'stop', sVG: false },
        'ComponentEllipse': { tag: 'ellipse', sVG: false },
        'ComponentLine': { tag: 'line', sVG: false },
        'ComponentPath': { tag: 'path', sVG: false },
        'ComponentPolygon': { tag: 'polygon', sVG: false },
        'ComponentPolyline': { tag: 'polyline', sVG: false },
        'ComponentRectangle': { tag: 'rect', sVG: false },
        'ComponentOption': { tag: 'option', sVG: false }
    };

    private static generateTag(name?: string) {
        if (name === undefined || name === null) {
            return undefined
        } else {
            return ComponentGeneric.map[name];
        }
    }

    constructor(father?: any, name?: string) {
        super(ComponentGeneric.generateTag(name).tag, father, ComponentGeneric.generateTag(name).sVG);
        this.className = 'ComponentGeneric';
    }

    public generateTag(name?: string) {
        return ComponentGeneric.generateTag(name);
    }
}
ComponentGeneric.addConstructor('ComponentGeneric', ComponentGeneric);
