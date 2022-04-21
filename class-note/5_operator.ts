function logMessage(value: string | number){
    if (typeof value==='number'){
        value.toLocaleString();
    }
    if (typeof value==='string'){
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

logMessage('message');
logMessage(100)

interface Developer{
    name:string;
    skill:string;
}

interface Person{
    name:string;
    age:number;
}

function askSomeone(someone:Developer | Person){
    someone.name;
}


function andSomeone(someone: Developer & Person){
    someone
    someone.name
    someone.age
    someone.skill
}

function newAskSomeone(someone:Developer | Person){
    someone.name;
}

newAskSomeone({name:'디벨로퍼', skill:'웹'})
newAskSomeone({name:'김개발', age:20})


function newAndSomeone(someone: Developer & Person){
    someone.name
    someone.age
    someone.skill
}

newAndSomeone({name:'나개발',age:30,skill:'안드로이드'})