import variable from "./variables.mjs";

export function createInputUser() {
  const {ref} = variable;
  
  const div = document.createElement("div");
  div.id = "container-input-user"
  const input = document.createElement("input")
  input.placeholder = "Ahorcado001"
  const p = document.createElement("p")
  p.textContent = "name"
  
  div.appendChild(input)
  div.appendChild(p)
  ref.insertAdjacentElement("beforebegin", div);

  variable.containerInputUser = document.querySelector("#container-input-user > input")
} 

export function createUserRandom() {
  const {containerInputUser} = variable;

  const numRandom = Math.floor(Math.random() * 100+1)
  let userAhorcado;

  if (numRandom < 10) {
    userAhorcado = `00${numRandom}`
  }
  else {
    if (numRandom < 100) {
      userAhorcado = `0${numRandom}`
    }
  }

  containerInputUser.placeholder = `Ahorcado${userAhorcado}`
}


export function saveUser() {
  const {containerInputUser} = variable;
  
  let user;
  
  if (containerInputUser.value !== "") {
    user = containerInputUser.value;
    variable.saveUser = user;
  } 
  else {
    user = containerInputUser.placeholder
  }
      
  variable.user = user

  //en un fúturo agregar una condicional si esta dentro del array el jugador
}

  //probar incrustando una imagen
// export function addImg() {
//   const {ref} = variable;

//   const div = document.createElement("div");
//   div.id = "container-img"
//   const img = document.createElement("img")
//   // img.placeholder = "Ahorcado001"
//   // const p = document.createElement("p")
//   // p.textContent = "name"
  
//   div.appendChild(img)
//   // div.appendChild(p)
//   ref.insertAdjacentElement("beforebegin", div);

//   console.log(document.querySelector("#container-img > img").src = "./spartan.png");
// }

//eliminar input user
export function removeInputUser() {  
  const div = document.querySelector(".container")
  const input = document.querySelector("#container-input-user")
  if (input) {
    div.removeChild(input);
  }
}

//agregar elem p con nombre de usuario en la parte izquierda superior de la pag
export function addNameUserEstatic() {
  const {ref} = variable;
  
  const div = document.createElement("div");
  div.id = "container-userEstatic"
  const p = document.createElement("p")
  p.textContent = `${variable.user}`
  
  div.appendChild(p)
  ref.insertAdjacentElement("beforebegin", div);
}
 
//colocar css a addNameUserEstatic