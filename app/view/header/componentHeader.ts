importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');

// importCSS('app/view/header/componentHeader');

class ComponentHeader extends Component{
  render() {
    let item=new ComponentItem(this.element);
    // this.element.innerHTML="nasidas";
  }
}