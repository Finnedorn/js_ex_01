//i cicli
//servono per non ripetere più volte lo stesso blocco di codice
//si dividono in: for; while; do-while;
//for si usa per determinare un ciclo che si ripete tot volte;
//while quando non so quante volte devo ripetere il ciclo (es: attesa);



                            //ciclo for// 


//il primo elemento è il valore della variabile (es:let contatore = 1)

//il secondo elemento è la condizione che determina la fine del ciclo (es: contatore< 11 quindi quando arriva ad 11 smetti!)

//il terzo elemento è il valore che assume il contatore ogni volta che gira ++ sta per assumi un valore +1, -- sta per scala di valore di 1

for(let contatore = 1;contatore < 11; contatore++) {

    // istruzioni da ripetere tot volte

}

//puo contenere altri cicli for!
//un ciclo for può essere annidato dentro un if!

//in gergo js la let che gestisce il for è spesso chiamata i che sta per iterator/index

for(let i = 1; i < 11; i++) {

    // istruzioni da ripetere tot volte
    console.log(i);
}

//se volessi far incremetare non di un valore bensì di 2 o più 


for(let i = 1; i < 11; i+=2) {

    // istruzioni da ripetere tot volte
    console.log(i);
}

//oppure potrei fare un for che conta alla rovescia (decrementale)

for(let i = 10; i = 0; i--) {

    // istruzioni da ripetere tot volte
    console.log(i);
}


//ex01


//voglio che compaiano dentro al box wrapper 100 quadratini uno arancione ed uno marrone alternati

//creo una const per pescarmi il div che conterrà le box 
const wrapper = document.getElementById('boxwrapper');

for(let i = 1; i <= 100; i++) {

    console.log(i);
    //dichiaro una variabile
    let bgcolorsquare;
    //dichiaro che se i è pari bg sarà even o odd (pari o diuspari)
    // i%2 mi da 0? allora è pari
    if(i % 2 === 0) {
        bgcolorsquare = 'even';
    } else {
        bgcolorsquare = 'odd';
    }

    //creo una costante che mi crei un div dentro l'html (occhio ancora non è inserito sto div!!!)
    const square = document.createElement('div');

    //do al div una classe box e la classe che sarà even odd a seconda della conta del i (bonus: do un flex per allineare il contenuto che inserirò)
    square.className = `box ${bgcolorsquare} d-flex justify-content-center align content center`;

    //bonus: comunico al div di inserire all'interno il valore del i cosi da avere ogni quadratino contato da 1 a 100 
    square.innerHTML = i

    //inserisco il div dentro il wrapper di cui ho creato una const
    wrapper.append(square);

}



//e se volessi una scacchiera?


//creo una const per pescarmi il div che conterrà le box 
const wrapperb = document.getElementById('boxwrapper-b');


for(let i = 1; i <= 8; i++) {

    //dichiaro un ciclo interno a cui darò una variabile diversa da i cioè c che mi crei i quadrati del secondo colore
    for(let c = 1; c<=8; c++) {
        //dichiaro una variabile
        let bgcolorsquare;
        //se i è pari e se c è pari allora fammi un quadrato arancione
        //se i è pari ma c non lo è allora fammi un quadrato marrone
        if(i % 2 > 0) {

            if(c % 2 === 0) {
                bgcolorsquare = 'orange';
            } else {
                bgcolorsquare = 'brown'
            }
        //se però i è dispari e se c è pari allora fammi un quadrato marrone
        //se però i è dispari e c è pari allora fammi un quadrato arancione 
        } else {
            
            if (c % 2 === 0){
                bgcolorsquare = 'brown';
            } else {
                bgcolorsquare = 'orange';
            }

        }

        //creo una costante che mi crei un div dentro l'html (occhio ancora non è inserito sto div!!!)
        const square = document.createElement('div');

        //do al div una classe box e la classe che sarà even odd a seconda della conta del i (bonus: do un flex per allineare il contenuto che inserirò)
        square.className = `box ${bgcolorsquare} d-flex justify-content-center align content center`;

        //bonus: comunico al div di inserire all'interno il valore del i cosi da avere ogni quadratino contato da 1 a 100 
        square.innerHTML = i

        //inserisco il div dentro il wrapper di cui ho creato una const
        wrapperb.append(square);
    }
}


                //Array


