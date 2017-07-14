var avenger_obj = {
    "id": 0,
    "avenger_list" : [],

    add_avenger : function(name,strength,desc){
        this.id++;
        var obj = new Avenger(this.id,name,strength,desc);
        this.avenger_list.push(obj);
        console.log(this.avenger_list);
    }

}