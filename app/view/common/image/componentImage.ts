importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/image/modelImage');
importJS('app/view/common/component/component');

importCSS('app/view/common/image/componentImage');

class ComponentImage extends Component{

  public render() {
    //  test.mad+
    // console.log( "JSON Data:");
    ServiceModel.getPromise("test").then((data:ModelImage) => this.update(data)).fail((data) => this.updateFailed(data));
    // Util.getJson("app/view/jSON/test.json").then((data:ModelImage) => this.update(data)).fail((data) => this.updateFailed(data));
    
    this.element.innerHTML="Loading...";
  }

  protected update(data:ModelImage){
    console.log("JSONT:" + data.source);
    this.element.src = data.source;
  }
}