//una lista di nomi separati da una virgola all'interno di una parentesi graffa 

const  classe107 = [
    'giulia', //elemento 0
    'erica',  //elemento 1
    'matteo', //elemento 2
    'alexandru' //elemento 3
];

//se volessi leggere l'elemento 1 del mio array?

console.log(classe107[1]);

//se volessi fare un check della lunghezza dell'array?
console.log(classe107.length); 

//se io volessi selezionare l'ultimo elemento dell'array? 
console.log(classe107[classe107.length - 1]);

//se io chiamassi un elemento che supera la lista ?
console.log(classe107[classe107.length]);
//nota bene !!! lenght comincia a contare da 1 in una lista di 4 elementi ma l'array come primo elemento ha lo 0 !! quindi lenght cercherà l'elemento 4 ma non trovandolo darà undefined!!!

//per accedere all'elemento dell'array invece 
//nomearray[indice elemento]

classe107[2] //ho selezionato 'matteo'!

//se volessi cambiare il nome di un elemento nell'array?
classe107[1] = 'clelia'

//se volessi aggiungere contenuto ad un elmento array?
classe107[1] += 'fradella'
//in questo modo otterrò che il numero 1 che è clelia adesso sarà clelia fradella

//pop() and push() 


//il pop rimuove l'ultimo elmento di un array  

const  classe107 = [
    'giulia', //elemento 0
    'erica',  //elemento 1
    'matteo', //elemento 2
    'alexandru' //elemento 3
];

//voglio rimuovere alexandru
classe107.pop()

//il push invece aggiunge un elemento come ultimo nell'array


//shift() e unshift()

//shift rimuove il primo elmeneto dall'array
//nota! che una volta rimosso l'array si risistemerà e l'elemento che prima era 1 adesso sarà 0


//unshift invece aggiunge un elemento come primo 
//nota ! che una volta aggiunto un elemento questo sarà il nuovo 0 e quello che prima era 0 diventerà 1 



//tostring() e join()

//join si usa per inserire un elemento come uno spazio o una virgola che separi un array una volta stampato sul div



//splice()

//si usa per inserire un elemento in mezzo all'array

const  classe107 = [
    'giulia', //elemento 0
    'erica',  //elemento 1
    'matteo', //elemento 2
    'alexandru' //elemento 3
];

classe107.splice(2, 0, 'sandra', 'luca');
//il 2 sta per parti da qua 
//0 sta per quanti elementi devo eliminare
//gli elementi dopo sono quelli da aggiungere
//quindi gli ho detto: a partire da matteo aggiungi sandra e luca

classe107.splice(2, 1);
//elinima cominciando da matteo 1 elemento nell'array, quindi matteo stesso!


//voglio inserire nella array allievi selezionati un allievo a caso da classe 107

const  classe107 = [
    'giulia', //elemento 0
    'erica',  //elemento 1
    'matteo', //elemento 2
    'alexandru' //elemento 3
];

const allieviselezionati = [];

//creo una variabile random a cui dico: pesca da 0 a l'ultimo elemento di classe 107
let allievoindex = getRndinteger(0, classe107.length -1);

//ora semplicemente do il valore della variabile random all'array 
classe107[allievoindex];

//voglio pushare gli elementi seelzionati casualmente in una sezione apparte stile estrazione lotto?
//semplicemente dico alla costante allievi selezionati: pushami nella tua array gli elementi estratti random da classe 107
allieviselezionati.push(classe107[allievoindex]);

//adesso voglio rimuovere l'elemento pescato, ora nella lista allievi selezionati, dalla lista della classe 
//quindi uso splice e dico: prendi la variabile allievoindex e togli a partire da quello un elemento, quindi quello stesso elemento!
classe107.splice(allievoindex, 1);



//voglio linkarlo ad un bottone che me lo stampi nell'html


const allieviselezionati = [];

//creo un bototne nell'html e mi creo una const che mi linki a quella classe
const  btn = document.querySelector('button');
//creo una const linkata all'h2 dentro all'html
const allievo = document.querySelector('h2');

