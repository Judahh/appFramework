importJS('app/view/util/util');
class ApiConnection {

    static request(methodType: string, apiMethod: string, callback) {
        let currentURL = window.location.href || document.URL || window.location;
        Util.publicApiRequest(methodType, currentURL + apiMethod, callback);
    }

    static ExternalRequest(methodType: string, apiURL: string, apiMethod: string, callback) {

        Util.publicApiRequest(methodType, apiURL + '/' + apiMethod, callback);
    }
}