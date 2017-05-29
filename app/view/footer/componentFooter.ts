importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
// importCSS('app/view/footer/componentFooter');

class ComponentFooter extends Component{
  menuHorizontal:ComponentMenuHorizontal;

  constructor(father?: Component){
    super(father);
    this.menuHorizontal=new ComponentMenuHorizontal(this);
    this.getJSONPromise(this.tag);
  }
}