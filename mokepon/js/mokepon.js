const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiciarjuego = document.getElementById("reiniciar-juego")
const botonPersonajeJugador = document.getElementById("boton-personaje")
const botonfuego  = document.getElementById("boton-fuego")
const botontierra = document.getElementById("boton-tierra")
const botonagua = document.getElementById("boton-agua")
const botonreiniciar = document.getElementById('boton-reiniciar')

const sectionseleccionarPersojane = document.getElementById("seleccionar-personaje")

const spanpersonajejugador = document.getElementById("personajejugador")
const spanpersonajeenemigo = document.getElementById ("personajeenemigo")

const spanvidasjugador = document.getElementById('vidas-jugador')
const spanvidasenemigopc = document.getElementById('vidas-enemigo')
const sectionmensajes = document.getElementById('resultado')

const ataqueDeljugador = document.getElementById('ataque-del-jugador')
const ataqueDelenemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const botonesdeataque = document.getElementById('botonesdeataque')

let mokepones = []
let ataquejugador
let ataqueenemigopc
let opcionDemokepones 
let inputhipodoge 
let inputcapipepo 
let inputratigueya 
let mascotajugador
let ataquesMokepon
let vidasjugador = 3
let vidasenemigopc = 3

class Mokepon{
    constructor(nombre, foto, vida ){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon ('Hipodoge', 'assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo','assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya','assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
   { nombre : '💦', id: 'boton-agua'},
   { nombre : '💦', id: 'boton-agua'},
   { nombre : '💦', id: 'boton-agua'},
   { nombre : '🔥', id: 'boton-fuego'},
   { nombre : '🪨', id: 'boton-tierra'},
)
capipepo.ataques.push(
    { nombre : '🪨', id: 'boton-tierra'},
    { nombre : '🪨', id: 'boton-tierra'},
    { nombre : '🪨', id: 'boton-tierra'},
    { nombre : '💦', id: 'boton-agua'},
    { nombre : '🔥', id: 'boton-fuego'},
    
 )
 ratigueya.ataques.push(
    { nombre : '🔥', id: 'boton-fuego'},
    { nombre : '🔥', id: 'boton-fuego'},
    { nombre : '🔥', id: 'boton-fuego'},
    { nombre : '💦', id: 'boton-agua'},    
    { nombre : '🪨', id: 'boton-tierra'},
 )
 mokepones.push (hipodoge,capipepo,ratigueya)

function iniciarjuego(){
   
   sectionseleccionarAtaque.style.display = "none"  
   
   mokepones.forEach ((mokepon) => {
    opcionDemokepones =  ` 
        <input type= "radio" name= "mascota" id= ${mokepon.nombre} /> 
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
    `      
    contenedorTarjetas.innerHTML += opcionDemokepones

      inputhipodoge = document.getElementById("Hipodoge")
      inputcapipepo = document.getElementById("Capipepo")
      inputratigueya = document.getElementById("Ratigueya")

   })
}

   sectionReiciarjuego.style.display = "none"  
     
  
   botonPersonajeJugador.addEventListener("click",seleccionarpersonajejugador)        
  
    botonfuego.addEventListener ("click",ataquefuego)
    
    botontierra.addEventListener("click",ataquetirra)
    
    botonagua.addEventListener("click",ataqueagua)
    
     botonreiniciar.addEventListener('click', reiniciarjuego )





function  seleccionarpersonajejugador() {   
   
   sectionseleccionarPersojane.style.display = "none" 

   sectionseleccionarAtaque.style.display = "flex"
   
        

    if (inputhipodoge.checked) {
        spanpersonajejugador.innerHTML = inputhipodoge.id
        mascotajugador = inputhipodoge.id
    } 
    else if (inputcapipepo.checked){
        spanpersonajejugador.innerHTML = inputcapipepo.id
        mascotajugador = inputcapipepo.id
    }
    else if (inputratigueya.checked){
        spanpersonajejugador.innerHTML = inputratigueya.id
        mascotajugador = inputratigueya.id
    }
    else {
        alert ("selecciona un personaje")
    } 
    
    extraerataques(mascotajugador)
    seleccionarpersonajepc()
       
    }    
    function extraerataques(mascotajugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotajugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques            
            }
        }
       
