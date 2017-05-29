importJS('app/view/util/util');
importJS('app/view/body/background/componentBackground');
importJS('app/view/common/component/component');
importJS('app/view/common/divisorBlock/componentDivisorBlock');

// importCSS('app/view/body/componentPageBody');

class ComponentPageBody extends Component{
  background:ComponentBackground;
  arrayDivisorBlock:Array<ComponentDivisorBlock>;


  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.background = new ComponentBackground(this.element);
    this.arrayDivisorBlock = new Array<ComponentDivisorBlock>();
    this.arrayDivisorBlock.type=ComponentDivisorBlock;
  }

  render() {
    this.getJSONPromise("test");
  }
}