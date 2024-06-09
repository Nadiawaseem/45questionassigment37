function make_shirt1(lable, size) {
    if (size === void 0) { size = "Large"; }
    return '${lable} ${size}';
}
var f1 = make_shirt1("I love Typescript");
console.log(f1);
function make_shirt2(lable, size) {
    if (size === void 0) { size = "Medium"; }
    return '${lable}${size}';
}
var f2 = make_shirt2("I love Typescript");
console.log(f2);
function make_shirt3(lable, size) {
    return '${lable} ${size}';
}
var f3 = make_shirt3("I love Typescript", "Any size");
console.log(f3);
