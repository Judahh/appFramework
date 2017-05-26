importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/componentAnimationEffect');

class ComponentFont extends Component{
  animationEffect:ComponentAnimationEffect;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.animationEffect = new ComponentAnimationEffect(this.element);
  }

  public render() {
    this.animationEffect.render();
  }
}