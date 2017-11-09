import { ImportScript } from './importScript';
ImportScript.importJS('loader');
import { App } from './app/app';


function onLoad() {
    let app = new App();
}

window.onload = function(e){
    
    onLoad();
}