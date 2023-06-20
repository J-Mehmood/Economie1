const objects ={
    username: '',
    experience_points: '',
    color: '',
}

//Log data from object
console.log(playrObj.username);
console.log(playrObj.experience_points);
console.log(playrObj.colorr);

//function to update the text 
function PlayerData() {
    document.querySelector('.user-data').innerHTML = `${objects.username} heeft ${objects.experience_points} ervaring`;
}

//function voor meer experience
function pointsIncreased() {
    objects.experience_points++;
    PlayerData();
}


//bekijk of de queryselector bestaat
if (document.querySelector('.result')) {
    document.querySelector('.result').innerHTML = `<p class=""user-data style="color:${objects.color}">${objects.username} heeft ${objects.experience_points} ervaringspunt</p>`;
    document.querySelector('.result').innerHTML += ` <button class="button"> Meer punten </button>`;
}

//bekijk button
if (document.querySelector('.button')) {
    document.querySelector('.button').addEventListener('click', pointsIncreased)
}