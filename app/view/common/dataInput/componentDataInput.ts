import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentItem } from './../item/componentItem';
import { ComponentTextField } from './../dataInput/textField/componentTextField';
import { ComponentTextArea } from './../dataInput/textArea/componentTextArea';
import { ComponentComboBox } from './../dataInput/comboBox/componentComboBox';
import { ComponentBox } from './../dataInput/box/componentBox';
import { ComponentGeneric } from './../component/generic/componentGeneric';
import { ComponentButton } from './../dataInput/button/componentButton';
import { ComponentRangeSlider } from './../dataInput/rangeSlider/componentRangeSlider';

export class ComponentDataInput extends Component {
  arrayBeforeItem: Array<ComponentItem>;
  arrayTextField: Array<ComponentTextField>;
  arrayTextArea: Array<ComponentTextArea>;
  arrayComboBox: Array<ComponentComboBox>;
  arrayBox: Array<ComponentBox>;
  arrayButton: Array<ComponentButton>;
  arrayRangeSlider: Array<ComponentRangeSlider>;
  arrayAfterItem: Array<ComponentItem>;

  form: ComponentGeneric;
  formChecked: boolean;

  // IF DATALIST IT NEEDS A INPUT
  // <input list='datalistID' name='inputNAME'>
  // <datalist id='datalistID'>

  constructor(father?: Component, tag?) {
    super(father, 'dataInput');
    this.className = 'ComponentDataInput';
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

  protected setForm() {
    this.form = <ComponentGeneric>this.seekFather('ComponentForm');
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }
}
ComponentDataInput.addConstructor('ComponentDataInput', ComponentDataInput);
