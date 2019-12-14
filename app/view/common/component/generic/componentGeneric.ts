import 'simpleutils';
import { Component } from './../../component/component';

try { require('./componentGeneric.css'); } catch (e) { };
try { require('./componentGeneric2.css'); } catch (e) { };
try { require('./componentGeneric3.css'); } catch (e) { };
try { require('./componentGeneric4.css'); } catch (e) { };
try { require('./componentGeneric5.css'); } catch (e) { };
try { require('./componentGeneric6.css'); } catch (e) { };

export class ComponentGeneric extends Component {
    private static map: { [key: string]: { tag: string, sVG?: boolean, arrayAttribute?: Array<{ name: string, value: string }> } } = {
        'ComponentDivisor': { tag: 'div', sVG: false },
        'ComponentDiv': { tag: 'div', sVG: false },
        'ComponentForm': { tag: 'form', sVG: false },
        'ComponentItem': { tag: 'item', sVG: false },
        'ComponentAnimationSubEffectHolder': { tag: 'animationSubEffectHolder', sVG: false },
        'ComponentAnimationSubEffect': { tag: 'animationSubEffect', sVG: false },
        'ComponentAnimationEffect': { tag: 'animationEffect', sVG: false },
        'ComponentFont': { tag: 'font', sVG: false },
        'ComponentColorEffect': { tag: 'colorEffect', sVG: false },
        'ComponentRangeSlider': { tag: 'input', sVG: false, arrayAttribute: [{ name: 'type', value: 'range' }] },
        'ComponentButton': { tag: 'button', sVG: false },
        'ComponentBox': { tag: 'input', sVG: false },
        'ComponentComboBox': { tag: 'select', sVG: false },
        'ComponentDataList': { tag: 'datalist', sVG: false },
        'ComponentDataInput': { tag: 'dataInput', sVG: false },
        'ComponentSource': { tag: 'source', sVG: false },
        'ComponentSrc': { tag: 'src', sVG: false },
        'ComponentVideo': { tag: 'video', sVG: false },
        'ComponentIframe': { tag: 'iframe', sVG: false },
        'ComponentVideoHolder': { tag: 'videoHolder', sVG: false },
        'ComponentImage': { tag: 'image', sVG: false },
        'ComponentImg': { tag: 'img', sVG: false },
        'ComponentTable': { tag: 'table', sVG: false },
        'ComponentTableLine': { tag: 'tr', sVG: false },
        'ComponentTR': { tag: 'tr', sVG: false },
        'ComponentTableCell': { tag: 'th', sVG: false },
        'ComponentTH': { tag: 'th', sVG: false },
        'ComponentList': { tag: 'ul', sVG: false },
        'ComponentUnorderedList': { tag: 'ul', sVG: false },
        'ComponentUL': { tag: 'ul', sVG: false },
        'ComponentOrderedList': { tag: 'ol', sVG: false },
        'ComponentOL': { tag: 'ol', sVG: false },
        'ComponentListItem': { tag: 'li', sVG: false },
        'ComponentLI': { tag: 'li', sVG: false },
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
        'ComponentI': { tag: 'i', sVG: false },
        'ComponentTemplate': { tag: 'cTemplate', sVG: false },
        'ComponentPageBody': { tag: 'pageBody', sVG: false },
        'ComponentProgressBar': { tag: 'progress', sVG: false },
        'ComponentNotification': { tag: 'notification', sVG: false },
        'ComponentFontAwesome': { tag: 'i', sVG: false },
        'ComponentSVG': { tag: 'svg', sVG: true },
        'ComponentDefs': { tag: 'defs', sVG: true },
        'ComponentG': { tag: 'g', sVG: true },
        'ComponentFilter': { tag: 'filter', sVG: true },
        'ComponentLinearGradient': { tag: 'linearGradient', sVG: true },
        'ComponentRadialGradient': { tag: 'radialGradient', sVG: true },
        'ComponentCircle': { tag: 'circle', sVG: true },
        'ComponentStop': { tag: 'stop', sVG: true },
        'ComponentEllipse': { tag: 'ellipse', sVG: true },
        'ComponentLine': { tag: 'line', sVG: true },
        'ComponentPath': { tag: 'path', sVG: true },
        'ComponentPolygon': { tag: 'polygon', sVG: true },
        'ComponentPolyline': { tag: 'polyline', sVG: true },
        'ComponentRectangle': { tag: 'rect', sVG: true },
        'ComponentOption': { tag: 'option', sVG: true }
    };

    private static generateMap(name?: string) {
        if (name === undefined || name === null) {
            return undefined
        } else {
            return ComponentGeneric.map[name];
        }
    }

    constructor(name?: string) {
        super(ComponentGeneric.generateMap(name).tag, ComponentGeneric.generateMap(name).sVG);
        this.className = 'ComponentGeneric';
    }

    public setFather(father) {
        super.setFather(father);
        let map = ComponentGeneric.generateMap(name);
        if (map.arrayAttribute && map.arrayAttribute.length > 0)
            for (let index = 0; index < map.arrayAttribute.length; index++) {
                const attribute = map.arrayAttribute[index];
                this.getElement().setAttribute(attribute.name, attribute.value);
            }
    }

    public generateMap(name?: string) {
        return ComponentGeneric.generateMap(name);
    }
}
ComponentGeneric.addConstructor('ComponentGeneric', ComponentGeneric);
