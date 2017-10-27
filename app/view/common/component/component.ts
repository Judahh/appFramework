importJS('app/view/util/util');
importJS('app/view/common/elementEvent/componentElementEvent');

class Component {
  // protected fatherElement:Component;
  protected element: HTMLElement | SVGElement | SVGSVGElement;
  protected father: Component;
  protected tag: string;
  routerLink: string;

  code: string;

  runOnBuild: boolean;

  runOnClick: boolean;

  arrayElementEvent: Array<ComponentElementEvent>;

  submit: boolean;

  running: boolean;

  appObject: AppObject;
  // protected style: ComponentStyle;: CSSStyleDeclaration

  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  pageBodyChecked: boolean;
  headerChecked: boolean;
  footerChecked: boolean;

  sVG: boolean;

  page: string;

  // isToRenderBeforeUpdateJSON: boolean;

  // isToRenderAfterUpdateJSON: boolean;
  private clickListener: boolean;

  protected getConstructor() {
    return this.constructor;
  }

  public getClassName() {
    return this.getConstructor().name;
  }

  public getTag() {
    return this.tag;
  }

  public constructor(father?: Component, tag?: string, sVG?: boolean) {
    if (sVG) {
      this.sVG = sVG;
    }else{
      this.sVG = false;
    }
    if (tag) {
      this.tag = tag;
      if (tag == "body") {
        this.element = document.body;
      } else {
        let nodes = document.getElementsByTagName(this.tag);
        let path = Util.getCurrentComponentPath();

        if (path) {
          // console.log("importCSS:" + path);
          importCSS(path);
        }


        if (this.sVG) {
          // console.log("this.tag:" + this.tag);
          this.sVG = true;
          this.element = document.createElementNS("http://www.w3.org/2000/svg", this.tag);
        } else {
          this.sVG = false;
          this.element = document.createElement(this.tag);
        }

        this.element.id = this.tag + "Id" + nodes.length;
      }
    } else {
      this.tag = Util.getTag(this.getClassName());
      let nodes = document.getElementsByTagName(this.tag);
      let path = Util.getCurrentComponentPath();

      if (path) {
        // console.log("importCSS2:" + path);
        importCSS(path);
      }

      if (this.sVG) {
        // console.log("this.tag:" + this.tag);
        this.sVG = true;
        this.element = document.createElementNS("http://www.w3.org/2000/svg", this.tag);
      } else {
        this.sVG = false;
        this.element = document.createElement(this.tag);
      }

      this.element.id = this.tag + "Id" + nodes.length;
    }

    if (father) {
      this.father = father;
      this.insert(father.getElement());
    }

    this.clear();
    this.pageBodyChecked = false;
    this.headerChecked = false;
    this.footerChecked = false;
    this.submit = false;
    this.running = false;
    this.runOnClick = false;
    this.runOnBuild = false;
    // this.isToRenderBeforeUpdateJSON = true;
    // this.isToRenderAfterUpdateJSON = true;
    this.clickListener = false;
    this.arrayElementEvent = new Array<ComponentElementEvent>();
    this.arrayElementEvent.type = ComponentElementEvent;
  }



  private setPageBody() {
    this.pageBody = <ComponentPageBody>this.seekFatherComponent("ComponentPageBody");
    this.pageBodyChecked = true;
  }

  private setHeader() {
    this.header = <ComponentHeader>this.seekFatherComponent("ComponentHeader");
    this.headerChecked = true;
  }

  private setFooter() {
    this.footer = <ComponentFooter>this.seekFatherComponent("ComponentFooter");
    this.footerChecked = true;
  }

