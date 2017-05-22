importCSS('app/view/common/image/componentImage');
// importJSON('app/view/jSON/test');
import * as jQuery from "jquery";

class ComponentImage{
  render() {
    //  test.mad+
    $.getJSON( "app/view/jSON/test.json", function( data ) {  
        console.log( "JSON Data: " + data);
        $.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });
    });
    return Util.elementHTML("image","nasidas2");
  }
}