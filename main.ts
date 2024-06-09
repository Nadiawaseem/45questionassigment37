    function make_shirt1(lable:string, size: string = "Large") {
        return '${lable} ${size}'
    }
    let f1 = make_shirt1("I love Typescript")
    console.log(f1);

    function make_shirt2(lable:string  , size:String = "Medium") {
        return '${lable}${size}'

    }
    let f2 = make_shirt2("I love Typescript")
    console.log(f2);

    function make_shirt3(lable:string  , size:string ) {
       return '${lable} ${size}' 
    }
    let f3 = make_shirt3("I love Typescript", "Any size")
    console.log(f3);

    