const comprar = document.querySelectorAll("#botonCompra")

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