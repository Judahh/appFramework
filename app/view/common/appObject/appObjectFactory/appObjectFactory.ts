abstract class AppObjectFactory{
    public static create(name:string, father?: Component){
        var object;
        eval ("object = new "+name+"(father);");
        return object;
    }
}