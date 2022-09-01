//creando los indices
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito ={}

//Creamos el LocalStorage para los productos 
document,addEventListener('DOMContentLoaded', () =>{
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})
cards.addEventListener('click', e =>{
    addCarrito(e)
})

items.addEventListener('click', e =>{
    btnAccion(e)
})
//Creamos la "fetchDate" para la Api , para resivir los productos guardados
const fetchData = async () => {
    try {
        const res = await fetch ('../api/api.json')
        const data = await res.json()
        pintarCards(data)
    } catch (error){
        console.log(error)
    }
}
//contenedor de los productos
const pintarCards = data => {
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src" , producto.img )
        templateCard.querySelector('.idProducto').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
const addCarrito = e => {
     if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
     }
     e.stopPropagation()
}
const setCarrito = objeto =>{
    const producto = {//definimos su nombre ,id , precio y cantidad(Stock)
        id: objeto.querySelector('button').dataset.id,
        nombre : objeto.querySelector('h5').textContent,
        precio : objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito [producto.id].cantidad + 1
    }
    carrito[producto.id] ={...producto}
    pintarCarrito()
}
const pintarCarrito = () =>{//depende el producto que eligas ,se crear el producto en el carrito
    items.innerHTML = ''
    console.log(carrito)
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio 
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))//cuando se haga esta fucion , guardamos los productos en el carrito
}
const pintarFooter = () =>{
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad , 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')//Funcion de bnt"Vaciar todo",borra los productos
    btnVaciar.addEventListener('click', () =>{
        carrito = {}
        pintarCarrito()
    })

}

const btnAccion = e => {
    if(e.target.classList.contains('btn-info')){//btn de sumar producto
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }
    if (e.target.classList.contains('btn-danger')){//btn de restar productos
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
         if(producto.cantidad === 0){
         delete carrito[e.target.dataset.id]
        }
         pintarCarrito()
    }
    e.stopPropagation()
}
