importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentLine extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'line', true);
  }
}