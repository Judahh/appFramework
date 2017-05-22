function importTS(path:string){
    importJS(path);
}

function importJS(path:string){
    importFile(path,'js');
}

function importJSON(path:string){
    importFile(path,'json');
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
            return "script";
    }
}

function attributeSource(format:string){
    switch (format) {
        case "css":
            return "href";

        case "js":
            return "src";
    
        default:
            return "";
    }
}

function importFile(path:string, format:string){
    var importedScript = document.createElement(type(format));
    var fullPath = path+'.'+format;
    var source = attributeSource(format);

    importedScript.setAttribute(source, fullPath);
    if(format=='css'){
        importedScript.setAttribute("rel", "stylesheet");
        importedScript.setAttribute("type", "text/css"); 
    }
    
    var nodes = document.head.children;
    for (var index = 0; index < nodes.length; index++) {
        var element = nodes[index];
        if(element.getAttribute(source) == importedScript.getAttribute(source)){
            return;
        }
        
    }
    document.head.appendChild(importedScript);
}
