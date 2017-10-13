importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
importJS('app/view/common/menuVertical/componentMenuVertical');
importJS('app/view/common/divisorBlock/divisor/subDivisor/componentSubDivisor');

class ComponentItem extends Component {
  routerLink: string;
  colorEffect: ComponentColorEffect;
  menuHorizontal: ComponentMenuHorizontal;
  menuVertical: ComponentMenuVertical;

  subDivisor: ComponentSubDivisor;

  appObject: AppObject;
  code: string;

  submit: boolean;
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.getSubDivisor();
    this.colorEffect = new ComponentColorEffect(this);
    this.menuHorizontal = new ComponentMenuHorizontal(this);
    this.menuVertical = new ComponentMenuVertical(this);
  }

  renderAfterUpdateJSON() {
    if (this.routerLink != undefined || this.code != undefined || this.submit) {
      this.element.addEventListener('click', () => this.onClick());
    }
  }

  private getSubDivisor() {
    this.subDivisor = <ComponentSubDivisor>this.seekFatherComponent("ComponentSubDivisor");
  }

  public getPage() {
    return this.subDivisor.getPage();
  }

  private setForm() {
    this.form = <ComponentForm>this.seekFatherComponent("ComponentForm");
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }

  onClick() {
    if (this.routerLink != undefined) {
      // console.log("CLICK:"+this.routerLink);
      this.subDivisor.getView().goToPage(this.routerLink);
      // console.log("BODY:"+Util.getBrowserLanguage());
    } else if (this.code != undefined) {
      // var age = new this.className();//window[this.className]();
      var appObject = AppObjectFactory.create(this.code, this);
      for (var property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log("CODE:" + this.code);
      this.appObject.run();
    } else {
      var form: HTMLFormElement = <HTMLFormElement>this.getForm().getElement();
      form.submit();
    }

  }
}