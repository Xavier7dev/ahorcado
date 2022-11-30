import variable from "./variables.mjs"
import {
  borderButton,
  crearElemento,
  keyChar
} from "./crearElemento.mjs";

document.addEventListener("DOMContentLoaded", () => {
  crearElemento();
  
  const {elementBtn} = variable;
  elementBtn.addEventListener("click", borderButton())

  document.addEventListener("keypress", (e) => {
    keyChar(e)
  });
 
})

