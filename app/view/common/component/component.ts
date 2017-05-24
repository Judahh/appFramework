importJS('app/view/util/util');

class Component{
  // protected fatherElement:Component;
  protected element;

  public constructor(fatherElement?){
    var tag = Util.getTag(this.constructor.name);
    var nodes = document.getElementsByTagName(tag); 
    console.log("FILE:" + tag);
    console.log("Name:" + this.constructor.name);
    console.log("NUMBER:" + nodes.length);
    this.element = document.createElement(tag);
    this.element.id = tag + "Id" + nodes.length;
    console.log("Id:" + this.element.id);
    // for (var index = 0; index < nodes.length; index++) {
    //     var element = nodes[index];
    // }

    this.render();

    if(fatherElement){
        fatherElement.appendChild(this.element);
    }
  }

  public render() {
  }

  public insert(fatherElement){
    fatherElement.appendChild(this.element);
  }

  protected update(data){
    console.log("JSONT:" + data);
    this.element.innerHTML = data;
  }

  protected updateFailed(data){
    console.error("JSONT:" + data);
    this.element.innerHTML = data;
  }

  public getElement(){
    return this.element;
  }
}