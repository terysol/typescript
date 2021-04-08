let a=10;

a=10;

// 타입추론 변수 a의 타입은 int형이 된다. 

let student={
    name:'Jake',
    course : 'Getting started with ts',
    codingIQ:80,
    code:function(){
        console.log('typescript');
    }
}

function calculateCoddingIQ(lostPoint:any){
    return 100-lostPoint;
}// js 결과물이 숫자가 리턴한다는 것을 알려줌. 타입추론

// Syntac 타입 명시
let studentID:number=12345;
let studentName : string='Jenny Kim';
//let age:number=21;
 
function getStudentDetails(studentID:number):{
    studentID:number;           // 반환되는 객체를 구조를 명시 
    studentName:string;
    age:number;
}{
    // : ~   ==> 리턴값 타입명시 , void는 아무것도 반환하지 않는다
    return null as any;
}
// type에 대한 정보가 많을 수록 ts는 코드를 효과적으로 짤 수 있음.

