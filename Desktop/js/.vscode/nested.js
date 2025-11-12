//nested objects = Objects inside of other objects
//                    Allows you to represent more complex data structures
//                    child object is enclosed by the parent object

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;


    }
}

const person1 = new Person("Spongebob" ,30, "124 Conch st.","Bikini Bottom","Int.waters");

const person2 = new Person("Patrick", 37, "124 Conch st.","Bikini Bottom","Int.waters");

const person3 = new Person("squidward", 45, "124 Conch st.","Bikini Bottom","Int.waters");

console.log(person1.address)
