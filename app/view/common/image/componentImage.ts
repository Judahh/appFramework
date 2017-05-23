importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");
    Util.getJson("app/view/jSON/test.json").done(
      function(data){
        console.log("JSON:"+data.done().stringify());
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}