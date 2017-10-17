importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/form/componentForm');
importJS('app/view/common/appObject/appObjectFactory/appObjectFactory');

class ComponentButton extends Component {
  item: ComponentItem;
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?) {
    super(father);
    this.item = new ComponentItem(this);
  }

  protected setForm() {
    this.form = <ComponentForm>this.seekFatherComponent("ComponentForm");
    this.formChecked=true;
  }
  
  public getForm() {
    if (!this.formChecked){
      this.setForm();
    }
    return this.form;
  }
}