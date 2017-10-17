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
            return "src";
    }
}

function importFile(path:string, format:string) {
    importFileWithoutExtention(path + "." + format, format, false, false);
}
function importFileWithoutExtention(path:string, format:string, async:boolean, defer:boolean) {
    let importedScript = document.createElement(type(format));
    let fullPath = path;
    let source = attributeSource(format);
    if(async){
        importedScript.setAttribute("async", '');
    }
    if(defer){
        importedScript.setAttribute("defer", '');
    }
    importedScript.setAttribute(source, fullPath);
    if (format == 'css') {
        importedScript.setAttribute("rel", "stylesheet");
        importedScript.setAttribute("type", "text/css");
    }
    let nodes = document.head.children;
    for (let index = 0; index < nodes.length; index++) {
        let element = nodes[index];
        if (element.getAttribute(source) == importedScript.getAttribute(source)) {
            return;
        }
    }
    document.head.appendChild(importedScript);
}

function callbacker(){}
function importFileWithoutExtentionWithCallback(path, format, callback) {
    // importFileWithoutExtention(path, format, true, true);
    eval ("callbacker = callbackerFunction.bind(null, callback);");
    importFileWithoutExtention(path + "&callback=callbacker", format, true, true);
    // importFileWithoutExtention(path, format, true, true);
}
function callbackerFunction(callback) {
    callback();
}