        mostrarAtaques(ataques)
    }   

    function mostrarAtaques (ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = `
            <button id=${ataque.id} class="botones-ataque">${ataque.nombre} </button> ` 

            botonesdeataque.innerHTML += ataquesMokepon

        } )
        
    }

    function seleccionarpersonajepc (){
        let personajealeatorio = aleatorio (0, mokepones.length -1)   

        
        spanpersonajeenemigo.innerHTML = mokepones[personajealeatorio].nombre
              
    }
    
    function ataquefuego(){
        ataquejugador = "fuego"
       ataquealeatorioenemigo()
    }

    function ataqueagua(){
        ataquejugador = "agua"
       ataquealeatorioenemigo()
    }
    
    function ataquetirra(){
        ataquejugador = "tierra"
        ataquealeatorioenemigo()
    }
    
    
    function ataquealeatorioenemigo(){
        let ataquealeatorio = aleatorio(1, 3)

        if (ataquealeatorio == 1){
            ataqueenemigopc = "fuego"
        }else if (ataquealeatorio == 2){
            ataqueenemigopc = "agua"
        }else {
        ataqueenemigopc =  "tierra"
    }

        combate()
    }
    function combate(){
       
        if (ataqueenemigopc  == ataquejugador){
            crearmensaje("empate")
        }else if (ataquejugador == "fuego" && ataqueenemigopc== "tierra"){
            crearmensaje("ganaste") 
            vidasenemigopc--
          spanvidasenemigopc.innerHTML = vidasenemigopc
        }else if (ataquejugador == "agua" && ataqueenemigopc == "fuego"){
            crearmensaje("ganaste") 
            vidasenemigopc--
          spanvidasenemigopc.innerHTML = vidasenemigopc
        } else if ( ataquejugador == "tierra" && ataqueenemigopc == "agua"){
            crearmensaje("ganaste")  
            vidasenemigopc--
          spanvidasenemigopc.innerHTML = vidasenemigopc
        } else {
        crearmensaje("perdiste")     
          vidasjugador--
          spanvidasjugador.innerHTML = vidasjugador
        }
        revisarvidas()
    }
    function revisarvidas(){
        if(vidasenemigopc == 0){
            crearmensajefinal('felicitaciones! Ganaste')

        }else if ( vidasjugador == 0){
            crearmensajefinal('lo siento perdiste')

        }
        

    }
    function crearmensaje(resultado) {
               
        let nuevoataquedeljugador = document.createElement('p')
        let nuevoataquedelenemigo = document.createElement('p')

        sectionmensajes.innerHTML = resultado
        nuevoataquedeljugador.innerHTML = ataquejugador
        nuevoataquedelenemigo.innerHTML = ataqueenemigopc
 
        
        ataqueDeljugador.appendChild(nuevoataquedeljugador)
        ataqueDelenemigo.appendChild(nuevoataquedelenemigo)
    }
   
    function crearmensajefinal (resultadofinal) {
               
        sectionmensajes.innerHTML = resultadofinal

        

        let botonfuego = document.getElementById("boton-fuego")
        botonfuego.disabled = true 
        let botontierra = document.getElementById("boton-tierra")
        botontierra.disabled = true 
        let botonagua = document.getElementById("boton-agua")
        botonagua.disabled = true 

        let sectionReiciarjuego = document.getElementById("reiniciar-juego")
        sectionReiciarjuego.style.display = "flex"
    }
       
    function reiniciarjuego(){
        location.reload()
    }

   
        function aleatorio( min, max) { return Math.floor(Math.random() * (max - min + 1) + min)
        }
        
         

    
       
        
    



window.addEventListener('load', iniciarjuego)
