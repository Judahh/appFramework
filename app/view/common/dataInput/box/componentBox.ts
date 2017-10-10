importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/comboBox/option/componentOption');

class ComponentBox extends Component {
  //type = radio or checkbox

  constructor(father?: Component, tag?) {
    super(father, "input");
  }
}