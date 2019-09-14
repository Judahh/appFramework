export class Attribute {

    protected name: string;
    protected value: string;

    constructor(name: string, value: string) {
        this.name =  name;
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public toString = function() {
        return this.name + ':' + this.value;
    }
}
