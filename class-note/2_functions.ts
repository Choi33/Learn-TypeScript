// 파라미터의 타입을 정의하는 방식
function sum(a: number, b: number){
    return a+b;
}
sum(1,2);

// 함수의 반환 값에 타입을 정의하는 방식
function add ():number{
    return 10;
}

// 최종본
function final(a:number,b:number): number{
    return a+b
}

// 함수의 선택적(옵셔널) 파라미터
function log(a: string, b?: string){
    
}

log("start")
log("go","ts!")
// ?를 붙여 해당 파라미터 값이 선택적이라는걸 알려줌. 
