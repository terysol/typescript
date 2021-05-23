// enum
enum Color{Red =1, Green, Blue}
let colorName:string=Color[2];

// Any
let notSure:any=4;
notSure="maybe a string instead";
notSure=false;

let list : any[] = [1,true,"free"];

// void -> 어떤 타입도 존재할 수 없음
function warnUser(): void {
    console.log("This is my warning message");
}

// null and undefined  -> 다른 모든 타입의 하위타입
// --strictNullChecks를 사용하면, null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능합니다

//never -> 절대 발생할 수 없는 타입/ never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while (true) {
    }
}

// object -> 원시 타입이 아닌 타입을 나타낸다.
// number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지를 의미합니다.

// 타입 단언 -> 컴파일러에게 "날 믿어, 난 내가 뭘하고 있는지 알아"라고 말해주는 방법
// 첫번째 방법  - angle-bracket
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// 두번째 방법 - as-문법
let someValue1: any = "this is a string";

let strLength1: number = (someValue as string).length;