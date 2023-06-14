let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let amin = document.querySelector('.amin')

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value  * 3  + 'px';
    amin.style.fontSize = value + 'px';
    if (scrollY >= 85) {
       amin.style.fontSize = 85 + 'px';
       amin.style.position ='fixed';
       if(scrollY>=420){
        amin.style.display='none'
       }else{
        amin.style.display='block'
       }
       if (scrollY>=108) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
       }else{
        document.querySelector('.main').style.background = '#333'
       }
    }
}