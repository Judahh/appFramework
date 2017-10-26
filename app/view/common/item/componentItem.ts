importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
importJS('app/view/common/menuVertical/componentMenuVertical');
importJS('app/view/common/divisor/componentDivisor');

class ComponentItem extends Component {
  routerLink: string;
  colorEffect: ComponentColorEffect;
  menuHorizontal: ComponentMenuHorizontal;
  menuVertical: ComponentMenuVertical;

  divisor: ComponentDivisor;

  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.getdivisor();
    this.colorEffect = new ComponentColorEffect(this);
    this.menuHorizontal = new ComponentMenuHorizontal(this);
    this.menuVertical = new ComponentMenuVertical(this);
  }

  private getdivisor() {
    this.divisor = <ComponentDivisor>this.seekFatherComponent("ComponentDivisor");
  }

  public getPage() {
    return this.divisor.getPage();
  }

  protected setForm() {
    this.form = <ComponentForm>this.seekFatherComponent("ComponentForm");
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }
}