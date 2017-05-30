importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
importJS('app/view/common/menuVertical/componentMenuVertical');

class ComponentItem extends Component {
  routerLink: string;
  colorEffect: ComponentColorEffect;
  menuHorizontal: ComponentMenuHorizontal;
  menuVertical: ComponentMenuVertical;

  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  pageBodyChecked: boolean;
  headerChecked: boolean;
  footerChecked: boolean;

  page: string;

  constructor(father?: Component) {
    super(father);
    this.colorEffect = new ComponentColorEffect(this);
    this.menuHorizontal = new ComponentMenuHorizontal(this);
    this.menuVertical = new ComponentMenuVertical(this);
    this.pageBodyChecked = false;
    this.headerChecked = false;
    this.footerChecked = false;
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

  renderAfterUpdateJSON() {
    if (this.routerLink != undefined) {
      this.element.addEventListener('click', () => this.onClick());
    }
  }

  onClick() {
    // console.log("CLICK:"+this.routerLink);
    this.getView().goToPage(this.routerLink);
    // console.log("BODY:"+Util.getBrowserLanguage());

  }
}