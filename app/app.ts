import { ComponentView } from './view/componentView';
// try { require('./app.css'); } catch (e) { };

export class App {
  private view: ComponentView;

  constructor() {
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}
