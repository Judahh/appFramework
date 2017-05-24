importJS('app/view/util/util');

class Component{
  private id:string;
  private name:string;

  public constructor(fatherElement){
    var tag = Util.getTag(this.constructor.name);
    var nodes = document.getElementsByTagName(tag); 
    // console.log("FILE:" + tag);
    // console.log("Name:" + this.constructor.name);
    // console.log("NUMBER:" + nodes.length);
    this.name = tag;
    this.id = tag + "Id" + nodes.length;
    console.log("Id:" + this.id);
    // for (var index = 0; index < nodes.length; index++) {
    //     var element = nodes[index];
    // }
    fatherElement.innerHTML=this.render();
  }

  render() {
    return Util.elementHTML(this.name, id," ");
  }
}