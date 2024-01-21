const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments nécessaires
    const banner = document.getElementById("banner");
    const bannerImg = document.querySelector(".banner-img");
    const dotsContainer = document.querySelector(".dots");

    console.log("Banner Element:", banner);
    console.log("Banner Image Element:", bannerImg);
    console.log("Dots Container Element:", dotsContainer);

    // Point pour chaque slide
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", function() {
            currentSlide = i;
            showSlide();
        });
        dotsContainer.appendChild(dot);
    }

    console.log("Dots:", document.querySelectorAll(".dot"));

    // Valeur initiale de la slide
    let currentSlide = 0;

    // Fonction pour afficher la slide actuelle
    function showSlide() {
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        // Image & tagline mis à jour
        bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
        document.querySelector("#banner p").innerHTML = slides[currentSlide].tagLine;

        // Status des "dots" mis à jour
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("dot_selected");
            } else {
                dot.classList.remove("dot_selected");
            }
        });
    }

    //Fonction pour aller à la Slide suivante & précedente
    function nextSlide() {
        currentSlide++;
        showSlide();
    }

    function prevSlide() {
        currentSlide--;
        showSlide();
    }

    // Attacher les flèches au extremités de la bannière
    document.querySelector(".arrow_left").addEventListener("click", function() {
        console.log("Previous Slide Button Clicked");
        prevSlide();
    });

    document.querySelector(".arrow_right").addEventListener("click", function() {
        console.log("Next Slide Button Clicked");
        nextSlide();
    });

    // Pour afficher la slide
    showSlide();

    // Changement de slide automatique (en ms)
    setInterval(function() {
        console.log("Automatic Slide Change");
        nextSlide();
    }, 5000);
});