/*eslint-env browser*/
var list = "";
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var inventory = [
    [1533 ["Hat", 12, "14.99" ],],
    [1800 ["Socks", 15, "9.99" ],],
    [1500 ["Shirt", 10, "34.99" ],],            
    [1700 ["Jeans", 25, "99.99" ],],                
    [1700 ["Top", 20, "19.99" ],
    ], ];

var displayInventory = function() {
    "use strict";
     if (inventory.length > 0) {
        inventory.sort();
        list = inventory.join("\n");
    }
    //Populate the textarea with the list of tasks
    $("nventory_display").value = list;
};
