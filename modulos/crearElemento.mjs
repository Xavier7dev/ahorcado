import variable from "./variables.mjs"

export function crearElemento() {
  const {ref, random, country} = variable;

  const div = document.createElement("div");
  const button = document.createElement("button")
  const nameCountry = country[random]
  button.textContent = "Play";
  div.id = "contentBtn"
  
  div.appendChild(button);
  ref.appendChild(div);

  variable.elementDivBtn = document.querySelector("#contentBtn");
  variable.elementBtn = document.querySelector("#contentBtn > button")
  variable.container = document.querySelector(".container")
  variable.inputKeyboard = document.querySelector(".container > input")
  variable.nameCountry = nameCountry;
  console.log(nameCountry);
  
}

export function borderButton() {
  const {nameCountry, ref} = variable;
  const div = document.createElement("div");
  div.classList.add("border-boton")

  for (let i = 0; i < nameCountry.length; i++) {
    const span = document.createElement("span");
    div.appendChild(span);
    ref.insertAdjacentElement("afterend", div); 

    if (nameCountry[i] === " ") {
      span.style.border = "none"
    }
  }

  variable.elementSpan = [...document.querySelectorAll(".border-boton > span")]
}

// export function keyChar(e) {
//   const {elementSpan, nameCountry} = variable;

// }

export function inputKeyboardAction(e) {
  const {nameCountry, elementSpan, inputKeyboard} = variable;

    if (nameCountry.includes(e.key.toUpperCase())) {
      for (let i = 0; i < nameCountry.length; i++) {
        if (nameCountry[i] === e.key.toUpperCase()) {
          elementSpan[i].textContent = e.key.toUpperCase()
        }
        inputKeyboard.value = e.key;
      }
    }
    setTimeout(() =>{ (e.key) ? inputKeyboard.value = "" : null }, 1000); 
  }
  