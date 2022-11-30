import variable from "./variables.mjs"
import {
  borderButton,
  crearElemento,
  inputKeyboardAction
} from "./crearElemento.mjs";

 document.addEventListener("DOMContentLoaded", () => {
  crearElemento();
  
  const {elementBtn, inputKeyboard} = variable;
  elementBtn.addEventListener("click", () =>{
     borderButton()
  })

  inputKeyboard.addEventListener("keypress", (e) => {
    if (variable.elementSpan) {
      inputKeyboardAction(e)
    }
  });
})

