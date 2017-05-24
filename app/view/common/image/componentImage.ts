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
    if(data.boxSizing)
      this.img.style.boxSizing = data.boxSizing;
    if(data.borderWidth)
      this.img.style.borderWidth = data.borderWidth;
    if(data.borderRadius)
      this.img.style.borderRadius = data.borderRadius;//px
    if(data.color)
      this.img.style.color = data.color;
    if(data.position)
      this.img.style.position = data.position;
    if(data.source)
      this.img.getElement().src = data.source;
    if(data.opacity)
      this.img.style.opacity = data.opacity;
    if(data.height)
      this.img.style.height = data.height;
    if(data.width)
      this.img.style.width = data.width;
    if(data.filter)
      this.img.style.filter = data.filter;
    if(data.zIndex)
      this.img.style.zIndex = data.zIndex;
  }
}