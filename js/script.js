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

}

//se volessi far incremetare non di un valore bensì di 2 o più 


for(let i = 1; i < 11; i+=2) {

    // istruzioni da ripetere tot volte

}

//oppure potrei fare un for che conta alla rovescia (decrementale)

for(let i = 10; i = 0; i--) {

    // istruzioni da ripetere tot volte

}

