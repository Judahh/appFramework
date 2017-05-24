importJS('app/view/view');
importJS('app/view/common/component/component');

class App{
  private view:View;

  constructor(body){
    this.view = new View(body);
  }
}