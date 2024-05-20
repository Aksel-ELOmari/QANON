const rightbtn = document.querySelector('.Carousel-Lawyers-btns .btn-right');
const leftbtn = document.querySelector('.Carousel-Lawyers-btns .btn-left');
const CarouselLawyers = document.querySelector('.Carousel-Lawyers-inner');
rightbtn.onclick = CarouselEffect(rightbtn);
rightbtn.onclick = CarouselEffect(leftbtn);
function CarouselEffect(btn){
    if(btn ==rightbtn){
        btn.addEventListener('click',()=>{
            console.log('you clicked the right btn');
            CarouselLawyers.scrollLeft += 1000;
        });
    }else if(btn == leftbtn){
        btn.addEventListener('click',()=>{
            CarouselLawyers.scrollLeft -= 1000;
        });
    }
}

const navbar = document.querySelector('.navbar');
const Ul__nav = document.querySelector('.nav-ul');
const Ul_x_btn = document.querySelector('.nav-ul-x');
navbar.onclick = () => Nav__ul();
Ul_x_btn.onclick = () => Nav__ul();
function Nav__ul(){
    if(Ul__nav.style.display == 'none'){
        Ul__nav.style.display = 'flex';
    }else{
        Ul__nav.style.display ='none';
    }
}
