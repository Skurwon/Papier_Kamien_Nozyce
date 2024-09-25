// JavaScript source code
let Znak = function (name, number) {
    this.name = name;
    this.number = number;
    this.toString = function () { return this.name };
    this.podajZnak = function () { return this.number };
}

let kamien = new Znak("Kamien", 1)
let papier = new Znak("Papier", 2)
let nozyce = new Znak("Nozyce", 3)

var user
var naz

function Przypisanie(a) {
    if (a == 1) {
        user = 1
        naz = "Kamien"
    }
    else if (a == 2) {
        user = 2
        naz = "Papier"
    }
    else if (a == 3) {
        user = 3
        naz = "Nozyce"
    }
    console.log(user)
    let paragrafarg = document.getElementById("arg")
    paragrafarg.innerHTML = naz
}

let tabznak = [kamien, papier, nozyce]

function Losuj() {
    let losowyZnak = Math.floor(Math.random() * tabznak.length)

    let paragraflosuj = document.getElementById("losowanie")
    let paragrafWynik = document.getElementById("wynik")
    paragraflosuj.innerHTML = tabznak[losowyZnak].toString() + "<br>"
    var b = tabznak[losowyZnak].podajZnak()
    if (user == 1 && b == 2) {
        paragrafWynik.innerHTML = "Przegrales"
    }
    else if (user == 1 && b == 3) {
        paragrafWynik.innerHTML =  "Wygrales"
    }
    else if (user == 1 && b == 1) {
        paragrafWynik.innerHTML =  "Remis"
    }
    else if (user == 2 && b == 1) {
        paragrafWynik.innerHTML =  "Wygrales"
    }
    else if (user == 2 && b == 2) {
        paragrafWynik.innerHTML =  "Remis"
    }
    else if (user == 2 && b == 3) {
        paragrafWynik.innerHTML =  "Przegrales"
    }
    else if (user == 3 && b == 1) {
        paragrafWynik.innerHTML =  "Przegrales"
    }
    else if (user == 3 && b == 2) {
        paragrafWynik.innerHTML =  "Wygrales"
    }
    else if (user == 3 && b == 3) {
        paragrafWynik.innerHTML =  "Remis"
    }


}