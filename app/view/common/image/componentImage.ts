importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");
    // $.getJSON( "app/view/jSON/test.json", function( data ) {  
    //     console.log( "JSON Data: " + data);
    //     $.each( data, function( key, val ) {
    //         console.log(key + "value:: " + val );
    //     });
    // });
    console.log("JSON:"+Util.getJson("app/view/jSON/test.json"));
    return Util.elementHTML("image","nasidas2");
  }
}