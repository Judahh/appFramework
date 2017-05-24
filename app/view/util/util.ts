class Util{
  static elementHTML(name:string, id?:string, body?:string) {
    console.log("Name: " + name);
    var hTML= "<" + name;
    if(id){
      hTML += " id=\"" + id;
    }
    if(body){
      hTML += "\">"+body+"</"+name;
    }
    return hTML+">";
  }

  static getJsonPromise(path:string):JQueryPromise<any>{
    return $.getJSON(path);
  }

  static getTag(name:string){
      var names:string[]=name.split("Component");
      return names[names.length-1].toLowerCase();
  }

  static getFileName(name:string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  static getCurrentComponentPath() {
    var err = new Error();
    var link = err.stack.split('(')[3];
    // link = link;
    // link = link.split(')')[0];
    // link = link.split(':');
    // link.splice(-2, 2);
    // link = link.join(':');

    return link;
  }

}