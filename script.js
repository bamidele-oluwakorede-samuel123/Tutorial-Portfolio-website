/* ====== Active Navigation Link ====== */
const sections = 
document.querySelectorAll(section);
const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageY0ffsetTop >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ====== Scroll to Top Button ======*/
const scrollBtn =
document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (this.document.body.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const link =
document.querySelectorAll(".nav-link");
const currentPage =
location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

console.log("Tutorial Portfolio loaded");



    
