importJS('app/view/util/util');
importJS('app/view/common/component/component');

// importCSS('app/view/footer/componentFooter');

class ComponentFooter extends Component{
  // item:ComponentItem;

  constructor(father?: Component){
    super(father);
    // this.item=new ComponentItem(this.element);
    this.element.innerHTML="nasidas2";
  }
}