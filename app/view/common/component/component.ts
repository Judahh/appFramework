import { Util } from './../../util/util';
import { ServiceModel } from './../../serviceModel/serviceModel';
import { ImportScript } from './../../../../importScript';
import { AppObject } from './../appObject/appObject';
import { AppObjectEvent } from './../appObject/event/appObjectEvent';

export class Component extends AppObject {
  protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
  protected tag: string;
  sVG: boolean;
  private clickListener: boolean;

  public getTag() {
    return this.tag;
  }

  public constructor(tag: string, father?: Component, sVG?: boolean) {
    super(father);
    this.className = 'Component';

    this.tag = tag;
    let nodes = document.getElementsByTagName(this.tag);
    let path = Util.getInstance().getCurrentComponentPath();

    if (tag === 'body') {
      this.element = document.body;
    } else if (this.sVG) {
      // console.log('this.tag:' + this.tag);
      this.sVG = true;
      this.element = document.createElementNS('http://www.w3.org/2000/svg', this.tag);
    } else {
      this.sVG = false;
      console.log('this.tag:' + this.tag);
      this.element = document.createElement(this.tag);
    }

    this.element.id = this.tag + 'Id' + nodes.length;

    if (this.father) {
      this.insert((<Component>father).getElement());
    }

    this.clear();
    this.clickListener = false;
  }

  public addEventListener(appObjectEvent: AppObjectEvent, event?: string) {
    if (event === undefined) {
      this.element.addEventListener(appObjectEvent.name, () => this.onEvent(appObjectEvent));
    } else {
      this.element.addEventListener(event, () => this.onEvent(appObjectEvent));
    }
    appObjectEvent.eventListener = true;
  }

  protected getJSONPromiseFromSize(file) {
    ServiceModel.getPromise(file + 'S').then((data) => this.updateFromSize(data)).fail((data) => this.updateFailed(data));
  }

  protected updateFromSize(jSON) {
    for (let property in jSON) {
      if (document.body.clientWidth <= parseInt(property, 10)) {
        console.log(jSON[property]);
        this.getJSONPromise(jSON[property]);
        return;
      }
    }
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

  protected clearProperty(property) {
    if (this[property].length > 0) {
      console.log('CLEAR');
      console.log(property);
      console.log(this[property][0].getTag());
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
}
Component.addConstructor('Component', Component);
