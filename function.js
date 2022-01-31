window.function = function (age, city, location, interest, language, week) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

age = age.value ?? "";
city = city.value ?? "";
location = location.value ?? "";
interest = interest.value ?? "";
language = language.value ?? "";
week = week.value ?? "";

var arrays = [age_arr,city_arr,loc_arr,int_arr,lan_arr,week_arr];
  
var res1 = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

var res2 = res1.join(', ');

return res2;

}
