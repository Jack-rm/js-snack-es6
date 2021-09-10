// ### S6 ###

// SNACK #1

// creo un array di oggetti
const biciclette = [
    {
        nome : "Bianchi",
        peso :  6.7,
    },
    {
        nome : "Pinarello",
        peso :  6.5,
    },
    {
        nome : "Specialized",
        peso : 8.5,
    },
    {
        nome: "Cipollini",
        peso : 6.34,
    }
]

/*
// Soluzione della mattina:

let biciLeggera = biciclette[0];

for ( var i = 0; i < biciclette.length; i++){
    if (biciclette[i].peso < biciLeggera.peso){
        biciLeggera = biciclette[i]
    }
}

console.table(biciLeggera);
document.getElementById("#id").innerHTML = "Bicicletta: " + biciLeggera.nome + ", che pesa: " + biciLeggera.peso + "kg.";
*/





// Soluzione del pomeriggio:

let biciLeggera;

for ( var i = 0; i < biciclette.length; i++){
    
    // console.log(biciclette[i]);
    if (!biciLeggera) {
        biciLeggera = biciclette[i]
        // console.log(biciLeggera,i);
        continue  // key word per saltare codice successivo una voltra detro l'if
    }

    let { peso } = biciclette[i];
    // equivalente di: let peso = biciclette[i].peso; //  dichiaro la variabile peso, il cui nome è uguale identico alla proprietà dell'ogetto in questione

    if (peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
    // console.log(biciLeggera,i);


    // console.log(biciclette[i],peso);
}



/*
// Examples per destructoring normale ed inverso

let b = bici ("mia",15);  // Indicizzo una variabile per la mia bici

biciclette.push(b);
// console.log(biciclette);

// funzione che crea una bici
function bici(nome,peso){

    return { nome, peso, }
    // nella proprietà nome viene salvato il valore del parametro peso

}

let copiaBiciLeggera = bici(biciLeggera.nome,biciLeggera.peso);

// console.log(copiaBiciLeggera);

// una funzione che copia una bici già esistente
function copiaBici (bici){

    let { nome, peso } = bici

    return { nome,peso }

}

// FORMA ABBREVIATA della funzione copia bici
function copiaBici ({ nome,peso }){

    return { nome,peso }

}

// Esempio di "for .. of" ( SOLO PER ARRAY). " for ... in" (SOLO PER OGGETTI)

for (let i = 0; i < biciclette.length; i++) {
    let bici = biciclette[i]
}

// è come scrivere ...

for ( let bici of biciclette) {  

    console.log(bici);
    for(let prop in bici) {
        console.log(prop,bici[prop]);
    }

    // let{ nome } = bici;
    // nomiBiciclette.push(nome);

}
*/



// # Snack #2

// Creo un array di oggetti
var squadreDiCalcio = [
    {
        nome : "Roma",
        falliFatti :  0,
        falliSubiti : 0,
    },
    {
        nome : "Lazio",
        falliFatti :  0,
        falliSubiti : 0,
    },
    {
        nome : "Juve",
        falliFatti :  0,
        falliSubiti : 0,
    },
    {
        nome : "Milan",
        falliFatti :  0,
        falliSubiti : 0,
    },
    {
        nome : "Inter",
        falliFatti :  0,
        falliSubiti : 0,
    },
    {
        nome : "Fiorentina",
        falliFatti :  0,
        falliSubiti : 0,
    },
]

/*
// Soluzione della mattina

for (var i = 0; i < squadreDiCalcio.length; i++){
    squadreDiCalcio[i].falliFatti = getRandomNumber(1,100);
    squadreDiCalcio[i].falliSubiti = getRandomNumber(1,100);
}

console.table(squadreDiCalcio);

let {nome, falliSubiti} = squadreDiCalcio;
console.table(squadreDiCalcio);
*/


// Soluzione del pomeriggio con "for ...of"

for (let squadra of squadreDiCalcio){

    squadra.falliFatti = getRandomNumber(0,100);
    squadra.falliSubiti = getRandomNumber(0,100);

};

console.log(squadreDiCalcio);

let arrayNomiFalli = [];

for (const squadra of squadreDiCalcio) {

    
    // Destrutturazione:
    let { nome,falli } = squadra; // genero una variabile con le proprietà dell'oggetto

    let obj = { nome,falli }; // creo nuovo oggetto dove salvo nelle proprietà le corrispettive variabili
    // let arr = [nome,falli] // se vogliamo creare un array invece che un oggetto
    
    arrayNomiFalli.push(obj);

}   

console.log(arrayNomiFalli);





/*
/// ###Recap sulle Arrow Function


// il "this" cambia rispetto al suo utilizzo e alla tipologia di funzione, arrow o normale.

document.querySelector('#id').addEventListener('click', function(){
    console.log(this);
});   // qui il this si riferisce a "document.querySelector('@id')"

document.questySelector('#id').addEventListener('click', () => {
    console.log(this);
})    // in questo caso il this si riferisce all'oggetto per intero



let arrwFn = (parametro1, parametro2) => {  // senza la parola "function"
    
    console.log(parametro1,parametro2);
}


let squadraArrow = {
    
    nome: "Arrow",
    punti: 0,
    falli: 0,


    getFalli: function(){
        return this.falli;
    }

    // Funzione struttura normale
    setName: function(name){
        console.log(this);
        this.name = name;
    }

    // Stessa funzione di sopra scritta in arrow function,
    // solitamente non si fa perchè poi non ci ridarà il name una volta cambiato
    // IL COMPORTAMENTO DEL "THIS" CAMBIA!!!!!!!!!!!
    setName : (name) => {
        console.log(this);
        this.name = name;
    }

}

squadraArrow.setName("AltroNome");
console.log(squadraArrow);
*/



// # FUNZIONI UTILI

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}