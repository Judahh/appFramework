importJS('app/view/util/util');
importJS('app/view/common/component/component');

// importCSS('app/view/footer/componentFooter');

class ComponentFooter extends Component{
  // item:ComponentItem;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    // this.item=new ComponentItem(this.element);
  }

  public render() {
    // this.item.render();
    this.element.innerHTML="nasidas2";
  }
}