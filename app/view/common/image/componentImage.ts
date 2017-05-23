importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");

    Util.getJson("app/view/jSON/test.json").then(
      function(data){
        console.log("A:");
        console.log("JSONT:"+data.mad);
        console.log("JSON:"+data);
        $.each( data, function( key, val ) {
            console.log(key + " value:: " + val );
        });
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}