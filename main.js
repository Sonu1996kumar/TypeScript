"use strict";
// export var r = 10;
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = exports.test = exports.r = void 0;
// export function test():void{
//     console.log("from test");
// }
// export class A{
//     city:string="mike";
// }
//another way of doing export
var r = 10;
exports.r = r;
function test() {
    console.log("from test");
}
exports.test = test;
var A = /** @class */ (function () {
    function A() {
        this.city = "mike";
    }
    return A;
}());
exports.A = A;
