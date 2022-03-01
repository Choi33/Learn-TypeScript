// function sum(a,b){
//     return a+b;
// }

// sum(1,'3')

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
// ▲ javadoc 문법

function sum(a,b){
    return a+b;
}

sum(2,'5') // 이게 잘못되었다고 알려주지 X 타입 스크립트는 알려준다.
// @ + ts-check를 주석으로 사용해주면 위에 코드가 잘못되었다고 알려주긴 함
sum(3,9)