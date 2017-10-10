importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentTextArea extends Component {
  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "textarea");
  }
}