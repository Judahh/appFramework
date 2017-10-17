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

  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.getSubDivisor();
    this.colorEffect = new ComponentColorEffect(this);
    this.menuHorizontal = new ComponentMenuHorizontal(this);
    this.menuVertical = new ComponentMenuVertical(this);
  }

  private getSubDivisor() {
    this.subDivisor = <ComponentSubDivisor>this.seekFatherComponent("ComponentSubDivisor");
  }

  public getPage() {
    return this.subDivisor.getPage();
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