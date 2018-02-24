import { Util } from './../../util/util';
import { AppObjectFactory } from './factory/appObjectFactory';
import { ServiceModel } from './../../serviceModel/serviceModel';

export class AppObject {
  private static types: any;
  protected father: any;
  arrayAppObject: Array<AppObject>;
  arrayAppObjectEvent: Array<AppObjectEvent>;
  running: boolean;

  page: string;
  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  pageBodyChecked: boolean;
  headerChecked: boolean;
  footerChecked: boolean;

  public static getInstance(father?: AppObject) {
    return new this(father);
  }

  public static addType(type) {
    AppObject.addConstructor(type.getClassName(), type.getConstructor());
  }

  public static addConstructor(name, constructor) {
    if (AppObject.types === undefined) {
      AppObject.types = {};
    }
    if (AppObject.types[name] === undefined) {
      AppObject.types[name] = constructor;
    }
  }

  constructor(father?: any) {
    if (father) {
      this.father = father;
    }

    this.pageBodyChecked = false;
    this.headerChecked = false;
    this.footerChecked = false;
    this.running = false;
    this.arrayAppObject = new Array<AppObject>();
    this.arrayAppObjectEvent = new Array<AppObjectEvent>();
    this.arrayAppObjectEvent.type = AppObjectEvent;
    // AppObject.addType(this);
  }

  protected getConstructor() {
    return this.constructor;
  }

  public getClassName() {
    return this.getConstructor().name;
  }

  // tslint:disable-next-line:no-empty
  public renderBeforeUpdateJSON() { }

  // tslint:disable-next-line:no-empty
  public renderAfterUpdateJSON() { }

  // tslint:disable-next-line:no-empty
  public addEventListener(appObjectEvent: AppObjectEvent, event?: string) { }

  public onEvent(elementEvent: AppObjectEvent) {
    if (elementEvent.code !== undefined) {
      let appObject = AppObjectFactory.create(elementEvent.code, this);
      for (let property in elementEvent.appObject) {
        if (elementEvent.appObject.hasOwnProperty(property)) {
          appObject[property] = elementEvent.appObject[property];
        }
      }
      elementEvent.appObject = appObject;
      // console.log('CODE:' + elementEvent.code);
      if (elementEvent.runFunction !== undefined) {
        if (elementEvent.link !== undefined) {
          // tslint:disable-next-line:no-eval
          let link = elementEvent.checkLink(eval('appObject.' + elementEvent.runFunction));
          if (link !== undefined && link !== null) {
            this.getView().goToPage(link);
          }
        } else {
          // tslint:disable-next-line:no-eval
          eval('elementEvent.appObject.' + elementEvent.runFunction + ';');
        }
      } else {
        if (elementEvent.link !== undefined) {
          this.getView().goToPage(elementEvent.link);
        }
      }
    }
  }

  public runObjectFunction(object) {
    let appObject = AppObjectFactory.create(object.code, this);
    // tslint:disable-next-line:no-eval
    let result = eval('appObject.' + object.runFunction);
    return result;
  }

  public getView() {
    if (this.view === undefined) {
      this.setView();
    }
    return this.view;
  }

