importJS('app/view/util/util');

class Component{
  public constructor(){
    var tag = Util.getTag(this.constructor.name);
    var nodes = document.getElementsByTagName(tag); 
    console.log("FILE:" + tag);
    // console.log("Name:" + this.constructor.name);
    
    console.log("NUMBER:" + nodes.length);
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