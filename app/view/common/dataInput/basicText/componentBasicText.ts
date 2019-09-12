import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentKeyboard } from '../keyboard/componentKeyboard';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';
import * as ko from 'knockout'

export class ComponentBasicText extends ComponentBasicInformation {
  arrayKeyboard: Array<ComponentKeyboard>;

  constructor(tag?: string, father?: Component) {
    super(tag, father);
    let _self = this;
    _self.className = 'ComponentBasicText';
    _self.arrayKeyboard = new Array<ComponentKeyboard>();
    _self.arrayKeyboard.type = ComponentKeyboard;
    class BasicTextViewModel {
      constructor() {
        let varName =  'text' + _self.element.id;
        eval('this.' + varName + ' = ko.observable("")');
        _self.element.setAttribute('data-bind', 'text: ' + varName);
      }
    }
    ko.applyBindings(new BasicTextViewModel());
  }

  public renderAfterUpdate() {
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

        if (languageProperty === (<HTMLInputElement|HTMLTextAreaElement>this.element).placeholder) {
          if (subJSON[languageProperty].constructor === Array) {
            (<HTMLInputElement|HTMLTextAreaElement>this.element).placeholder = '';
            subJSON[languageProperty].forEach(element => {
              (<HTMLInputElement|HTMLTextAreaElement>this.element).placeholder += element + '<br/>';
            });
          } else {
            (<HTMLInputElement|HTMLTextAreaElement>this.element).placeholder = subJSON[languageProperty];
          }
          // console.log('INNER:'+subJSON[languageProperty]);
        }
      }
    }
  }
}
ComponentBasicText.addConstructor('ComponentBasicText', ComponentBasicText);
