importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/sVG/defs/stop/componentStop');

class ComponentLinearGradient extends Component {
  arrayStop: Array<ComponentStop>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'linearGradient', true);
    this.arrayStop = new Array<ComponentStop>();
    this.arrayStop.type = ComponentStop;
  }
}