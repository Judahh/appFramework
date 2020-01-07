import { ComponentRouter } from '../router/componentRouter';
import { GeneticCode } from '../../../child/geneticCode';

try { require('./ComponentTemplate.css'); } catch (e) { };

export class ComponentTemplate extends ComponentRouter {

  constructor(geneticCode: GeneticCode) {
    super({...geneticCode, ...{specificName: 'ComponentTemplate', routerName: 'cTemplate', suffix: 'Template', main: ''}});
    this.className = 'ComponentTemplate';
  }

  protected init(nextName?: string) {
    // this.name = nextName;
  }
}
ComponentTemplate.addConstructor('ComponentTemplate', ComponentTemplate);
