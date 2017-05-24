importJS('app/view/util/util');
importJS('app/view/common/component/component');

importCSS('app/view/footer/componentFooter');

class ComponentFooter extends Component{
  render() {
    return Util.elementHTML(this.name, id,"nasidas2");
  }
}