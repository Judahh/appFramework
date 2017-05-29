importJS('app/view/common/component/component');
importJS('app/view/header/componentHeader');
importJS('app/view/body/componentPageBody');
importJS('app/view/footer/componentFooter');

class ComponentView extends Component{//body

  header:ComponentHeader;
  pageBody:ComponentPageBody;
  footer:ComponentFooter;

  constructor(father?:Component) {
    super(father,"body");
    this.header=new ComponentHeader(this);
    this.pageBody=new ComponentPageBody(this);
    this.footer=new ComponentFooter(this);
  }

  public goToPage(pageName?:string){
    this.pageBody.goToPage(pageName);
  }
}