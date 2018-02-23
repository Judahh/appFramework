import { Util } from './../../util/util';
import { ServiceModel } from './../../serviceModel/serviceModel';
import { ImportScript } from './../../../../importScript';
import { AppObject } from './../appObject/appObject';
import { AppObjectEvent } from './../appObject/appObjectEvent/appObjectEvent';
// tslint:disable-next-line:no-empty
try { require('./component.css'); } catch (e) { };

export class Component extends AppObject {
  protected element: HTMLElement | SVGElement | SVGSVGElement | HTMLInputElement | HTMLTextAreaElement;
  protected tag: string;
  protected father: Component;

  // arrayDivisor: Array<ComponentDivisor>;

  // code: string;
  // runFunction: string;

  // runOnBuild: boolean;

  // arrayRouter: Array<ComponentRouter>;
  // arrayAuthorization: Array<ComponentAuthorization>;
  // arrayComponent: Array<Component>;

  // arrayForm: Array<ComponentForm>;

  // submit: boolean;

  // running: boolean;

  // appObject: AppObject;
  // protected style: ComponentStyle;: CSSStyleDeclaration

  sVG: boolean;

  // arrayDisabled: Array<Component>;

  // isToRenderBeforeUpdateJSON: boolean;

  // isToRenderAfterUpdateJSON: boolean;
  private clickListener: boolean;

  public getTag() {
    return this.tag;
  }

  public constructor(father?: Component, tag?: string, sVG?: boolean) {
    super(father);
    if (sVG) {
      this.sVG = sVG;
    } else {
      this.sVG = false;
    }
    if (tag) {
      this.tag = tag;
      if (tag === 'body') {
        this.element = document.body;
      } else {
        let nodes = document.getElementsByTagName(this.tag);
        let path = Util.getInstance().getCurrentComponentPath();

        // if (path) {
        //   // console.log('importCSS:' + path);
        //   ImportScript.importCSS(path);
        // }


        if (this.sVG) {
          // console.log('this.tag:' + this.tag);
          this.sVG = true;
          this.element = document.createElementNS('http://www.w3.org/2000/svg', this.tag);
        } else {
          this.sVG = false;
          this.element = document.createElement(this.tag);
        }

        this.element.id = this.tag + 'Id' + nodes.length;
      }
    } else {
      this.tag = Util.getInstance().getTag(this.getClassName());
      let nodes = document.getElementsByTagName(this.tag);
      let path = Util.getInstance().getCurrentComponentPath();

      // if (path) {
      //   // console.log('importCSS2:' + path);
      //   ImportScript.importCSS(path);
      // }

      if (this.sVG) {
        // console.log('this.tag:' + this.tag);
        this.sVG = true;
        this.element = document.createElementNS('http://www.w3.org/2000/svg', this.tag);
      } else {
        this.sVG = false;
        this.element = document.createElement(this.tag);
      }

      this.element.id = this.tag + 'Id' + nodes.length;
    }

    if (this.father) {
      this.insert((<Component>father).getElement());
    }

    this.clear();
    // this.submit = false;
    // this.runOnBuild = false;
    this.clickListener = false;
    // this.arrayAuthorization = new Array<ComponentAuthorization>();
    // this.arrayAuthorization.type = ComponentAuthorization;
    // this.arrayRouter = new Array<ComponentRouter>();
    // this.arrayRouter.type = ComponentRouter;
    // this.arrayForm = new Array<ComponentForm>();
    // this.arrayForm.type = ComponentForm;
    // this.arrayDisabled = new Array<Component>();
    // this.arrayDisabled.type = Component;
    // this.arrayDivisor = new Array<ComponentDivisor>();
    // this.arrayDivisor.type = ComponentDivisor;
    // this.arrayComponent = new Array<Component>();
  }

  public addEventListener(appObjectEvent: AppObjectEvent) {
    this.element.addEventListener(appObjectEvent.name, () => this.onEvent(appObjectEvent));
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

import { ComponentRouter } from './../router/componentRouter';
import { ComponentAuthorization } from './../authorization/componentAuthorization';

import { ComponentForm } from './../form/componentForm';
import { ComponentDivisor } from './../divisor/componentDivisor';

Component.addConstructor(Component.name, Component);
