importJS('app/view/util/util');
importJS('app/view/common/component/component');

importCSS('app/view/header/componentHeader');

class ComponentHeader extends Component{
  render() {
    return Util.elementHTML(this.name, this.id,"nasidas");
  }
}