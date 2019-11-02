import 'simpleutils';
import { Util } from 'basicutil';

export class AppObject {
  private static types: any;
  protected father: any;
  protected className: string;
  arrayAppObject: Array<AppObject>;
  arrayAppObjectEvent: Array<AppObjectEvent>;

  page: string;
  notificationName: string;

  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentRouter;
  notification: ComponentRouter;
  footer: ComponentRouter;
  pageFrame: ComponentPageFrame;

  checkPageFrame: boolean;
  checkView: boolean;
  checkNotification: boolean;

  public static getTypes() {
    return this.types;
  }

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
      // console.log('name', name);
      // console.log('constructor', constructor);
    }
  }

  constructor(father?: any) {
    if (father) {
      this.father = father;
    }

    this.checkPageFrame = false;
    this.checkView = false;
    this.checkNotification = false;
    this.arrayAppObject = new Array<AppObject>();
    this.arrayAppObjectEvent = new Array<AppObjectEvent>();
    this.arrayAppObjectEvent.type = AppObjectEvent;
    this.className = 'AppObject';
  }

  protected getConstructor() {
    return this.constructor;
  }

  public getClassName() {
    return this.className;
  }

  public getPageFrame() {
    // if (!this.checkPageFrame) {
    this.setPageFrame();
    // }
    return this.pageFrame;
  }

  public getView() {
    if (!this.checkView) {
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
    if (this.pageBody === undefined) {
      this.setPageBody();
    }
    return this.pageBody;
  }

  public getHeader() {
    if (this.header === undefined) {
      this.setHeader();
    }
    return this.header;
  }

  public getFooter() {
    if (this.footer === undefined) {
      this.setFooter();
    }
    return this.footer;
  }

  public getNotification() {
    if (!this.checkNotification) {
      this.setNotification();
    }
    return this.notification;
  }

  public getNotificationName() {
    if (this.notificationName === undefined) {
      this.setNotificationName();
    }
    return this.notificationName;
  }


  protected clearProperty(property) { }


  protected elementStyle(jSON, property) { }


  protected elementVar(jSON, property) { }

  protected updateJSONWithArray(jSON, property: any) {
    this.clearProperty(property);

    if (this[property].type !== undefined) {
      jSON[property].forEach(element => {
        let properElement = new this[property].type(this);
        // console.log(properElement);
        properElement.updateJSON(element);
        this[property].push(properElement);
      });
    } else {
      jSON[property].forEach(element => {
        // console.log('START');
        // console.log('type', element.type);
        let object = AppObject.getTypes()[element.type];
        let properElement;
        if (object !== null && object !== undefined) {
          properElement = new object(this);
        } else {
          object = AppObject.getTypes()['ComponentGeneric'];
          properElement = new object(this, element.type);
        }
        // console.log('object', object);
        // console.log('properElement', properElement);
        properElement.updateJSON(element);
        this[property].push(properElement);

      });
    }
  }

  protected updateJSONWithType(jSON, property: any, type: JSONObjectType) {
    // console.log('Prop2');
    if (type === JSONObjectType.Style) {
      // console.log('Prop3 is var');
      this.elementStyle(jSON, property);
    } else {
      if (property === 'style') {
        // console.log('Prop is style');
        this.updateJSON(jSON[property], JSONObjectType.Style);
      } else {
        // console.log('Prop is special');
        this.elementVar(jSON, property);
      }
    }
  }

  protected updateJSONWithObject(jSON, property: any) {
    // console.log('Prop is object');
    if (property === 'element') {
      // console.log('Prop is element');
      this.updateJSON(jSON[property], JSONObjectType.Element);
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

  protected updateJSON(jSON, type?: JSONObjectType) {
    this.renderBeforeUpdate();
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
    this.renderAfterUpdate();
  }


  public renderBeforeUpdate() {

  }


  public renderAfterUpdate() {
    let pageFrame = <ComponentPageFrame>this.seekFather('ComponentPageFrame');
    if (pageFrame !== undefined) {
      // console.log('a');
      // console.log(pageFrame.getFullPage().getLanguage());
      this.updateLanguage(pageFrame.getFullPage().getLanguage());
    }
    // this.updateLanguage((<ComponentPageFrame>this.seekFather('ComponentPageFrame')).getFullPage().getLanguage());
  }

  public renderAfterFullUpdate(language) {
    // this.updateLanguage(language);
  }


  protected updateLanguage(jSON) { }

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
        if (this.father.getClassName() === 'ComponentGeneric') {
          if (this.father.getClassName() === 'ComponentGeneric') {
            if (this.father.generateTag(className)) {
              if (this.father.generateTag(className).tag === this.father.getTag()) {
                return this.father;
              }
            } else {
              return this.father.seekFather(className);
            }
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

  public getAppObject(className) {
    for (let index = 0; index < this.arrayAppObject.length; index++) {
      const appObject = this.arrayAppObject[index];
      if (appObject.className === className) {
        return appObject;
      }
    }
    return undefined;
  }

  public getAllAppObject(className) {
    let array = new Array<AppObject>();
    for (let index = 0; index < this.arrayAppObject.length; index++) {
      const appObject = this.arrayAppObject[index];
      if (appObject.className === className) {
        array.push(appObject);
      }
    }
    return array;
  }

  public setPageFrame() {
    this.checkPageFrame = true;
    this.pageFrame = <ComponentPageFrame>this.seekFather('ComponentPageFrame');
  }

  private setPageBody() {
    this.pageBody = this.getView().pageBody;
  }

  private setHeader() {
    this.header = this.getView().header;
  }

  private setFooter() {
    this.footer = this.getView().footer;
  }

  private setView() {
    this.checkView = true;
    this.view = <ComponentView>this.seekFather('ComponentView');
  }

  private setNotification() {
    this.checkNotification = true;
    // this.notification = <ComponentRouter>this.seekFather('ComponentNotification');
    // if (this.notification === undefined) {
    this.notification = this.getView().getNotification();
    // }
  }

  private setPage() {
    this.page = this.getPageBody().getNextName();
  }

  private setNotificationName() {
    if (this.getNotification() !== undefined) {
      this.notificationName = this.getNotification().getNextName();
    }
  }
}

import { AppObjectEvent } from './event/appObjectEvent';
import { ComponentView } from './../../componentView';
import { ComponentPageBody } from './../../body/componentPageBody';
import { ComponentGeneric } from '../component/generic/componentGeneric';
import { ComponentRouter } from '../component/generic/router/componentRouter';
import { ComponentPageFrame } from '../../page/componentPageFrame';
import { JSONObjectType } from './jSONObjectType';
AppObject.addConstructor('AppObject', AppObject);
