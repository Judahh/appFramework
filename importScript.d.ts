export declare class ImportScript {
    static importTS(path: string): void;
    static importJS(path: string): void;
    static importJSON(path: string): void;
    static importCSS(path: string): void;
    static type(format: string): "link" | "script";
    static attributeSource(format: string): "href" | "src";
    static importFile(path: string, format: string): void;
    static importFileWithoutExtention(path: string, format: string, async: boolean, defer: boolean): void;
    static importFileWithoutExtentionWithCallback(path: any, format: any, name: any, callback: any): void;
}
