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
                area: country.area
            }
            displayCountry(data)
            pushData(newCountry)
        })
        console.log(countryData);
    })
}

//============================================================================

// async function fetchCountry() {
//     const response = await fetch("https://restcountries.eu/rest/v2/region/europe");
//     const data = await response.json();

    
//     data.forEach((country) => {
//         const newCountry = {
//             name: country.name,
//             population: country.population
//         }
//         displayCountry(data)
//         pushData(newCountry)
//     })
// }


//============================================================================

const populationSort = () => {
    let sortedPop = 
    countryData.sort((a, b) => {
        return (a.population > b.population) ? -1 : 1;
    })
    console.log(sortedPop);
    displayCountry();
    
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
                (country.population / country.area).toFixed(2)}</span>
            `
            countryList.appendChild(countryItem);
        })
}

popSortBtn.addEventListener("click", populationSort);


