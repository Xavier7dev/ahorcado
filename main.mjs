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
  removeLinePerror,
  gameOver,
  reinicioGameOver,
  winner,
  addh2winner,
  convertirH2Good,
  removeH2Winner
} from "./crearElemento.mjs";


document.addEventListener("DOMContentLoaded", () => {
  
  ahorcadosH2good();
  ahorcadosH2bad();
  crearElemento();

  const { elementBtn } = variable;

  elementBtn.addEventListener("click", () =>  {
    const {containerBorderBtn, elementosh2} = variable
    
    if (containerBorderBtn && variable.teclado === "activado") {
      console.log("existe lineas intermitentes, sin teclado activado, click");
      
      convertirH2Good();

      removeLinePerror();
      borderButton();
      crearElementoBad();
      
    }
    if (!containerBorderBtn) {
      console.log("no existe lineas intermitentes, click");
      elementosh2[0].textContent = "AHORCADO";
      elementosh2[1].textContent = "";
      borderButton();
      crearElementoBad();
    }
    
    if (variable.teclado === "game over") { 
      console.log(variable.teclado, "en game over")
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


    //TECLADO
    document.addEventListener("keypress", (e) => {
      const {wordRandom, listaAuxBad} = variable;

      if (variable.teclado === "activado") { 

        if (e.key !== "Enter") {
          if (wordRandom.includes(e.key)) {
            getCharKeyword(e)
            console.log(`${e.key} esta dentro de ${wordRandom}`);
            if (winner() === "winner") {
              variable.teclado = "win";
              convertirH2Good();
              addh2winner();
              removeLinePerror();
              console.log(variable.teclado, " dentro de winner")
            }
          }
          else {
            getCharKeywordBad(e);
            ahorcadoReaction(); 
            if (variable.listaAuxBad.length === 8) {
              console.log("porque enrtr")
              variable.teclado = "game over";
              listaAuxBad.push("game over")
              gameOver();
            }
          }
        }
      }

      // if (e.key === "Enter") {
      //   console.log(e.key)
      // }

    });

  });

});






