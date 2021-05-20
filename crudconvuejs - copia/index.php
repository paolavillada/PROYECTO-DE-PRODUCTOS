<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->    
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">        
    <!--CSS custom -->  
    <link rel="stylesheet" href="estilo1.css">  
    </head>
    <body>
    <header>
        <h2 class="text-center text-dark"><span class="badge badge-info">SISTEMA DE PRODUCTOS</span></h2>
    </header>    
    
     <div id="appProductos">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                    <button @click="btnAgregarProducto" class="btn btn-success" title="Agregar Nuevo producto al inventario" style=" background-color:#4C97C9 ;border:none;"><i class="fas fa-cart-plus" style="font-size: 50px;color: white;"></i></button>
                </div>
                <div class="col text-right">                        
                    <h5>Cantidad En Inventario: <span class="badge badge-light">{{totalStock}}</span></h5>
                </div>    
            </div>                
            <div class="row mt-5">
                <div class="col-lg-12">                    
                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th>ID</th>
                                <th>DESCRIPCIÓN</th>
                                <th>REFERENCIA</th>
                                <th>CANTIDAD EN INVENTARIO</th>
                                <th>MONEDA</th>
                                <th>PRECIO</th>
                                <th>IMAGEN</th>

                                <th>ACCIONES</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(producto,indice) of datos">                                
                                <td>{{producto.id}}</td>                                
                                <td>{{producto.description}}</td>
                                <td>{{producto.reference}}</td>
                                <td>
                                    <div class="col-md-8">
                                    <input type="number" v-model.number="producto.stock" class="form-control text-right" disabled>      
                                    </div>    
                                </td>
                                <td>{{producto.currency}}</td>
                                <td>{{producto.price}}</td>
                                <td>{{producto.imagen}}</td>
                                

                                <td>

                                <div class="btn-group" role="group">
                                    
                                    <button class="btn btn-secondary" style="background-color: #880BFE  ;" title="Ver Producto" @click="btnVer(producto.id, producto.description, producto.reference, producto.stock,producto.currency,producto.price)"><i class="fas fa-eye"></i></button>

                                    <button class="btn btn-secondary" style="background-color: #FEA81B   ;" title="Editar Producto" @click="btnEditar(producto.id, producto.description, producto.reference, producto.stock,producto.currency,producto.price)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar Producto" @click="btnBorrar(producto.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>        
    </div>        
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
    <!--Vue.JS -->    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Sweet Alert 2 -->        
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>      
    <!--Código custom -->          
    <script src="parte.js"></script> 


    </body>
</html>