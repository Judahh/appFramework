export class Child {
    protected father: any;

    constructor(father?: any) {
        if (father) {
            this.father = father;
        }
    }
}
