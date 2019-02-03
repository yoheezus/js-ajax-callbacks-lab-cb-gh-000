function displayError() {
    console.log("error")
}

function searchRepositories() {
    const searchTerm = $("#searchTerms").val()
    console.log(searchTerm)
    const resp = $.get(`https://api.github.com/search/repositories?q=${searchTerm}`, data => {
        console.log(data)
        $("#results").html(renderSearchResults(data))
        // $("#results").html("Hello Alyx")
    }).fail(error => {
        displayError()
    })
}

var renderSearchResults = (data) => {
    data.items.map(result => console.log(result))
}
// function renderSearchResults(data) {
//     console.log("Search ResultSS")
//     // data.items.map(result => renderSearchResult(result))
//     data.items.map(result => {"Hello Alyx"})
// }

var renderSearchResult = (result) => {
    console.log(result.name)
    return `<div>
                ${result.name}
            </div>`
   //  return (`
   //   <div>
   //     <h2><a href="${result.html_url}">${result.name}</a></h2>
   //     <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
   //     <p>${result.description}</p>
   //   </div>
   //   <hr>
   // `)
}

$(document).ready(function (){

});
