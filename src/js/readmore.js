function readMore() {
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