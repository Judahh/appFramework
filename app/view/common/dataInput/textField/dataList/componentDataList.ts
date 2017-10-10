importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/comboBox/option/componentOption');

class ComponentDataList extends ComponentItem {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, "datalist");
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}