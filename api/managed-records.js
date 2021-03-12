import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...

//Primary color
var primaryColors = ["red", "blue", "yellow"]

// Retrieve the following option, had to define as object in case if empty, it doesnt marked as "undefined"
const retrieve = (options={}) => {
//Run test will reveal its console log options (NOTE IF UNCOMMENTED WILL FAIL SPY LOG TEST)


// Variable that needed to be declared such as limit
    var limit = 10
    console.log("Option detected:", options)

//URI
console.log(window.path)
var uri = URI(window.path)
    .addSearch("limit", limit+1)
    // add color if exist
    if(options.colors && options.colors.length > 0) {
        uri.addSearch("color[]", options.colors);
    }
    //TODO .addSearch for offset (remember 10 per page)
    console.log(uri)


    //FETCH
fetch(uri)

//Console Log (from Fetch doc)
.then( response => response.json() ) 
.then( data => console.log("DATA", data))


return
}



export default retrieve;
