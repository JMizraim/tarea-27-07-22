const d = document;

d.addEventListener("DOMContentLoaded", () => {
    const $myButton = d.getElementById("myButton");

    $myButton.addEventListener("click", () => {
        alert("Hola");
    });

});