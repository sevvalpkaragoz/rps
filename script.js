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

let humanScore = 0, comScore = 0;
let humanChoice, comChoice;

function playRound(humanChoice, comChoice) {
    humanChoice = getHumanChoice();
    comChoice = getComputerChoice();

    if (humanChoice == "taş" && comChoice == "taş") console.log("Berabere!! Taş-Taş");
    else if (humanChoice == "taş" && comChoice == "kağıt") console.log("KAYBETTİN!! Kağıt, taşı yener");
    else if (humanChoice == "taş" && comChoice == "makas") console.log("KAZANDIN!! Taş, makası yener");

    else if (humanChoice == "kağıt" && comChoice == "taş") console.log("KAZANDIN!! Kağıt, taşı yener");
    else if (humanChoice == "kağıt" && comChoice == "kağıt") console.log("BERABERE!! kağıt-kağıt");
    else if (humanChoice == "kağıt" && comChoice == "makas") console.log("KAYBETTİN!! Makas, kağıdı keser");

    else if (humanChoice == "makas" && comChoice == "makas") console.log("BERABERE!! makas-makas");
    else if (humanChoice == "makas" && comChoice == "taş") console.log("KAYBETTİN!! Taş, makası yener");
    else if (humanChoice == "makas" && comChoice == "kağıt") console.log("KAZANDIN!! Makas, kağıdı keser");



}

console.log(playRound(humanChoice, comChoice));