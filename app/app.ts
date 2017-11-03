import { ComponentView } from './view/componentView';

export class App {
  private view: ComponentView;

  constructor() {
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}