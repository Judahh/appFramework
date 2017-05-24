importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/image/modelImage');
importJS('app/view/common/component/component');
importJS('app/view/common/image/img/componentImg');

importCSS('app/view/common/image/componentImage');

class ComponentImage extends Component{
  private img;

  public render() {
    this.img = new ComponentImg(this.element);
    //  test.mad+
    // console.log( "JSON Data:");
    ServiceModel.getPromise("test").then((data:ModelImage) => this.update(data)).fail((data) => this.updateFailed(data));
    // Util.getJson("app/view/jSON/test.json").then((data:ModelImage) => this.update(data)).fail((data) => this.updateFailed(data));
    
    // this.element.innerHTML="Loading...";
  }

  protected update(data:ModelImage){
    // console.log("JSONT:" + data.source);
    this.img.style.boxSizing = data.boxSizing;
    this.img.style.borderWidth = data.borderWidth;
    this.img.style.borderRadius = data.borderRadius;//px
    this.img.style.color = data.color;
    this.img.style.position = data.position;
    this.img.getElement().src = data.source;
    this.img.style.opacity = data.opacity;
    this.img.style.height = data.height;
    this.img.style.width = data.width;
    this.img.style.filter = data.filter;
    this.img.style.zIndex = data.zIndex;
  }
}