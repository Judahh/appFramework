import { ComponentRouter } from '../router/componentRouter';
import { AppObject } from '../../../appObject/appObject';
import { Component } from '../../component';


try { require('./ComponentTemplate.css'); } catch (e) { };

export class ComponentTemplate extends ComponentRouter {

  constructor(father?: Component, pageName?: string) {
    super(father, 'ComponentTemplate', 'template', pageName, 'Template', '');
    this.className = 'ComponentTemplate';
  }
}
ComponentTemplate.addConstructor('ComponentTemplate', ComponentTemplate);
