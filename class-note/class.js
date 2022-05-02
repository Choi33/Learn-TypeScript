function method(name, age){
    this.name=name;
    this.age=age;
}
const function_lan=new method('자바',30);

class Person {
    constructor(name, age) {
        console.log('생성!')
        this.name=name;
        this.age=age;
    }
}

const language=new Person('자바스크립트',20);