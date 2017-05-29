importJS('app/view/util/util');

class Component {
  // protected fatherElement:Component;
  protected element: HTMLElement;
  // protected style: ComponentStyle;: CSSStyleDeclaration

  protected getConstructor() {
    return this.constructor;
  }

  public getClassName() {
    return this.getConstructor().name;
  }

  public constructor(fatherElement?: HTMLElement) {
    var tag = Util.getTag(this.getClassName());
    var nodes = document.getElementsByTagName(tag);
    var path = Util.getCurrentComponentPath();

    importCSS(path);

    this.element = document.createElement(tag);
    this.element.id = tag + "Id" + nodes.length;

    if (fatherElement) {
      this.insert(fatherElement);
    }
  }

  public renderBeforeUpdateJSON(){
  }

  public renderAfterUpdateJSON(){
  }

  public getArrayType(array:Array<any>){
    return array.type;
  }

  protected update(jSON) {
    this.updateJSON(jSON);
  }

  private updateJSONWithArray(jSON, property:any){
    jSON[property].forEach(element => {
      var properElement = new this[property].type(this.element);
      properElement.updateJSON(element);
    });
  }

  private updateJSONWithType(jSON, property:any, type:number){
    // console.log("Prop2");
    if(type==2){
      // console.log("Prop3 is var");
      this.element.style[property] = jSON[property];
    }else{
      if (property == "style") {
        // console.log("Prop is style");
        this.updateJSON(jSON[property], 2);
      } else {
        // console.log("Prop is not style");
        this.element[property] = jSON[property];
      }
    }
  }

  private updateJSONWithObject(jSON, property:any){
    console.log("Prop is object");
    if (property == "element") {
      console.log("Prop is element");
      this.updateJSON(jSON[property], 1);
      // // console.log("Prop is element OUT");
    } else {
      console.log("Prop is regular");
      if(this[property] == undefined){
        this[property] = jSON[property];
        // this[property].insert(this);
      }else{
        if(this[property].constructor === Array){
          this.updateJSONWithArray(jSON,property);
        }else{
          this[property].updateJSON(jSON[property]);
          // this[property].insert(this);
        }
      }
    }
  }

  protected updateJSON(jSON, type?: number) {
    this.renderBeforeUpdateJSON();
    console.log("UPDATE!");
    for (var property in jSON) {
      console.log("Prop:" + property);
      if (property != undefined) {
        console.log("DEFINED!");
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }
        // console.log("TYPE:"+type);
        if(type){
          this.updateJSONWithType(jSON,property,type);
        }else{
          if (typeof jSON[property] === 'object') {
            this.updateJSONWithObject(jSON,property);
          } else {
            // console.log("Prop is var:" + jSON[prop]);
            this[property] = jSON[property];
          }
        }
      }
    }
    this.renderAfterUpdateJSON();
  }

  public insert(fatherElement: HTMLElement) {
    // this.render();
    console.log("FATHER:"+fatherElement.tagName);
    console.log("this:"+this.getClassName());
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