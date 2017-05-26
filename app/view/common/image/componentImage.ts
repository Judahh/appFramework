importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/image/img/componentImg');

// importCSS('app/view/common/image/componentImage');

class ComponentImage extends Component{
  img:ComponentImg;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.img = new ComponentImg(this.element);
  }

  public render() {
    this.getJSONPromise("test");
    this.img.render();
  }
}