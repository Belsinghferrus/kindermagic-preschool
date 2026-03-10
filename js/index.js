
// Program Card Flip
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.program-inner').classList.toggle('rotate');
    });
});







// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;
        const answer = item.querySelector(".faq-answer");
        const icon = button.querySelector(".faq-icon");

        document.querySelectorAll(".faq-answer").forEach(a => {
            if (a !== answer) a.classList.add("hidden");
        });

        document.querySelectorAll(".faq-icon").forEach(i => {
            if (i !== icon) i.textContent = "+";
        });

        answer.classList.toggle("hidden");
        icon.textContent = answer.classList.contains("hidden") ? "+" : "−";

    });

});




// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});