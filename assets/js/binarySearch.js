// VARIABLES 
//============================================================================================
var count = 0;
var numArray = [2, 6, 3, 9, 1, 0, 7, 5, 8, 4];
var searchNum = 0;
var sortedArray = [];


// FUNCTIONS
//============================================================================================
function countNums() {
    for (let i = 0; i < numArray.length; i++) {
        count++
    };
    console.log("There are " + count + " total numbers in the array.");
};

function simpleSearch() {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === searchNum) {
            console.log("simpleSearch found " + searchNum + " at index " + numArray.indexOf(searchNum));
        }
    };
};

function sort() {
    // for (let i = 0; i < numArray.length; i++) {
    //     if (numArray[i])
    // }
    sortedArray.push(numArray.sort());
    console.log("sorted array = " + sortedArray);
}

function binarySearch() {
    sort();

}

// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        countNums();
        simpleSearch();
        // sort();
        binarySearch();
    })
});