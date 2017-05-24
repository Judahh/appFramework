importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/image/modelImage');
importJS('app/view/common/component/component');
importJS('app/view/common/image/img/componentImg');

// importCSS('app/view/common/image/componentImage');

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
    // if(data.boxSizing)
    //   this.img.getElement().style.boxSizing = data.boxSizing;
    // if(data.borderWidth)
    //   this.img.getElement().style.borderWidth = data.borderWidth;
    // if(data.borderRadius)
    //   this.img.getElement().style.borderRadius = data.borderRadius;//px
    // if(data.color)
    //   this.img.getElement().style.color = data.color;
    // if(data.position)
    //   this.img.getElement().style.position = data.position;
    // if(data.source)
    //   this.img.getElement().src = data.source;
    // if(data.opacity)
    //   this.img.getElement().style.opacity = data.opacity;
    // if(data.height)
    //   this.img.getElement().style.height = data.height;
    // if(data.width)
    //   this.img.getElement().style.width = data.width;
    // if(data.filter)
    //   this.img.getElement().style.filter = data.filter;
    // if(data.zIndex)
    //   this.img.getElement().style.zIndex = data.zIndex;
    this.img.getElement().style = data;
    this.img.getElement().src = data.source;
  }
}