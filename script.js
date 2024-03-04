function elefanteIncomoda(max) {
    0
    var letra = "";

    for (var i = 1; i <= max; i++) {

        if (i % 2 != 0 && i != 1)
            letra += `${i} elefantes incomodam muita gente \n`;

        else if ( i == 1){
            letra += `${i} elefante incomoda muita gente \n`;
        }

        else if (i % 2 == 0) {
            letra += `${i} elefantes `;

            for (var j = 1; j < i; j++) {
                letra += "incomodam, ";
            }
            letra += "incomodam muito mais! \n\n"
        }
        
    }

    for (var i = max; i >= 1; i--) {

        if (i % 2 != 0 && i != 1)
            letra += `${i} elefantes incomodam muita gente \n\n`;

        else if ( i == 1){
            letra += `${i} elefante incomoda muita menos\n`;
        }

        else if (i % 2 == 0) {
            letra += `${i} elefantes `;

            for (var j = 1; j < i; j++) {
                letra += "incomodam, ";
            }
            letra += "incomodam muito menos! \n";
        }
    }


    console.log(letra);
}

elefanteIncomoda(10);