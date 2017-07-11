window.addEventListener("load", init);

var a;
var b;
var result = 0;
function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    document.getElementById("div").addEventListener("click",div);
    document.getElementById("mul").addEventListener("click",mul);
}

function add(){
    result = parseInt(a.value) + parseInt(b.value);
    /*document.getElementById("result").innerHTML = result;*/
    /*console.log("Value of a is",a)
    console.log("Value of b is",b)*/
    display_result()
}

function sub(){
    result = parseInt(a.value) - parseInt(b.value);
    /*document.getElementById("result").innerHTML = result;*/
    display_result()
}

function div(){
    result = parseInt(a.value) / parseInt(b.value);
    /*document.getElementById("result").innerHTML = result;*/
    display_result()
}

function mul(){
    result = parseInt(a.value) * parseInt(b.value);
    /*document.getElementById("result").innerHTML = result;*/
    display_result()
}

function display_result(){
    document.getElementById("result").innerHTML = result;
}