importJS('app/view/common/component/component');
importJS('app/view/componentView');
importJS('code/imports/imports');
importJS('app/view/common/appClass/appClass');

class App{
  private view:ComponentView;

  constructor(){
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}