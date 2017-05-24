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

  static getJson(path:string):JQueryPromise<any>{
    return $.getJSON( "app/view/jSON/test.json");
  }

  static getTag(name:string){
      var names:string[]=name.split("Component");
      return names[names.length-1].toLowerCase();
  }
}