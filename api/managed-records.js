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
    var page = options.page || 1
    //console.log("Option detected:", options)

//URI
console.log(window.path)
var uri = URI(window.path)
    .addSearch("limit", limit+1)
    .addSearch("offset", (page-1) * limit)
    // add color if exist
    if(options.colors && options.colors.length > 0) {
        uri.addSearch("color[]", options.colors);
    }

    console.log(uri)


    //FETCH
    fetch(uri)
    .then(function(response) {
        if(response.ok) {
            return response.json()
        } else {
            console.log("Error", response.status)
        }
    })
    //Working on the record
    .then(
        function(data){
            console.log(data)
        }
    )


return
}



export default retrieve;
