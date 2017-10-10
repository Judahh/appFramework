importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, "progress");
  }

  renderAfterUpdateJSON() {
  }
}