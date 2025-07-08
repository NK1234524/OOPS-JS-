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

class student extends students{
    constructor(name,age,rollno,marks){
        console.log("Student extends students");
        super(name,age,marks);
        this.rollno=rollno;
    }
}

class teacher extends students{
    constructor(name,age,subject){
        console.log("Teacher extends students");
        super(name,age);
        this.subject = subject;
    }
}

let student1 = new student("Nishant kumar",34,12,100);
let teacher1 = new teacher("Sheela",50,"English");
console.log(student1.age,student1.name,student1.marks,student1.rollno);