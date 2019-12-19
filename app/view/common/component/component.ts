import 'simpleutils';
import { Util } from 'basicutil';
import { AppObject } from './../appObject/appObject';
import { AppObjectFactory } from './../appObject/factory/appObjectFactory';
import { Page } from '../../page/page';

export class Component extends AppObject {
  protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
  protected tag: string;
  protected infoMap: { [key: string]: string };
  protected form: ComponentGeneric;
  protected formChecked: boolean;
  protected sVG: boolean;
  protected basicViewModel: BasicViewModel;
  public properties: Object;

  public getTag() {
    return this.tag;
  }

  public constructor(tag: string, sVG?: boolean, arrayType?: Array<string>) {
    super();
    let _self = this;
    _self.className = 'Component';

    _self.tag = tag;
    if (AppObjectFactory.numberOfElements(_self.tag) === 0 && document.getElementsByTagName(_self.tag).length > 0) {
      AppObjectFactory.addElements(_self.tag, document.getElementsByTagName(_self.tag).length);
    }
    let nodes = AppObjectFactory.numberOfElements(_self.tag);

    if (tag === 'body') {
      _self.element = document.body;
    } else if (sVG) {
      // console.log('_self.tag:' + _self.tag);
      _self.sVG = sVG;
      _self.element = document.createElementNS('http://www.w3.org/2000/svg', _self.tag);
    } else {
      _self.sVG = false;
      _self.element = document.createElement(_self.tag);
    }

    // console.log('_self.tag:', _self.tag);
    // console.log('nodes:', nodes);
    _self.element.id = _self.tag + 'Id' + nodes;

    AppObjectFactory.addElement(_self.tag);

    _self.clear();
    let arrayBindHandlers = [...arrayType];
    for (const property of Object.keys(_self.properties)) {
      Array.cleanPush(arrayType, property);
      if (property !== 'text')
        Array.cleanPush(arrayBindHandlers, property);
    }
    _self.basicViewModel = new BasicViewModel(arrayType, _self.element, arrayBindHandlers);
    _self.basicViewModel.init();
  }

  public setFather(father) {
    super.setFather(father);
    if (this.father && this.father instanceof Component) {
      // console.log('this.father.tag:' + this.father.tag);
      this.insert(<Component>father);
      this.father.renderAfterUpdate();
    }
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }

  public getElement() {
    return this.element;
  }

  public isElementInnerHTMLEmpty() {
    return (!this.element.innerHTML || this.element.innerHTML === undefined || this.element.innerHTML === 'undefined');
  }

  public cleanElementInnerHTML() {
    if (this.isElementInnerHTMLEmpty()) {
      this.clearElementInnerHTML();
    }
  }

  public clearElementInnerHTML() {
    this.element.innerHTML = '';
  }

  public setElementSource(source: string) {
    let tmp: any = this.element;
    tmp.src = source;
  }

  public insert(father: Component) {
    this.insertElement(father.getElement());
  }

  public insertElement(fatherElement: HTMLElement | SVGElement | SVGSVGElement) {
    // this.render();
    // console.log('FATHER:' + fatherElement.tagName);
    // console.log('this:' + this.getClassName());
    fatherElement.appendChild(this.element);
  }

  public clear() {
    this.element.innerHTML = '';
  }

  public destroyElement() {
    let element = document.getElementById(this.element.id);
    if (element === undefined || element === null) {
      if (this.element !== undefined && this.element !== null) {
        this.element.remove(); // parentElement.removeChild(element);
        // this.element.outerHTML = "";
      }
    } else {
      element.remove(); // .parentElement.removeChild(element);
      // element.outerHTML = "";
    }
  }

  public destroyChildElements() {
    let range = document.createRange();
    range.selectNodeContents(this.element);
    range.deleteContents();
  }

  protected setForm() {
    this.form = <ComponentGeneric>this.seekFather('ComponentForm');
    this.formChecked = true;
  }

  protected clearProperty(property) {
    if (this[property].length > 0) {
      // console.log('CLEAR');
      // console.log(property);
      // console.log(this[property][0].getTag());
      let elements = this.element.getElementsByTagName(this[property][0].getTag());
      Util.getInstance().removeElements(elements);
      this[property].length = 0;
    }
  }

  protected generateElementStyleFromJSON(jSON, property) {
    this.element.style[property] = jSON[property];
  }

  protected generateElementVarFromJSON(jSON, property) {
    // this.element[property] = jSON[property];
    this.element.setAttribute(property, jSON[property]);
  }

  public beforeUpdateLanguage() {
    for (const property of Object.keys(this.properties)) {
      if (this.isElementInnerHTMLEmpty()) {
        this.basicViewModel.setAttributeValue(property, this.properties[property]);
      }
    }
    this.cleanElementInnerHTML();
  }

  protected afterUpdateLanguage() {
    for (const property of Object.keys(this.properties)) {
      let variable = this.seekVariable(this.properties[property]);
      if (variable !== undefined) {
        this.basicViewModel.setAttributeValue(property, variable);
      }
    }
  }
}
import { ComponentGeneric } from './../component/generic/componentGeneric';
import { BasicViewModel } from '../basicViewModel/basicViewModel';

Component.addConstructor('Component', Component);
