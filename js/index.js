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
  
    const inf = document.getElementById('contenido')
     
    inf.innerHTML = ""
    inf.innerHTML += `
    <p class= "tamañoTex">Tu nombre es: ${username} . <br><br>
        Tu emai: ${email} .</p>`

        
  })
  
   
