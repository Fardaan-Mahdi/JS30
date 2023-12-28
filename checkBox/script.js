const checkboxes=document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    console.log(e);
    let inBetween=false;
    if (e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            if(checkbox===this || checkbox === lastChecked){
                inBetween =!inBetween;
                console.log('starting to check them in between');
            }
            if(inBetween){
                checkbox.checked=true;
            }
        });
    }
    lastChecked=this;
}

checkboxes.forEach(checkbox=> checkbox.addEventListener('click',handleCheck));