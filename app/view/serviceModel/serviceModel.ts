import { Util } from './../util/util'
export class ServiceModel {
    private static uRL = '../frame/'; // TODO: check
    private static uRLOffline = 'app/frame/'; // TODO: check

    public static getPromise(path: string): JQueryPromise<any> {
        // let internalJSON = require(this.internalURL+path+'.json');
        // console.log(internalJSON);
        // console.log('A:');
        if(window['offline']){
            // console.log();
            // let _self = this;
            // require([this.uRLOffline + path + '.json'], _self.test);
            return null;
        }else{
            return Util.getJsonPromise(this.uRL + path + '.json');
        }
        // this.http.get(this.URL+path+'.json').toPromise().then(this.extractData).catch(this.handlePromiseError);
    }

    // public static test(){

    // }

    // private handlePromiseError (error: Response | any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     let errorMessage: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const bodyError= body.error || JSON.stringify(body);
    //         errorMessage = `${error.status} - ${error.statusText || ''} ${bodyError}`;
    //     } else {
    //         errorMessage = error.message ? error.message : error.toString();
    //     }
    //     // console.log('E:');
    //     console.error(errorMessage);
    //     return Promise.reject(errorMessage);
    // }
}
