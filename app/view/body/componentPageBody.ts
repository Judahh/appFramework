import { Util } from './../util/util';
import { Component } from './../common/component/component';
import { ComponentGeneric } from './../common/component/generic/componentGeneric';
import { AppObject } from './../common/appObject/appObject';
import { ComponentNotification } from './../common/notification/componentNotification';
// tslint:disable-next-line:no-empty
try { require('./componentPageBody.css'); } catch (e) { };

export class ComponentPageBody extends Component {
  background: ComponentGeneric;
  currentPageName: string;
  nextPageName: string;

  constructor(father?: Component, pageName?: string) {
    super('pageBody', father);
    this.className = 'ComponentPageBody';
    this.background = new ComponentGeneric(this, 'ComponentBackground');
    this.goToPage(pageName);
  }

  public goToPage(pageName?: string) {
    // console.log('goToPage:'+pageName);
    let cookie = Util.getInstance().getCookie('page');
    if (this.currentPageName === undefined ||
      this.currentPageName !== pageName) {
      this.nextPageName = pageName;
      // this.goAllToNotificationNone(this.getAllNotificationFromHeaderAndFooter());
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

  public getAllNotification(appObject: AppObject) {
    return (<Array<ComponentNotification>>appObject.getAllAppObject('ComponentNotification'));
  }

  public getAllNotificationFromHeaderAndFooter() {
    if (this.getHeader() !== undefined && this.getFooter() !== undefined) {
      return this.getAllNotification(this.getHeader()).concat(this.getAllNotification(this.getFooter()));
    }
    return new Array<ComponentNotification>();
  }

  public goToNotificationNone(notification: ComponentNotification) {
    notification.goToNotification('none');
  }

  public goAllToNotificationNone(arrayNotification: Array<ComponentNotification>) {
    arrayNotification.forEach(notification => {
      this.goToNotificationNone(notification);
    });
  }
}
ComponentPageBody.addConstructor('ComponentPageBody', ComponentPageBody);
