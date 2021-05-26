interface LabeledValue{
    label:string;
}
function printLabel(labeledObj:LabeledValue){
    console.log(labeledObj.label);
}

let myObj={size:10,label:"Size 10 Object"};
printLabel(myObj);

// 타입 검사는 프로퍼티들의 순서를 요구하지 않는다.
// 단지 인터페이스가 요구하는 프로퍼티들이 존재하지와 프로퍼티들이 요구하는 타입을 가졌는지만을 확인

// 선택적 프로퍼트(Optional Properties)
/* 인터페이스의 모든 프로퍼티가 필요한 것은 아니다. 어떤 조건에서만 존재하거나 아예 없을수도 있다. */
interface SquareConfig{     // 선택적 프로퍼티
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string; area:number}{
    let newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black"});

// 읽기전용 프로퍼티(Readonly properties)
interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point={x:10,y:20};
// p1.x=5; 오류
let a:number[]=[1,2,3,4];
let ro:ReadonlyArray<number>=a;
a=ro as number[];   // 타입단언(type assertion)으로 오버라이드하는 것

// readonly vs const
// 변수는 const, 프로퍼티 - readonly

// 초과 프로퍼티 검사 (Excess Property Checks)
