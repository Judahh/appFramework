importJS('app/view/util/util');
class ServiceModel {
    private static uRL = '../frame/';

    public static getPromise(path:string):JQueryPromise<any>{
        // var internalJSON = require(this.internalURL+path+".json");
        // console.log(internalJSON);
        // console.log("A:");
        return Util.getJsonPromise(this.uRL+path+".json");
        // this.http.get(this.URL+path+".json").toPromise().then(this.extractData).catch(this.handlePromiseError);
    }

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
    //     // console.log("E:");
    //     console.error(errorMessage);
    //     return Promise.reject(errorMessage);
    // }
}