document.addEventListener("DOMContentLoaded", () => {

    // Carrega o header
    fetch("/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Carrega o footer
    fetch("/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
