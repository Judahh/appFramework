importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/componentDataInput');

class ComponentForm extends Component {
  arrayDataInput: Array<ComponentDataInput>;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, tag);
    this.arrayDataInput = new Array<ComponentDataInput>();
    this.arrayDataInput.type = ComponentDataInput;
  }

}