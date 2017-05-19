function importTS(path:string){
    importJS(path);
}

function importJS(path:string){
    importFile(path,'js');
}

function importCSS(path:string){
    importFile(path,'css');
}

function type(format:string){
    switch (format) {
        case "css":
            return "link";

        case "js":
            return "script";
    
        default:
            return "";
    }
}

function importFile(path:string, format:string){
    var importedScript = document.createElement(type(format));
    var fullPath = path+'.'+format;
    
    if(format=='css'){
        importedScript.href = fullPath;
        importedScript.rel = "stylesheet";
        importedScript.type = "text/css";
    }else{
        importedScript.src = fullPath;
    }
    
    var nodes = document.head.children;
    for (var index = 0; index < nodes.length; index++) {
        var element = nodes[index];
        if(format=='css'){
            if(element.href == importedScript.href){
                return;
            }
        }else{
            if(element.src == importedScript.src){
                return;
            }
        }
        
    }
    document.head.appendChild(importedScript);
}
