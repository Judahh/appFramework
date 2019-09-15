export class Attribute {

    protected name: string;
    protected valueName: string;
    protected value: string; // TODO

    constructor(name: string, valueName: string) {
        this.name =  name;
        this.valueName = valueName;
    }

    public getValueName(): string {
        return this.valueName;
    }

    public getName(): string {
        return this.name;
    }

    public toString = function() {
        return this.name + ':' + this.valueName;
    }
}
