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
    console.log("Option detected:", options)

// Variable that needed to be declared such as limit
    var limit = 10
    

return
}



export default retrieve;
