function importJS(path){
    var importedScript = document.createElement('script');
    importedScript.src = path+'.js';
    document.head.appendChild(importedScript);
}