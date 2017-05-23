importJS('app/view/util/util');

class Component{
  public constructor(){
    var tag = Util.getFileName(__filename);
    var nodes = document.getElementsByTagName(tag); 
    
    for (var index = 0; index < nodes.length; index++) {
        var element = nodes[index];
    }
  }

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