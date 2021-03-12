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
//console.log(window.path)
var uri = URI(window.path)
    .addSearch("limit", limit + 1)
    .addSearch("offset", (page-1) * limit)
    // add color if exist
    if(options.colors && options.colors.length > 0) {
        uri.addSearch("color[]", options.colors);
    }

    //console.log(uri)


    //FETCH
    return  fetch(uri)
    .then(function(response) {
        if(response.ok) {
            return response.json()
        } else {
            console.log("Error", response.status)
        }
    })
    //Working on the data
    .then(
        function(data){
            //console.log(data)

            //Primary color search
            // https://attacomsian.com/blog/javascript-array-search
            data.forEach(d=>d.isPrimary = primaryColors.indexOf(d.color) != -1)

            //last page
            var isLastPage = data.length <= limit;
            if (!isLastPage) {
                data.splice(limit, 1)
            }
           
            var jsonFiltered = {};
            jsonFiltered.ids = data.map(d => d.id)
            jsonFiltered.open = data.filter(d => d.disposition == "open")
            jsonFiltered.previousPage = page == 1 ? null : page - 1;
            jsonFiltered.nextPage = isLastPage ? null : page + 1
            jsonFiltered.closedPrimaryCount = data.filter(d => d.disposition =="closed" && d.isPrimary).length
            return jsonFiltered

        }
    ).catch(
        function(error){
            console.log("ERROR" + error)
        }
    )



}



export default retrieve;
