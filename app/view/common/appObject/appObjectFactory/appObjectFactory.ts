abstract class AppObjectFactory{
    public static create(name:string, father?: Component){
        let object;
        eval ("object = new "+name+"(father);");
        return object;
    }
}