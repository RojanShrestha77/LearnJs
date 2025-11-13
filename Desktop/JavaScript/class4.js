class Person {
    static species = "Human"//
    constructor(name, age){
        this.name = name
        this.age = age

    }
    info(){
        console.log(`My name is ${this.name}`)
    }
    set setAge(newAge){
        this.age = newAge
    }

    get getAge(){
        return this.age
    }

    
}


    const person1 = new this.person1("Hari1",30)
    console.log(Person.species)
    person1.name = "New Name"
    console.log(persone1.name)
    person1.info()
    person1.setAge = 31
    console.log(person1.getAge)

    //Inheritance
    class Student extends Person {
        constructor(name, age, studentID){
            super(name, age)
            this.studentId = studentId
        }
        details(){
            console.log(`Name: ${this.studentId} ${super.name}`)
        }
    }
    const student1 = new Students("Sita", 22, "S123")
    student1.details()
    student1.info()
    console.log(Student.species)
