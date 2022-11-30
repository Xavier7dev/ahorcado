import variable from "./variables.mjs"

export function crearElemento() {
  const {ref} = variable;

  const div = document.createElement("div");
  const button = document.createElement("button")
  button.textContent = "Play";
  div.id = "contentBtn"
  
  div.appendChild(button);
  ref.appendChild(div);

  variable.elementDivBtn = document.querySelector("#contentBtn");
  variable.elementBtn = document.querySelector("#contentBtn > button")
  variable.container = document.querySelector(".container")
  variable.elementosh2 = [...document.querySelectorAll(".container-son > h2")]

}

export function borderButton() {
  const {country ,random, ref} = variable;
  const div = document.createElement("div");
  div.classList.add("border-boton")
  const nameCountry = country[random]

  for (let i = 0; i < nameCountry.length; i++) {
    const span = document.createElement("span");
    div.appendChild(span);
    ref.insertAdjacentElement("afterend", div); 

    if (nameCountry[i] === " ") {
      span.style.border = "none"
    }
  }

  variable.nameCountry = nameCountry;
  variable.elementSpan = [...document.querySelectorAll(".border-boton > span")]

}

export function keyChar(e) {
  const {elementSpan, nameCountry} = variable;

  if (nameCountry.includes(e.key.toUpperCase())) {
    console.log(nameCountry, e.key);
    
    for (let i = 0; i < nameCountry.length; i++) {
      if (nameCountry[i] === e.key.toUpperCase()) {
        elementSpan[i].textContent = e.key.toUpperCase()
      }
    }
  }
}