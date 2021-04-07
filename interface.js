// 인터페이스
var stID = 12345;
var stName = 'Kim';
var age = 19;
var gender = 'female';

var student1 = {
    stID: 12345,
    stName: "kim",
    age: 19,
    gender: 'female'
};
// 프로퍼티가 있어도 되고 없어도 되는 프로퍼티로 만드는 방법은 ? 를 붙인다. (선택적 프로퍼티)
// 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 
// 그 값으로 가지도록 강제된다.

function getStudent(student) {
    return {
        stID: 12345,
        stName: "kim",
        // age:19,
        gender: 'female'
    }; // 하나라도 안 들어가게 되면 컴파일 오류가 생긴다.
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
