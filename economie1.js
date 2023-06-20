// prompt
const provincePrompt = prompt("Provincle:");

//check province
if (provincePrompt == "Utrecht" || provincePrompt == "utrecht") {
    //return data in html
    document.querySelector('.result').innerHTML - "De hoofdstad van Utrecht is Utrecht";
} 

else if (provincePrompt == "Noord-Holland" || provincePrompt == "noord-holland") {
    //return data in html
    document.querySelector('.result').innerHTML = "De hoofdstad van Noord-Holland is Haarlem";
} 

else if (provincePrompt == "Zuld-Holland" || provincePrompt == "zuid-holland") {
    //return data in html
    document.querySelector(".result").innerHTML = "De hoofdstad van Zuid-Holland is Den Haag";
}