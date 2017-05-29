importJS('app/view/util/util');

class Component {
  // protected fatherElement:Component;
  protected element: HTMLElement;
  protected father: Component;
  protected tag: string;
  // protected style: ComponentStyle;: CSSStyleDeclaration

  protected getConstructor() {
    return this.constructor;
  }

  public getClassName() {
    return this.getConstructor().name;
  }

  public constructor(father?: Component, tag?: string) {
    if (tag) {
      this.tag = tag;
      if (tag == "body") {
        this.element = document.body;
      }else{
        var nodes = document.getElementsByTagName(this.tag);
        var path = Util.getCurrentComponentPath();

        importCSS(path);

        this.element = document.createElement(this.tag);
        this.element.id = this.tag + "Id" + nodes.length;
      }
    } else {
      this.tag = Util.getTag(this.getClassName());
      var nodes = document.getElementsByTagName(this.tag);
      var path = Util.getCurrentComponentPath();

      importCSS(path);

      this.element = document.createElement(this.tag);
      this.element.id = this.tag + "Id" + nodes.length;
    }

    if (father) {
      this.father = father;
      this.insert(father.getElement());
    }

    this.clear();
  }

  public renderBeforeUpdateJSON() {
  }

  public renderAfterUpdateJSON() {
  }

  public getArrayType(array: Array<any>) {
    return array.type;
  }

  protected update(jSON) {
    this.updateJSON(jSON);
  }



  private updateJSONWithArray(jSON, property: any) {
    if (this[property].length > 0) {
      var elements = this.element.getElementsByTagName(this.getComponentNameFromArrayName(property));
      Util.removeElements(elements);
      this[property].length=0;
    }

    jSON[property].forEach(element => {
      var properElement = new this[property].type(this);
      properElement.updateJSON(element);
      this[property].push(properElement);
    });
  }

  public getComponentNameFromArrayName(arrayName: string) {
    return arrayName.split("array")[1];
  }

  private updateJSONWithType(jSON, property: any, type: number) {
    // console.log("Prop2");
    if (type == 2) {
      // console.log("Prop3 is var");
      this.element.style[property] = jSON[property];
    } else {
      if (property == "style") {
        // console.log("Prop is style");
        this.updateJSON(jSON[property], 2);
      } else {
        // console.log("Prop is not style");
        this.element[property] = jSON[property];
        // console.log("Href:"+this.element[property]);
      }
    }
  }

  private updateJSONWithObject(jSON, property: any) {
    // console.log("Prop is object");
    if (property == "element") {
      // console.log("Prop is element");
      this.updateJSON(jSON[property], 1);
      // // console.log("Prop is element OUT");
    } else {
      // console.log("Prop is regular");
      if (this[property] == undefined) {
        this[property] = jSON[property];
        // this[property].insert(this);
      } else {
        if (this[property].constructor === Array) {
          this.updateJSONWithArray(jSON, property);
        } else {
          this[property].updateJSON(jSON[property]);
          // this[property].insert(this);
        }
      }
    }
  }

  protected updateJSON(jSON, type?: number) {
    this.renderBeforeUpdateJSON();
    // console.log("UPDATE!");
    for (var property in jSON) {
      // console.log("Prop:" + property);
      if (property != undefined) {
        // console.log("DEFINED!");
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }
        // console.log("TYPE:"+type);
        if (type) {
          this.updateJSONWithType(jSON, property, type);
        } else {
          if (typeof jSON[property] === 'object') {
            this.updateJSONWithObject(jSON, property);
          } else {
            // console.log("Prop is var:" + jSON[property]);
            this[property] = jSON[property];
          }
        }
      }
    }
    this.renderAfterUpdateJSON();
  }

  public insert(fatherElement: HTMLElement) {
    // this.render();
    // console.log("FATHER:" + fatherElement.tagName);
    // console.log("this:" + this.getClassName());
    fatherElement.appendChild(this.element);
  }

  protected updateFailed(data) {
    console.error("JSONT:" + data);
    this.element.innerHTML = data;
  }

  public getElement() {
    return this.element;
  }

  public getFather() {
    return this.father;
  }

  public setElementSource(source: string) {
    var tmp: any = this.element;
    tmp.src = source;
  }

  protected getJSONPromise(file) {
    ServiceModel.getPromise(file).then((data) => this.update(data)).fail((data) => this.updateFailed(data));
  }

  public clear() {
    this.element.innerHTML = "";
  }

  public seekFatherComponent(className: string): Component {
    if (this.father != undefined) {
      // console.log("FATHER NAME:" + this.father.getClassName());
      if (this.father.getClassName() == className) {
        return this.father;
      } else {
        return this.father.seekFatherComponent(className);
      }
    }
    return undefined;
  }
}