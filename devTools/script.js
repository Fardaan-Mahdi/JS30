const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "100px";
}

//regular
console.log("hello");

//interpolated
const va = "😼";
console.log(`Hello my name is Fardaan ${va}`);

//style
console.log(
  "%cHello World",
  "font-size: 25px; color: red; background-color: floralwhite; text-shadow: 2px 2px 4px green"
);

//warning!!
// alert("Day-09")
console.warn("WARNING!!!");

//error
console.error("AWW SHIT!!!");

//info
console.info("I love to make 3-4 trips a year!!!");

//Testing
//console.assert(condition, to_do_if_false)
console.assert(p.classList.contains("ouch"), "That is wrong!");

//clearning
//console.clear();

//viewing DOM
console.log(p);
console.dir(p);

//grouping things
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
console.log(dogs);
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//counting
console.count("hello");
console.count("world");
console.count("world");

//timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
.then((data) => data.json())
console.timeEnd("fetching data");

//Table plot
console.table(dogs)