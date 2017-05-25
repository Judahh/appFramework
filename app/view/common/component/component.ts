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

  public constructor(fatherElement?: HTMLElement) {
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

  protected update(jSON) {
    this.updateJSON(jSON);
  }

  protected updateJSON(jSON, type?: number) {
    // console.log("UPDATE!");
    for (var prop in jSON) {
      // console.log("Prop:" + prop);
      if (prop != undefined) {
        if (!jSON.hasOwnProperty(prop)) {
          continue;
        }
        // console.log("TYPE:"+type);
        if(type){
          // console.log("Prop2");
          if(type==2){
            // console.log("Prop3 is var");
            this.element.style[prop] = jSON[prop];
          }else{
            if (prop == "style") {
              // console.log("Prop is style");
              this.updateJSON(jSON[prop], 2);
            } else {
              // console.log("Prop is not style");
              this.element[prop] = jSON[prop];
            }
          }
        }else{
          if (typeof jSON[prop] === 'object') {
            // console.log("Prop is object");
            if (prop == "element") {
              // console.log("Prop is element");
              this.updateJSON(jSON[prop], 1);
              // console.log("Prop is element OUT");
            } else {
              // console.log("Prop is regular");
              this[prop].updateJSON(jSON[prop]);
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
    this.render();
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