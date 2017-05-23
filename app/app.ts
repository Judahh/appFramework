importJS('app/view/view');
importJS('app/view/common/component/component');

class App{

  private view:View;

  constructor(){
    this.view = new View();
  }

  render() {
    return this.view.render();
  }
}