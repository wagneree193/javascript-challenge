// from data.js
var tableData = data;
// console.log the sighting data from the tableData variable
console.log(tableData);
//  get a reference to the table and body- in the HTML it is tbody
var $tbody = d3.select("tbody");
// set references for the table columns
// call the button filter-button bc that is what it is called in the html document
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape")
// set the columns for the table
var columns = ["datetime", "city", "state", "country","shape", "durationMinutes", "comments"]


// input data into the HTML code using arrow
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append ("td").text(ufoSightings[column]))
    });
}

addData(tableData);
// rename to app.js so it will link to the html file
// also need to rename the data.js file

// make an event listener for the button; set up filter for date and city 

button.on("click", () =>{
    // prevent the page from refreshing
    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
// use toLowerCase because the city names in the data are lowercase but users might put proper capitalization in their search  
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    // adding filters for state country and shape
    var inputState = inputFieldState.property("value").toLowerCase().trim();
    var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    var inputShape = inputFieldShape.property("value").toLowerCase().trim();
// use arrow to filter 
    var filterCity = tableData.filter(tableData=>tableData.city === inputCity);
    
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    var filterState = tableData.filter(tableData=>tableData.state === inputState);
    var filterCountry = tableData.filter(tableData=>tableData.country === inputCountry);
    var filterShape = tableData.filter(tableData=>tableData.shape === inputShape);
    
// clear rows in the table
    $tbody.html("");

    let response = {
        filterDate,
        filterCity,
        filterState,
        filterCountry,
        filterShape
    }


    if(response.filterDate.length !== 0 && response.filterCity.length !==0 && response.filterState.length !==0 && response.filterCountry.length !==0 && response.filterShape.length !==0 )  {
        addData(filterDate);
       
    }
    // if (response.filterCity.length !==0) {
    //     addData(filterCity);
    // }

    // if (response.filterState.length !==0) {
    //     addData(filterState);
    // }

    // if (response.filterCountry.length !==0) {
    //     addData(filterCountry);
    // }
    // if (response.filterShape.length !==0) {
    //     addData(filterShape);
    // }

    // else if (response.filterCity.length !==0) {
    //     addData(filterCity);
    // }

    // else if (response.filterState.length !==0) {
    //     addData(filterState);
    // }

    // else if (response.filterCountry.length !==0) {
    //     addData(filterCountry);
    // }
    // else if (response.filterShape.length !==0) {
    //     addData(filterShape);
    // }

    // add a comment to denote no sightings
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here... Yet...");
        }
})
