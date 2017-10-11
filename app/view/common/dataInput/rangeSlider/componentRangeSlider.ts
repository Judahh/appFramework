importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentRangeSlider extends Component {

  constructor(father?: Component, tag?) {
    super(father, "input");
    this.element.setAttribute("type", "range");
  }

}