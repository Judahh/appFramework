import 'simpleutils';
import { Util } from 'basicutil';
import { Child } from '../child/child';

export class AppObject extends Child {
  private static types: any;
  page: string;
  notificationName: string;
  view: ComponentView;
  pageFrame: ComponentPageFrame;
  checkPageFrame: boolean;
  checkView: boolean;
  checkNotification: boolean;

  public static getTypes() {
    return this.types;
  }

  public static getInstance() {
    return new this();
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

  constructor() {
    super();

    this.checkPageFrame = false;
    this.checkView = false;
    this.checkNotification = false;
    this.className = 'AppObject';
  }

  protected getConstructor() {
    return this.constructor;
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
    return this.getView().getPageBody();
  }

  public getHeader() {
    return this.getView().getHeader();
  }

  public getFooter() {
    return this.getView().getFooter();
  }

  public getNotification() {
    return this.getView().getNotification();
  }

  public getNotificationName() {
    if (this.notificationName === undefined) {
      this.setNotificationName();
    }
    return this.notificationName;
  }

  protected clearProperty(property) { }

  protected generateElementStyleFromJSON(jSON, property) { }

  protected generateElementVarFromJSON(jSON, property) { }

  protected generateNotElementStyleFromJSON(jSON, property) {
    let _self = this;
    if (property === 'style') {
      // console.log('Prop is style');
      _self.generateFromJSON(jSON[property], JSONObjectType.Style);
    } else {
      // console.log('Prop is special');
      _self.generateElementVarFromJSON(jSON, property);
    }
  }

  protected generateArrayFromJSON(jSON, property: any) {
    let _self = this;
    _self.clearProperty(property);
    if (_self.getProperty(property).type !== undefined) {
      _self.generateElementsFromJSONArrayProperty(jSON, property);
    } else {
      _self.generateObjectsFromJSONArrayProperty(jSON, property);
    }
  }

  protected generateObjectsFromJSONArrayProperty(jSON, property: any) {
    let _self = this;
    jSON[property].forEach(element => {
      _self.generateObjectFromJSON(element, property);
    });
  }

  protected generateElementsFromJSONArrayProperty(jSON, property: any) {
    let _self = this;
    jSON[property].forEach(element => {
      _self.generateElementFromJSON(element, property);
    });
  }

  protected generateObjectFromJSON(jSON, property: any) {
    let _self = this;
    // console.log('START');
    // console.log('type', element.type);
    let object = AppObject.getTypes()[jSON.type];
    let properElement;
    if (object !== null && object !== undefined) {
      properElement = new object();
    } else {
      object = AppObject.getTypes()['ComponentGeneric'];
      properElement = new object(jSON.type);
    }
    // console.log('object', object);
    // console.log('properElement', properElement);
    _self.addChild(properElement, jSON);
    // properElement.populate(jSON);
    // _self[property].push(properElement);
  }

  protected generateElementFromJSON(jSON, property: any) {
    let _self = this;
    let properElement = new _self[property].type(_self);
    // console.log(properElement);
    properElement.populate(jSON);
    _self[property].push(properElement);
  }

  protected generateWithTypeFromJSON(jSON, property: any, type: JSONObjectType) {
    let _self = this;
    // console.log('Prop2');
    if (type === JSONObjectType.Style) {
      // console.log('Prop3 is var');
      _self.generateElementStyleFromJSON(jSON, property);
    } else {
      _self.generateNotElementStyleFromJSON(jSON, property);
    }
  }

  protected generateWithoutTypeFromJSON(jSON, property: any) {
    let _self = this;
    if (typeof jSON[property] === 'object') {
      _self.generatePropertyFromJSON(jSON, property);
    } else {
      // console.log('Prop is var:' + jSON[property]);
      _self.setProperty(property, jSON[property]);
    }
  }

  protected getProperty(property: any) {
    let _self = this;
    if (_self[property].constructor === Function &&
      _self[property]().constructor === Array) {
      return _self[property]();
    }
    return _self[property];
  }

  protected setProperty(property: any, value: any) {
    let _self = this;
    if (_self[property].constructor === Function &&
      _self[property]().constructor === Array) {

    } else
      _self[property] = value;
  }

  protected populateRegularPropertyFromJSON(jSON, property: any) {
    let _self = this;
    if (_self.getProperty(property).constructor === Array) {
      _self.generateArrayFromJSON(jSON, property);
    } else {
      _self[property].populate(jSON[property]);
      // _self[property].insert(_self);
    }
  }

  protected generateRegularPropertyFromJSON(jSON, property: any) {
    let _self = this;
    if (_self[property] === undefined) {
      _self[property] = jSON[property];
      // _self[property].insert(_self);
    } else {
      _self.populateRegularPropertyFromJSON(jSON, property);
    }
  }

  protected generatePropertyFromJSON(jSON, property: any) {
    let _self = this;
    // console.log('Prop is object');
    if (property === 'element') {
      // console.log('Prop is element');
      _self.generateFromJSON(jSON[property], JSONObjectType.Element);
      // // console.log('Prop is element OUT');
    } else {
      // console.log('Prop is regular');
      _self.generateRegularPropertyFromJSON(jSON, property);
    }
  }

  protected populatePropertyFromJSON(jSON, property: any, type?: JSONObjectType) {
    let _self = this;
    // console.log('DEFINED!');
    if (!jSON.hasOwnProperty(property)) {
      return;
    }
    // console.log('TYPE:'+type);
    if (type) {
      _self.generateWithTypeFromJSON(jSON, property, type);
    } else {
      _self.generateWithoutTypeFromJSON(jSON, property);
    }
  }

  protected generateFromJSON(jSON, type?: JSONObjectType) {
    let _self = this;
    for (let property in jSON) {
      // console.log('Prop:' + property);
      if (property !== undefined) {
        _self.populatePropertyFromJSON(jSON, property, type);
      }
    }
  }

  public populate(jSON) {
    let _self = this;
    _self.renderBeforeUpdate();
    // console.log('GENERATE!');
    _self.generateFromJSON(jSON);
    _self.renderAfterUpdate();
  }


  public renderBeforeUpdate() {

  }


  public renderAfterUpdate() {
    this.beforeUpdateLanguage();
    let pageFrame = <ComponentPageFrame>this.seekFather('ComponentPageFrame');
    if (pageFrame !== undefined) {
      // console.log('a');
      // console.log(pageFrame.getFullPage().getLanguage());
      this.updateLanguage(pageFrame.getFullPage().getLanguage());
    }
    // this.updateLanguage((<ComponentPageFrame>this.seekFather('ComponentPageFrame')).getFullPage().getLanguage());
    this.afterUpdateLanguage();
  }

  protected afterUpdateLanguage() {
    // this.updateLanguage(language);
  }

  protected beforeUpdateLanguage() {
    // this.updateLanguage(language);
  }

  protected updateLanguage(jSON) {
    let property;
    for (property in jSON) {
      if (property !== undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]['language'] === Util.getInstance().getCurrentLanguage()) {
          // console.log('LANG:'+jSON[property]['language']);
          break;
        }
      }
    }
    // console.log('selected lan:'+property);
    let subJSON = jSON[property];
    for (let languageProperty in subJSON) {
      if (languageProperty !== undefined) {
        if (!subJSON.hasOwnProperty(languageProperty)) {
          continue;
        }
        if (this.arrayVariable.indexOf(languageProperty) === -1) {
          this.arrayVariable.push(languageProperty);
        }
        let variable = 'this.' + languageProperty;
        // tslint:disable-next-line: no-eval
        eval(variable + '="' + subJSON[languageProperty] + '";');
      }
    }
  }

  public setCurrentLanguage(language: string) {
    Util.getInstance().setLanguage(language);
  }

  public getCurrentLanguage() {
    return Util.getInstance().getCurrentLanguage();
  }

  public getArrayType(array: Array<any>) {
    return array.type;
  }

  public getNameFromArrayName(arrayName: string) {
    return arrayName.split('array')[1];
  }

  public setPageFrame() {
    this.checkPageFrame = true;
    this.pageFrame = <ComponentPageFrame>this.seekFather('ComponentPageFrame');
  }

  private setView() {
    this.checkView = true;
    this.view = <ComponentView>this.seekFather('ComponentView');
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


import { ComponentView } from './../../componentView';
import { ComponentPageFrame } from '../../page/componentPageFrame';
import { JSONObjectType } from './jSONObjectType';
AppObject.addConstructor('AppObject', AppObject);
