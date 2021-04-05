"use strict";
var a = 10;
a = 10;
// 타입추론 변수 a의 타입은 int형이 된다. 
var student = {
    name: 'Jake',
    course: 'Getting started with ts',
    codingIQ: 80,
    code: function () {
        console.log('typescript');
    }
};
function calculateCoddingIQ(lostPoint) {
    return 100 - lostPoint;
} // js 결과물이 숫자가 리턴한다는 것을 알려줌. 타입추론
