var navLinks = document.getElementById("navLinks");
function showmenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px"
}


// login

var card = document.getElementById("card");
function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}
function openLogin(){
    card.style.transform = "rotateY(0deg)";
}