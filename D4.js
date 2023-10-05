/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
functionResult = area(8, 10);
console.log(functionResult);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  const result = num1 + num2;
  if (num1 === num2) {
    return result * 3;
  } else {
    return num1 + num2;
  }
}
const finalResult = crazySum(3, 3);
console.log(finalResult);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(num1) {
  const result = Math.abs(num1 - 19);
  if (num1 > 19) {
    return result * 3;
  } else {
    return result;
  }
}
const absoluteDiff = crazyDiff(29);
console.log(absoluteDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(nInt) {
  if (typeof nInt === "number") {
    if ((nInt >= 20 && nInt <= 100) || nInt === 400) {
      return true;
    } else {
      return false;
    }
  }
}
const myIntNum = boundary(401);
console.log(myIntNum);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(string) {
  if (typeof string === "string") {
    if (string.indexOf("EPICODE") === 0) {
      return string;
    } else {
      return "EPICODE " + string;
    }
  }
}
console.log(epify("is the best of world"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return "Il numero e multiplo di 3 o 7";
  } else {
    return "il numero non è multiplo di 3 o 7";
  }
}
console.log(check3and7(18));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let result = str.split("").reverse().join("");
  return result;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str) {
  let myNewString = str.slice(1, -1);
  return myNewString;
}
console.log(cutString("Epicode , il corso migliore"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  if (typeof n === "number") {
    const newArr = [];
    for (let i = 0; i < n; i++) {
      const number = Math.floor(Math.random() * 11);
      newArr.push(number);
    }
    return newArr;
  }
}
console.log(giveMeRandom(5));
