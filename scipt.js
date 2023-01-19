const table_body = document.querySelector(".table-body");
const search_button = document.querySelector(".search-button");
const form_control = document.querySelector(".form-control");




// Function for TOTAL and ALL COUNTRIES data
function defaltOnLoad() {
  // Function to retrieve Total data information
  async function getAll() {
    const request = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await request.json();
    table_body.innerHTML = `
    <tr>       
        <td class="fw-bolder text-success table-warning">Total</td>
        <td class="table-warning fw-bold">${data.population}</td>
        <td class="table-warning fw-bold">${data.cases}</td>
        <td class="table-warning fw-bold">${data.todayCases}</td>
        <td class="table-warning fw-bold">${data.deaths}</td>
        <td class="table-warning fw-bold">${data.todayDeaths}</td>
        <td class="table-warning fw-bold">${data.recovered}</td>
        <td class="table-warning fw-bold">${data.todayRecovered}</td>
        <td class="table-warning fw-bold">${data.active}</td>
        <td class="table-warning fw-bold">${data.critical}</td>
        <td class="table-warning fw-bold">${data.tests}</td> 
    </tr>
    `;
  }
  // Call the getAll() function
  getAll();

  // Function to retrieve data country by country
  async function getCountries() {
    const request = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await request.json();
    for (let i = 0; i < data.length; i++) {
      table_body.innerHTML += `
    <tr>     
        <td>${data[i].country}</td>
        <td>${data[i].population}</td>
        <td>${data[i].cases}</td>
        <td>${data[i].todayCases}</td>
        <td>${data[i].deaths}</td>
        <td>${data[i].todayDeaths}</td>
        <td>${data[i].recovered}</td>
        <td>${data[i].todayRecovered}</td>
        <td>${data[i].active}</td>
        <td>${data[i].critical}</td>
        <td>${data[i].tests}</td>
    </tr>
    `;
    }
  }
  // Call the getCountries() function
  getCountries();
}
defaltOnLoad();







// Function for retrieving just one country
async function getSingleCountry() {
  const request = await fetch(`https://disease.sh/v3/covid-19/countries/${form_control.value}`);
  const data = await request.json();
  table_body.innerHTML = `
    <tr>       
        <td>${data.country}</td>
        <td>${data.population}</td>
        <td>${data.cases}</td>
        <td>${data.todayCases}</td>
        <td>${data.deaths}</td>
        <td>${data.todayDeaths}</td>
        <td>${data.recovered}</td>
        <td>${data.todayRecovered}</td>
        <td>${data.active}</td>
        <td>${data.critical}</td>
        <td>${data.tests}</td> 
    </tr>
    `;
}

// Add Event listener to the search button

search_button.addEventListener('click', function () {
    getSingleCountry();
})