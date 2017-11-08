// import { Array } from 'simpleutils';
import { Util } from './../util/util';
import { ComponentBackground } from './background/componentBackground';
import { ComponentDivisor } from './../common/divisor/componentDivisor';
import { Component } from './../common/component/component';

try {require('./componentPageBody.css');}catch(e){};


export class ComponentPageBody extends Component {
  background: ComponentBackground;
  arrayDivisor: Array<ComponentDivisor>;
  currentPageName: string;
  nextPageName: string;

  constructor(father?: Component, pageName?: string) {
    super(father);
    this.background = new ComponentBackground(this);
    this.arrayDivisor = new Array<ComponentDivisor>();
    this.arrayDivisor.type = ComponentDivisor;
    this.goToPage(pageName);
  }

  public goToPage(pageName?: string) {
    // console.log('goToPage:'+pageName);
    let cookie = Util.getCookie('page');
    if (this.currentPageName == undefined ||
      this.currentPageName != pageName) {
      this.nextPageName = pageName;
      // console.log('goToPage2:'+pageName);
      if (pageName) {
        this.getJSONPromise(pageName);
      } else if (cookie != '') {
        this.goToPage(cookie);
      }
      else {
        this.goToPage('home');
      }
    }
  }

  protected updateFailed(data) {
    this.goToPage('unknown');
  }

  public renderAfterUpdateJSON() {
    super.renderAfterUpdateJSON();
    this.currentPageName = this.nextPageName;
    window.history.pushState('', '', '/' + this.currentPageName);
    Util.clearCookie('page');
  }
}