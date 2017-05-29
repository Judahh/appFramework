importJS('app/view/common/component/component');

class ComponentInformation extends Component {
  information: string;
  language: string;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  constructor(father?: Component) {
    super(father, "a");
    // this.item=new ComponentItem(this.element);
  }

  public renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    this.element.innerHTML = this.information;
  }

  protected getLanguage() {
    var page;

    if (this.pageBody == undefined) {
      this.pageBody = <ComponentPageBody>this.seekFatherComponent("ComponentPageBody");
      if (this.pageBody != undefined) {
        page = this.pageBody.nextPageName;
      }
    } else {
      page = this.pageBody.nextPageName;
    }

    if (this.header == undefined) {
      this.header = <ComponentHeader>this.seekFatherComponent("ComponentHeader");
      if (this.header != undefined) {
        page = this.header.getTag();
      }
    } else {
      page = this.header.getTag();
    }

    if (this.footer == undefined) {
      this.footer = <ComponentFooter>this.seekFatherComponent("ComponentFooter");
      if (this.footer != undefined) {
        page = this.footer.getTag();
      }
    } else {
      page = this.footer.getTag();
    }

    if (page != undefined) {
      console.log("PAGE:" + page);
      this.getJSONLanguagePromise(page + "L");
    }
  }

  protected updateLanguage(jSON) {
    var property;
    for (property in jSON) {
      if (property != undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]["language"] == Util.getCurrentLanguage()) {
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
          this.element.innerHTML = subJSON[languageProperty];
        }
      }
    }
  }
}