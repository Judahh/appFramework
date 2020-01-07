import { ComponentRouter } from '../router/componentRouter';
import { GeneticCode } from '../../../child/geneticCode';

try { require('./ComponentTemplate.css'); } catch (e) { };

export class ComponentTemplate extends ComponentRouter {

  constructor(geneticCode?: GeneticCode) {
    super({...{name: 'ComponentTemplate', specificName: 'ComponentTemplate', routerName: 'cTemplate', suffix: 'Template', main: ''}, ...geneticCode});
  }

  protected init(nextName?: string) {
    // this.name = nextName;
  }
}
ComponentTemplate.addConstructor('ComponentTemplate', ComponentTemplate);
