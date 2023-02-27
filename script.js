const table_body = document.querySelector("#table-body");
const search = document.getElementById('search');

// Create a function for the world total row
function tableBody(data) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.classList.add("fw-bolder", "text-success", "table-warning")
  td1.innerText = "World Total";
  tr.appendChild(td1);
  let td2 = document.createElement("td");
  td2.classList.add("table-warning", "fw-bold");
  td2.innerText = data.population;
  tr.appendChild(td2);
  let td3 = document.createElement("td");
  td3.classList.add("table-warning", "fw-bold");
  td3.innerText = data.cases;
  tr.appendChild(td3);
  let td4 = document.createElement("td");
  td4.classList.add("table-warning", "fw-bold");
  td4.innerText = data.todayCases;
  tr.appendChild(td4);
  let td5 = document.createElement("td");
  td5.classList.add("table-warning", "fw-bold");
  td5.innerText = data.deaths;
  tr.appendChild(td5);
  let td6 = document.createElement("td");
  td6.classList.add("table-warning", "fw-bold");
  td6.innerText = data.todayDeaths;
  tr.appendChild(td6);
  let td7 = document.createElement("td");
  td7.classList.add("table-warning", "fw-bold");
  td7.innerText = data.recovered;
  tr.appendChild(td7);
  let td8 = document.createElement("td");
  td8.classList.add("table-warning", "fw-bold");
  td8.innerText = data.todayRecovered;
  tr.appendChild(td8);
  let td9 = document.createElement("td");
  td9.classList.add("table-warning", "fw-bold");
  td9.innerText = data.active;
  tr.appendChild(td9);
  let td10 = document.createElement("td");
  td10.classList.add("table-warning", "fw-bold");
  td10.innerText = data.critical;
  tr.appendChild(td10);
  let td11 = document.createElement("td");
  td11.classList.add("table-warning", "fw-bold");
  td11.innerText = data.tests;
  tr.appendChild(td11);
  table_body.appendChild(tr);
}
  // Function to retrieve Total data information
  async function getAll() {
    const request = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await request.json();
    tableBody(data);
  }
  // Call the getAll() function
getAll();
  
// Create another function for the countries rows
function countriesData(countryData) {
  let tr = document.createElement("tr");
  tr.classList.add("country")
   let td1 = document.createElement("td");
   td1.innerText = countryData.country
   tr.appendChild(td1);
   let td2 = document.createElement("td");
   td2.innerText = countryData.population;
   tr.appendChild(td2);
   let td3 = document.createElement("td");
   td3.innerText = countryData.cases;
   tr.appendChild(td3);
   let td4 = document.createElement("td");
   td4.innerText = countryData.todayCases;
   tr.appendChild(td4);
   let td5 = document.createElement("td");
   td5.innerText = countryData.deaths;
   tr.appendChild(td5);
   let td6 = document.createElement("td");
   td6.innerText = countryData.todayDeaths;
   tr.appendChild(td6);
   let td7 = document.createElement("td");
   td7.innerText = countryData.recovered;
   tr.appendChild(td7);
   let td8 = document.createElement("td");
   td8.innerText = countryData.todayRecovered;
   tr.appendChild(td8);
   let td9 = document.createElement("td");
   td9.innerText = countryData.active;
   tr.appendChild(td9);
   let td10 = document.createElement("td");
   td10.innerText = countryData.critical;
   tr.appendChild(td10);
   let td11 = document.createElement("td");
   td11.innerText = countryData.tests;
   tr.appendChild(td11);
   table_body.appendChild(tr);
}

  // Function to retrieve data country by country
  async function getCountries() {
    const request = await fetch("https://disease.sh/v3/covid-19/countries");
    const countryData = await request.json();
    countryData.forEach(data => {
      countriesData(data);
   })
  }
  // Call the getCountries() function
getCountries();

// Filter/Search table for a country
search.addEventListener('keyup', function () {
  const filter = search.value.toLowerCase();
  const countryList = document.querySelectorAll('.country')
  countryList.forEach(item => {
    if (item.textContent.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none'
    }
  })
})


