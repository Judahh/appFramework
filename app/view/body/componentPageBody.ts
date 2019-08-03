import { Component } from './../common/component/component';
import { AppObject } from './../common/appObject/appObject';
import { ComponentRouter } from '../common/component/generic/router/componentRouter';

try { require('./componentPageBody.css'); } catch (e) { };

export class ComponentPageBody extends ComponentRouter {

  constructor(father?: Component, pageName?: string) {
    super(father, 'ComponentPageBody', 'page', pageName, '', 'home');
    this.className = 'ComponentPageBody';
  }

  public getAllNotification(appObject: AppObject) {
    return (<Array<ComponentRouter>>appObject.getAllAppObject('ComponentNotification'));
  }

  public getAllNotificationFromHeaderAndFooter() {
    if (this.getHeader() !== undefined && this.getFooter() !== undefined) {
      return this.getAllNotification(this.getHeader()).concat(this.getAllNotification(this.getFooter()));
    }
    return new Array<ComponentRouter>();
  }

  public goToNotificationNone(notification: ComponentRouter) {
    notification.goTo('none');
  }

  public goAllToNotificationNone(arrayNotification: Array<ComponentRouter>) {
    arrayNotification.forEach(notification => {
      this.goToNotificationNone(notification);
    });
  }
}
ComponentPageBody.addConstructor('ComponentPageBody', ComponentPageBody);
