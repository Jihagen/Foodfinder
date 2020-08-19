//classes & components 

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = "undecided"){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getGreeting(){
        let description = super.getGreeting();
        if (this.hasMajor()){
            description +=`Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = "unknown"){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // isFrom(){
    //     return !!this.homeLocation;
    // }
    getGreeting(){
        let description = super.getGreeting();
        if (this.homeLocation){
            description += `They are from ${this.homeLocation}`;
        }
        return description;
    }
}

const me = new Traveler("Julia Hagen", 21, "Nuremberg");
console.log(me.getGreeting());


