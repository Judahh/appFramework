import { Component } from './../../../component/component';
import { Util } from './../../../../util/util';

export class ComponentOption extends Component {
  information: string;
  language: string;

  constructor(father?: Component) {
    super('option', father);
    this.className = 'ComponentOption';
  }

  public renderAfterUpdateJSON() {
    if (this.language === undefined) {
      this.getLanguage();
    }
    super.renderAfterUpdateJSON();
    if (!this.element.innerHTML) {
      this.element.innerHTML = this.information;
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
ComponentOption.addConstructor('ComponentOption', ComponentOption);
