importJS('app/view/util/util');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/component/component');

importCSS('app/view/body/componentPageBody');

class ComponentPageBody extends Component{
  render() {
    let image=new ComponentImage(this);
    return Util.elementHTML(this.name, this.id,"");
  }
}