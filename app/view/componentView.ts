importJS('app/view/common/component/component');
importJS('app/view/header/componentHeader');
importJS('app/view/body/componentPageBody');
importJS('app/view/footer/componentFooter');

class ComponentView extends Component{//body
  constructor(father?:Component) {
    super(father,"body");
    this.element.innerHTML="";
    let header=new ComponentHeader(this);
    let pageBody=new ComponentPageBody(this,"test");
    let footer=new ComponentFooter(this);
  }

  // renderOnFatherElement(fatherElement:HTMLElement){
  //   this.insert(fatherElement);
  // }
}