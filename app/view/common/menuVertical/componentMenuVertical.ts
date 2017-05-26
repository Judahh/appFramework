importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');

class ComponentMenuVertical extends Component{
  class: string;
  arrayItem: Array<ComponentItem>;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type=ComponentItem;
  }

  public render() {
  }

  // public renderAfterUpdateJSON(){
  //   this.arrayItem.forEach(item => {
  //       console.log("ITEM RENDER");
  //       item.render();
  //   });
  // }
}