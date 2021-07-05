const sortBtn = document.getElementById("sortBtn")
const twentyBtn = document.getElementById("twentyBtn")
const totalBtn = document.getElementById("totalBtn")
const englishBtn = document.getElementById("englishBtn")
const countryList = document.getElementById("countryList")


fetchCountry()

function fetchCountry() {
    fetch("https://restcountries.eu/rest/v2/region/europe")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0]);
        displayCountry(data)
    })
}

const displayCountry = (data) => {
    const countryList = document.getElementById("countryList");
    data.forEach((country) => {
            const countryItem = document.createElement('li')
            countryItem.innerHTML =  
            `
            <span>${country.name}</span><span>${country.population}</span>
            `
            countryList.appendChild(countryItem);
        })

}