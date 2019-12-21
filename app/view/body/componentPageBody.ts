import { AppObject } from './../common/appObject/appObject';
import { ComponentRouter } from '../common/component/generic/router/componentRouter';

try { require('./componentPageBody.css'); } catch (e) { };

export class ComponentPageBody extends ComponentRouter {

  constructor(pageName?: string) {
    super('ComponentPageBody', 'page', pageName, '', 'home');
    this.className = 'ComponentPageBody';
  }

  public getAllNotification(appObject: AppObject) {
    return (<Array<ComponentRouter>>appObject.getAllChildren('ComponentNotification'));
  }

  public getAllNotificationFromHeaderAndFooter() {
    if (this.getHeader() !== undefined && this.getFooter() !== undefined) {
      return this.getAllNotification(this.getHeader()).concat(this.getAllNotification(this.getFooter()));
    }
    return new Array<ComponentRouter>();
  }

  public goToNotificationNone(notification: ComponentRouter) {
    notification.name = 'none';
  }

  public goAllToNotificationNone(arrayNotification: Array<ComponentRouter>) {
    arrayNotification.forEach(notification => {
      this.goToNotificationNone(notification);
    });
  }
}
ComponentPageBody.addConstructor('ComponentPageBody', ComponentPageBody);
