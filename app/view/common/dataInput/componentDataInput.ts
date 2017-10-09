importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/textField/componentTextField');
importJS('app/view/common/dataInput/textArea/componentTextArea');
importJS('app/view/common/dataInput/comboBox/componentComboBox');
importJS('app/view/common/dataInput/box/componentBox');

class ComponentDataInput extends ComponentItem {
  arrayTextField: Array<ComponentTextField>;
  arrayTextArea: Array<ComponentTextArea>;
  arrayComboBox: Array<ComponentComboBox>;
  arrayBox: Array<ComponentBox>;
  
  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, tag);
    this.arrayTextField = new Array<ComponentTextField>();
    this.arrayTextField.type = ComponentTextField;

    this.arrayTextArea = new Array<ComponentTextArea>();
    this.arrayTextArea.type = ComponentTextArea;

    this.arrayComboBox = new Array<ComponentComboBox>();
    this.arrayComboBox.type = ComponentComboBox;
    
    this.arrayBox = new Array<ComponentBox>();
    this.arrayBox.type = ComponentBox;
  }
  
}