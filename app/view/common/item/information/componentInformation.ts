import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../component/component';

export class ComponentInformation extends Component {
  information: string;
  language: string;
  item: any; // ComponentItem


  constructor(father?: Component) {
    super('a', father);
    this.className = 'ComponentInformation';
    this.getItem();
    // this.item=new ComponentItem(this.element);
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

  private getItem() {
    this.item = <Component/*ComponentItem*/>this.seekFather('ComponentItem');
  }

}
ComponentInformation.addConstructor('ComponentInformation', ComponentInformation);
