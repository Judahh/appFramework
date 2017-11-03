import { Util } from './../util/util';
export class ApiConnection {

    static request(methodType: string, apiMethod: string, callback) {
        let currentURL:string = window.location.href || document.URL;
        let arrayURL = currentURL.split('/');
        arrayURL[arrayURL.length-1]="";
        let usableURL=arrayURL.join('/');
        Util.publicApiRequest(methodType, usableURL + apiMethod, callback);
    }

    static ExternalRequest(methodType: string, apiURL: string, apiMethod: string, callback) {

        Util.publicApiRequest(methodType, apiURL + '/' + apiMethod, callback);
    }
}