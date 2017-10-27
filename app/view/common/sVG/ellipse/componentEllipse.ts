importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentEllipse extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'ellipse', true);
  }
}