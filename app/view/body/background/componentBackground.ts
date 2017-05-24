importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/image/componentImage');

importCSS('app/view/body/componentBackground');

class ComponentBackground extends Component{
  render() {
    let image=new ComponentImage(this.element);
  }
}