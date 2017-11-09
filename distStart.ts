import { ImportScript } from './importScript';
if(window['offline']){
    ImportScript.importJS('node_modules/backappjh/loader');
}else{
    ImportScript.importJS('loader');
}
import { App } from './app/app';

function onLoad() {
    let app = new App();
}

window.onload = function(e){
    onLoad();
}