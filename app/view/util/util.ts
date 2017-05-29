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
    var link = err.stack.split('(')[3].split('.js')[0].split(location.href)[1];
    // console.log("path:"+link);
    return link;
  }

  static removeElements(elements:NodeListOf<Element>){
    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
  }

  static getBrowserLanguage() {
    var navigator = <any> window.navigator,
    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
    i,
    language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(navigator.languages)) {
      for (i = 0; i < navigator.languages.length; i++) {
        language = navigator.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = navigator[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return "en-US";
  }

}
 
interface Array<T> {
    type:any;
    getType(): string;
}

// interface Object {
//     getClassName(): string;
//     getConstructor(): any;
// }

Array.prototype.getType = function() {
    return this.type;
}

// Object.prototype.getConstructor = function() {
//   return this.constructor;
// }

// Object.prototype.getClassName = function() {
//   return this.constructor.name;
// }