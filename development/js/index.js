document.addEventListener("DOMContentLoaded",function(){
    let prev = document.querySelector('.prevPicture');
    let next = document.querySelector('.nextPicture');
    let screens = document.querySelectorAll('.carousel_screen_element');
    let index = 0;

    screens[index].classList.add('visible');

    prev.addEventListener('click',function(){
        screens[index].classList.remove('visible');
        index -= 1;
        if (index<0){
            index=screens.length - 1;
        }
        screens[index].classList.add('visible');
    });

    next.addEventListener('click',function(){
        screens[index].classList.remove('visible');
        index += 1;
        if (index >= screens.length){
            index=0;
        }
        screens[index].classList.add('visible');
    });
});
