const provieUrl = '/data/provincies,json';
let total = 0;
let largest = 0;
let largestIndex = 0;

fetch(provincieUrl)
.then(myData => myData.json())
.then(jsonData => showData(jsonData));
if(document.querySelector('.result')){

    document.querySelector('.result').innerHTML = `<h4>Alle provincies</h4>`;

    document.querySelector('.result').innerHTML += `<ul class="ul-data"></ul>`;
    document.querySelector('.result').innerHTML += `<h4>Totaal inwoners</h4>`;
    document.querySelector('.result').innerHTML += `<p class="p-data"></p>`;
    
    document.querySelector('.result').innerHTML += `<h4>grootste provincie</h4>`
    document.querySelector('.result').innerHTML += `<p class="p-data"></p>`
}

function showDataArray(data) {
    //array in de console
    console.log(data);

    //for loop gaat door heel de array
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(`${data[i].province} heeft ${data[i].population} inwoners`);
        // data in html
        document.querySelector('.ul-data').innerHTML += `<li>${data[i].province} heeft ${data[i].population} inwoners</li>`;

        //bereken
        total += data[i].population;

        //check
        if (data[i].surface > largest) {
            largest = data[i].surface;
            largestIndex = i;
        }
    }
// totale 
console.log("totaal:" + total);
//data zetten in HTML
document.querySelectorAll('.p-data')[0].innerHTML = `Nederland telt ${total} inwoners`;

//print 
console.log(data[largestIndex].province + " : " + largest);
//data in html
document.querySelectorAll('.p-data')[1].innerHTML = data[largestIndex].province;
}