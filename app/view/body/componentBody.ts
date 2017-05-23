importJS('app/view/util/util');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/component/component');

importCSS('app/view/body/componentBody');

class ComponentBody extends Component{
  render() {
    let image=new ComponentImage();
    return Util.elementHTML("pageBody",image.render());
  }
}