import { Component } from './common/component/component';
import { ComponentGeneric } from './common/component/generic/componentGeneric';
import { ComponentPageBody } from './body/componentPageBody';

export class ComponentView extends Component { // body

  header: ComponentGeneric;
  pageBody: ComponentPageBody;
  footer: ComponentGeneric;

  constructor(father?: Component) {
    super(father, 'body');
    this.className = 'ComponentView';
    this.header = new ComponentGeneric(this, 'ComponentHeader');
    this.pageBody = new ComponentPageBody(this);
    this.footer = new ComponentGeneric(this, 'ComponentFooter');
  }

  public goToPage(pageName?: string) {
    this.pageBody.goToPage(pageName);
  }
}
ComponentView.addConstructor('ComponentView', ComponentView);
