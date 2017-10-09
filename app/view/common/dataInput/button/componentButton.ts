importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/form/componentForm');

class ComponentButton extends ComponentItem {
  appObject: AppObject;
  code: boolean;
  submit: boolean;
  codeName: string;
  item: ComponentItem;
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?) {
    super(father);
    this.item = new ComponentItem(this);
  }

  public renderAfterUpdateJSON() {
    if (this.code) {
      this.element.addEventListener('click', () => this.onClick());
    }else if(this.submit){
      var form:HTMLFormElement = <HTMLFormElement>this.getForm().getElement();
      form.submit();
    }
  }

  private setForm() {
    this.form = <ComponentForm>this.seekFatherComponent("ComponentForm");
    this.formChecked=true;
  }
  
  public getForm() {
    if (!this.formChecked){
      this.setForm();
    }
    return this.form;
  }

  public onClick() {
    // var age = new this.className();//window[this.className]();
    this.appObject = AppObjectFactory.create(this.codeName, this.father);
    // console.log("CODE:" + this.code);
    // console.log("appClass:" + this.appObject.result());
    this.appObject.result(this.element);

  }
}