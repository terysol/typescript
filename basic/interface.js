"use strict";
/* 21.04.08 _ 열거형(Enum)과 리터럴 타입*/
// Enum - 연관된 아이템들을 함계 묶어서 이용할 수 있는 수단.
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral"; // 문자형 열거형(값을 넣지 않으면 숫자 열거형)
})(GenderType || (GenderType = {}));
// 인터페이스
var stID1 = 12345;
var stName1 = 'Kim';
var age1 = 19;
var gender1 = 'female';
var student1 = {
    stID: 12345,
    stName: "kim",
    age: 19,
    gender: GenderType.Female
};
// 프로퍼티가 있어도 되고 없어도 되는 프로퍼티로 만드는 방법은 ? 를 붙인다. (선택적 프로퍼티)
// Readonly 프로퍼티 -> 읽기 전용 프로퍼티로 객체 생성피 할당된 값이 바꿀 수 없음.
// 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 
// 그 값으로 가지도록 강제된다.
function getStudents(student) {
    return {
        stID: 12345,
        stName: "kim",
        // age:19,
        gender: "female" // auto complete
    }; // 하나라도 안 들어가게 되면 컴파일 오류가 생긴다.
}
function saveStudentDetail(student) {
    // student.stID=11222;
}
saveStudentDetail(student1);
// javascript파일에는 ts에서 적은 인터페이스가 없다. 
// ts컴파일러가 javascript로 컴파일할 때 인터페이스 지워버림
// 인터페이스는 작성중인 코드에 대한 정보를 typescript에게 제공하기 위해 존재
// 많은 정보를 제공해줄 수록 typescript는 우리에게 도움을 준다.
