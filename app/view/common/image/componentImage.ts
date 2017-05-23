importJS('app/view/util/util');

importCSS('app/view/common/image/componentImage');

class ComponentImage{
  render() {
    //  test.mad+
    // console.log( "JSON Data:");
    $.getJSON('http://hipsterjesus.com/api/').then(function(data) {
      console.log("JSON:"+data.text);
    });
    $.getJSON('app/view/jSON/test.json').then(function(data) {
      console.log("JSON:"+data.text);
    });
    Util.getJson("app/view/jSON/test.json").then(
      function(data){
        console.log("JSON:"+data.text);
      }
    ).fail();
    
    return Util.elementHTML("image","nasidas2");
  }
}