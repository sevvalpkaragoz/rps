function getComputerChoice() {
    let com;
    let sayi = Math.random();
    if (sayi < 0.33) com = "taş";
    else if (sayi < 0.66) com = "kağıt";
    else com = "makas";
    return com;
}

function getHumanChoice() {
    let sec = prompt("taş kağıt makas???");
    if (sec) sec = sec.toLowerCase();
    while  ((sec != "taş") && (sec != "kağıt") && (sec != "makas") ) {
        alert("Geçersiz komut ya da yazım hatası!!! Tekrar giriniz");
        sec = prompt("taş kağıt makas???");
        if (sec) sec = sec.toLowerCase();
    }
    return sec;
}

    console.log(getComputerChoice());
    console.log(getHumanChoice());