function init(){
    validate()
    check_strength()
    conf_pwd()

    event.preventDefault(); // Will stop redirecting the page

}

function validate(){
    span = document.getElementsByTagName("span");
    a = document.getElementById("box_1");
    if(a.value == ""){
        span[0].innerHTML = "You can't leave this field blank..."
        /*a.style.border = "1px solid red";*/
        a.className = "red";
    }
    else {
        span[0].innerHTML = "";
        a.className = "";
    }

}

function check_strength(){
    b = document.getElementById("box_2")
    if(b.value.length == 0) {
        span[1].innerHTML = "Fill this"
        span[1].className = ""
    }
    else if(b.value.length > 0 && b.value.length <= 5){
        span[1].innerHTML = "Weak"
        span[1].className = "weak"
    }
    else if(b.value.length > 5 && b.value.length <= 8){
        span[1].innerHTML = "Average"
        span[1].className = "average"
    }
    else{
        span[1].innerHTML = "Strong"
        span[1].className = "strong"
    }
}

function conf_pwd(){
    c = document.getElementById("box_3");
    if(b.value === c.value){
        span[2].innerHTML = "Proceed";
    }
    else {
        span[2].innerHTML = "Password do not match";
    }
}