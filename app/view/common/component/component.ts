import { Util } from './../../util/util';
import { ServiceModel } from './../../serviceModel/serviceModel';
import { AppObject } from './../appObject/appObject';
import { AppObjectFactory } from './../appObject/factory/appObjectFactory';

export class Component extends AppObject {
  protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
  protected tag: string;
  sVG: boolean;

  public getTag() {
    return this.tag;
  }

  public constructor(tag: string, father?: Component, sVG?: boolean) {
    super(father);
    this.className = 'Component';

    this.tag = tag;
    if(AppObjectFactory.numberOfElements(this.tag) === 0 && document.getElementsByTagName(this.tag).length>0){
      AppObjectFactory.addElements(this.tag, document.getElementsByTagName(this.tag).length);
    }
    let nodes = AppObjectFactory.numberOfElements(this.tag);

    if (tag === 'body') {
      this.element = document.body;
    } else if (this.sVG) {
      // console.log('this.tag:' + this.tag);
      this.sVG = true;
      this.element = document.createElementNS('http://www.w3.org/2000/svg', this.tag);
    } else {
      this.sVG = false;
      this.element = document.createElement(this.tag);
    }

    // console.log('this.tag:', this.tag);
    // console.log('nodes:', nodes);
    this.element.id = this.tag + 'Id' + nodes;

    if (this.father) {
      // console.log('this.father.tag:' + this.father.tag);
      this.insert((<Component>father).getElement());
      AppObjectFactory.addElement(this.tag);
    }

    this.clear();
  }

  public getElement() {
    return this.element;
  }

  public setElementSource(source: string) {
    let tmp: any = this.element;
    tmp.src = source;
  }

  public insert(fatherElement: HTMLElement | SVGElement | SVGSVGElement) {
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
    // console.log(this.element.id);
    element.parentElement.removeChild(element);
  }

  public destroyChildElements() {
    let range = document.createRange();
    range.selectNodeContents(this.element);
    range.deleteContents();
  }

  // protected updateJSON(jSON, type?: number) {
  //   this.destroyChildElements();
  //   super.updateJSON(jSON,type);
  // }

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

  protected elementStyle(jSON, property) {
    this.element.style[property] = jSON[property];
  }

  protected elementVar(jSON, property) {
    this.element[property] = jSON[property];
  }

  protected elementSpecial(jSON, property, property2) {
    this.element.setAttribute(property2, jSON[property][property2]);
  }

  public renderAfterUpdate() {}
}
Component.addConstructor('Component', Component);
