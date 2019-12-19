import { Component } from './common/component/component';
import { ComponentPageBody } from './body/componentPageBody';
import { ComponentRouter } from './common/component/generic/router/componentRouter';

export class ComponentView extends Component { // body
  constructor(sVG?: boolean, arrayType?: string[]) {
    super('body', sVG, arrayType);
    this.className = 'ComponentView';
    this.resetHeader();
    this.resetNotification();
    this.resetPageBody();
    this.resetFooter();
  }

  public goToPage(pageName?: string) {
    this.getPageBody().name = pageName;
  }

  public getHeader() {
    return <ComponentRouter>this.arrayChild[0];
  }
  public getNotification() {
    return <ComponentRouter>this.arrayChild[1];
  }

  public getPageBody() {
    return <ComponentPageBody>this.arrayChild[2];
  }

  public getFooter() {
    return <ComponentRouter>this.arrayChild[3];
  }

  public resetHeader() {
    if (this.getHeader())
      this.getHeader().destroyElement();
    this.setChild(new ComponentRouter('ComponentHeader', 'header', '', '', 'header'), 0);
  }

  public resetNotification() {
    if (this.getNotification())
      this.getNotification().destroyElement();
    this.setChild(new ComponentRouter('ComponentNotification', 'notification', 'none', 'Notification', 'none'), 1);
  }

  public resetPageBody() {
    if (this.getPageBody())
      this.getPageBody().destroyElement();
    this.setChild(new ComponentPageBody(), 2);
  }

  public resetFooter() {
    if (this.getFooter())
      this.getFooter().destroyElement();
    this.setChild(new ComponentRouter('ComponentFooter', 'footer', '', '', 'footer'), 3);
  }
}
ComponentView.addConstructor('ComponentView', ComponentView);
