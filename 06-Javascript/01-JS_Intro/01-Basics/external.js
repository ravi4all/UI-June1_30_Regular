/*window.alert("JS Called before HTML......")*/


window.addEventListener("load",function(){
    document.getElementById("show").addEventListener("click", function(){
        a = document.getElementById("box_1").value;
        document.getElementById("result").innerHTML = a;
    })
})

/*
Event Binding
Click event is now bind with a function(callback function)
*/
/*document.getElementById("show").addEventListener("click", function(){
    a = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = a;
})*/


/*
function show(){
    a = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = a;
}*/
