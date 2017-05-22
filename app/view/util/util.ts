class Util{
  static elementHTML(name:string,body?:string) {
    if(body){
      return "<"+name+">"+body+"</"+name+">";
    }
    return "<"+name+">";
  }
}