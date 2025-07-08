class students{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`The name of student is ${this.name} & age is ${this.age}. `);
    }
}

let student1 = new students("Nishant",34);
student1.talk();

let student2 = new students("Prashant",21);
student2.talk();