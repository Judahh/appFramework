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

  static getCurrentScript() {
    if (document.currentScript) {
      return document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length-1].src;

    }
  }

  static getCurrentScriptPath() {
    var script = this.getCurrentScript();
    var path = script.substring(0, script.lastIndexOf('/'));
    return path;
  }

}