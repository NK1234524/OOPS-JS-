class students{
    constructor (name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    talk(){
        console.log(`The name of student is ${this.name},age is ${this.age} & ${this.marks}. `);
    }
}

let student1 = new students("Nishant",34,100);
student1.talk();

let student2 = new students("Prashant",21,101);
student2.talk();