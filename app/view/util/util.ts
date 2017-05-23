class Util{
  static elementHTML(name:string,body?:string) {
    if(body){
      return "<"+name+">"+body+"</"+name+">";
    }
    return "<"+name+">";
  }

  static getJson(path:string){

    $.getJSON(path, function( data ) {  
        console.log( "JSON Data: " + data);
        $.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });
    });
  }
}