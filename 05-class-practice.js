class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}
class Dogs extends Animal{
    constructor(name){
        super(name);
    }

}


let d = new Dogs('mew');
d.speak();