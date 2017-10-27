importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentRectangle extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'rect', true);
  }
}