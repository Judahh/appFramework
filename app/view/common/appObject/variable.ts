export class Variable {
    public value: Array<Variable> | string;

    constructor(value?: Array<Variable> | string) {
        if (value) {
            this.value = value;
        }
    }

    public toString(): string {
        let _self = this;
        if (_self.isArray(_self.value))
            return _self.toStringArray();
        else
            return <string>_self.value;
    }
    public toStringArray(): string {
        let _self = this;
        let tmp = '';
        for (let index = 0; index < _self.value.length; index++) {
            tmp += '<br/>' + _self.value[index].toString();
        }
        return tmp;
    }

    public getValue(value: string) {
        let _self = this;
        if (_self.isArray(_self.value))
            return _self.getVariable(value);
        else
            if (_self.value === value)
                return _self;
    }

    public hasValue(value: string) {
        let _self = this;
        if (_self.isArray(_self.value))
            return _self.checkAll(value);
        else
            return (_self.value === value);
    }

    public addValue(value: string) {
        let _self = this;
        if (_self.isArray(this.value))
            (<Array<Variable>>this.value).push(new Variable(value));
        else
            this.value = value;
    }

    public set(name: string, value: Array<string> | string) {
        let _self = this;
        if (_self.isArray(_self.value))
            _self.setAll(name, value);
        else
            _self.setSingle(name, value);
    }
    private isArray(value) {
        return (value !== undefined && value.constructor === Array);
    }

    private getVariable(value: string) {
        let _self = this;
        for (let index = 0; index < _self.value.length; index++)
            return (<Variable>_self.value[index]).getValue(value);
    }

    private setSingle(name: string, value: Array<string> | string) {
        let _self = this;
        if (_self.value === name) {
            if (_self.isArray(value)) {
                _self.value = new Array<Variable>();
                _self.setEach(<Array<string>>value);
            } else {
                _self.addValue(<string>value);
            }
        }
    }

    private checkAll(value: string) {
        let _self = this;
        for (let index = 0; index < _self.value.length; index++)
            if ((<Variable>_self.value[index]).hasValue(value))
                return true;

        return false;
    }

    private setAll(name: string, value: Array<string> | string) {
        let _self = this;
        for (let index = 0; index < _self.value.length; index++)
            (<Variable>_self.value[index]).set(name, value);
    }

    private setEach(value: Array<string>) {
        let _self = this;
        value.forEach((element) => { _self.addValue(element); });
    }
}
