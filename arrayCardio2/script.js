const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

console.log({people})
console.log({comments})


// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function
const isAdults= people.some(person =>{
    const year=(new Date()).getFullYear();
    if(year-person.year >=19){
        return true;
    }
});
console.log({isAdults});


// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. 
const allAdults = people.every(person => ((new Date()).getFullYear())-person.year >=19);
console.log({allAdults});


// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// Find the comment with this ID
const index=comments.findIndex(comment => comment.id==823423);
console.log({index});

// delete the comment with the ID of 823423
comments.splice(index,1);
console.log(comments);