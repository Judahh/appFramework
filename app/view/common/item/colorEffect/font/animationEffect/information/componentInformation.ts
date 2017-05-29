importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');

class ComponentInformation extends Component{
  information: string;
  link: string;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    // this.item=new ComponentItem(this.element);
  }

  public renderAfterUpdateJSON(){
    this.element.innerHTML=this.information;
  }
}