class User {
    constructor (username,email,password){
        this.username = username
        this.email = email
        this.password = password
        
    }
    
}

let persona  = []

const botonAlert = document.getElementById('idAlerta')    
const form = document.getElementById('idform')

form.addEventListener('submit', (event) => {
       event.preventDefault()
      
       let username = document.getElementById('idNombre').value
       let email = document.getElementById('idEmail').value
       let password = document.getElementById ('idContra').value

       const user = new User (username, email ,password)
       
    
       persona.push (user)
       console.log(persona)
       
   if (localStorage.getItem('persona')) {
        persona = JSON.parse(localStorage.getItem('persona'))
    } else {
        localStorage.setItem('persona', JSON.stringify(persona))
    }
  
})
botonAlert.addEventListener('click', () => {
    let arraytStorage = JSON.parse(localStorage.getItem('persona'))

    arraytStorage.forEach((persona, indice) => {
        form.innerHTML += `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="staticBackdropLabel">Tu usario es</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="tamañoTex  m-1 text-dark"> Tu nombre es :  <br><br>
               Tu Email es : </p>
            </div>
          </div>
        </div>
      </div>
        `
         
    });
})