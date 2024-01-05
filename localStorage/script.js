const addItem=document.querySelector('.entry');
const itemsList=document.querySelector('.local');
const checkBox=document.querySelector('input');
const clear=document.querySelector('#clear')
var items = JSON.parse(localStorage.getItem('items')) || [];



function giveEntry(plates=[],platesList){
    platesList.innerHTML=plates.map((plate,i)=>{
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} >
                <label for="item${i}">${plate.name}</label>
            </li>
        `;
    }).join('');
}

function addfood(e){
    e.preventDefault();
    const name=(document.querySelector('.entry-input')).value;
    const item={
        name,
        done:false
    };
    items.push(item);
    giveEntry(items, itemsList);
    this.reset();
    localStorage.setItem("items",JSON.stringify(items));
}

function itemChecked(e){
    if(!e.target.matches("input"))return; //skip everything until its an input box
    const index=e.target.dataset.index;
    items[index].done=!items[index].done;
    localStorage.setItem("items",JSON.stringify(items));
    giveEntry(items, itemsList);
}

addItem.addEventListener('submit', addfood);
itemsList.addEventListener("click",itemChecked);
clear.addEventListener("click",()=>{
    itemsList.innerHTML='';
    localStorage.clear();
    items=[];
    giveEntry(items, itemsList);
    
});

giveEntry(items, itemsList);
