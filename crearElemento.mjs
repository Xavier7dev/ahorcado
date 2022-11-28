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

export function crearElementoBad() {
  //8 span words error
  const {ref} = variable;

  const div = document.createElement("div");
  div.classList.add("contenPError")
  
  const pError = document.createElement("p")
  pError.textContent = ``;
  
  div.appendChild(pError);
  ref.insertAdjacentElement("beforebegin", div); 
  
  variable.elementoPError = document.querySelector(".contenPError > p")
  
  const auxBad = [];
  variable.listaAuxBad = auxBad;

  // variable.containerPError = document.querySelector(".container > .contenPError") 
  // variable.containerPError = document.querySelector(".contenPError") 
  // variable.containerPError_pAll = [...document.querySelectorAll(".contenPError > p")]
}

export function ahorcadosH2good() {
  const {ref} = variable;
  
  const div = document.createElement("div")
  div.classList.add("container-son")
  const h2good = document.createElement("h2")
  h2good.textContent = "AHORCADO"
  h2good.className = "h2good"
  
  
  div.appendChild(h2good)
  ref.insertAdjacentElement("beforebegin" , div);

  variable.elementoh2 = document.querySelector(".container-son")

  variable.containerContainerSon = document.querySelector(".container > .container-son")
}

export function ahorcadosH2good_animation() {
  const h2good = document.querySelector(".h2good")
  h2good.className = "h2good-animation"
  variable.h2good_animation = h2good
}

export function ahorcadosH2good_end_animation() {
  const h2good = document.querySelector(".h2good-animation")
  h2good.className = "h2good"
}

export function borderButton() {
  const {words, ref} = variable;
  const div = document.createElement("div");
  const random = words[(Math.floor(Math.random() * words.length +1)) -1].toUpperCase()
  div.classList.add("border-boton")
  
  for (let i = 0; i < random.length; i++) {
    if (random[i] !== " ") {
      const span = document.createElement("span");
      span.textContent = "";
      div.appendChild(span);
      ref.insertAdjacentElement("afterend", div); 
    }
    else {
      const span = document.createElement("span");
      span.textContent = "";
      span.id = "span-space"
      div.appendChild(span);
      ref.insertAdjacentElement("afterend", div);  
    }
  }
  
  variable.elementSpan = [...document.querySelectorAll(".border-boton > span")]
  variable.wordRandom = random.toUpperCase();

  variable.containerBorderBtn = document.querySelector(".container > .border-boton" )
}

export function getCharKeyword(e) {
  const {wordRandom, elementSpan} = variable;

  for (let i = 0; i < wordRandom.length; i++) {
    if (e.key.toUpperCase() === wordRandom[i]) {
      elementSpan[i].innerHTML = e.key.toUpperCase()
    }
  }
}

// export function getCharKeywordBad(e) {
//   const {elementoPError, listaAuxBad, containerPError_pAll} = variable;
  
//   if (!listaAuxBad.includes(e.key)) {
//     listaAuxBad.push(e.key)
//     elementoPError.textContent = `${listaAuxBad.join(" ").toUpperCase()}`
//   }
//   // modificar colocar lista de span error
// }
export function removeCreateElementBad() {
  const {container} = variable;
  
  const container_PError = document.querySelector(".container > .contenPError")
  container.removeChild(container_PError)
}

export function getCharKeywordBad(e) {
  const {ref, listaAuxBad} = variable;
  
  const div = document.createElement("div");
  div.classList.add("contenPError")
    
  if (!listaAuxBad.includes(e.key)) {
    listaAuxBad.push(e.key)
    for (let i = 0; i < listaAuxBad.length; i++) {
      
      const pError = document.createElement("p")
      pError.textContent = `${listaAuxBad[i].toUpperCase()}`;
      
      div.appendChild(pError);
      ref.insertAdjacentElement("beforebegin", div); 

    }
  }
  variable.elementoPError = document.querySelector(".contenPError > p")
  variable.containerPError_pAll = [...document.querySelectorAll(".contenPError > p")]
}

export function ahorcadosH2bad() {
  const {elementoh2} = variable;

  const h2bad = document.createElement("h2")
  h2bad.textContent = ""
  h2bad.className = "h2bad"
  
  elementoh2.appendChild(h2bad)
}

