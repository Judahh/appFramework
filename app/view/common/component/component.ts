importJS('app/view/util/util');

class Component {
  // protected fatherElement:Component;
  protected element: HTMLElement;
  // protected style: ComponentStyle;: CSSStyleDeclaration

  protected getConstructor() {
    let constructor: any = this.constructor;
    return constructor;
  }

  public getName() {
    let constructor: any = this.constructor;
    return this.getConstructor().name;
  }

  public constructor(fatherElement?) {
    var tag = Util.getTag(this.getName());
    var nodes = document.getElementsByTagName(tag);
    var path = Util.getCurrentComponentPath();

    importCSS(path);

    this.element = document.createElement(tag);
    this.element.id = tag + "Id" + nodes.length;

    if (fatherElement) {
      this.render();
      fatherElement.appendChild(this.element);
    }
  }

  public render() {
  }

  protected update(jSON, style?: CSSStyleDeclaration) {
    for (var prop in jSON) {
      // console.log("Prop:" + prop);
      if (prop != undefined) {
        if (!jSON.hasOwnProperty(prop)) {
          continue;
        }
        if(style){
          // console.log("Prop2 is var");
          style[prop] = jSON[prop];
        }else{
          if (typeof jSON[prop] === 'object') {
            // console.log("Prop is object");
            if (prop == "style") {
              this.update(jSON[prop], this.element.style);
            } else {
              this[prop].update(jSON[prop]);
            }
          } else {
            // console.log("Prop is var:" + jSON[prop]);
            this[prop] = jSON[prop];
          }
        }
      }
    }
  }

  public insert(fatherElement) {
    fatherElement.appendChild(this.element);
  }

  protected updateFailed(data) {
    console.error("JSONT:" + data);
    this.element.innerHTML = data;
  }

  public getElement() {
    return this.element;
  }

  public setElementSource(source:string) {
    var tmp:any = this.element;
    tmp.src = source;
  }

  protected getJSONPromise(file){
    ServiceModel.getPromise(file).then((data) => this.update(data)).fail((data) => this.updateFailed(data));
  }
}