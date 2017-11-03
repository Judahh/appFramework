// importJS('app/view/common/component/component');
// importJS('app/view/componentView');
importJS('code/imports/imports');
importJS('app/view/common/appObject/appObject');
import { ComponentView } from './view/componentView';

export class App {
  private view: ComponentView;

  constructor() {
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}