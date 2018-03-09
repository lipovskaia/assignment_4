/*eslint-env browser */
/*  //STEP 1
var movies  =  ["Black panter", "Titanic", "Scar Face", "Paddington", "Paddington2"]
window.document.write(movies[1] + "<br>");

//STEP 2
var movies = new Array(5);
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";

window.document.write(movies[0] + "<br>"); 
 

//STEP 3
var movies = new Array(5);
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
 window.document.write(movies.length + "<br>"); */

/*    //STEP 4
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
delete movies[0];
window.document.write(movies); */
//STEP 5
/* var i;
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";
for (i = 0; i < movies.length; i+= 1 ){
    window.document.write(movies[i] + "<br>");
}

//STEP 6
/*  var index;
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";
for (index in movies){
    window.document.write(movies[index] + "<br>");
}
 

//STEP 7
 var index;
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";
for (index in movies){
    window.document.write(movies.sort()[index] + "<br>");
}
*/
//STEP 8
/*
var movies = [], i;
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";
window.document.write("Movies I like: " + "<br>");
window.document.write("<br>");

for (i = 0; i < 7; i++ ){
    window.document.write( movies[i] + "<br>");
}
window.document.write("<br>");

var leastFavMovies = ["Batman", "Harry Potter", "Top Gun"] ;
window.document.write("Movies I don't like: " + "<br>");
window.document.write("<br>");
for (i = 0; i < 3; i++ ){
    
    window.document.write(leastFavMovies[i] + "<br>");
}

*/
 

//STEP 9
/*
var movies = [], i;
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";

var leastFavMovies = ["Batman", "Harry Potter", "Top Gun"] ;
movies = movies.concat(leastFavMovies);
for( i=0; i< 10; i++){
window.document.write(movies.sort().reverse()[i] + "<br>");
} */
//STEP 10
/*
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";

var leastFavMovies = ["Batman", "Harry Potter", "Top Gun"] ;
movies = movies.concat(leastFavMovies);

window.document.write(movies.sort().reverse().pop() );
*/

//STEP 11
/*
var movies = [];
movies[0] = "Black panter";
movies[1] = "Titanic";
movies[2] = "Scar Face";
movies[3] = "Paddington";
movies[4] = "Paddington 2";
movies[5] = "Paddington 3";
movies[6] = "Paddington 4";

var leastFavMovies = ["Batman", "Harry Potter", "Top Gun"] ;
movies = movies.concat(leastFavMovies);

window.document.write(movies.sort().reverse().shift() );
*/


//STEP 12


//STEP 13
//employeeid, name, title, department, and whether or not the employee is a current employee
/*
var employee1 = [];
employee1["id"] = 1;
employee1["name"] = "John";
employee1["title"] = "Manager";
employee1["department"] = "Entertainment";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id2"] = 2;
employee2["name2"] = "Mark";
employee2["title2"] = "Cashier";
employee2["department2"] = "Sales";
employee2["isCurrent2"] = false;
 
var employees = [];
employees = Object.assign([],employee1, employee2 );

window.document.write(employees[Object.keys(employees)[6]]);
*/


//STEP 14
  var employee1 = [];
employee1["id"] = 1;
employee1["name"] = "John";
employee1["title"] = "Manager";
employee1["department"] = "Entertainment";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id2"] = 2;
employee2["name2"] = "Mark";
employee2["title2"] = "Cashier";
employee2["department2"] = "Sales";
employee2["isCurrent2"] = false;
 
var employees = [];
employees = Object.assign([],employee1, employee2 );



for ( var names in employees ){
    names = employees["name"] + " " +  employees["name2"];
    }
window.document.write(names);

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20