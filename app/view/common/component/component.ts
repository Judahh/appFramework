importJS('app/view/util/util');
importJS('app/view/common/style/modelStyle');

class Component{
  // protected fatherElement:Component;
  protected element;

  public constructor(fatherElement?){
    var tag = Util.getTag(this.constructor.name);
    var nodes = document.getElementsByTagName(tag); 
    var path = Util.getCurrentComponentPath();

    importCSS(path);

    this.element = document.createElement(tag);
    this.element.id = tag + "Id" + nodes.length;

    // console.log("TAG:" + tag);
    // console.log("PATH:" + Util.getCurrentComponentPath());
    // console.log("FileName:" + Util.getFileName(this.constructor.name));
    // console.log("Name:" + this.constructor.name);
    // console.log("NUMBER:" + nodes.length);
    // console.log("Id:" + this.element.id);

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

  protected updateStyle(component:Component, data:ModelStyle){
    if(data.boxSizing)
      component.getElement().style.boxSizing = data.boxSizing;
    if(data.borderWidth)
      component.getElement().style.borderWidth = data.borderWidth;
    if(data.borderRadius)
      component.getElement().style.borderRadius = data.borderRadius;//px
    if(data.color)
      component.getElement().style.color = data.color;
    if(data.position)
      component.getElement().style.position = data.position;
    if(data.top)
      component.getElement().style.top = data.top;
    if(data.left)
      component.getElement().style.left = data.left;
    if(data.right)
      component.getElement().style.right = data.right;
    if(data.bottom)
      component.getElement().style.bottom = data.bottom;
    if(data.opacity)
      component.getElement().style.opacity = data.opacity;
    if(data.height)
      component.getElement().style.height = data.height;
    if(data.width)
      component.getElement().style.width = data.width;
    if(data.filter)
      component.getElement().style.filter = data.filter;
    if(data.zIndex)
      component.getElement().style.zIndex = data.zIndex;
  }

  protected update(data){
    this.updateStyle(this,data);
  }

  protected updateFailed(data){
    console.error("JSONT:" + data);
    this.element.innerHTML = data;
  }

  public getElement(){
    return this.element;
  }
}