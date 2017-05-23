importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");

    $.getJSON( "app/view/jSON/test.json", function( data ) {  
        console.log( "JSON Data: " + data);
        console.log("B:");
        console.log("JSONT:"+data.text);
        console.log("JSON:"+data);
        $.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });
    });

    $.getJSON('app/view/jSON/test.json').done(function(data) {
      console.log("S:");
      console.log("JSONT:"+data.text);
      console.log("JSON:"+data);
    });

    Util.getJson("app/view/jSON/test.json").then(
      function(data){
        console.log("A:");
        console.log("JSONT:"+data.text);
        console.log("JSON:"+data);
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}