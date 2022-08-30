/*creo una class para los productos */
class Productos {
   constructor(id,nombre,color,talle,precio,imagen,marca,logo){
    this.id = id
    this.nombre = nombre
    this.color = color
    this.talle = talle
    this.precio = precio
    this.imagen = imagen
    this.marca = marca
    this.logo = logo
   }
}

//Zapatillas
const zapa1 = new Productos (1,"Zapatillas runnig Adidas galaxy 5","Azul",[43.5,44,55],"16.899","./img/zapatillas/zapatillas-runnig-adidas-galaxy/azul.jpg","Addidas","./img/logo/addidas.png")
const zapa2 = new Productos (2,"Zapatillas Running Nike air zoom winflo 8","Gris",[42,44,55],"29.699","./img/zapatillas/running-nike-air-zoom-winflo-8/gris1.jpg","Nike","./img/logo/nike.png")
const zapa3 = new Productos (3,"Zapatillas Adidas Breaknet","Blanco",[32,40,42],"14.999","./img/zapatillas/breaknet-blancas/blanca1.jpg","Adidas","./img/logo/addidas.png")
const zapa4 = new Productos (4,"Zapatillas Running Nike air zoom pegasus","Negras",[40,42],"36.299","./img/zapatillas/running-nike-air-zoom-negras/negras1.jpg","Nike","./img/logo/nike.png")
const zapa5 = new Productos (5,"Zapatillas Topper costa unisex","Negro",[32,42,44],"13.999","./img/zapatillas/topper costa/topper1.jpg","Topper","./img/logo/topper.png")
const zapa6 = new Productos (6,"Zapatillas Topper costas","Marrones",[12,32,40],"13.999","./img/zapatillas/tooper marrones/topper-marrones1.jpg","Topper","./img/logo/topper.png")

//Remeras
const remera1 = new Productos (1,"Remera Stripes","Negra",["XL","L"],"9.099","./img/remeras/stripes/remera-negra.jpg","Adidas","./img/logo/addidas.png")
const remera2 = new Productos (2,"Remera Fila day","roja,blanca y negra",["XL","L"],"6.490","./img/remeras/fila-day/fila-day1.jpg","Fila","./img/logo/fila.png")
const remera3 = new Productos (3,"Remera juventus","Negro y blanco ",["XL","L","M"],"16.999","./img/remeras/camiseta jueventus/camiseta-juventus-adidas1.jpg","Adidas","./img/logo/addidas.png")
const remera4 = new Productos (4,"Remera Puma para mujer","Blanca",["L","M","S"],"6.059","./img/remeras/remera puma mujer/puma1.jpg","Puma","./img/logo/puma.png")
const remera5 = new Productos (5,"Remera Puma ignite","Rosa",["L","M","S"],"6.049","./img/remeras/remera puma ignite/ignite1.jpg","Puma","./img/logo/puma.png")
const remera6 = new Productos (6,"Remera Puma active","Negra",["S","L"],"5.499","./img/remeras/puma active/active1.jpg","Puma","./img/logo/puma.png")

//Contenedor de productos de Zapatillas y Remeras
const arrayZapatillas = [zapa1,zapa2,zapa3,zapa4,zapa5,zapa6]
const arrayRemeras = [remera1,remera2,remera3,remera4,remera5,remera6]
const todasLosproductos = [remera1,remera2,remera3,remera4,remera5,remera6,zapa1,zapa2,zapa3,zapa4,zapa5,zapa6]
const prueba = document.getElementById("todo")

//El modal de Zapatillas
const nuevo = document.getElementById("zapatillas")

const cosa =  arrayZapatillas.map ( arrayZapatillas => {
  nuevo.innerHTML +=  `   
  <div class="card  m-auto my-3 border-secondary articulo   " id="remera2" style="max-width: 20rem;">
    <div class=" btn-outline-primary d-flex justify-content-center ">
      <h3 class="mx-5 pt-3 ">${arrayZapatillas.marca}</h3>
      <img class="mx-5 btn-outline-primary me-auto" src="${arrayZapatillas.logo}" alt="addidas" srcset="" width="90px" height="60px">
    
    </div>
    <div class="card-body">
      <h6 class="card-title " id="indice1">${arrayZapatillas.nombre}</h6>
    <div class="btn-outline-light ">
        <img src="${arrayZapatillas.imagen}" alt="azul" width="100%" height="250px">
    </div>
    </div>
    <div class=" mb-2" >
      <button type="button" class="btn btn-outline-primary mx-3" id="botonCarrito" >Agregar al carrito</button>
      <button type="button" class="btn btn-outline-light" id="botonCompra" >Comprar</button>
    </div>
  </div> `;

 });

//Modal de Remeras
const modRemera = document.getElementById("remeras")

arrayRemeras.map(arrayRemeras =>{
  modRemera.innerHTML +=`
  <div class="card  border-primary m-auto my-3 articulo" id="productos" style="max-width: 20rem;">
    <div class=" btn-outline-primary d-flex justify-content-center ">
      <h3 class="mx-5 pt-3 ">${arrayRemeras.marca}</h3>
      <img class="mx-5 btn-outline-primary me-auto" src="${arrayRemeras.logo}" alt="addidas" srcset="" width="70px" height="60px">
    
    </div>
    <div class="card-body">
      <h6 class="card-title " id="indice1">${arrayRemeras.nombre}</h6>
    <div class="btn-outline-light ">
        <img src="${arrayRemeras.imagen}" alt="azul" width="100%" height="250px">
    </div>
    </div>
    <div class=" mb-2" >
        <button type="button" class="btn btn-outline-primary mx-3 botonCarrito" id="botonCarrito" >Agregar al carrito</button>
        <button type="button" class="btn btn-outline-light botonCompra" id="botonCompra" >Comprar</button>
    </div>
  </div> `
});

