importJS('app/view/util/util');
importJS('app/view/body/background/componentBackground');
importJS('app/view/common/component/component');
importJS('app/view/common/divisorBlock/componentDivisorBlock');

// importCSS('app/view/body/componentPageBody');

class ComponentPageBody extends Component {
  background: ComponentBackground;
  arrayDivisorBlock: Array<ComponentDivisorBlock>;
  currentPageName: string;
  nextPageName: string;

  constructor(father?: Component, pageName?: string) {
    super(father);
    this.background = new ComponentBackground(this);
    this.arrayDivisorBlock = new Array<ComponentDivisorBlock>();
    this.arrayDivisorBlock.type = ComponentDivisorBlock;
    this.goToPage(pageName);
  }

  public goToPage(pageName?: string) {
    // console.log("goToPage:"+pageName);
    let cookie = Util.getCookie("page");
    if (this.currentPageName == undefined ||
      this.currentPageName != pageName) {
      this.nextPageName = pageName;
      // console.log("goToPage2:"+pageName);
      if (pageName) {
        this.getJSONPromise(pageName);
      } else if (cookie != "") {
        this.goToPage(cookie);
      }
      else {
        this.goToPage("home");
      }
    }
  }

  protected updateFailed(data) {
    this.goToPage("unknown");
  }

  public renderAfterUpdateJSON() {
    this.currentPageName = this.nextPageName;
    window.history.pushState("", "", '/' + this.currentPageName);
    Util.clearCookie("page");
  }
}