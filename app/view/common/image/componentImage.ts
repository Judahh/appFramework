importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    console.log( "JSON Data:");
    $.getJSON( "app/view/jSON/test.json", function( data ) {  
        console.log( "JSON Data: " + data);
        $.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });
    });
    return Util.elementHTML("image","nasidas2");
  }
}