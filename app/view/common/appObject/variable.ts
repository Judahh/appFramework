export class Variable {
    public value: Array<Variable> | string;

    constructor(value?: Array<Variable> | string) {
        if (value) {
            this.value = value;
        }
    }

    public toString() {
        return this.value;
    }

    public addValue(value: string) {
        if (this.value.constructor === Array)
            (<Array<Variable>> this.value).push(new Variable(value));
        else
            this.value = value;
    }

    public set(name: string, value: Array<string> | string) {
        let _self = this;
        if (_self.value.constructor === Array)
            _self.setAll(value);
        else
            _self.setSingle(name, value);
    }

    private setSingle(name: string, value: Array<string> | string) {
        let _self = this;
        if (_self.value === name) {
            if (value.constructor === Array) {
                _self.value = new Array <Variable>();
                _self.setEach(<Array<string>>value);
            } else {
                _self.addValue(<string> value);
            }
        }
    }

    private setAll(value: Array<string> | string) {
        let _self = this;
        for (let index = 0; index < _self.value.length; index++)
                (<Variable> _self.value[index]).set(name, value);
    }

    private setEach(value: Array<string>) {
        let _self = this;
        value.forEach((element) => {_self.addValue(element); });
    }
}
