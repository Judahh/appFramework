import { Component } from './../../component/component';
import { ComponentKeyboard } from './../keyboard/componentKeyboard';
import { Util } from './../../../util/util';
try { require('./componentTextArea.css'); } catch (e) { };


export class ComponentTextArea extends Component {
  arrayKeyboard: Array<ComponentKeyboard>;
  language: string;

  constructor(father?: Component, tag?) {
    super(father, 'textarea');
    this.arrayKeyboard = new Array<ComponentKeyboard>();
    this.arrayKeyboard.type = ComponentKeyboard;
  }
  public renderAfterUpdateJSON() {
    if (this.language === undefined) {
      this.getLanguage();
    }
    super.renderAfterUpdateJSON();
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