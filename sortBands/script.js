const addItem=document.querySelector('.entry');
const itemsList=document.querySelector('.local');
const checkBox=document.querySelector('input');
const sort=document.querySelector('#clear')
var items = [];



function giveEntry(plates=[],platesList){
    platesList.innerHTML=plates.map((plate,i)=>{
        return `
            <li>☠ ${plate}</li>
        `;
    }).join('');
}

function addfood(e){
    e.preventDefault();
    const name=(document.querySelector('.entry-input')).value;
    if(name==''){
        return;
    }
    items.push(`${name}`);
    giveEntry(items, itemsList);
    this.reset();
    localStorage.setItem("items",JSON.stringify(items));
}


addItem.addEventListener('submit', addfood);

sort.addEventListener("click",()=>{

    function strip(bandName) {
        return bandName.replace(/^(a |the |an )/i, '').trim();
      }
      
      const sortedBands = items.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
      
      itemsList.innerHTML =
        sortedBands
          .map(band => `<li>${band}</li>`)
          .join('');
      
    
});

giveEntry(items, itemsList);
