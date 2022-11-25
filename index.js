// const words = ["amar"];
const words = ["amar", "odio", "hawai", "holograma"];
const word = document.getElementById("word");
const errorB = document.getElementById("errorB");
const ahorcado = document.getElementById("ahorcado");
const randomWord = words[Math.floor(Math.random() * words.length + 1) -1]

word.innerHTML = `<p>Adivinar la palabra, teclear una letra <br>${" _ ".repeat(guiones(words))}</p>`

function guiones(words) {
  let count = 0;
  for (let i = 0; i <randomWord.length; i++) {
    count++;
  }  
  return count
}

let wordFind = [];
let wordsBad = [];
let aux = [];
let count = 0;
let error = [];
function acertar(wordFind) {
  document.addEventListener("keypress", (e) => {
    // word.innerHTML = `<p>Tienes ${randomWord.length} oportunidades para acertar <br>${" _ ".repeat(guiones(words))}</p>`
    let letterAhorcado = "AHORCADO";
    if (wordFind.includes(e.key)) {
      word.innerHTML = `<p>Incluido: ${wordFind.join(" ")}</p>`
      console.log(e.key, " esta incluido")
    }
    else if (!randomWord.includes(e.key)) {
      // word.innerHTML = `<p>${wordFind.join(" ")}</>`
      aux[count] = letterAhorcado[count]
      error[count] = e.key
      
      errorB.innerHTML= `<p class='errorB'>${error.join(" ")}</p1>`
      // const p = document.createElement("p")
      // p.classList.add("errorB")
      for (let i = 0; i <= count; i++) {
        if (error[i] !== e.key) {
          if (i === count) {
            error[count] = e.key
          }
        }
      }
      ahorcado.innerHTML= `<h1 class='red'>${aux.join("")}</h1>`
      error[count] = e.key; 
      
      console.log(count, " coun aumenta")
      for (let i = 0; i < letterAhorcado.length; i++) {
        if (i ===count) {
          aux[count] = letterAhorcado[count]
          // aux.push(letterAhorcado[count])
          return count++;
        }
      }
    }
    else {
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === e.key) {
          wordFind[i] = e.key;
        }
      };
      for (let i = 0; i < randomWord.length; i++) {
        if (wordFind[i] === undefined) {
          wordFind[i] = "_"
        }
      }
      console.log("else ")
      word.innerHTML = `<p>Incluido: ${wordFind.join(" ")}</p>`
    }
  })
  console.log("paso de aqui")
  word.innerHTML = `<p>Incluido: ${wordFind}</p>`
  for (let i = 0; i < randomWord.length; i++) {
    if (wordFind[i] === undefined) {
      wordFind[i] = "_"
    }
  }
  return wordFind.join(" ")
}

word.innerHTML = `<p>letras ${randomWord.length}: ${acertar(wordFind)}</p>`



