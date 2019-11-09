import { AppObject } from './../appObject';
import { AppObjectFactory } from './../factory/appObjectFactory';
import * as $ from 'jquery';
import { Component } from '../../component/component';

export class AppObjectEvent extends AppObject {
  name: string;
  link: string;
  code: string;
  runFunction: string;
  subscribeCode: string;
  subscribeFunction: string;
  builder: string;
  eventListener: boolean;
  appObject: AppObject;
  running: boolean;
  verified: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    this.className = 'AppObjectEvent';
    this.verified = true;
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (this.name !== undefined) {
      switch (this.name) {
        case 'build':
          this.onLoad();
          break;

        case 'router':
          this.addEventListener('click');
          break;

        case 'authorization':
          this.auth(this.onEvent());
          this.subscribe();
          break;

        default:
          this.addEventListener(this.name);
          break;
      }
    }
  }

  private onLoad() {
    let _self = this;
    if (_self.builder === null || _self.builder === undefined || _self.builder === '') {
      let element = (<Component>_self.getFather()).getElement();
      element.onload = _self.onEvent();
    } else {
      switch (_self.builder) {
        case 'window':
          window.onload = _self.onEvent();
          break;
        case 'document':
          $(document).ready = _self.onEvent();
          break;
        default:
          if (_self.eventListener) {
            _self.onEvent();
            _self.addEventListener(_self.builder);
          } else {
            eval('_self.builder =' + _self.onEvent());
            break;
          }
      }
    }
    _self.running = true;
  }

  private auth(verified: boolean) {
    if (verified) {
      this.activateFather();
    } else {
      this.deactivateFather();
    }
    this.verified = verified;
  }

  private deactivateFather() {
    // console.log('FATHER DESTROY:', this.father, this);
    if (this.verified) {
      (<Component>this.father).destroyElement();
      // delete this.father;
    }
  }

  private activateFather() {
    // console.log('FATHER DESTROY:', this.father, this);
    if (!this.verified) {
      (<Component>this.father).insert(<Component>(<Component>this.father).getFather());
    }
  }

  private checkLink(runFunction) {
    if (runFunction(this.link)) {
      return this.link;
    }
    return null
  }

  private addEventListener(event?: string) {
    let _self = this;
    let element = (<Component>this.getFather()).getElement();
    element.addEventListener(event, () => _self.onEvent());
  }

  private onEvent() {
    if (this.code !== undefined && this.runFunction !== undefined) {
      let appObject = AppObjectFactory.create(this.code, this);
      for (let property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log('CODE:' + this.code);

      if (this.link !== undefined) {
        // tslint:disable-next-line:no-eval
        let link = this.checkLink(eval('appObject.' + this.runFunction));
        if (link !== undefined && link !== null) {
          this.getView().goToPage(link);
        }
        return link;
      } else {
        // tslint:disable-next-line:no-eval
        return eval('appObject.' + this.runFunction + ';');
      }
    } else {
      if (this.link !== undefined) {
        this.getView().goToPage(this.link);
        return this.link;
      }
    }
  }

  private subscribe() {
    let appObject;
    let _self = this;
    let code = _self.code;
    let runFunction = _self.runFunction;
    if (_self.subscribeCode !== undefined) {
      code = _self.subscribeCode;
    }
    if (_self.subscribeFunction !== undefined) {
      runFunction = _self.subscribeFunction;
    }

    appObject = AppObjectFactory.create(code, _self);
    // tslint:disable-next-line:no-eval
    eval('appObject.' + runFunction + '((data) => { _self.auth(data); });');
  }
}
AppObjectEvent.addConstructor('AppObjectEvent', AppObjectEvent);
