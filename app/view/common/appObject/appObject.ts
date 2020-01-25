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

  public static getInstance(geneticCode?: GeneticCode) {
    return new this(geneticCode);
  }

  public static addType(type) {
    AppObject.addConstructor(type.getConstructor());
  }

  public static addConstructor(constructor) {
    let className = constructor.name;
    if (AppObject.types === undefined) {
      AppObject.types = {};
    }
    if (AppObject.types[className] === undefined) {
      AppObject.types[className] = constructor;
      // console.log('className', className);
      // console.log('constructor', constructor);
    }
  }

  constructor(geneticCode?: GeneticCode) {
    super({...{className: 'AppObject'}, ...geneticCode});

    this.checkPageFrame = false;
    this.checkView = false;
    this.checkNotification = false;
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
    let geneticCode: GeneticCode = {father: _self} // , jSON: jSON}; fix: fazer uma maneira do populate ser chamado só depois do chonstrutor da child
    let object = AppObject.getTypes()[jSON.type];
    let properElement;
    if (object !== null && object !== undefined) {
      properElement = new object(geneticCode);
    } else {
      object = AppObject.getTypes()['ComponentGeneric'];
      properElement = new object({...{specificName: jSON.type}, ...geneticCode});
    }
    // console.log('object', object);
    // console.log('properElement', properElement);
    properElement.populate(jSON); // remover depois do fix
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
    if (_self[property] && _self[property].constructor &&
      _self[property].constructor === Function &&
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
    _self.setProperties();
    _self.renderAfterUpdate();
  }

  protected setProperties() {
  }

  public renderBeforeUpdate() {

  }


  public renderAfterUpdate() {

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
import { GeneticCode } from '../child/geneticCode';
AppObject.addConstructor(AppObject);
