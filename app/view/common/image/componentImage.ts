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
    //fuk
    // this.element.innerHTML="Loading...";
  }

  protected update(data:ModelImage){
    console.log(data.constructor.name);
    if(data instanceof Model){
      console.log(data.constructor.name + " é Model");
    }
    for(var name in data){
      if(data[name] instanceof Model){
        console.log(name + " é Model");
      }
      if(data[name] instanceof ModelStyle){
        console.log(name + " é ModelStyle");
      }
      console.log(name, data[name]);
    }
    super.updateStyle(this.img, data.style);
    if(data.source)
      this.img.getElement().src = data.source;
  }
}