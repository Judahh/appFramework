import { Component } from './common/component/component';
import { ComponentPageBody } from './body/componentPageBody';
import { ComponentRouter } from './common/component/generic/router/componentRouter';

export class ComponentView extends Component { // body
  constructor(father?: Component) {
    super('body', father);
    this.className = 'ComponentView';
    this.header = new ComponentRouter(this, 'ComponentHeader','header','','','header');
    this.notification = new ComponentRouter(this, 'ComponentNotification','notification','','Notification','none');
    this.pageBody = new ComponentPageBody(this);
    this.footer = new ComponentRouter(this, 'ComponentFooter','footer','','','footer');
  }

  public goToPage(pageName?: string) {
    this.pageBody.goTo(pageName);
  }

  public resetHeader() {
    this.header.destroyElement();
    this.header = new ComponentRouter(this, 'ComponentHeader','header','','','header');
  }

  public resetNotification() {
    this.notification.destroyElement();
    this.notification = new ComponentRouter(this, 'ComponentNotification','notification','','Notification','none');
  }

  public resetPageBody() {
    this.pageBody.destroyElement();
    this.pageBody = new ComponentPageBody(this);
  }

  public resetFooter() {
    this.footer.destroyElement();
    this.footer = new ComponentRouter(this, 'ComponentFooter','footer','','','footer');
  }
}
ComponentView.addConstructor('ComponentView', ComponentView);
