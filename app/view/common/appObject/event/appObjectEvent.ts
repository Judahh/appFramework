import { AppObject } from './../appObject';
import { AppObjectFactory } from './../factory/appObjectFactory';

export class AppObjectEvent extends AppObject {
  name: string;
  link: string;
  code: string;
  runFunction: string;
  subscribeCode: string;
  subscribeFunction: string;
  appObject: AppObject;
  running: boolean;
  verified: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    this.className = 'AppObjectEvent';
    this.verified = true;
  }

  public renderAfterUpdateJSON() {
    if (this.name !== undefined) {
      switch (this.name) {
        case 'build':
          this.onEvent();
          this.running = true;
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
      this.father.destroyElement();
      // delete this.father;
    }
  }

  private activateFather() {
    // console.log('FATHER DESTROY:', this.father, this);
    if (!this.verified) {
      this.father.insert(this.father.getFather().getElement());
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
    let element = this.getFather().getElement();
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
    let code = this.code;
    let runFunction = this.runFunction;
    if (this.subscribeCode !== undefined) {
      code = this.subscribeCode;
    }
    if (this.subscribeFunction !== undefined) {
      runFunction = this.subscribeFunction;
    }

    appObject = AppObjectFactory.create(code, this);
    // tslint:disable-next-line:no-eval
    eval('appObject.' + runFunction + '((data) => { _self.auth(data); });');
  }
}
AppObjectEvent.addConstructor('AppObjectEvent', AppObjectEvent);
