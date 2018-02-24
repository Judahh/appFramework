import { Util } from './../util/util';
import { Component } from './../common/component/component';
import { ComponentGeneric } from '../common/component/generic/componentGeneric';
// tslint:disable-next-line:no-empty
try { require('./componentPageBody.css'); } catch (e) { };

export class ComponentPageBody extends Component {
  background: ComponentGeneric;
  currentPageName: string;
  nextPageName: string;

  constructor(father?: Component, pageName?: string) {
    super(father);
    this.background = new ComponentGeneric(this, 'ComponentBackground');
    this.goToPage(pageName);
  }

  public goToPage(pageName?: string) {
    // console.log('goToPage:'+pageName);
    let cookie = Util.getInstance().getCookie('page');
    if (this.currentPageName === undefined ||
      this.currentPageName !== pageName) {
      this.nextPageName = pageName;
      // console.log('goToPage2:'+pageName);
      if (pageName) {
        this.getJSONPromise(pageName);
      } else if (cookie !== '') {
        this.goToPage(cookie);
      } else {
        this.goToPage('home');
      }
    }
  }

  public refreshPage() {
    let page = this.currentPageName;
    this.currentPageName = undefined;
    this.goToPage(page);
  }

  protected updateFailed(data) {
    this.goToPage('unknown');
  }

  public renderAfterUpdateJSON() {
    super.renderAfterUpdateJSON();
    this.currentPageName = this.nextPageName;
    window.history.pushState('', '', '/' + this.currentPageName);
    Util.getInstance().clearCookie('page');
  }
}
ComponentPageBody.addConstructor(ComponentPageBody.name, ComponentPageBody);
