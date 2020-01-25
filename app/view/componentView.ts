import { Component } from './common/component/component';
import { ComponentPageBody } from './body/componentPageBody';
import { ComponentRouter } from './common/component/generic/router/componentRouter';
import { GeneticCode } from './common/child/geneticCode';
import { ComponentPage } from './page/componentPage';

export class ComponentView extends Component { // body

  private static clear() {
    let range = document.createRange();
    range.selectNodeContents(document.getElementsByTagName('body')[0]);
    range.deleteContents();
  }
  constructor(geneticCode?: GeneticCode) {
    ComponentView.clear();
    super({ ...{ className: 'ComponentView', tag: 'body' }, ...geneticCode });
    this.resetHeader();
    this.resetNotification();
    this.resetPageBody();
    this.resetFooter();
  }

  public goToPage(pageName?: string) {
    this.getPageBody().pageName = pageName;
  }

  public getPageFrame() {
    let pageBody = this.getPageBody();
    return (<ComponentPage>pageBody.getPages()[pageBody.getNextName()]).getCurrentFrame();
  }

  public getHeader() {
    return <ComponentRouter>this.getChildAt(0);
  }
  public getNotification() {
    return <ComponentRouter>this.getChildAt(1);
  }

  public getPageBody() {
    return <ComponentPageBody>this.getChildAt(2);
  }

  public getFooter() {
    return <ComponentRouter>this.getChildAt(3);
  }

  public resetHeader() {
    if (this.getHeader())
      this.getHeader().destroyElement();
    let componentRouter = new ComponentRouter({ father: this, position: 0, specificName: 'ComponentHeader', routerName: 'header', nextName: '', suffix: '', main: 'header' });
  }

  public resetNotification() {
    if (this.getNotification())
      this.getNotification().destroyElement();
    let componentRouter = new ComponentRouter({ father: this, position: 1, specificName: 'ComponentNotification', routerName: 'notification', nextName: 'none', suffix: 'Notification', main: 'none' });
  }

  public resetPageBody() {
    if (this.getPageBody())
      this.getPageBody().destroyElement();
    let componentRouter = new ComponentPageBody({ father: this, position: 2 });
  }

  public resetFooter() {
    if (this.getFooter())
      this.getFooter().destroyElement();
    let componentRouter = new ComponentRouter({ father: this, position: 3, specificName: 'ComponentFooter', routerName: 'footer', nextName: '', suffix: '', main: 'footer' });
  }
}
ComponentView.addConstructor(ComponentView);
