interface User {
    age:number;
    name:string;
}


//변수에 인터페이스 활용
const seho: User={
    age : 22,
    name: '세호'
}


// 함수에 인터페이스 활용
function getUser(user:User){
    console.log(user);
}

const capt={
    age : 100,
    name:'캡틴'
}
getUser(capt); 


// 함수의 스팩(구조)에 인터페이스를 활용
interface SumFunciton{
    (a:number, b:number): number;
}

let total:SumFunciton;

total=function(a:number, b:number){
    return a+b;
}


//인덱싱
interface StringArray{
    [index : number]: string;
}

let arr: StringArray=['a','b','c'];
console.log(arr[0]); // 'a'


// 딕셔너리 패턴
interface StringRegexDictionary{
    //RegExp : 정규표현식
    [key:string]: RegExp;
    // key의 타입이 string,value는 RegExp
}

let obj: StringRegexDictionary={
    //sth=something
    sth:/abc/,
    cssFile:/\.css$/,
    jsFile:/\.js$/
}

Object.keys(obj).forEach(function(value){

})


// 인터페이스 확장
interface Person{
    name:string;
    age:number;
}

interface Developer extends Person{
    language:string;
}

let newone: Developer = {
    name:"cap",
    age:22,
    language:'TS'
}