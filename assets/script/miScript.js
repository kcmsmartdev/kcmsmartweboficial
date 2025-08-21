const btnMenu = document.getElementById("btnMenu");
const mMenu = document.getElementById("mMenu");
const btnClose = document.getElementById("btnClose");

btnMenu.addEventListener("click", function(){
    mMenu.classList.remove("hidden");
    btnMenu.classList.toggle("hidden");
    btnClose.classList.remove("hidden");
});

btnClose.addEventListener("click", function(){
    mMenu.classList.toggle("hidden");
    btnMenu.classList.remove("hidden");
    btnClose.classList.toggle("hidden");
})