//prueba


//Buscador y filtro
const buscadorProd = document.getElementById("search");
const articulo = document.querySelectorAll(".articulo")
const resultado = document.getElementById("cosa")
const ve = cosa => todasLosproductos.filter;


  buscadorProd.addEventListener('input',() => {
  
    const filtro = buscadorProd.value.toLowerCase();
    console.log(filtro)
    const g = todasLosproductos.filter.length 
      for(let producto of todasLosproductos ){
      let nombre = producto.nombre.toLowerCase();
        console.log(nombre)
    

  if( g == filtro ) {
    
    resultado.innerHTML += `<div class="card  border-primary m-auto my-3 " id="productos" style="max-width: 20rem;">
    <div class=" btn-outline-primary d-flex justify-content-center ">
      <h3 class="mx-5 pt-3 ">${producto.nombre}</h3>
      <img class="mx-5 btn-outline-primary me-auto" src="${producto.logo}" alt="addidas" srcset="" width="70px" height="60px">
    
    </div>
    <div class="card-body">
      <h6 class="card-title " id="indice1">${producto.nombre}</h6>
    <div class="btn-outline-light ">
        <img src="${producto.imagen}" alt="azul" width="100%" height="250px">
    </div>
    </div>
    <div class=" mb-2" >
        <button type="button" class="btn btn-outline-primary mx-3 botonCarrito" id="botonCarrito" >Agregar al carrito</button>
        <button type="button" class="btn btn-outline-light botonCompra" id="botonCompra" >Comprar</button>
    </div>
  </div> `
  }
}
if(resultado.innerHTML ==''){
  resultado.innerHTML += `<p>no encontrado...</p>`
}
}
 
 
);

/*document.addEventListener("keyup", e =>{

  if (e.target.matches("#search")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").forEach(fruta =>{

          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })

  }


})*/

//filtrado por botones
let todasLasRemeras = document.getElementById("botonReme")
let todasLasZapatillas = document.getElementById("botonZapa")

//Remera
const divRemera = document.getElementById('divRemera')

todasLasRemeras.addEventListener('click',() =>{
  divRemera.innerHTML = ""
  arrayRemeras.forEach((arrayRemeras) =>{
    
    divRemera.innerHTML +=`
    <div class="card  border-primary m-auto my-3 " id="productos" style="max-width: 20rem;">
      <div class=" btn-outline-primary d-flex justify-content-center ">
        <h3 class="mx-5 pt-3 ">${arrayRemeras.marca}</h3>
        <img class="mx-5 btn-outline-primary me-auto" src="${arrayRemeras.logo}" alt="addidas" srcset="" width="70px" height="60px">
      
      </div>
      <div class="card-body">
        <h6 class="card-title " id="indice1">${arrayRemeras.nombre}</h6>
      <div class="btn-outline-light ">
          <img src="${arrayRemeras.imagen}" alt="azul" width="100%" height="250px">
      </div>
      </div>
      <div class=" mb-2" >
          <button type="button" class="btn btn-outline-primary mx-3 botonCarrito" id="botonCarrito" >Agregar al carrito</button>
          <button type="button" class="btn btn-outline-light botonCompra" id="botonCompra" >Comprar</button>
      </div>
    </div> `
  })

  document.getElementById("todo").style.display='none';
} )


//Zapatillas
const divZapa = document.getElementById('divZapa')

todasLasZapatillas.addEventListener('click', () =>{
  divZapa.innerHTML = "" 
    arrayZapatillas.map ( arrayZapatillas => {
      divZapa.innerHTML +=  `   
      <div class="card  m-auto my-3 border-secondary   " id="remera2" style="max-width: 20rem;">
        <div class=" btn-outline-primary d-flex justify-content-center ">
          <h3 class="mx-5 pt-3 ">${arrayZapatillas.marca}</h3>
          <img class="mx-5 btn-outline-primary me-auto" src="${arrayZapatillas.logo}" alt="addidas" srcset="" width="90px" height="60px">
        
        </div>
        <div class="card-body">
          <h6 class="card-title " id="indice1">${arrayZapatillas.nombre}</h6>
        <div class="btn-outline-light ">
            <img src="${arrayZapatillas.imagen}" alt="azul" width="100%" height="250px">
        </div>
        </div>
        <div class=" mb-2" >
          <button type="button" class="btn btn-outline-primary mx-3" id="botonCarrito" >Agregar al carrito</button>
          <button type="button" class="btn btn-outline-light" id="botonCompra" >Comprar</button>
        </div>
      </div> `
     });
     document.getElementById("todo").style.display='none';
     



  }
  
);











const comprar = document.querySelectorAll("#botonCompra")
const personaje = document.getElementById("formPersonaje")

const infor = document.getElementById('infoDePersoanje')


;

  comprar.forEach(btn =>{
    btn.addEventListener('click',() => {

        Swal.fire({

        title: "Estas seguro que quiere comprar ",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        denyButtonText: `Agregar al carrito`,
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire('Comprado', '') 
          
        } else if (result.isDenied) {
          Swal.fire('Agregado al carrito', '', '')
        }
           
          })
    })
})

const carrito = document.querySelectorAll("#botonCarrito")
    carrito.forEach(btnCarrito => {

    btnCarrito.addEventListener ('click', () =>{

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Agregadado al carrito'
          })
    }) 
  })