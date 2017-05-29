importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/image/componentImage');

// importCSS('app/view/body/background/componentBackground');

class ComponentBackground extends Component{
  image:ComponentImage;

  constructor(father?: Component){
    super(father);
    this.image = new ComponentImage(this);
  }
}