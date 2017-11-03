importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/menuHorizontal/centerHolder/componentCenterHolder');
importJS('app/view/common/menuHorizontal/leftHolder/componentLeftHolder');
importJS('app/view/common/menuHorizontal/rightHolder/componentRightHolder');

class ComponentMenuHorizontal extends Component{
  class: string;
  arrayCenterHolder: Array<ComponentCenterHolder>;
  arrayLeftHolder: Array<ComponentLeftHolder>;
  arrayRightHolder: Array<ComponentRightHolder>;

  constructor(father?: Component){
    super(father);
    this.arrayLeftHolder = new Array<ComponentLeftHolder>();
    this.arrayLeftHolder.type = ComponentLeftHolder;
    this.arrayCenterHolder = new Array<ComponentCenterHolder>();
    this.arrayCenterHolder.type = ComponentCenterHolder;
    this.arrayRightHolder = new Array<ComponentRightHolder>();
    this.arrayRightHolder.type = ComponentRightHolder;
  }
}