Vue.component('modal',{
    template:'#modal-template'
})
new Vue({
    el: '#app',
    data:{
        newItem: {'name': '','age': '','profession': ''},
        hasError:true,
        showModal:false,
        items:[],
        e_id:'',
        e_name:'',
        e_age:'',
        e_profession:''
    },
    mounted(){
        this.getItems();
    },
    methods:{
        getItems(){
            axios.get('/show').then(response => {
                this.items=response.data;
            })
        },
        setVal(val_id,val_name,val_age,val_profession){
            this.e_id=val_id;
            this.e_age=val_age;
            this.e_name=val_name;
            this.e_profession=val_profession;
        },
        
        createItem(){
            var input=this.newItem;
            if(input['name']=='' || input['age']=='' || input['profession']== '')
            {
                this.hasError=false;
            }
            else
            {
                this.hasError=true;
                axios.post('/store',input).then(response => {
                    this.newItem={'name': '','age': '','profession': ''}
                    this.getItems();
                });
            }
        },
        editItem(){
         var i_val_1 = document.getElementById('e_id');
         var n_val_1 = document.getElementById('e_name');
         var a_val_1 = document.getElementById('e_age');
         var p_val_1 = document.getElementById('e_profession');

          axios.post('/edititems/' + i_val_1.value, {val_1: n_val_1.value, val_2: a_val_1.value,val_3: p_val_1.value })
            .then(response => {
              this.getItems();
              this.showModal=false
            });
          this.hasDeleted = true;
        },
        deleteItem(item){
            axios.post('/delete/' + item.id).then(response => {
                this.getItems();
            });
        }
    }
});