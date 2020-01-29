
// Function for calling which recipe
var table = document.getElementById("mealTB");
if(table != null) {
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 1; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function() {
            tableText(this);
        };
    }
}

function tableText(tableCell){
    var list = document.getElementById("recipeList")
    list.innerHTML = "<li>" + tableCell.innerHTML + "</li>";
}


// Function for going to the home page
var home = document.getElementById("home");
home.onclick = function(){
    window.location = "http://benharr.com";
}