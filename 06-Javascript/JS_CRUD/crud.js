window.addEventListener("load",init);

function init(){
    av_name = document.getElementById("box_1");
    strength = document.getElementById("box_2");
    desc = document.getElementById("box_3");
    document.getElementById("add").addEventListener("click",add_avenger);
    document.getElementById("delete").addEventListener("click",delete_avenger);
}

function add_avenger(){
    ul = document.getElementById("item_list");
    li = document.createElement("li");
    img = document.createElement("img");
    /*img.setAttribute('src','garbage.png');*/
    img.src = 'garbage.png';
    /*console.log(av_name.value);*/
    li.innerHTML = av_name.value + " " + strength.value + " " + desc.value;
    ul.appendChild(li);
    li.appendChild(img);

    li.addEventListener("click",selected);
}

function selected(){
    event.srcElement.classList.toggle("selected");
}

function delete_avenger(){

}