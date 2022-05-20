// function logText(text){
//     console.log(text);
//     return text;
// }
//
// logText(10);
// logText('하이');
// logText(true)


// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
// }
//
// logText<number>(10);


// function logText(text : string){
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }
// logText('a');
//
// function logNumber(num:number){
//     console.log(num);
//     return num;
// }
// logNumber(10);


// function logText(text : string | number){
//     console.log(text);
//     return text;
// }
//
// logText('a');
// logText(10);


function logText<T>(text: T): T{
    console.log(text);
    return text;
}
const str = logText<string>('a');
str.split('');
logText(10);
