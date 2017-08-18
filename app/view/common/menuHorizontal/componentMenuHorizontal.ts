importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/menuHorizontal/centerHolder/componentCenterHolder');
importJS('app/view/common/menuHorizontal/leftHolder/componentLeftHolder');
importJS('app/view/common/menuHorizontal/rightHolder/componentRightHolder');

class ComponentMenuHorizontal extends Component{
  class: string;
  centerHolder: ComponentCenterHolder;
  leftHolder: ComponentLeftHolder;
  rightHolder: ComponentRightHolder;

  constructor(father?: Component){
    super(father);
    this.leftHolder = new ComponentLeftHolder(this);
    this.centerHolder = new ComponentCenterHolder(this);
    this.rightHolder = new ComponentRightHolder(this);
  }
}