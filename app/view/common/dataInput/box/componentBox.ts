importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/label/componentLabel');

class ComponentBox extends Component {
  //type = radio or checkbox
  boxLabel: ComponentLabel;

  constructor(father?: Component, tag?) {
    super(father, "input");
    this.boxLabel = new ComponentLabel(this.father);
    this.boxLabel.getElement().setAttribute("for", this.element.id);
  }

}