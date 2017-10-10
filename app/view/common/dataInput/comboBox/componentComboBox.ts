importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/comboBox/option/componentOption');

class ComponentComboBox extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, "select");
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}