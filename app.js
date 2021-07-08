const popSortBtn = document.getElementById("popSortBtn")
const densityBtn = document.getElementById("densityBtn")
const twentyBtn = document.getElementById("twentyBtn")
const englishBtn = document.getElementById("englishBtn")
const countryList = document.getElementById("countryList")
let countryData = []

fetchCountry()

function fetchCountry() {
    fetch("https://restcountries.eu/rest/v2/region/europe")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        
        data.forEach((country) => {
            const newCountry = {
                name: country.name,
                population: country.population,
                area: country.area,
                density: country.population/country.area
            }
            displayCountry(data)
            pushData(newCountry)
        })
    })
}

const populationSort = () => {
    countryData.sort((a, b) => {
        return (a.population > b.population) ? -1 : 1;
    })
    displayCountry();
}

const densitySort = () => {
    countryData.sort((a, b) => {
        return (a.density > b.density) ? -1 : 1;
    })
    displayCountry();
}

const twentySort = () => {

}

const englishSort = () => {

}

const pushData = (object) => {
    countryData.push(object)
    // displayCountry()
}

const displayCountry = () => {

    countryList.innerHTML = "";
    countryData.forEach((country) => {
            const countryItem = document.createElement('li')
            countryItem.classList.add('country-item');
            countryItem.innerHTML =  
            `
                <span>${country.name}</span>
                <span> ${country.population}</span>
                <span> ${country.area == null ? "N/A" :
                (country.population / country.area).toFixed(0)}</span>
            `
            countryList.appendChild(countryItem);
        })
}

popSortBtn.addEventListener("click", populationSort);
densityBtn.addEventListener("click", densitySort);
// twentyBtn.addEventListener("click", twentySort);
// englishBtn.addEventListener("click", englishSort);


