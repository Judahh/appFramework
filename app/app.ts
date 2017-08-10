importJS('app/view/common/component/component');
importJS('app/view/componentView');
importJS('code/age');

class App{
  private view:ComponentView;

  constructor(){
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}