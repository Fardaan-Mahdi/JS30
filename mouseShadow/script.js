const container=document.querySelector('.container');
const text=document.querySelector('.hero');

function shadow(e){
    const width=container.offsetWidth;
    const height=container.offsetHeight;
    const walk=500; //500px
    // or const {offsetWidth : width, offsetHeight: height}=container
    let x=e.offsetX;
    let y=e.offsetY;
    console.log(this,e.target);
    if(e.target!=this){
        x+=e.target.offsetLeft;
        y+=e.target.offsetTop;
    }
    const xWalk=(x/width * walk)-(walk/2); //walk/2 to make range from -50 to 50
    const yWalk=(y/height * walk)-(walk/2);
    console.log(xWalk,yWalk);
    text.style.textShadow=`${xWalk}px ${yWalk}px 1px lightcoral,
                           ${xWalk*-1}px ${yWalk}px 1px green,
                           ${xWalk}px ${yWalk*-1}px 1px blue,
                           ${xWalk*-1}px ${yWalk*-1}px 1px yellow`;
}

container.addEventListener('mousemove',shadow);