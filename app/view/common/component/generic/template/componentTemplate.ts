import { ComponentRouter } from '../router/componentRouter';

try { require('./ComponentTemplate.css'); } catch (e) { };

export class ComponentTemplate extends ComponentRouter {

  constructor(pageName?: string) {
    super('ComponentTemplate', 'cTemplate', pageName, 'Template', '');
    this.className = 'ComponentTemplate';
  }

  protected init(nextName?: string) {
    // this.name = nextName;
  }
}
ComponentTemplate.addConstructor('ComponentTemplate', ComponentTemplate);
