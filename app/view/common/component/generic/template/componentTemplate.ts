import { ComponentRouter } from '../router/componentRouter';
import { GeneticCode } from '../../../child/geneticCode';

try { require('./ComponentTemplate.css'); } catch (e) { };

export class ComponentTemplate extends ComponentRouter {

  constructor(geneticCode?: GeneticCode) {
    super({...{pageName: 'ComponentTemplate', specificName: 'ComponentTemplate', routerName: 'cTemplate', suffix: 'Template', main: ''}, ...geneticCode});
  }

  protected init(nextName?: string) {
    // this.pageName = nextName;
  }
}
ComponentTemplate.addConstructor(ComponentTemplate);
