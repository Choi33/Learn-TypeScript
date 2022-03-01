# Learn-TypeScript, Let's Start
<hr>
<br><br>
### 2022.03.01
📃 TypeScript 란?
- [공식 문서]('https://www.typescriptlang.org/')
- 타입이 입혀진 자바스크립트 → 자바스크립트 확장판 언어
- 브라우저에서 실행하기 위해서 컴파일이 필요함
<br>
📃 왜 TypeScript를 써야하는가?
- 에러 사전 방지
``` 
fucntion sum(a,b){
    return a+b
}
```
sum이라는 함수가 숫자만 더하는 기능을 수행한다면, a와 b는 숫자 타입만 가능하다. 그러나, 현재는 문자도 들어갈 수 있다. <br>
또한 코드 상에서 이미 에러를 발생하기 때문에 에러를 사전에 볼 수 있음.
- 코드 자동완성과 가이드
정해둔 타입과 다른 타입을 사용하면 코드 상에서 에러를 발생  ex) [sampel.ts]('./why-ts/sample.ts) <br>
타입이 지정되어 있기 때문에 타입에 따른 메소드들이 자동 완성에 뜨게 됨.  ex) .을 찍으면 쓸 수 있는 함수나 API를 보여주는 등
- 자바스크립트에서 타입 스크립트 처럼 써보기
[코드 링크]('./why-ts/sample.js)