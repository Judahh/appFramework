importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/textInput/typeTextInput');
importJS('app/view/common/textInput/dataList/componentDataList');

class ComponentTextInput extends Component {
  private type:TypeTextInput;

  constructor(father?: Component, type?:TypeTextInput) {
    super(father, ComponentTextInput.typeTag(type));
    this.type = type;
  }

  public static typeTag(type:TypeTextInput){
    switch(type){
      case TypeTextInput.textArea:
        return "textarea";
      default:
        return "input";
    }
  }
  
}