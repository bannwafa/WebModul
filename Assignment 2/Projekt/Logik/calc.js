function berechne() {
    var einnahmen = 0;
    var ausgaben = 0;

    var einnahmenElements = document.getElementsByClassName("einnahmen");
    var ausgabenElements = document.getElementsByClassName("ausgaben");

    for (let i = 0; i < einnahmenElements.length; i++) {
        if (parseInt(einnahmenElements[i].value) > 0) {
            einnahmen += parseInt(einnahmenElements[i].value);
        }
    }

    for (let i = 0; i < ausgabenElements.length; i++) {
        if (parseInt(ausgabenElements[i].value) > 0) {
            ausgaben += parseInt(ausgabenElements[i].value);
        }
    }

    var result = einnahmen - ausgaben;

    document.getElementById("resultat").innerHTML = result.toFixed(2);
}

function zuruecksetzen() {
    var inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    var result = document.getElementById("resultat");
    result.innerHTML = '';
}