const nav=document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fix_nav(){
    if(window.scrollY>=topOfNav){
        document.body.style.paddingTop=nav.offsetTop+'px';
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fix_nav);