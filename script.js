let btn_dropdown = document.getElementById("btn_dropdown");
let dropdown = document.getElementById("dropdown");
let dropdown_content = document.getElementById("nav-content");

btn_dropdown.addEventListener('click', () => {
    if(btn_dropdown.innerText == "X") {
        dropdown_content.style.display = "none";
        btn_dropdown.innerHTML = "&#9776";
    } else {
        dropdown_content.style.display = "flex";
        btn_dropdown.innerHTML = "X";
    }
});