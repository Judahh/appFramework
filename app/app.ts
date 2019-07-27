import { ComponentView } from './view/componentView';
// tslint:disable-next-line:no-empty
try { require('./app.css'); } catch (e) { };

export class App {
  private view: ComponentView;

  constructor() {
    this.view = new ComponentView();
    // this.view.renderOnFatherElement(document);
  }
}
