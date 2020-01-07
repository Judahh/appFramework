import 'simpleutils';
import { Util } from 'basicutil';
import { AppObject } from './../appObject/appObject';

export class Component extends AppObject {
  protected infoMap: { [key: string]: string };
  protected form: ComponentGeneric;
  protected formChecked: boolean;
  protected basicViewModel: BasicViewModel;
  public item: ComponentGeneric;

  public getTag() {
    return this.basicViewModel.getElement().tagName;
  }

  public constructor(geneticCode: GeneticCode) { // ex: {tag: 'chart', sVG: geneticCode.sVG, arrayType: geneticCode.arrayType}
    super(geneticCode);
    let _self = this;
    _self.className = 'Component';
  }

  public setFather(father) {
    super.setFather(father);
    if (this.father && this.father instanceof Component) {
      // console.log('this.father.tag:' + this.father.tag);
      this.insert(<Component>father);
      this.father.renderAfterUpdate();
    }
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }

  public getElement() {
    return this.basicViewModel.getElement();
  }

  public isElementInnerHTMLEmpty() {
    return (!this.basicViewModel.getElement().innerHTML || this.basicViewModel.getElement().innerHTML === undefined || this.basicViewModel.getElement().innerHTML === 'undefined');
  }

  public cleanElementInnerHTML() {
    if (this.isElementInnerHTMLEmpty()) {
      this.clearElementInnerHTML();
    }
  }

  public clearElementInnerHTML() {
    this.basicViewModel.getElement().innerHTML = '';
  }

  public setElementSource(source: string) {
    let tmp: any = this.basicViewModel.getElement();
    tmp.src = source;
  }

  public insert(father: Component) {
    this.insertElement(father.getElement());
  }

  public insertElement(fatherElement: HTMLElement | SVGElement | SVGSVGElement) {
    // this.render();
    // console.log('FATHER:' + fatherElement.tagName);
    // console.log('this:' + this.getClassName());
    fatherElement.appendChild(this.basicViewModel.getElement());
  }

  public destroyElement() {
    let element = document.getElementById(this.basicViewModel.getElement().id);
    if (element === undefined || element === null) {
      if (this.basicViewModel.getElement() !== undefined && this.basicViewModel.getElement() !== null) {
        this.basicViewModel.getElement().remove(); // parentElement.removeChild(element);
        // this.element.outerHTML = "";
      }
    } else {
      element.remove(); // .parentElement.removeChild(element);
      // element.outerHTML = "";
    }
  }

  public destroyChildElements() {
    let range = document.createRange();
    range.selectNodeContents(this.basicViewModel.getElement());
    range.deleteContents();
  }

  protected initGeneticCode(geneticCode) {
    let _self = this;
    geneticCode = super.initGeneticCode(geneticCode);
    _self.basicViewModel = new BasicViewModel(geneticCode);
    _self.basicViewModel.init();
    _self.getItem();
    return geneticCode;
  }

  protected setForm() {
    this.form = <ComponentGeneric>this.seekFather('ComponentForm');
    this.formChecked = true;
  }

  protected clearProperty(property) {
    if (this.getProperty(property).length > 0) {
      // console.log('CLEAR');
      // console.log(property);
      // console.log(this[property][0].getTag());
      let elements = this.basicViewModel.getElement().getElementsByTagName(this.getProperty(property)[0].getTag());
      Util.getInstance().removeElements(elements);
      this.getProperty(property).length = 0;
    }
  }

  protected generateElementStyleFromJSON(jSON, property) {
    this.basicViewModel.getElement().style[property] = jSON[property];
  }

  protected generateElementVarFromJSON(jSON, property) {
    // this.element[property] = jSON[property];
    this.basicViewModel.getElement().setAttribute(property, jSON[property]);
  }

  public beforeUpdateLanguage() {
    if (this.properties)
      for (const property of Object.keys(this.properties)) {
        if (this.isElementInnerHTMLEmpty()) {
          this.basicViewModel.setAttributeValue(property, this.properties[property]);
        }
      }
    this.cleanElementInnerHTML();
  }

  protected afterUpdateLanguage() {
    if (this.properties)
      for (const property of Object.keys(this.properties)) {
        let variable = this.seekVariable(this.properties[property]);
        if (variable !== undefined) {
          this.basicViewModel.setAttributeValue(property, variable);
        }
      }
  }

  private getItem() {
    this.item = <ComponentGeneric>this.seekFather('ComponentItem');
  }
}
import { ComponentGeneric } from './../component/generic/componentGeneric';
import { BasicViewModel } from '../basicViewModel/basicViewModel';
import { GeneticCode } from '../child/geneticCode';

Component.addConstructor('Component', Component);
