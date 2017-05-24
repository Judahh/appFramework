importJS('app/view/util/util');
importJS('app/view/common/image/modelImage');
importJS('app/view/common/component/component');

importCSS('app/view/common/image/componentImage');

class ComponentImage extends Component{

  public render() {
    //  test.mad+
    // console.log( "JSON Data:");
    

    Util.getJson("app/view/jSON/test.json").then(
      function(data:ModelImage){
        console.log("JSONT:" + data.source);
        
      }
    ).fail();
    
    return Util.elementHTML(this.name, this.id,"nasidas2");
  }
}