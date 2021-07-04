const sortBtn = document.getElementById("sortBtn")
const twentyBtn = document.getElementById("twentyBtn")
const totalBtn = document.getElementById("totalBtn")
const englishBtn = document.getElementById("englishBtn")
const dataList = document.getElementById("dataList")

fetch("https://restcountries.eu/rest/v2/region/Asia")
    .then(response => response.json())
    .then(data => console.log(data));