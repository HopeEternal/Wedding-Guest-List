
 /* To Do List
 
   1. Constructor to Make new Guest Object
     - Includes name, diet preferences, 
   2. Insert guest class into the guestCont using HTML
   3. Add Objects to the guestCont
   4. Total guests and add to totalNumGuest ID
*/

var guestList = [];
var avgAge = 0;
var ageDisp = 0;
var dietResList = [];

var Guest = function (name, age, diet) {
    this.name = name;
    this.age = age;
    this.diet = diet;
}

var mrChai = new Guest('Syn Nyan', 62, 'None');
var mrsChai = new Guest('Sau Mooi Yap', 60, 'None');
var chloe = new Guest('Chloe', 21, 'Vegetarian');
var weiSynn = new Guest('Wei Synn', 24, 'None?');
var michael = new Guest('Michael', 24, 'Only eats pizza');
var ryan = new Guest('Ryan Toyz', 24, 'Vegetarian');
var hannah = new Guest('Hannah', 25, 'Vegetarian');
var dan = new Guest('Canadian Dan', 28, 'None');
var jen = new Guest('Jen', 27, 'Dislikes Mushrooms');
var cayden = new Guest('Cayden', 17, 'None');
var papa = new Guest('Papa Spud', 17, 'None?');
var adrian = new Guest('Adrian', 25, 'None');
var arin = new Guest('Arin', 23, 'None');
var cassie = new Guest('Cassie', 31, 'None');


guestList.push(mrChai, mrsChai, chloe, weiSynn, michael, ryan, hannah, dan, jen, cayden, papa, arin, cassie);



//Insert HTML into the DOM
for (var i = 0; i < guestList.length; i++) {

  var html = '<div class="guest"><p id="name"><i class="fas fa-user"></i> ' + guestList[i].name + ' | ' + guestList[i].age + ' | ' + guestList[i].diet + '</p></div>';

  var guests = document.querySelector(".guestCont");

  guests.insertAdjacentHTML('beforebegin', html);
  
  //Average Age Calculation
  function ageCalc(e) {
    avgAge += guestList[e].age;
  }  

  ageCalc(i);

  //Diet Restriction Compilation

  function dietRes(x) {
    if (guestList[x].diet === 'None' || guestList[x].diet === 'None?') {
      console.log('No');
    }
    else {
      dietResList.push(' ' + guestList[x].diet);
    }
    
  }  

  dietRes(i);

}

function finalAge() {
  ageDisp = Math.round(avgAge / guestList.length);
}

finalAge()
 


        //Replace the Placeholder text with actual data
        /*newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));*/

//Display Totals
        
document.getElementById("totalNumGuest").innerHTML = guestList.length;
document.getElementById("guestAgeAvg").innerHTML = ageDisp;
document.getElementById("dietRestList").innerHTML = dietResList;

