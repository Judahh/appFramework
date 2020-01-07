import { Component } from './common/component/component';
import { ComponentPageBody } from './body/componentPageBody';
import { ComponentRouter } from './common/component/generic/router/componentRouter';
import { GeneticCode } from './common/child/geneticCode';

export class ComponentView extends Component { // body
  constructor(geneticCode?: GeneticCode) {
    super({ ...{name: 'ComponentView', tag: 'body'}, ...geneticCode});
    this.resetHeader();
    this.resetNotification();
    this.resetPageBody();
    this.resetFooter();
  }

  public goToPage(pageName?: string) {
    this.getPageBody().name = pageName;
  }

  public getHeader() {
    return <ComponentRouter>this.getArrayChild[0];
  }
  public getNotification() {
    return <ComponentRouter>this.getArrayChild[1];
  }

  public getPageBody() {
    return <ComponentPageBody>this.getArrayChild[2];
  }

  public getFooter() {
    return <ComponentRouter>this.getArrayChild[3];
  }

  public resetHeader() {
    if (this.getHeader())
      this.getHeader().destroyElement();
    new ComponentRouter({ father: this, position: 0, specificName: 'ComponentHeader', routerName: 'header', nextName: '', suffix: '', main: 'header' });
  }

  public resetNotification() {
    if (this.getNotification())
      this.getNotification().destroyElement();
    new ComponentRouter({ father: this, position: 1, specificName: 'ComponentNotification', routerName: 'notification', nextName: 'none', suffix: 'Notification', main: 'none' });
  }

  public resetPageBody() {
    if (this.getPageBody())
      this.getPageBody().destroyElement();
    new ComponentPageBody({ father: this, position: 2 });
  }

  public resetFooter() {
    if (this.getFooter())
      this.getFooter().destroyElement();
    new ComponentRouter({ father: this, position: 3, specificName: 'ComponentFooter', routerName: 'footer', nextName: '', suffix: '', main: 'footer' });
  }
}
ComponentView.addConstructor('ComponentView', ComponentView);
