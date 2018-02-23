import { Component } from './../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentSource.css'); } catch (e) { };

export class ComponentSource extends Component {
}
ComponentSource.addConstructor(ComponentSource.name, ComponentSource);
