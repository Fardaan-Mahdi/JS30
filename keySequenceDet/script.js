const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 1.5em; padding: 0.5em';

console.log("%cKEY SEQUENCE DETECTOR", style);

function findLargestStringLength(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxLength = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        const currentLength = arr[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

function containsPartialWord(word, stringArray) {
    for (const str of stringArray) {
        if (word.includes(str)) {
            return true;
        }
    }
    return false;
}

var pressed=[];
var secretCode=['faro','choocha','gogo'];
const output = findLargestStringLength(secretCode);

window.addEventListener("keydown",(e)=>{
    pressed.push(e.key);
    pressed.splice(-output-1,(pressed.length-output));
    console.log(pressed);
    if(containsPartialWord(pressed.join(''),secretCode)){
        console.log("%cSecret Code Matched !!!",'background-color: darkred;color: white;font-size: 1em; padding: 0.5em;');
        console.log(`Secret Code: ${secretCode}`);
        pressed=[];
    }
});