importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/textField/componentTextField');
importJS('app/view/common/dataInput/textArea/componentTextArea');
importJS('app/view/common/dataInput/comboBox/componentComboBox');
importJS('app/view/common/dataInput/box/componentBox');
importJS('app/view/common/dataInput/button/componentButton');
importJS('app/view/common/dataInput/rangeSlider/componentRangeSlider');
importJS('app/view/common/item/componentItem');

class ComponentDataInput extends Component {
  arrayBeforeItem: Array<ComponentItem>;
  arrayTextField: Array<ComponentTextField>;
  arrayTextArea: Array<ComponentTextArea>;
  arrayComboBox: Array<ComponentComboBox>;
  arrayBox: Array<ComponentBox>;
  arrayButton: Array<ComponentButton>;
  arrayRangeSlider: Array<ComponentRangeSlider>;
  arrayAfterItem: Array<ComponentItem>;
  appObject: AppObject;
  code: string;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, tag);
    this.arrayBeforeItem = new Array<ComponentItem>();
    this.arrayBeforeItem.type = ComponentItem;

    this.arrayTextField = new Array<ComponentTextField>();
    this.arrayTextField.type = ComponentTextField;

    this.arrayTextArea = new Array<ComponentTextArea>();
    this.arrayTextArea.type = ComponentTextArea;

    this.arrayComboBox = new Array<ComponentComboBox>();
    this.arrayComboBox.type = ComponentComboBox;

    this.arrayBox = new Array<ComponentBox>();
    this.arrayBox.type = ComponentBox;

    this.arrayButton = new Array<ComponentButton>();
    this.arrayButton.type = ComponentButton;

    this.arrayRangeSlider = new Array<ComponentRangeSlider>();
    this.arrayRangeSlider.type = ComponentRangeSlider;

    this.arrayAfterItem = new Array<ComponentItem>();
    this.arrayAfterItem.type = ComponentItem;
  }

  public renderAfterUpdateJSON() {
    if (this.code!=undefined) {
      this.element.addEventListener('click', () => this.onClick());
    }
  }

  public onClick() {
    // var age = new this.className();//window[this.className]();
    this.appObject = AppObjectFactory.create(this.code, this.father);
    // console.log("CODE:" + this.code);
    // console.log("appClass:" + this.appObject.result());
    this.appObject.result(this.element);

  }

}