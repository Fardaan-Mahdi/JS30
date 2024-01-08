console.log("hello");
const timeNodes=[...document.querySelectorAll('[data-time]')]; //this is node list to convert to array we sread it 
console.log(timeNodes);
const seconds=timeNodes
                .map(node=>node.dataset.time)
                .map(timeCodes=>{
                    const [min,sec]=timeCodes.split(':')
                                             .map(parseFloat);
                    return min*60+sec;
                }).reduce((total,seconds)=> total+seconds);
console.log(`Total Seconds: ${seconds}`);

let secondsLeft=seconds;
const hours=Math.floor(secondsLeft/3600);
console.log(`Hours: ${hours}`)
secondsLeft=seconds%3600;
const minutes=Math.floor(secondsLeft/60);
console.log(`Minutes: ${minutes}`)
console.log(`Seconds: ${secondsLeft%60}`);