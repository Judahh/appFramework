importJS('app/view/common/component/component');

class ComponentInformation extends Component{
  information: string;

  constructor(father?: Component){
    super(father,"a");
    // this.item=new ComponentItem(this.element);
  }

  public renderAfterUpdateJSON(){
    this.element.innerHTML=this.information;
  }
}