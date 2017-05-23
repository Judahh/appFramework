class Util{
  static elementHTML(name:string,body?:string) {
    if(body){
      return "<"+name+">"+body+"</"+name+">";
    }
    return "<"+name+">";
  }

  static getJson(path:string){
    return $.getJSON( "app/view/jSON/test.json");
  }

  static getTag(name:string){
      var names:string[]=name.split("Component");
      return names[names.length-1];
  }
}