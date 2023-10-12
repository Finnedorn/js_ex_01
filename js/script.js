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
    'matteo' //elemento 2
];

//se volessi leggere l'elemento 1 del mio array?

console.log(classe107[1]);

//per accedere all'elemento dell'array invece 
//nomearray[indice elemento]

classe107[2] //ho selezionato 'matteo'!



