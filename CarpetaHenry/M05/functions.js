function addThree(x) {
    console.log(x + 3);
}

addThree(5);


// Three ways of writing a function

// 1
function addThree(x) {
    return x + 3;
};

//2
var addThree = function (x) {
    return x + 3;
};

//3 
var addThree = (x) => {
    return x + 3;
};