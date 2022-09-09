console.log('JS OK')

/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/
const teams = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Benevento",
        puntiFatti: 0,
        falliSubiti: 0
    }

]

teams.forEach((element) => {
    const { puntiFatti, falliSubiti } = element;
    element.puntiFatti = getRandomNumber(1, 5);
    element.falliSubiti = getRandomNumber(1, 5);

    console.log(element);
});

function getRandomNumber(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min;
}

/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function createNewArray(arr, num1, num2) {
    let arrayAppoggio = [];

    if (num1 < num2) {
        arr.forEach((number) => {
            if (number > num1 && number < num2) {
                arrayAppoggio.push(number);
            }
        })
        return arrayAppoggio;
    }
}

const array = [2, 5, 8, 5, 4, 9];
createNewArray(array, 1, 20);
console.log(createNewArray(array, 1, 20));


/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchina = {
    color: 'green',
    length: 0,
}

const zucchine = [];


zucchine.push({ ...zucchina, length: 10 });
zucchine.push({ ...zucchina, length: 12 });
zucchine.push({ ...zucchina, length: 15 });
zucchine.push({ ...zucchina, length: 20 });
zucchine.push({ ...zucchina, length: 10 });
zucchine.push({ ...zucchina, length: 12 });
zucchine.push({ ...zucchina, length: 18 });
zucchine.push({ ...zucchina, length: 19 });
zucchine.push({ ...zucchina, length: 11 });
zucchine.push({ ...zucchina, length: 17 });
zucchine.push({ ...zucchina, length: 9 });


console.log(zucchine);

function propertyFilter(arrayOfObjects, property, filterValue) {
    const filterArray1 = [];
    const filterArray2 = [];

    arrayOfObjects.forEach((object) => {
        if (object[property] <= filterValue) {
            filterArray1.push(object);
        }
        else if (object[property] > filterValue) {
            filterArray2.push(object);
        }
    })

    return [filterArray1, filterArray2];
}

let zucchineBySize = propertyFilter(zucchine, 'length', 15)
console.log('Zucchine piu corte di 15', zucchineBySize[0]);
console.log('Zucchine piu lunghe di 15', zucchineBySize[1]);




// RESULTS
for (let i = 0; i < exercise.length; i++) {
    const result = document.createElement('p');
    result.classList.add('result');
    result.innerHTML = exercise[i];
    liveCoding.append(result);
}