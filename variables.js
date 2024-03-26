// var x1:number=10;
// console.log(x1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var x2:number=10.6;
// console.log(x2);
// var x3:string="mike";
// console.log(x3);
// var x4:boolean=true;
// console.log(x4);
// var x5:any=100;
// console.log(x5);
//object in tc
var obj = {
    "name": "mike",
    "age": 25
};
// console.log(obj.name);
// console.log(obj.age);
//array in tc
var arr = [10, 12, 23];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
//function
function addNumber(x1, x2) {
    console.log(x1 + x2);
}
//addNumber(19,100);
function subNumber(x1, x2) {
    return (x1 - x2);
}
var x = subNumber(20, 100);
//console.log(x);
function concatName(x1, x2) {
    return (x1 + x2);
}
var x1 = concatName("Mike", 100);
//console.log(x1);
function test() {
    console.log("hello world");
}
//test();
function test1(x1, x2) {
    return x1 + " " + x2;
}
var val = test1('mike', 'thyson');
//console.log(val)
//hum log ''==""==`` same kaam karega
// Optional  Parameter
function test2(x1, x2) {
    console.log(x1);
    console.log(x2);
}
//test2(10);
//Default Parameter
function test3(x1, x2) {
    if (x2 === void 0) { x2 = 100; }
    console.log(x1);
    console.log(x2);
}
// test3(10);
// test3(10,1000);
//ARRAY WITH FOR LOOP
// function test5(n:number[]):void{
//     for(var x:number=0;x<n.length;x++){
//         console.log(n[x]);
//     }
// }
// var y:number[]=[10,20,30];
// test5(y);
//Rest Parameter
// function test5(...n:any[]):void{
//     for(var x:number=0;x<n.length;x++){
//         console.log(n[x]);
//     }
// }
// test5(10,20,30,40,"mike");
// function test5(i:string,...n:number[]):void{
//     for(var x:number=0;x<n.length;x++){
//         console.log(n[x]);
//     }
//     console.log(i)
// }
// test5("mike",10,20,30,40,);
// function test5(name:string,city:string):void{
//         console.log(`${name} ${city}`);
// }
// test5("mike","siwan");
//Arrow function
// var addVal=(x1:number,x2:number):number=>{
//     return x1+x2;
// }
// var result:number=addVal(12,28);
// console.log(result);
// //  M2
// var subVal=(x1:number,x2:number):number=>x1-x2;
// var result:number=subVal(20,10);
// console.log(result)
// var testing=():void=>{
//     console.log("Hello");
// };
// testing();
// var testing=():number=>{
//     return 100;
// };
// var x:number=testing();
// console.log(x);
//ENUM--------------------------------------------------
var Val;
(function (Val) {
    Val[Val["Red"] = 0] = "Red";
    Val[Val["Green"] = 1] = "Green";
    Val[Val["Yellow"] = 2] = "Yellow";
})(Val || (Val = {}));
// console.log(Val);
// console.log(Val[0]);
//DAY2---------------****************************--------------------
function testing() {
    if (true) {
        var r = 10;
        console.log(x);
        var y = 20;
        console.log(y);
        //y=30;error
        var z = 50;
        console.log(z);
    }
    //console.log(r);error
    //console.log(y);error
    console.log(z); //correct
}
//-----------------**********CLASS*******************---------------------------
//fnx keyword restricted inside the class we cant use inside the class
//for error ctr+.
// class A{
//     id:number;
//     city:string;
//     test():void{
//         this.id=10;
//         this.city="mike";
//         console.log(this.id);
//         console.log(this.city);
//     }
// }
// var a=new A();
// a.test();
//--------------***************CONSTRUCTOR*****************-----------------------
//TS have only one constructor
// class A{
//     constructor(){
//         console.log(100);
//     }
// }
// var a = new A();
// class B{
//     constructor(city:string,id:number){
//         console.log(`${city} ${id}`);
//     }
// }
// var a = new B("Hari",1);
// class C{
//     x:string;
//     y:number;
//     constructor(city:string,id:number){
//         this.x=city;
//         this.y=id;
//         console.log(this.x);
//         console.log(this.y);
//     }
// }
// var a1 = new C("Siwan",2);
// //to access the nsv inside the class we have to use this but outside reference
// class D{
//     x:string="mike";
//     y:number=10;
// }
// var a1 = new D();
// console.log(a1.x);
// console.log(a1.y);
// //undefined
// console.log(this.x);
// console.log(this.y);
// class E{
//     x:string="hike";
//     y:number=1000
//     test():void{
//         console.log(this.x)
//         console.log(this.y)
//     }
// }
//     var e=new E();
//     console.log(e.x)
//     console.log(e.y)
//    // console.log(e.test());=>undefined
//    e.test();
//    //---------------************SECOND WAY OF CREATING OBJECT*******************-------------
//    class F{
//     id:number;
//     city:string;
//    }
//    var f={
//     "id":1209,
//     "city":"Siwan"
//    }
//    console.log(f.id);
//    console.log(f.city);
//----------**********INTERFACE*********------------------------------
// interface A{
//     test():void;
// }
// class B implements A{
//     test(): void {
//         console.log("from calss B")
//     }
// }
// var b1=new B();
// b1.test();
// interface A{
//     city:string;
//     test():void;
// }
// class B implements A{
//     city: string;
//     test(): void {
//         console.log("from calss B")
//     }
// }
// var b1=new B();
// b1.test();
// //static variable
// class D{
//     static x:number=200;
//     x=20;
// }
// console.log(D.x);
// var d1=new D();
// console.log(d1.x);
// class E{
//     static testi():void{
//        console.log("from test");
//     }
// }
// E.testi();
//----------------*******************INHERITANCE*****************--------------------
// class A{
//     test():void{
//         console.log("from test through inheritance");
//     }
// }
// class B extends A{
// }
// var b1 = new B();
// b1.test();
//-------------OVERRIDING-----------------
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("from test through inheritance");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.test = function () {
        console.log("from B");
    };
    return B;
}(A));
var b1 = new B();
b1.test();
var a1 = new A();
a1.test();
