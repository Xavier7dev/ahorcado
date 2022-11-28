import variable from "./variables.mjs";
import {
  crearElemento,
  borderButton,
  getCharKeyword,
  getCharKeywordBad,
  crearElementoBad,
  ahorcadosH2good,
  ahorcadosH2bad,
  ahorcadoReaction,
  removeLineIntermitentes,
  gameOver,
  reinicioGameOver,
  winner,
  addh2winner,
  convertirH2Good,
  removeH2Winner,
  ahorcadosH2good_animation,
  ahorcadosH2good_end_animation,
  removeCreateElementBad
} from "./crearElemento.mjs";

import { 
  addNameUserEstatic,
  createInputUser, 
  createUserRandom,
  removeInputUser,
  saveUser
} from "./usuario.mjs";

document.addEventListener("DOMContentLoaded", () => {
  ahorcadosH2good();
  //start animation h2 good
  ahorcadosH2good_animation();
  ahorcadosH2bad();
  crearElemento();
  //crear input usuario
  createInputUser();
  //crea usuario random Ahorcado del 1 a 100;
  createUserRandom(); 
  variable.elementBtn.addEventListener("click", () =>  {
    const {h2good_animation} = variable;
    //end h2good animation
    if (h2good_animation.className === "h2good-animation") {
      ahorcadosH2good_end_animation();
    }
    //da paso al evento keypress
    variable.inicio = "on"
    if (variable.stopReinicia !== "Stop Reiniciar") {
      const {elementosh2} = variable
      //save user luego del click
      saveUser();
      //eliminar input user
      if (variable.containerInputUser ) {
        removeInputUser()
      }
      //agregar elem p con nombre de usuario en la parte izquierda superior de la pag nameUserStatic play
      if (variable.addNameUserEstatic !== "on") {
        addNameUserEstatic();
        variable.addNameUserEstatic = "on";
      }
      //guarda name de user en un array si es nombre real o solo coloca el usuario Ahorcado random;
      if (variable.containerBorderBtn && variable.teclado === "activado") {
        convertirH2Good();
        removeCreateElementBad();
        removeLineIntermitentes();
        borderButton();
        crearElementoBad();
      }
      if (!variable.containerBorderBtn) {
        elementosh2[0].textContent = "AHORCADO";
        elementosh2[1].textContent = "";
        borderButton();
        crearElementoBad();
      }
      if (variable.teclado === "game over") { 
        reinicioGameOver();
        borderButton();
        crearElementoBad();
        variable.teclado = "activado"
        variable.listaAuxBad = [];
      }
      if (variable.teclado === "win") {
        console.log("winners")
        //quitar elem win
        removeH2Winner();
        borderButton();
        crearElementoBad();
        variable.teclado = "activado"
        variable.listaAuxBad = [];
        //reiniciar juego
        //cambiar teclado activado
      }
    }
  });
  //TECLADO
  document.addEventListener("keypress", (e) => {
    if (variable.inicio === "on") {
      const {wordRandom, listaAuxBad, containerPError_pAll, trueTeclaAvisoError} = variable;
      if (variable.teclado === "activado") { 
        if (e.key !== "Enter" && e.key !== " ") {
          variable.stopReinicia = "Stop Reiniciar";
          if (wordRandom.includes(e.key.toUpperCase())) {          
            getCharKeyword(e)
            if (winner() === "winner") {
              variable.teclado = "win";
              convertirH2Good();
              addh2winner();
              removeLineIntermitentes();
              removeCreateElementBad();
              variable.stopReinicia = "off";
            }
          }
          else {
            if (!variable.listaAuxBad.includes(e.key)) {
              removeCreateElementBad();
            }
            getCharKeywordBad(e);
            ahorcadoReaction(); 
            if (variable.listaAuxBad.length === 8) {
              console.log("game over")
              variable.teclado = "game over";
              listaAuxBad.push("game over")
              removeCreateElementBad();
              gameOver();
              variable.stopReinicia = "off";  
            }
          }
        }
      }
    }
  });
});






