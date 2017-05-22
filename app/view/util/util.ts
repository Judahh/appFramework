class Util{
  static elementHTML(name:string,body?:string) {
    if(body){
      return "<"+name+">"+body+"</"+name+">";
    }
    return "<"+name+">";
  }

  static getJson(path:string, sendData?:any){
    $.ajax({
      url: path,
      dataType: 'json',
      async: false,
      data: sendData,
      success: function(data) {
        return data;
      }
    });
  }
}