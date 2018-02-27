import { Component } from './../../component/component';
import { ComponentDataList } from './../textField/dataList/componentDataList';
import { ComponentKeyboard } from './../keyboard/componentKeyboard';
import { Util } from './../../../util/util';


export class ComponentTextField extends Component {
  arrayDataList: Array<ComponentDataList>;
  arrayKeyboard: Array<ComponentKeyboard>;
  language: string;

  constructor(father?: Component) {
    super('input', father);
    this.className = 'ComponentTextField';
    this.arrayDataList = new Array<ComponentDataList>();
    this.arrayDataList.type = ComponentDataList;
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

        if (languageProperty === (<HTMLInputElement>this.element).placeholder) {
          if (subJSON[languageProperty].constructor === Array) {
            (<HTMLInputElement>this.element).placeholder = '';
            subJSON[languageProperty].forEach(element => {
              (<HTMLInputElement>this.element).placeholder += element + '<br/>';
            });
          } else {
            (<HTMLInputElement>this.element).placeholder = subJSON[languageProperty];
          }
          // console.log('INNER:'+subJSON[languageProperty]);
        }
      }
    }
  }
}
ComponentTextField.addConstructor('ComponentTextField', ComponentTextField);
