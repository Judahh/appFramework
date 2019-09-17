export class Attribute {

    protected name: string;
    protected valueName: string;
    protected value: string; // TODO

    constructor(name: string, valueName: string, value?: string) {
        this.name =  name;
        this.valueName = valueName;
        this.value = '';
        if (value)
            this.value = value;
    }

    public getValueName(): string {
        return this.valueName;
    }

    public getName(): string {
        return this.name;
    }

    public getLink(): string {
        return this.name + ':' + this.valueName;
    }

    public getInit(): string {
        return 'this.' + this.valueName + ' = ko.observable("' + this.value + '")';
    }

    public getSet(value): string {
        this.value = value;
        return 'this.' + this.valueName + '("' + this.value + '")';
    }
}
