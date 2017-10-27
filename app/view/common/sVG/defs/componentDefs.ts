importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/sVG/defs/filter/componentFilter');
importJS('app/view/common/sVG/defs/linearGradient/componentLinearGradient');
importJS('app/view/common/sVG/defs/radialGradient/componentRadialGradient');


class ComponentDefs extends Component {
  arrayFilter: Array<ComponentFilter>;

  arrayLinearGradient: Array<ComponentLinearGradient>;
  arrayRadialGradient: Array<ComponentRadialGradient>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'defs', true);
    this.arrayFilter = new Array<ComponentFilter>();
    this.arrayFilter.type = ComponentFilter;

    this.arrayLinearGradient = new Array<ComponentLinearGradient>();
    this.arrayLinearGradient.type = ComponentLinearGradient;

    this.arrayRadialGradient = new Array<ComponentRadialGradient>();
    this.arrayRadialGradient.type = ComponentRadialGradient;
  }
}