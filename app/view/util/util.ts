// import { Array } from 'simpleutils';
// import * as $ from 'jquery';
// import { JQueryPromise } from '@types/jquery'
// declare let $: any;
// declare let JQueryPromise: any;

// declare module '$' {
//   let _$: any;
//   export = _$;
// }

// declare module 'JQueryPromise' {
//   let _JQueryPromise: any;
//   export = _JQueryPromise;
// }

export class Util {
  static browserLanguage;
  static currentLanguage;
  static dataJSON: Array<any>;

  static elementHTML(name: string, id?: string, body?: string) {
    console.log('Name: ' + name);
    let hTML = '<' + name;
    if (id) {
      hTML += ' id=\'' + id;
    }
    if (body) {
      hTML += '\'>' + body + '</' + name;
    }
    return hTML + '>';
  }

  static getJsonPromise(path: string): JQueryPromise<any> {
    if (Util.dataJSON == null) {
      Util.dataJSON = new Array();
    }
    if (Util.dataJSON[path] == null) {
      Util.dataJSON[path] = $.getJSON(path);
    }
    // else{
    //   console.log('CACHE');
    // }
    return Util.dataJSON[path];
    // return $.getJSON(path);
  }

  static getTag(name: string) {
    let names: string[] = name.split('Component');
    return names[names.length - 1].toLowerCase();
  }

  static getFileName(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  static getCurrentComponentPath() {
    let error = new Error();
    // console.log('test:'+(stack+'')+'end');
    let stack = error.stack + 'END';
    // console.log('path:'+stack);
    let link = stack.split('(')[3];
    if (link == null || link === undefined || link === '') {
      link = stack.split('@')[3];
    }
    link = link.split('.js')[0].split(location.href)[1];
    // console.log('path:'+link);
    return link;
  }

  static removeElements(elements: NodeListOf<Element>) {
    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  static getBrowserLanguage() {
    if (Util.browserLanguage !== undefined) {
      return Util.browserLanguage;
    }

    let navigator = <any>window.navigator,
      browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
      i,
      language;

    // support for HTML 5.1 'navigator.languages'
    if (Array.isArray(navigator.languages)) {
      for (i = 0; i < navigator.languages.length; i++) {
        language = navigator.languages[i];
        if (language && language.length) {
          Util.browserLanguage = language;
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = navigator[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        Util.browserLanguage = language;
        return language;
      }
    }

    Util.browserLanguage = 'en-US';
    return Util.browserLanguage;
  }

  static getCurrentLanguage() {
    if (Util.currentLanguage !== undefined) {
      return Util.currentLanguage;
    } else {
      Util.currentLanguage = Util.getBrowserLanguage();
    }
    return Util.currentLanguage;
  }

  static setCurrentLanguage(language: string) {
    Util.currentLanguage = language;
  }

  static publicApiRequest(methodType: string, apiURL: string, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        // console.log(xmlHttp.responseText);
        callback(xmlHttp.responseText);
      }
    }
    xmlHttp.open(methodType, apiURL, true); // true for asynchronous
    xmlHttp.send(null);
  }

  static setCookie(name: string, value: any, expiresDays?: number) {
    if (expiresDays) {
      let d = new Date();
      d.setTime(d.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
      let expires = 'expires=' + d.toUTCString();
      document.cookie = name + '=' + value + ';' + expires + ';path=/';
    } else {
      document.cookie = name + '=' + value + ';path=/';
    }
  }

  static clearCookie(name: string, expiresDays?: number) {
    if (expiresDays) {
      let d = new Date();
      d.setTime(d.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
      let expires = 'expires=' + d.toUTCString();
      document.cookie = name + '=' + '' + ';' + expires + ';path=/';
    } else {
      document.cookie = name + '=' + '' + ';path=/';
    }
  }

  static getCookie(name: string) {
    name += '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  static checkCookie() {
    let user = Util.getCookie('username');
    if (user !== '') {
      alert('Welcome again ' + user);
    } else {
      user = prompt('Please enter your name:', '');
      if (user !== '' && user != null) {
        Util.setCookie('username', user, 365);
      }
    }
  }

}

declare global {
  interface Array<T> {
    type: any;
    getType(): string;
  }
  
  interface JQueryStatic {
    cache;
  }
  
  interface String {
    replaceAll(search:string, replacement:string): string;
  }
}

declare interface Array<T> {
  type: any;
  getType(): string;
}

declare interface JQueryStatic {
  cache;
}

declare interface String {
  replaceAll(search:string, replacement:string): string;
}

String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

Array.prototype.getType = function () {
  return this.type;
}

// interface Object {
//     getClassName(): string;
//     getConstructor(): any;
// }

// Object.prototype.getConstructor = function() {
//   return this.constructor;
// }

// Object.prototype.getClassName = function() {
//   return this.constructor.name;
// }

  export { Array, String }