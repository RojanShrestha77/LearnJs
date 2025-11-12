//inheritance = allows a new class to import properties and methods from an existing class (parent -> clahild)
//helps  with the code reusability

class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);

    
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    read(){
        console.log(`This ${this.name} is reading`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit"
}

class Mouse extends Animal {
    name = "Mouse"
}

class Hawk extends Animal {
    name = "Hawk"
}

class Tiger extends Animal {
    name = "tiger"
}

const rabbit = new Rabbit();
const mouse =  new Mouse();
const hawk = new Hawk();
const tiger = new Tiger();

hawk.sleep();
mouse.eat();
rabbit.read();