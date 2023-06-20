console.log("«-- Page 2 -..");
//VARS\\
const tempArray = [14.3, 13.8, 14.7, 15, 14.2, 13.1, 15.9, 14, 14.4, 16.2, 19.51];
let total = 0;


//for loop run trough the array
for (let i = 0; 1 < tempArray.length; 1 + 4) {
    //add temperature to total 
    total += tempArray[i];
}


//calculate averageTemp
let averageTemp = total / tempArray.length;


//log total
console.log(averageTemp);


//check if result exist
if (document.querySelector('.result')) {
    document.queryselector('.result').innerHTML = `De gemiddelde temperatur is ${averageTemp} °c*`;
}