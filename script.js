const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

// Menu Hamburger
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        menuBtn.textContent = "✕";
    }else{
        menuBtn.textContent = "☰";
    }
});

// Tutup menu setelah klik link
document.querySelectorAll(".menu a").forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("show");
        menuBtn.textContent="☰";
    });
});

// FAQ
document.querySelectorAll(".question").forEach(btn=>{

    btn.addEventListener("click",()=>{

        const answer = btn.nextElementSibling;

        answer.classList.toggle("show");

    });

});

// Navbar Shadow
window.addEventListener("scroll",()=>{

    if(window.scrollY>10){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});