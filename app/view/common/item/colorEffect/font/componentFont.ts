importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/item/colorEffect/font/modelFont');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/componentAnimationEffect');

class ComponentFont extends Component{
  private animationEffect;

  public render() {
    this.animationEffect = new ComponentAnimationEffect(this.element);
  }
}