name = "Charlie";
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}
let avgResult= findAvg(3,6);
console.log("this is the average of the two provided numbers ==> " + avgResult);

function findAvg(a,b){
let answer = (a + b) / 2;
return answer;
}

let fruits = [
    "apples",
    "oranges",
    "bananas",
    "lemons",
];

function findFruit() {
    let favFruit = fruits[2];
    let worstFruit = fruits[3];
    console.log(fruits[0]);
    
    function printfavFruit() {
        console.log(favFruit);
    };

    printfavFruit();
    console.log(worstFruit);
};

findFruit();