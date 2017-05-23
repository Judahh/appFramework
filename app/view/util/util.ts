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

  static getFileName(filename:string){
      var names:string[]=filename.split("/");
      return names[names.length-1].split(".")[0];
  }
}