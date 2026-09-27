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

    if (humanChoice == "taş" && comChoice == "taş") { 
    comScore++;
    humanScore++;
    console.log("Berabere!! Taş-Taş");
    }

    else if (humanChoice == "taş" && comChoice == "kağıt") { 
        console.log("KAYBETTİN!! Kağıt, taşı yener"); 
        comScore++;
    }
    else if (humanChoice == "taş" && comChoice == "makas") {
        humanScore++;
        console.log("KAZANDIN!! Taş, makası yener") 

    }

    else if (humanChoice == "kağıt" && comChoice == "taş") {
    console.log("KAZANDIN!! Kağıt, taşı yener");
    humanScore++;
}
    else if (humanChoice == "kağıt" && comChoice == "kağıt") {
    comScore++;
    humanScore++;
    console.log("BERABERE!! kağıt-kağıt"); }

    else if (humanChoice == "kağıt" && comChoice == "makas") { 
    comScore++;
    console.log("KAYBETTİN!! Makas, kağıdı keser"); }

    else if (humanChoice == "makas" && comChoice == "makas") { 
    comScore++;
    humanScore++;
    console.log("BERABERE!! makas-makas");
    }
    else if (humanChoice == "makas" && comChoice == "taş") {
    comScore++;
    console.log("KAYBETTİN!! Taş, makası yener");
    }
        
    else if (humanChoice == "makas" && comChoice == "kağıt") {
    humanScore++;
    console.log("KAZANDIN!! Makas, kağıdı keser");
    }

}

function playGame() {
    while (humanScore + comScore < 5) {
       playRound(humanChoice, comChoice); 
    }
    console.log("Skor: " + humanScore + " - " + comScore);
    if (humanScore > comScore ) console.log ("Kazandın!");
    else if (humanScore < comScore ) console.log ("Kaybettin!");
    else console.log("BERABERE!");
}


console.log(playGame());