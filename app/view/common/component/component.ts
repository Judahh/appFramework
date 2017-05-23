importJS('app/view/util/util');

class Component{
  public constructor(){
    var tag = Util.getTag(this.getName());
    var nodes = document.getElementsByTagName(tag); 
    console.log("FILE:" + tag);
    console.log("Name:" + this.getName());
    
    for (var index = 0; index < nodes.length; index++) {
        var element = nodes[index];
    }
  }

   public getName() {
      var funcNameRegex = /function (.{1,})\(/;
      var results = (funcNameRegex).exec((<any> this).constructor.toString());
      return (results && results.length > 1) ? results[1] : "";
      // return "FUCK";
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