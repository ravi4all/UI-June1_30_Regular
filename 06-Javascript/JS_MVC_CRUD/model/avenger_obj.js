var avenger_obj = {
    "id": 0,
    "avenger_list" : [],

    add_avenger : function(name,strength,desc){
        this.id++;
        var obj = new Avenger(this.id,name,strength,desc);
        this.avenger_list.push(obj);
        console.log(this.avenger_list);
    },

    toggle_avenger : function(id){
        var selected_avenger = this.avenger_list.filter(function(obj){
            return obj.id == id;
        })
        /*console.log(selected_avenger);*/
        selected_avenger[0].selected = !selected_avenger[0].selected;
        console.log(selected_avenger);
    },

    delete_avenger : function(){
        this.avenger_list = this.avenger_list.filter(function(obj){
            return obj.selected == false;
        })
    }

}