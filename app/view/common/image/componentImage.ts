importJS('app/view/util/util');
importJS('app/view/common/image/modelImage');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");

    Util.getJson("app/view/jSON/test.json").then(
      function(data:ModelImage){
        console.log("JSONT:"+data.source);
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}