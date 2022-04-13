# Learn-TypeScript, Let's Start

### 2022.03.01
📃 TypeScript 란?
- [공식 문서]('https://www.typescriptlang.org/')
- 타입이 입혀진 자바스크립트 → 자바스크립트 확장판 언어
- 브라우저에서 실행하기 위해서 컴파일이 필요함
<br><br>

📃 왜 TypeScript를 써야하는가?
- 에러 사전 방지 <br>
    - 만약 이런 함수가 있다고 생각해보자. <br>
    ``` 
    fucntion sum(a,b){
        return a+b
    }
    ```
    sum이라는 함수가 숫자만 더하는 기능을 수행한다면, a와 b는 숫자 타입만 가능하다. 그러나, 현재는 문자도 들어갈 수 있다. <br>
    그러나 타입스크립트는 이러한 가능성을 차단시켜준다. 
- 코드 자동완성과 가이드
  정해둔 타입과 다른 타입을 사용하면 코드 상에서 에러를 발생 <br>
    - ex) [sampel.ts]('./why-ts/sample.ts) <br>
      타입이 지정되어 있기 때문에 타입에 따른 메소드들이 자동 완성에 뜨게 됨.  
      ex) .을 찍으면 쓸 수 있는 함수나 API를 보여주는 등
- 자바스크립트에서 타입 스크립트 처럼 써보기
    - [코드 링크]('./why-ts/sample.js)

<br><br>
📃 interface
``` interface
 interface info{
 	name:string;
  	age:number;
}
```

- object 구성이 복잡할 때 interface를 통해 선언하고 이를 활용할 수 있음.

- 함수에 응용할 수 있음

``` interface
 interface info{
 	name:string;
  	age:number;
}

function getUser(user:User){
    console.log(user);
}

const capt={
    age : 100,
    name:'캡틴'
}

getUser(capt); 

```

- 함수 구조에 인터페이스 사용

```interface
interface SumFunciton{
    (a:number, b:number): number;
}

let total:SumFunciton;

total=function(a:number, b:number){
    return a+b;
}
```

* 인덱스로 접근

```interface-index
interface StringArray{
    [index : number]: string;
}

// arr가 StringArray 타입일 때
// arr[0]=10 하면 에러 발생
```

- 딕셔너리 타입

```interface-dir
interface StringRegexDictionary{
    //RegExp : 정규표현식
    [key:string]: RegExp;
    // key의 타입이 string,value는 RegExp
}

let obj: StringRegexDictionary={
    //sth=something
    sth:/abc/,
    cssFile:/\.css$/
}
```

- 인터페이스 확장

```interface-extend
interface Person{
    name:string;
    age:number;
}

interface Developer extends Person{
    language:string;
}
```
<br><br>
📃 type
```type
type Person={
    name:string;
    age : number;
}

const seho: Person = {
    name:'seho',
    age : 25
}
```
- type으로 지정 시, type 형식에 마우스 커서를 올리면 type의 구조를 바로 알 수 있다.
![type](/img/type.png)
<br><br>
📃 type vs interface
- type : 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것 (위의 이미지처럼 vscode의 프리뷰로 볼 수 있음 인터페이스는 그냥 interface 변수명 만 뜬다.)
- 두개의 큰 차이점은 확장 여부. type은 확장 <strong>불가능</strong> 그렇기 때문에 <strong>인터페이스로 선언하여 사용하는 것을 추천</strong>
- 좋은 소프트웨어는 확장에 용이해야한다.


