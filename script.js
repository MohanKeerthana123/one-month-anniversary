const password = "03052026"; // Change this later
const message =
`From "Hello"
to "Husband."

My favourite journey
has just begun. ❤️`;


document
.getElementById("unlockBtn")
.addEventListener("click", function(){

    const input =
    document.getElementById("password").value;

  if (input === password) {

    const login = document.getElementById("loginScreen");
    const main = document.getElementById("mainPage");
    const story = document.getElementById("storySection");
    const gallery = document.getElementById("gallerySection");

    login.classList.add("fadeOut");

    setTimeout(() => {

        login.style.display = "none";

        main.style.display = "flex";
        main.classList.add("show");

        typeWriter();

        // Show story
        // if (story) {
        //     story.style.display = "block";
        // }

        // Show gallery after 5 seconds
        setTimeout(() => {

            if (gallery) {
                gallery.style.display = "block";
            }

        }, 5000);

    }, 800);

} else {

    document.getElementById("error").innerHTML =
        "Wrong password ❤️";

}
});
function typeWriter(){

    let i = 0;

    const speed = 60;

    const target =
    document.getElementById("typingText");

    function typing(){

        if(i < message.length){

            target.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}
// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach((item)=>{

    observer.observe(item);

});
const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        const hero = document.getElementById("heroImage");

        if (hero) {

            document.getElementById("mainPage").style.display = "none";

            hero.style.display = "block";
        }

    });

}
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        const hero = document.getElementById("heroImage");
        const story = document.getElementById("storySection");

        hero.style.display = "none";

story.style.display = "flex";
        story.scrollIntoView({
            behavior: "smooth"
        });

    });

}
const memoriesBtn = document.getElementById("memoriesBtn");

if (memoriesBtn) {

    memoriesBtn.addEventListener("click", function () {

        const gallery = document.getElementById("gallerySection");

        gallery.style.display = "block";

        gallery.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}
const letterBtn = document.getElementById("letterBtn");

if (letterBtn) {

    letterBtn.addEventListener("click", function () {

        const letter = document.getElementById("letterSection");

        letter.style.display = "flex";

        letter.scrollIntoView({
            behavior: "smooth"
        });

    });

}
const letterCard = document.querySelector(".letter-card");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.8;

    if(letterCard.getBoundingClientRect().top < trigger){
        letterCard.classList.add("show");
   
    }

});
const finalBtn = document.getElementById("finalBtn");

if (finalBtn) {

    finalBtn.addEventListener("click", function () {

        const finalPage = document.getElementById("finalSection");

        finalPage.style.display = "flex";

        finalPage.scrollIntoView({
            behavior: "smooth"
        });

        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {

            confetti({
                particleCount: 5,
                angle: 60,
                spread: 60,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 60,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }

        })();

    });

}