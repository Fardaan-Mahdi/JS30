const element=document.querySelectorAll('a');
console.log(element)

const highlight=document.createElement('span');
highlight.classList.add('highlight');
console.log(highlight.classList);
document.body.appendChild(highlight);



function kaam(){
    const loc=this.getBoundingClientRect();
    console.log(loc);
    const coords = {
        width: loc.width,
        height: loc.height,
        top: loc.top + window.scrollY,
        left: loc.left + window.scrollX
      };
      highlight.style.width=`${coords.width}px`;
      highlight.style.height=`${coords.height}px`;
      highlight.style.transform=`translate(${coords.left}px, ${coords.top}px)`;
}

element.forEach((a)=>{
    a.addEventListener('mouseenter',kaam);
})