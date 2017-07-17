window.addEventListener("load",init);

function init(){
    av_name = document.getElementById("box_1");
    strength = document.getElementById("box_2");
    desc = document.getElementById("box_3");
    document.getElementById("add").addEventListener("click",add_avenger);
    document.getElementById("delete").addEventListener("click",delete_avenger);
    document.getElementById("save").addEventListener("click",save_avenger);
    document.getElementById("load").addEventListener("click",load_avenger);
}

function save_avenger(){
    if(window.localStorage){
        var json = JSON.stringify(avenger_obj.avenger_list);
        /*console.log(json);*/
        localStorage.setItem('avenger_data',json)
    }
}

function load_avenger(){
    if(window.localStorage){
        var json = JSON.parse(localStorage.avenger_data);
        /*console.log(json);*/
        avenger_obj.avenger_list = json;
        print_avenger()
    }
}

function add_avenger(){
    var ul = document.getElementById("item_list");
    var li = document.createElement("li");
    var img = document.createElement("img");
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
    /*console.log(current_element);*/
    avenger_obj.toggle_avenger(current_element);
}

function delete_avenger(){
    avenger_obj.delete_avenger();
    print_avenger();
}

function print_avenger(){
    var ul = document.getElementById("item_list");
    ul.innerHTML = "";
    avenger_obj.avenger_list.forEach(function(obj){
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = 'garbage.png';
        li.innerHTML = obj.id + " " + obj.name + " " + obj.strength + " " + obj.desc;
        ul.appendChild(li);
        li.appendChild(img);
        li.addEventListener("click",selected);
    })

}