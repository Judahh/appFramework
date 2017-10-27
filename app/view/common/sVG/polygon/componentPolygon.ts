importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentPolygon extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'polygon', true);
  }
}