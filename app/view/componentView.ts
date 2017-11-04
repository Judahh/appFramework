import { Component } from './common/component/component';
import { ComponentHeader } from './header/componentHeader';
import { ComponentPageBody } from './body/componentPageBody';
import { ComponentFooter } from './footer/componentFooter';

export class ComponentView extends Component{//body

  header:ComponentHeader;
  pageBody:ComponentPageBody;
  footer:ComponentFooter;

  constructor(father?:Component) {
    super(father,'body');
    this.header=new ComponentHeader(this);
    this.pageBody=new ComponentPageBody(this);
    this.footer=new ComponentFooter(this);
  }

  public goToPage(pageName?:string){
    this.pageBody.goToPage(pageName);
  }
}