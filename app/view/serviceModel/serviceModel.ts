class ServiceModel {
    private static uRL = 'app/view/serviceModel/jSON/';

    public static getPromise(path:string):JQueryPromise<any>{
        // var internalJSON = require(this.internalURL+path+".json");
        // console.log(internalJSON);
        // console.log("A:");
        return Util.getJson(this.uRL+path+".json");
        // this.http.get(this.URL+path+".json").toPromise().then(this.extractData).catch(this.handlePromiseError);
    }
}