export function ahorcadoReaction() {
  const {elementosh2, listaAuxBad} = variable;

  let ahorcado = "AHORCADO"
  let strinGood = "";
  let stringBad = "";

  for (let i = 0; i < ahorcado.length; i++) {
    if (i <listaAuxBad.length) {
      strinGood += ahorcado[i];
      elementosh2[0].className = "h2bad"
      elementosh2[0].textContent = `${strinGood}`;
    }
    else {
      stringBad += ahorcado[i]
      elementosh2[1].className = "h2good";
      elementosh2[1].textContent = `${stringBad}`;
    }
  }
  if (strinGood.length === ahorcado.length) {
    stringBad = "";
    elementosh2[1].textContent = `${stringBad}`
  }

  variable.strinGood = strinGood;
}

export function removeLineIntermitentes() {
  const {container, containerBorderBtn} = variable;
  
  container.removeChild(containerBorderBtn);
}


export function gameOver() {
  const {container, containerBorderBtn, containerPError} = variable;
  
  container.removeChild(containerBorderBtn);
  // container.removeChild(containerPError); 

  const div = document.createElement("div");
  div.id = "gameOver"
  const h2GameOver = document.createElement("h2");
  h2GameOver.textContent = "GAME OVER"

  div.appendChild(h2GameOver);
  container.appendChild(div)

  variable.containerh2GameOver = document.querySelector(".container > #gameOver")
}

export function reinicioGameOver() {
  const {elementosh2, container, containerh2GameOver} = variable;
    //eliminar h2 game over
    //letra ahorcado color verde h2egood//
  elementosh2[1].textContent = `AHORCADO`
  elementosh2[0].textContent = ``

 container.removeChild(containerh2GameOver)
}

export function winner() {
  const {elementSpan} = variable;
  //obtener etiquetas p si el texto coincide con wordRandom es win

  let count = 0;

  for (let i = 0; i < elementSpan.length; i++) {
    if (count >= i && elementSpan[i].textContent !== "") {
      count++;
    }
    if (elementSpan[i].id === "span-space") {
      count++;
    }
  }

  if (count === elementSpan.length) {
    return "winner"
  }
  
}

export function addh2winner() {
  //agregar div winner con h2 winner
  const {container} = variable;
 
  const div = document.createElement("div");
  div.id = "container-winner";
  const h2win = document.createElement("h2");
  h2win.textContent = "WINNER"

  div.appendChild(h2win);
  container.appendChild(div);

  variable.containerWinner = document.querySelector(".container > #container-winner")
}

export function removeH2Winner() {
  const {container, containerWinner} = variable;

  container.removeChild(containerWinner)
}

export function convertirH2Good() {
  const {elementosh2} = variable;

  elementosh2.map((e) => {
    if (e.classList.value === "h2good") {
      e.textContent = "AHORCADO"
    }
    else {
      e.textContent = ""
    }
  });
}

//si comienza el juego, no debe poder reiniciar, reiniciar solo para
//espacio solo dejarlo así;


//stop reinicio, se esta jugando, salvo se pierda o se siga ganando poner un modo
export function stopReiniciar() {
  variable.stopReiniciar = "stop";
}

//resalta tecla incluida con color verde y probar si agrandar tamaño
export function teclaYaIncluidaAviso(e) {
  const {elementSpan} = variable;

  let existe = "";
  elementSpan.map((elem) => {
    if (e.key.toUpperCase() === elem.textContent) {
      existe = elem.className = "teclaYaIncluidaAviso"
    }
    else {
      existe = elem.className = null;
    };
    // console.log(elem.textContent, e.key.toUpperCase())
  });
}

//resalta tecla incluida error con color red en listaAuxBad
export function teclaYaIncluidaAvisoError(e) {
  const {containerPError_pAll} = variable;
  
  containerPError_pAll.map((elem) => {
    if (elem.textContent === e.key.toUpperCase()) {
      elem.className = "teclaYaIncluidaAvisoError"
      // console.log(elem.textContent,"paso 1");
    }
    else { 
      elem.className = "";
      // console.log("paso 2");
    }
  })
}

export function removeAvisoError() {
  const {containerPError_pAll, listaAuxBad} = variable;
  
  containerPError_pAll.map((elem) => {
    elem.className = ""
  })
  // console.log(listaAuxBad[listaAuxBad.length-1], "here");
}
export function removeAvisoError2() {
  const {containerPError_pAll, listaAuxBad} = variable;
  
  for (let i = 0; i < containerPError_pAll.length; i++) {
    containerPError_pAll[i].className;
    console.error(containerPError_pAll[i].className, "tecla repeticua");
  }
}

export function removeAvisoCorrect() {
  const {elementSpan} = variable;
  
  elementSpan.map((elem) => {
    elem.className = ""
  })
}