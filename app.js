const popSortBtn = document.getElementById("popSortBtn")
const densityBtn = document.getElementById("densityBtn")
const twentyBtn = document.getElementById("twentyBtn")
const englishBtn = document.getElementById("englishBtn")
const countryList = document.getElementById("countryList")
let countryData = []
fetchCountry()

function fetchCountry() {
    fetch("https://restcountries.eu/rest/v2/region/americas")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        displayCountry(data)
        // countryData.push(data)
        
        data.forEach((item) => {
            const newCountry = {
                name: item.name,
                population: item.population
            }
            countryData.push(newCountry);
        })
        console.log(countryData);
    })
}

const displayCountry = (data) => {
    const countryList = document.getElementById("countryList");
    data.forEach((country) => {
            const countryItem = document.createElement('li')
            countryItem.classList.add('country-item');
            countryItem.innerHTML =  
            `
                <span>${country.name}</span>
                <span> ${country.population}</span>
                <span> ${country.area == null ? "N/A" :
                (country.population / country.area).toFixed(2)}</span>
            `
            //Area == null ? return N/A
            countryList.appendChild(countryItem);
        })
}

const populationSort = () => {
    // console.log(countryData[0]);
}

popSortBtn.addEventListener("click", populationSort);