  public getPage() {
    if (this.page === undefined) {
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

  protected updateFromSize(jSON) {
    for (let property in jSON) {
      if (document.body.clientWidth <= parseInt(property, 10)) {
        console.log(jSON[property]);
        this.getJSONPromise(jSON[property]);
        return;
      }
    }
  }

  protected updateFailed(data) {
    console.error('JSONT:' + data);
    // this.element.innerHTML = data;
  }

  protected getJSONLanguagePromise(file) {
    // console.log('lang is '+file);
    ServiceModel.getPromise(file).then((data) => this.updateLanguage(data)).fail((data) => this.updateFailed(data));
  }

  public getFather() {
    return this.father;
  }

  public setFather(father) {
    this.father = father;
  }

  public setCurrentLanguage(language: string) {
    Util.getInstance().setLanguage(language);
  }

  public getCurrentLanguage() {
    return Util.getInstance().getCurrentLanguage();
  }

  public seekFather(className: string): AppObject {
    if (this.father !== undefined) {
      // console.log('FATHER NAME:' + this.father.getClassName());
      if (this.father.getClassName() === 'ComponentGeneric') {
        if (this.father.generateTag(className) === this.father.getTag()) {
          return this.father;
        } else {
          return this.father.seekFather(className);
        }
      } else if (this.father.getClassName() === className) {
        return this.father;
      } else {
        return this.father.seekFather(className);
      }
    }
    return undefined;
  }

  public getArrayType(array: Array<any>) {
    return array.type;
  }

  public getNameFromArrayName(arrayName: string) {
    return arrayName.split('array')[1];
  }

  protected update(jSON) {
    this.updateJSON(jSON);
  }

  protected updateJSON(jSON, type?: number) {
    this.renderBeforeUpdateJSON();
    // console.log('UPDATE!');
    for (let property in jSON) {
      // console.log('Prop:' + property);
      if (property !== undefined) {
        // console.log('DEFINED!');
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }
        // console.log('TYPE:'+type);
        if (type) {
          this.updateJSONWithType(jSON, property, type);
        } else {
          if (typeof jSON[property] === 'object') {
            this.updateJSONWithObject(jSON, property);
          } else {
            // console.log('Prop is var:' + jSON[property]);
            this[property] = jSON[property];
          }
        }
      }
    }
    this.renderAfterUpdateJSON();
  }

  // tslint:disable-next-line:no-empty
  protected clearProperty(property) { }

  // tslint:disable-next-line:no-empty
  protected elementStyle(jSON, property) { }

  // tslint:disable-next-line:no-empty
  protected elementVar(jSON, property) { }

  // tslint:disable-next-line:no-empty
  protected elementSpecial(jSON, property, property2) { }

  protected getLanguage() {
    if (this.getPage() !== undefined) {
      // console.log('PAGE:' + this.item.getPage());
      this.getJSONLanguagePromise(this.getPage() + 'L');
    }
  }

  // tslint:disable-next-line:no-empty
  protected updateLanguage(jSON) { }

  protected getJSONPromise(file) {
    ServiceModel.getPromise(file).then((data) => this.update(data)).fail((data) => this.updateFailed(data));
  }

  private updateJSONWithArray(jSON, property: any) {
    this.clearProperty(property);

    if (this[property].type !== undefined) {
      jSON[property].forEach(element => {
        let properElement = new this[property].type(this);
        // console.log(properElement)
        properElement.updateJSON(element);
        this[property].push(properElement);
      });
    } else {
      jSON[property].forEach(element => {
        let object = AppObject.types[element.type];
        let properElement;
        if (object !== null && object !== undefined) {
          properElement = new object(this);
        } else {
          object = AppObject.types['ComponentGeneric'];
          properElement = new object(this, element.type);
        }
        properElement.updateJSON(element);
        this[property].push(properElement);

      });
    }
  }

  private updateJSONWithType(jSON, property: any, type: number) {
    // console.log('Prop2');
    if (type === 2) {
      // console.log('Prop3 is var');
      this.elementStyle(jSON, property);
    } else {
      if (property === 'style') {
        // console.log('Prop is style');
        this.updateJSON(jSON[property], 2);
      } else if (property === 'special') {
        // console.log('Prop is special');
        this.updateJSONWithSpecialType(jSON, property, type);
      } else {
        // console.log('Prop is not style or special');
        this.elementVar(jSON, property);
      }
    }
  }

  private updateJSONWithSpecialType(jSON, property: any, type: number) {
    for (let property2 in jSON[property]) {
      if (jSON[property].hasOwnProperty(property2)) {
        // console.log('ValueSP:' + property2);
        // console.log('ValueS:' + jSON[property][property2]);
        this.elementSpecial(jSON, property, property2);
      }
    }
  }

  private updateJSONWithObject(jSON, property: any) {
    // console.log('Prop is object');
    if (property === 'element') {
      // console.log('Prop is element');
      this.updateJSON(jSON[property], 1);
      // // console.log('Prop is element OUT');
    } else {
      // console.log('Prop is regular');
      if (this[property] === undefined) {
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
  private setPageBody() {
    this.pageBody = <ComponentPageBody>this.seekFather('ComponentPageBody');
    this.pageBodyChecked = true;
  }

  private setHeader() {
    this.header = <ComponentHeader>this.seekFather('ComponentHeader');
    this.headerChecked = true;
  }

  private setFooter() {
    this.footer = <ComponentFooter>this.seekFather('ComponentFooter');
    this.footerChecked = true;
  }

  private setView() {
    if (this.getPageBody() !== undefined) {
      this.view = <ComponentView>this.pageBody.seekFather('ComponentView');
      if (this.view !== undefined) {
        return;
      }
    }

    if (this.getHeader() !== undefined) {
      this.view = <ComponentView>this.header.seekFather('ComponentView');
      if (this.view !== undefined) {
        return;
      }
    }

    if (this.getFooter() !== undefined) {
      this.view = <ComponentView>this.footer.seekFather('ComponentView');
      if (this.view !== undefined) {
        return;
      }
    }

    this.view = <ComponentView>this.seekFather('ComponentView');
  }

  private setPage() {
    if (this.getPageBody() !== undefined) {
      this.page = this.pageBody.nextPageName;
      return;
    }

    if (this.getHeader() !== undefined) {
      this.page = this.header.getTag();
      return;
    }

    if (this.getFooter() !== undefined) {
      this.page = this.footer.getTag();
      return;
    }
  }
}

import { AppObjectEvent } from './event/appObjectEvent';
import { ComponentView } from './../../componentView';
import { ComponentPageBody } from './../../body/componentPageBody';
import { ComponentHeader } from './../../header/componentHeader';
import { ComponentFooter } from './../../footer/componentFooter';
AppObject.addConstructor(AppObject.name, AppObject);
