var url = "bd/case.php";

var appProductos = new Vue({    
el: "#appProductos",   
data:{     
     datos:[],          
     description:"",
     reference:"",
     stock:"",
     price:"",
     currency:"",
     imagen:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAgregarProducto:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'Agregar Producto',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">Descripción</label><div class="col-sm-7"><input id="description" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Referencia</label><div class="col-sm-7"><input id="reference" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Moneda</label><div class="col-sm-7"><div class="form-group"><select class="form-control" id="currency"><option>USD</option><option>COP</option> </select></div></div></div><div class="row"><label class="col-sm-3 col-form-label">Precio</label><div class="col-sm-7"><input id="price" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Imagen</label><div class="col-sm-7"><input id="imagen" type="file"  class="form-control-file"/></div></div>',                           
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonText:'Cancelar',
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'red',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.description = document.getElementById('description').value,
              this.reference = document.getElementById('reference').value,
              this.stock = document.getElementById('stock').value, 
              this.currency = document.getElementById('currency').value,
              this.price = document.getElementById('price').value,
              this.imagen = document.getElementById('imagen').value
                                
            ]
          }
        })        
        if(this.description == "" || this.reference == "" || this.stock == 0 || this.currency == "" || this.price == "" || this.imagen == ""){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.agregarProducto();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id, description, reference, stock,currency,price){                            
        await Swal.fire({
        title: 'Editar Producto',
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Descripción</label><div class="col-sm-7"><input id="description" value="'+description+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Referencia</label><div class="col-sm-7"><input id="reference" value="'+reference+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" value="'+stock+'" type="number" min="0" class="form-control"></div></div></div><div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Moneda</label><div class="col-sm-7"><div class="form-group"><select class="form-control" id="currency" value="'+currency+'"><option>USD</option><option>COP</option></select></div></div></div><div class="row"><label class="col-sm-3 col-form-label">Precio</label><div class="col-sm-7"><input id="price" value="'+price+'" type="text" class="form-control"></div></div>', 
        focusConfirm: false,
        showCancelButton: true, 
        cancelButtonText:'Cancelar',
        confirmButtonText: 'Guardar',
        confirmButtonColor:'red',          
        cancelButtonColor:'#3085d6',                        
        }).then((result) => {
          if (result.value) {                                             
            description= document.getElementById('description').value,    
            reference = document.getElementById('reference').value,
            stock = document.getElementById('stock').value,
            currency = document.getElementById('currency').value,
            price = document.getElementById('price').value,                     
            
            this.editarProducto(id,description,reference,stock,currency,price);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });   
    }, 

    btnVer:async function(id, description, reference, stock,currency,price){                            
        await Swal.fire({
        title: 'Producto en Inventario',
        html:
        '<div class="form-group"><div class="row"><label value class="col-sm-3 col-form-label">Descripción:</label><div class="col-sm-7"><label  class="form-control" > '+description+'</label></div></div><div class="row"><label class="col-sm-3 col-form-label">Referencia</label><div class="col-sm-7"><label  class="form-control"> '+reference+'</label></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><label  class="form-control"> '+stock+'</label></div></div></div><div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Moneda</label><div class="col-sm-7"><div class="form-group"><label  class="form-control"> '+currency+'</label></div></div></div><div class="row"><label class="col-sm-3 col-form-label">Precio</label><div class="col-sm-7"><label  class="form-control"> '+price+'</label></div>', 
        
        focusConfirm: false,
        confirmButtonText: 'Salir',         
        cancelButtonColor:'#3085d6',                        
        }).then((result) => {
          if (result.value) {                                             
            description= document.getElementById('description').value,    
            reference = document.getElementById('reference').value,
            stock = document.getElementById('stock').value,
            currency = document.getElementById('currency').value,
            price = document.getElementById('price').value,                     
            
            this.verProducto(id,description,reference,stock,currency,price);
                             
          }
        });   
    }, 

        
     
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          cancelButtonText:'Cancelar',
          confirmButtonText: 'Borrar',
          confirmButtonColor:'red',          
          cancelButtonColor:'#3085d6',
          
        }).then((result) => {
          if (result.value) {            
            this.borrarProducto(id);             
            //y mostramos un msj sobre la eliminación  
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    }, 
  
    //PROCEDIMIENTOS para el CRUD     
    listarProducto:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.datos = response.data;       
        });
    },    
    //Procedimiento CREAR.
    agregarProducto:function(){
        axios.post(url, {opcion:1, description:this.description, reference:this.reference,stock:this.stock,currency:this.currency,price:this.price,imagen:this.imagen }).then(response =>{
            this.listarProducto();
        });        
         this.description = "",
         this.reference = "",
         this.stock = 0,
         this.currency = "",
         this.price = "",
         this.imagen = ""
         
    },               
    //Procedimiento EDITAR.
    editarProducto:function(id,description,reference,stock,currency,price){       
       axios.post(url, {opcion:2, id:id,description:description, reference: reference, stock:stock, currency:currency,price:price}).then(response =>{           
           this.listarProducto();           
        });                              
    },

       
    //Procedimiento BORRAR.
    borrarProducto:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarProducto();
            });
    }  

},      
created: function(){            
   this.listarProducto();            
}, 


computed:{
    totalStock(){
        this.total = 0;
        for(Producto of this.datos){
            this.total = this.total + parseInt(Producto.stock);
        }
        return this.total;   
    }
}    
});