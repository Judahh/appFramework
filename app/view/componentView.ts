import { Component } from './common/component/component';
import { ComponentGeneric } from './common/component/generic/componentGeneric';
import { ComponentPageBody } from './body/componentPageBody';

export class ComponentView extends Component { // body
  constructor(father?: Component) {
    super('body', father);
    this.className = 'ComponentView';
    this.header = new ComponentGeneric(this, 'ComponentHeader');
    this.pageBody = new ComponentPageBody(this);
    this.footer = new ComponentGeneric(this, 'ComponentFooter');
  }

  public goToPage(pageName?: string) {
    this.pageBody.goToPage(pageName);
  }

  public resetHeader() {
    this.header.destroyElement();
    this.header = new ComponentGeneric(this, 'ComponentHeader');
  }

  public resetPageBody() {
    this.pageBody.destroyElement();
    this.pageBody = new ComponentPageBody(this);
  }

  public resetFooter() {
    this.footer.destroyElement();
    this.footer = new ComponentGeneric(this, 'ComponentFooter');
  }
}
ComponentView.addConstructor('ComponentView', ComponentView);
