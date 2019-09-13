import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { BasicViewModel } from '../../basicViewModel/basicViewModel';
import { ComponentValue } from '../../basicViewModel/componentValue';
import * as ko from 'knockout'
export class ComponentBasicInformation extends ComponentValue {
  public information: string;


  constructor(tag?: string, father?: Component) {
    super(tag, father, 'text');
    let _self = this;
    _self.className = 'ComponentBasicInformation';
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (!this.element.innerHTML || this.element.innerHTML === undefined || this.element.innerHTML === 'undefined') {
      this.element.innerHTML = this.information;
    }
    if (this.element.innerHTML === undefined || this.element.innerHTML === 'undefined') {
      this.element.innerHTML = '';
    }
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

        if (languageProperty === this.information) {
          if (subJSON[languageProperty].constructor === Array) {
            this.element.innerHTML = '';
            subJSON[languageProperty].forEach(element => {
              this.element.innerHTML += element + '<br/>';
            });
          } else {
            this.element.innerHTML = subJSON[languageProperty];
          }
          // console.log('INNER:'+subJSON[languageProperty]);
        }
      }
    }
  }
}
ComponentBasicInformation.addConstructor('ComponentBasicInformation', ComponentBasicInformation);
