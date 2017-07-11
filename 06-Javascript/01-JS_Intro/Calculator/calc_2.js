window.addEventListener("load", init);

var a;
var b;
var result = 0;
function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");

    buttons = document.getElementsByTagName("button");
    /*buttons.addEventListener("click",do_operations);*/

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click",do_operations);
    }

    /*document.getElementById("add").addEventListener("click",do_operations);
    document.getElementById("sub").addEventListener("click",do_operations);
    document.getElementById("div").addEventListener("click",do_operations);
    document.getElementById("mul").addEventListener("click",do_operations);*/
}

function do_operations(){
    opr = event.srcElement.innerHTML;
    console.log(opr);

    var expression = a.value+opr+ b.value;

    document.getElementById("result").innerHTML = eval(expression);


    /*console.log(a.value+opr+b.value);*/

    /*if (opr == "+"){
        result = parseInt(a.value) + parseInt(b.value);
    }
    else if (opr == "-"){
        result = parseInt(a.value) - parseInt(b.value);
    }
    else if (opr == "/"){
        result = parseInt(a.value) / parseInt(b.value);
    }
    else {
        result = parseInt(a.value) * parseInt(b.value);
    }
*/
}