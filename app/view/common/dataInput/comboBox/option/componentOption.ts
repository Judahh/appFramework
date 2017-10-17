importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/appObject/appObjectFactory/appObjectFactory');

class ComponentOption extends Component {
  code: string;
  appObject: AppObject;
  information: string;
  language: string;

  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  page: string;

  pageBodyChecked: boolean;
  headerChecked: boolean;
  footerChecked: boolean;
  
  constructor(father?: Component) {
    super(father, "option");
  }

  public renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    if(this.code!=undefined){
      // let age = new this.className();//window[this.className]();
      let appObject = AppObjectFactory.create(this.code, this);
      for (let property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log("CODE:" + this.code);
      this.appObject.run();
    }
    if(!this.element.innerHTML){
      this.element.innerHTML = this.information;
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

        if (languageProperty == this.information) {
          if(subJSON[languageProperty].constructor === Array){
            this.element.innerHTML = "";
            subJSON[languageProperty].forEach(element => {
              this.element.innerHTML += element+"<br/>";
            });
          }else{
            this.element.innerHTML = subJSON[languageProperty];
          }
          // console.log("INNER:"+subJSON[languageProperty]);
        }
      }
    }
  }
}