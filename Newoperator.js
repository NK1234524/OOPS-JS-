function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}
Person.prototype.talk = ()=>{
    console.log(`The name is ${this.name} & ${this.age}`);
}

let p1 = new Person("adam",25);