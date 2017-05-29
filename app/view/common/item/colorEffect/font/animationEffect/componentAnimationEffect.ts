importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/animationSubEffect/componentAnimationSubEffect');

class ComponentAnimationEffect extends Component{
  animationSubEffect: ComponentAnimationSubEffect;

  constructor(father?: Component){
    super(father);
    this.animationSubEffect = new ComponentAnimationSubEffect(this);
  }
}