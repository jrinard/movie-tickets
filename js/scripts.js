//
//

function Selection(movie, age, time, genre) {
    this.movie = movie;
    this.age = age;
    this.time = time;
}

function MovieInfo(movieName, genre) {
  this.movieName = movieName;
  this.genre = genre;
}

var godfatherMovie = new MovieInfo("The Godfather", "oldies");
var lotrMovie = new MovieInfo("Lord of the Rings", "oldies");
var jackMovie = new MovieInfo("Jack Reacher", "new");
var jamesBondMovie = new MovieInfo("James Bond", "new");

// function
//   if (MovieInfo.movieName === "")


Selection.prototype.price = function() { // make prototype
    var price = 0;
    if (this.movie === "godfatherMovie") {
      price += 8;
    } else if (this.movie === "lotrMovie"){
      price += 8;
    } else if (this.movie === "jamesBondMovie"){
      price += 10;
    } else if (this.movie === "jackMovie"){
      price += 10;
    }
    if (this.age <= 12){
      price *= .5;
    } else if (this.age > 64){
      price *= .5;
    }
    if (this.time === "5"){
      price -= 1;
    }
    console.log(price);
    return price;
};


// user interface

$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();

  var movieSelection = $("input:radio[name=movie]:checked").val();
  var ageSelection = $("#age").val();
  var timeSelection = $("#time").val();

  var newMovie = new Selection(movieSelection,ageSelection,timeSelection);

  var finalPrice = newMovie.price();

  $("#results").text("Your movie will cost $" +finalPrice);
  $("#results").show();



  }); // submit end
});// doc end
