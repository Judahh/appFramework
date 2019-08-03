import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../component/component';
import { ComponentKeyboard } from './../keyboard/componentKeyboard';

export class ComponentTextArea extends Component {
  arrayKeyboard: Array<ComponentKeyboard>;
  language: string;

  constructor(father?: Component) {
    super('textarea', father);
    this.className = 'ComponentTextArea';
    this.arrayKeyboard = new Array<ComponentKeyboard>();
    this.arrayKeyboard.type = ComponentKeyboard;
  }
  public renderAfterUpdate() {
    if (this.language === undefined) {
      // this.getLanguage();
    }
    super.renderAfterUpdate();
    // if (!(<HTMLInputElement>this.element).placeholder) {
    //   (<HTMLInputElement>this.element).placeholder = this.information;
    // }

  }

  protected updateLanguage(jSON) {
    let property;
    for (property in jSON) {
      if (property !== undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]['language'] === Util.getInstance().getCurrentLanguage()) {
          // console.log('LANG:'+jSON[property]['language']);
          break;
        }
      }
    }

    // console.log('selected lan:'+property);
    let subJSON = jSON[property];
    for (let languageProperty in subJSON) {
      if (languageProperty !== undefined) {
        if (!subJSON.hasOwnProperty(languageProperty)) {
          continue;
        }

        if (languageProperty === (<HTMLTextAreaElement>this.element).placeholder) {
          if (subJSON[languageProperty].constructor === Array) {
            (<HTMLTextAreaElement>this.element).placeholder = '';
            subJSON[languageProperty].forEach(element => {
              (<HTMLTextAreaElement>this.element).placeholder += element + '<br/>';
            });
          } else {
            (<HTMLTextAreaElement>this.element).placeholder = subJSON[languageProperty];
          }
          // console.log('INNER:'+subJSON[languageProperty]);
        }
      }
    }
  }
}
ComponentTextArea.addConstructor('ComponentTextArea', ComponentTextArea);
