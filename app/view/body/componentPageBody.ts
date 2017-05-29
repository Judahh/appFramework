importJS('app/view/util/util');
importJS('app/view/body/background/componentBackground');
importJS('app/view/common/component/component');
importJS('app/view/common/divisorBlock/componentDivisorBlock');

// importCSS('app/view/body/componentPageBody');

class ComponentPageBody extends Component{
  background:ComponentBackground;
  arrayDivisorBlock:Array<ComponentDivisorBlock>;

  constructor(father?: Component,pageName?:string){
    super(father);
    this.background = new ComponentBackground(this);
    this.arrayDivisorBlock = new Array<ComponentDivisorBlock>();
    this.arrayDivisorBlock.type=ComponentDivisorBlock;
    this.goToPage(pageName);
  }

  public goToPage(pageName?:string){
    console.log("goToPage");
    if(pageName){
      this.getJSONPromise(pageName);
    }else{
      this.getJSONPromise("test");
    }
  }
}