//creo una funzione per cui ad ogni click mi peschi un elemento
btn.addEventListener('click', function() {

    //se l'array classe 107 ha lunghezza maggiore a 0 continua a pescare 
    //in questo caso bisogna fare differenza tra lenght e catalogazione array in quanto 0 per l'array è un elemento ma per length ha valore 1 quindi continerà a pescare fino al numero 0 dell'array compreso!!!!!
    if (classe107.length > 0) {
        //creo una variabile random a cui dico: pesca da 0 a l'ultimo elemento di classe 107
        let allievoindex = getRndinteger(0, classe107.length -1);

        //ora dico che il testo interno di allievo cioè h2 sarà pari all'elemento array estratto random 
        //quindi stampa sull html il nome estratto 
        allievo.innerText = classe107[allievoindex];

        //voglio pushare gli elementi seelzionati casualmente in una sezione apparte stile estrazione lotto?
        //semplicemente dico alla costante allievi selezionati: pushami nella tua array gli elementi estratti random da classe 107
        allieviselezionati.push(classe107[allievoindex]);

        //adesso voglio rimuovere l'elemento pescato, ora nella lista allievi selezionati, dalla lista della classe 
        //quindi uso splice e dico: prendi la variabile allievoindex e togli a partire da quello un elemento, quindi quello stesso elemento!
        classe107.splice(allievoindex, 1);

        //quando non ci sono più elementi dell'array, scrivi questo!
    } else {
        allievo.innerText = 'non ci sono più allievi';
    }
})




const numbers = [1,2,3,10, 15, 20, 22];

for(let i = 0; i < numbers.length; i++) {
    let numerocorrente = numbers[i];
}




//voglio creare un form che mi dica se ho gia nella lista un determinato elemento

const  classe107 = [
    'giulia', //elemento 0
    'erica',  //elemento 1
    'matteo', //elemento 2
    'alexandru' //elemento 3
];

//mi faccio una const che linkerò al mio bottone "verifica"
const button = document.querySelector('button');

const alert = document.querySelector('.alert')

button.addEventListener('click', function{

    //mi pesco il valore dell'id del form con id nome 
    let studentname = document.getElementById('nome').value;
    let class = document.getElementById('class');
    let text = document.getElementById('text');

    //creo un ciclo che mi scorra tutti gli elementi dell'array
    //i sta a zero, finche i è minore alla lunghezza dell'array tu continua a scorrere, ad ogni volta aggiungi 1 
    for(let i = 0; i < classe107.length; i++) {
        //creo una variabile che associ i a classe 107
        let currentname = classe107[i];

        if (currentname.toLocaleLowerCase() = studentname.toLocaleLowerCase()) {

            class.innerHTML = 'alert-success';
            text.innerHTML = 'Presente!';

        } else {

            class.innerHTML = 'alert-danger';
            text.innerHTML = 'Non Presente!';
        }
    }
})


//gli array possono contenere altri array!!!!


const biggerone =[
    [10, 15, 2, 33, 55] 
    [
        'giulia',
        'mekki',
        'gino',
        'ule'
    ]
];


//se io voglio selezionare 55?
//il primo numero sta per il primo array dei due quindi 0
//il secondo numero sta per il numero dentro l'array
console.log(biggerone[0][4]);

//in questo modo pesco mekki
console.log(biggerone[1][2]);

//voglio creare un ciclo che mi peschi in console tutti gli elementi del macro array
//cicla per tutta la lunghezza dell'array quindi 2 volte
for(let p = 0; p < biggerone.length; p++) {
    //ma dentro c'è un altro ciclo quindi cicla anche questo di tutti gli elementi interni quindi 4 volte 
    for( let c = 0; c < biggerone[p].lenght; c++){
        
        console.log(biggerone[p][c])
    }
}

//se io voglio creare un ciclo che mi trovi un elemento particolare dentro ad un macroarray?

let parentuleindex;
let uleindex;
//voglio creare un ciclo che mi peschi in console tutti gli elementi del macro array
//cicla per tutta la lunghezza dell'array quindi 2 volte
for(let p = 0; p < biggerone.length; p++) {
    //ma dentro c'è un altro ciclo quindi cicla anche questo di tutti gli elementi interni quindi 4 volte 
    for( let c = 0; c < biggerone[p].lenght; c++){
        if([p][c] === 'ule') {
            uleindex = c;
            parentuleindex = p;
        }
    }
}

console.log(biggerone[parentuleindex][uleindex]);