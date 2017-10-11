importJS('app/view/util/util');
importJS('app/view/common/component/component');

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
      // var age = new this.className();//window[this.className]();
      this.appObject = AppObjectFactory.create(this.code,this.father);
      // console.log("CODE:" + this.code);
      // console.log("appClass:" + this.appObject.result());
      this.appObject.result(this.element);
    }
    if(!this.element.innerHTML){
      this.element.innerHTML = this.information;
    }
    
  }

  private setPageBody() {
    this.pageBody = <ComponentPageBody>this.seekFatherComponent("ComponentPageBody");
    this.pageBodyChecked=true;
  }

  private setHeader() {
    this.header = <ComponentHeader>this.seekFatherComponent("ComponentHeader");
    this.headerChecked=true;
  }

  private setFooter() {
    this.footer = <ComponentFooter>this.seekFatherComponent("ComponentFooter");
    this.footerChecked=true;
  }

  private setView() {
    if (this.getPageBody() != undefined) {
      this.view = <ComponentView>this.pageBody.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getHeader() != undefined) {
      this.view = <ComponentView>this.header.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getFooter() != undefined) {
      this.view = <ComponentView>this.footer.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    this.view = <ComponentView>this.seekFatherComponent("ComponentView");
  }

  public getView() {
    if (this.view == undefined) {
      this.setView();
    }
    return this.view;
  }

  public getPage() {
    if (this.page == undefined) {
      this.setPage();
    }
    return this.page;
  }

  public getPageBody() {
    if (!this.pageBodyChecked){
      this.setPageBody();
    }
    return this.pageBody;
  }

  public getHeader() {
    if (!this.headerChecked) {
      this.setHeader();
    }
    return this.header;
  }

  public getFooter() {
    if (!this.footerChecked) {
      this.setFooter();
    }
    return this.footer;
  }

  private setPage() {
    if (this.getPageBody() != undefined) {
      this.page = this.pageBody.nextPageName;
      return;
    }

    if (this.getHeader() != undefined) {
      this.page = this.header.getTag();
      return;
    }

    if (this.getFooter() != undefined) {
      this.page = this.footer.getTag();
      return;
    }
  }

  protected getLanguage() {
    this.getJSONLanguagePromise(this.getPage() + "L");
  }

  protected updateLanguage(jSON) {
    var property;
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
    var subJSON = jSON[property];
    for (var languageProperty in subJSON) {
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