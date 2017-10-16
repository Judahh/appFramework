importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/form/componentForm');
importJS('app/view/common/appObject/appObjectFactory/appObjectFactory');

class ComponentButton extends Component {
  appObject: AppObject;
  code: string;
  submit: boolean;
  item: ComponentItem;
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?) {
    super(father);
    this.item = new ComponentItem(this);
  }

  public renderAfterUpdateJSON() {
    if (this.code!=undefined) {
      this.element.addEventListener('click', () => this.onClick());
    }else if(this.submit){
      let form:HTMLFormElement = <HTMLFormElement>this.getForm().getElement();
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
}