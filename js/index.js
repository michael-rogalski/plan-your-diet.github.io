document.addEventListener("DOMContentLoaded", 

function () {
    let prev = document.querySelector('.prevPicture');
    let next = document.querySelector('.nextPicture');
    let screens = document.querySelectorAll('.carousel_screen_element');
    let index = 0;

    screens[index].classList.add('visible');

    prev.addEventListener('click', function () {
        screens[index].classList.remove('visible');
        index -= 1;
        if (index < 0) {
            index = screens.length - 1;
        }
        screens[index].classList.add('visible');
    });

    next.addEventListener('click', function () {
        screens[index].classList.remove('visible');
        index += 1;
        if (index >= screens.length) {
            index = 0;
        }
        screens[index].classList.add('visible');
    });

});

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("carousel_screen_element");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }

//     slides[slideIndex - 1].style.display = "block";

//     setTimeout(showSlides, 3000); // Change image every 2 seconds
// }