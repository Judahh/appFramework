importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentText extends Component {
  text:string;
  language: string;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'text', true);
  }

  public renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    super.renderAfterUpdateJSON();
    if (!this.element.innerHTML) {
      // console.log(this.text);
      this.element.innerHTML = this.text;
    }

  }

  protected updateLanguage(jSON) {
    let property;
    for (property in jSON) {
      if (property != undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]["language"] == Util.getCurrentLanguage()) {
          // console.log("LANG:"+jSON[property]["language"]);
          break;
        }
      }
    }
    // console.log("selected lan:"+property);
    let subJSON = jSON[property];
    for (let languageProperty in subJSON) {
      if (languageProperty != undefined) {
        if (!subJSON.hasOwnProperty(languageProperty)) {
          continue;
        }

        if (languageProperty == this.text) {
          if (subJSON[languageProperty].constructor === Array) {
            this.element.innerHTML = "";
            subJSON[languageProperty].forEach(element => {
              this.element.innerHTML += element + "<br/>";
            });
          } else {
            this.element.innerHTML = subJSON[languageProperty];
          }
          // console.log("INNER:"+subJSON[languageProperty]);
        }
      }
    }
  }
}