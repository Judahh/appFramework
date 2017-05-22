importJS('app/view/util/util');
importJS('app/view/common/image/componentImage');

importCSS('app/view/body/componentBody');

class ComponentBody{
  render() {
    let image=new ComponentImage();
    return Util.elementHTML("pageBody",image.render());
  }
}