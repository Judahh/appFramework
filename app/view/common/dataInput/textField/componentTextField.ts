importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/dataInput/textField/dataList/componentDataList');

class ComponentTextField extends Component {
  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">
  arrayDataList: Array<ComponentDataList>;

  constructor(father?: Component, tag?) {
    super(father, "input");
    this.arrayDataList = new Array<ComponentDataList>();
    this.arrayDataList.type = ComponentDataList;
  }
}