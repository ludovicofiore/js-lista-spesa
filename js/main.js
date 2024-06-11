// creo array
const newArray = ["pane", "acqua", "carne", "detersivi", "birra"];

// richiamo lista
let myList = document.querySelector(".list");

// creo ciclo
let i = 0;
while (i < newArray.length) {

    let element = newArray[i];

    console.log(element);

    // creo elemento da mettere in lista
    myList.innerHTML += `<li>${element}</li>`;

    // condizione di uscita
   i++;
}