window.function = function (age, city, location, interest, language, week, all) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

age = age.value ?? "";
city = city.value ?? "";
location = location.value ?? "";
interest = interest.value ?? "";
language = language.value ?? "";
week = week.value ?? "";
all = all.value ?? "";
  
const age_arr = age.split(", ");
const city_arr = city.split(", ");
const loc_arr = location.split(", ");
const int_arr = interest.split(", ");
const lan_arr = language.split(", ");
const week_arr = week.split(", ");
const all_arr = all.split(", ");

//var arrays = [age_arr,city_arr,loc_arr,int_arr,lan_arr,week_arr];
  
//var res1 = arrays.reduce((p,c) => p.filter(e => c.includes(e)));

//var res2 = res1.join(', ');

let res_arr = [];
  
for(let i of all_arr){
  if(age_arr.includes(i) && city_arr.includes(i) && loc_arr.includes(i) && int_arr.includes(i) && lan_arr.includes(i) && week_arr.includes(i)){
    res_arr.push(i)
  }
}
return res_arr.join(",");

}
