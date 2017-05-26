importJS('app/view/util/util');
importJS('app/view/body/background/componentBackground');
importJS('app/view/common/component/component');

// importCSS('app/view/body/componentPageBody');

class ComponentPageBody extends Component{
  background:ComponentBackground;


  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.background = new ComponentBackground(this.element);
  }

  render() {
    this.background.render();
  }
}