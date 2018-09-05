import { Util } from './../../util/util';

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
  header: ComponentGeneric;
  notification: ComponentRouter;
  footer: ComponentGeneric;

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
    this.notification = <ComponentRouter>this.seekFather('ComponentNotification');
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
AppObject.addConstructor('AppObject', AppObject);
