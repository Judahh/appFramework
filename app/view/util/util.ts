class Util{
  static elementHTML(name:string,body?:string) {
    if(body){
      return "<"+name+">"+body+"</"+name+">";
    }
    return "<"+name+">";
  }

  static getJson(path:string){
    return $.getJSON( "app/view/jSON/test.json").done();
  }
}