  private setView() {
    if (this.getPageBody() != undefined) {
      this.view = <ComponentView>this.pageBody.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getHeader() != undefined) {
      this.view = <ComponentView>this.header.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getFooter() != undefined) {
      this.view = <ComponentView>this.footer.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    this.view = <ComponentView>this.seekFatherComponent("ComponentView");
  }

  private setPage() {
    if (this.getPageBody() != undefined) {
      this.page = this.pageBody.nextPageName;
      return;
    }

    if (this.getHeader() != undefined) {
      this.page = this.header.getTag();
      return;
    }

    if (this.getFooter() != undefined) {
      this.page = this.footer.getTag();
      return;
    }
  }

  public getView() {
    if (this.view == undefined) {
      this.setView();
    }
    return this.view;
  }

  public getPage() {
    if (this.page == undefined) {
      this.setPage();
    }
    return this.page;
  }

  public getPageBody() {
    if (!this.pageBodyChecked) {
      this.setPageBody();
    }
    return this.pageBody;
  }

  public getHeader() {
    if (!this.headerChecked) {
      this.setHeader();
    }
    return this.header;
  }

  public getFooter() {
    if (!this.footerChecked) {
      this.setFooter();
    }
    return this.footer;
  }

  protected setForm() {
  }

  public getForm(): ComponentForm {
    return null;
  }

  public renderBeforeUpdateJSON() {
  }

  // public renderAfterUpdateJSON() {
  // }

  // private beforeUpdateJSON() {
  //   this.renderBeforeUpdateJSON();
  //   // this.isToRenderBeforeUpdateJSON = false;
  // }

  public renderAfterUpdateJSON() {
    if (!this.clickListener && (this.routerLink != undefined || (this.code != undefined && this.runOnClick) || this.submit)) {
      this.element.addEventListener('click', () => this.onClick());
      this.clickListener = true;
    }
    if (this.runOnBuild && this.code != undefined && !this.running) {
      // let age = new this.className();//window[this.className]();
      let appObject = AppObjectFactory.create(this.code, this);
      for (let property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log("CODE:" + this.code);
      this.appObject.run();
      this.running = true;
    }
    this.arrayElementEvent.forEach(elementEvent => {
      if (!elementEvent.eventListener && elementEvent.name != undefined) {
        this.element.addEventListener(elementEvent.name, () => this.onEvent(elementEvent));
        elementEvent.eventListener = true;
      }
    });
    // this.isToRenderAfterUpdateJSON = false;
  }

  onEvent(elementEvent: ComponentElementEvent) {
    if (elementEvent.code != undefined) {
      let appObject = AppObjectFactory.create(elementEvent.code, this);
      for (let property in elementEvent.appObject) {
        if (elementEvent.appObject.hasOwnProperty(property)) {
          appObject[property] = elementEvent.appObject[property];
        }
      }
      elementEvent.appObject = appObject;
      // console.log("CODE:" + elementEvent.code);
      elementEvent.appObject.run();
    }
  }

  onClick() {
    if (this.routerLink != undefined) {
      // console.log("CLICK:"+this.routerLink);
      this.getView().goToPage(this.routerLink);
      // console.log("BODY:"+Util.getBrowserLanguage());
    } else if (this.code != undefined && this.runOnClick) {
      // let age = new this.className();//window[this.className]();
      let appObject = AppObjectFactory.create(this.code, this);
      for (let property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log("CODE:" + this.code);
      this.appObject.run();
    } else if (this.submit) {
      let form: HTMLFormElement = <HTMLFormElement>this.getForm().getElement();
      form.submit();
    }
  }

  public getArrayType(array: Array<any>) {
    return array.type;
  }

  protected update(jSON) {
    this.updateJSON(jSON);
  }

  private updateJSONWithArray(jSON, property: any) {
    if (this[property].length > 0) {
      let elements = this.element.getElementsByTagName(this.getComponentNameFromArrayName(property));
      Util.removeElements(elements);
      this[property].length = 0;
    }

    jSON[property].forEach(element => {
      let properElement = new this[property].type(this);
      properElement.updateJSON(element);
      this[property].push(properElement);
    });
  }

  public getComponentNameFromArrayName(arrayName: string) {
    return arrayName.split("array")[1];
  }

  private updateJSONWithType(jSON, property: any, type: number) {
    // console.log("Prop2");
    if (type == 2) {
      // console.log("Prop3 is var");
      this.element.style[property] = jSON[property];
    } else {
      if (property == "style") {
        // console.log("Prop is style");
        this.updateJSON(jSON[property], 2);
      } else if (property == "special") {
        // console.log("Prop is special");
        this.updateJSONWithSpecialType(jSON, property, type);
      } else {
        // console.log("Prop is not style or special");
        this.element[property] = jSON[property];
      }
    }
  }

  private updateJSONWithSpecialType(jSON, property: any, type: number) {
    for (let property2 in jSON[property]) {
      // console.log("ValueSP:" + property2);
      // console.log("ValueS:" + jSON[property][property2]);
      this.element.setAttribute(property2, jSON[property][property2]);

    }
  }

  private updateJSONWithObject(jSON, property: any) {
    // console.log("Prop is object");
    if (property == "element") {
      // console.log("Prop is element");
      this.updateJSON(jSON[property], 1);
      // // console.log("Prop is element OUT");
    } else {
      // console.log("Prop is regular");
      if (this[property] == undefined) {
        this[property] = jSON[property];
        // this[property].insert(this);
      } else {
        if (this[property].constructor === Array) {
          this.updateJSONWithArray(jSON, property);
        } else {
          this[property].updateJSON(jSON[property]);
          // this[property].insert(this);
        }
      }
    }
  }

  protected updateJSON(jSON, type?: number) {
    this.renderBeforeUpdateJSON();
    // console.log("UPDATE!");
    for (let property in jSON) {
      // console.log("Prop:" + property);
      if (property != undefined) {
        // console.log("DEFINED!");
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }
        // console.log("TYPE:"+type);
        if (type) {
          this.updateJSONWithType(jSON, property, type);
        } else {
          if (typeof jSON[property] === 'object') {
            this.updateJSONWithObject(jSON, property);
          } else {
            // console.log("Prop is var:" + jSON[property]);
            this[property] = jSON[property];
          }
        }
      }
    }
    this.renderAfterUpdateJSON();
  }

  public insert(fatherElement: HTMLElement | SVGElement | SVGSVGElement) {
    // this.render();
    // console.log("FATHER:" + fatherElement.tagName);
    // console.log("this:" + this.getClassName());
    fatherElement.appendChild(this.element);
  }

  protected updateFailed(data) {
    console.error("JSONT:" + data);
    // this.element.innerHTML = data;
  }

  public getElement() {
    return this.element;
  }

  public getFather() {
    return this.father;
  }

  public setElementSource(source: string) {
    let tmp: any = this.element;
    tmp.src = source;
  }

  protected getJSONPromise(file) {
    ServiceModel.getPromise(file).then((data) => this.update(data)).fail((data) => this.updateFailed(data));
  }

  public clear() {
    this.element.innerHTML = "";
  }

  public seekFatherComponent(className: string): Component {
    if (this.father != undefined) {
      // console.log("FATHER NAME:" + this.father.getClassName());
      if (this.father.getClassName() == className) {
        return this.father;
      } else {
        return this.father.seekFatherComponent(className);
      }
    }
    return undefined;
  }

  protected getLanguage() {
    if (this.getPage() != undefined) {
      // console.log("PAGE:" + this.item.getPage());
      this.getJSONLanguagePromise(this.getPage() + "L");
    }
  }

  protected getJSONLanguagePromise(file) {
    // console.log("lang is "+file);
    ServiceModel.getPromise(file).then((data) => this.updateLanguage(data)).fail((data) => this.updateFailed(data));
  }

  protected updateLanguage(jSON) {
  }

  public destroyElement() {
    var element = document.getElementById(this.element.id);
    // console.log(this.element.id);
    element.parentElement.removeChild(element);
  }

  public destroyChildElements() {
    var range = document.createRange();
    range.selectNodeContents(this.element);
    range.deleteContents();
  }
}