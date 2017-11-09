// export = 0;

// function callbackerFunction(callback) {
//     callback();
// }

// // tslint:disable-next-line:no-empty
// function callbacker() { };

export class ImportScript {

    public static importTS(path: string) {
        this.importJS(path);
    }

    public static importJS(path: string) {
        this.importFile(path, 'js');
    }

    public static importJSON(path: string) {
        this.importFile(path, 'json');
    }

    public static importCSS(path: string) {
        this.importFile(path, 'css');
    }

    public static type(format: string) {
        switch (format) {
            case 'css':
                return 'link';

            case 'js':
                return 'script';

            default:
                return 'script';
        }
    }

    public static attributeSource(format: string) {
        switch (format) {
            case 'css':
                return 'href';

            case 'js':
                return 'src';

            default:
                return 'src';
        }
    }

    public static importFile(path: string, format: string) {
        this.importFileWithoutExtention(path + '.' + format, format, false, false);
    }

    public static importFileWithoutExtention(path: string, format: string, async: boolean, defer: boolean) {
        let importedScript = document.createElement(this.type(format));
        let fullPath = path;
        let source = this.attributeSource(format);
        if (async) {
            importedScript.setAttribute('async', '');
        }
        if (defer) {
            importedScript.setAttribute('defer', '');
        }
        importedScript.setAttribute(source, fullPath);
        if (format === 'css') {
            importedScript.setAttribute('rel', 'stylesheet');
            importedScript.setAttribute('type', 'text/css');
        }
        let nodes = document.head.children;
        for (let index = 0; index < nodes.length; index++) {
            let element = nodes[index];
            if (element.getAttribute(source) === importedScript.getAttribute(source)) {
                return;
            }
        }
        document.head.appendChild(importedScript);
    }

    public static importFileWithoutExtentionWithCallback(path, format, name, callback) {
        // importFileWithoutExtention(path, format, true, true);
        // tslint:disable-next-line:no-eval
        // eval('callbacker = callbackerFunction.bind(null, callback);');
        this.importFileWithoutExtention(path + '&callback=callbacker' + name, format, true, true);
        // importFileWithoutExtention(path, format, true, true);
        window['callbacker' + name] = callback;
    }
}

// window.callbackerFunction = callbackerFunction;
// window.callbacker = callbacker;

