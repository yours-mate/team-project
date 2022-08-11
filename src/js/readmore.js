function ckick1() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var prodBtn = document.getElementById("prodBtn");

    if (dots.style.display === "inline") {
        dots.style.display = "inline";
        prodBtn.style.display = "inline";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        prodBtn.style.display = "none";
        more.style.display = "inline";
    }
}
function ckick2() {
    var dotscoffee = document.getElementById("dotscoffee");
    var morecoffee = document.getElementById("morecoffee");
    var coffeeBtn = document.getElementById("coffeeBtn");

    if (dotscoffee.style.display === "inline") {
        dotscoffee.style.display = "inline";
        coffeeBtn.style.display = "inline";
        morecoffee.style.display = "none";
    } else {
        dotscoffee.style.display = "none";
        coffeeBtn.style.display = "none";
        morecoffee.style.display = "inline";
    }
}
function ckick3() {
    var dotsmilk = document.getElementById("dotsmilk");
    var moremilk = document.getElementById("moremilk");
    var milkBtn = document.getElementById("milkBtn");

    if (dotsmilk.style.display === "inline") {
        dotsmilk.style.display = "inline";
        milkBtn.style.display = "inline";
        moremilk.style.display = "none";
    } else {
        dotsmilk.style.display = "none";
        milkBtn.style.display = "none";
        moremilk.style.display = "inline";
    }
}

