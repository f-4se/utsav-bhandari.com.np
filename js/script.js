document.getElementById("moreBtn").addEventListener("click", function () {
    let extraText = document.getElementById("extraText");
    if (extraText.classList.contains("hidden")) {
        extraText.classList.remove("hidden");
        this.textContent = "🔼";
    } else {
        extraText.classList.add("hidden");
        this.textContent = "🔽";
    }
});

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
}

setInterval(() => changeSlide(1), 3000);
