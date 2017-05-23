importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");
    let promise = $.getJSON( "app/view/jSON/test.json").promise();
    promise.done(
      function(data){
        console.log("JSON:"+Util.getJson("app/view/jSON/test.json"));
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}