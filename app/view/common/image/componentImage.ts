importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/image/img/componentImg');

// importCSS('app/view/common/image/componentImage');

class ComponentImage extends Component{
  img:ComponentImg;

  public render() {
    this.img = new ComponentImg(this.element);
    this.getJSONPromise("test");
  }
}