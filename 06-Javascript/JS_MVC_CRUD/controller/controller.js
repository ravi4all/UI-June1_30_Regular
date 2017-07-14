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
    img.src = 'garbage.png';

    avenger_obj.add_avenger(av_name.value,strength.value,desc.value);

    li.innerHTML = avenger_obj.id + " "  + av_name.value + " " + strength.value
    + " " + desc.value;
    ul.appendChild(li);
    li.appendChild(img);

    li.addEventListener("click",selected);
}

function selected(){
    event.srcElement.classList.toggle("selected");
    var current_element = event.srcElement.innerHTML.split(" ")[0];
    console.log(current_element);
}

function delete_avenger(){

}