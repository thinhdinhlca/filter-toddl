window.function = function (age, city, location, interest, language, week, all) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

age = age.value ?? "";
city = city.value ?? "";
location = location.value ?? "";
interest = interest.value ?? "";
language = language.value ?? "":
week = week.value ?? "";
all = all.value ?? "";

age_arr = age.split(",");
city_arr = city.split(",");
loc_arr = location.split(",");
int_arr = interest.split(",");
lan_arr = language.split(",");
week_arr = week.split(",");
all_arr = all.split(",");
  
var arrays = [age_arr,city_arr,loc_arr,int_arr,lan_arr,week_arr,all_arr];
  
var res1 = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

var res2 = res1.join(', ');

return res2

}
