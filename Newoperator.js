function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}
Person.prototype.talk = function(){
    console.log(`The name is ${this.name} & ${this.age}`);
}

let p1 = new Person("adam",25);
let p2 = new Person("Madam",35);
console.log(p1.talk());
console.log(p2.talk());