const table_body = document.querySelector(".table-body");
const search_button = document.querySelector(".search-button");
const form_control = document.querySelector(".form-control");

async function getCovidApi() {
    const request = await fetch("https://disease.sh/v3/covid-19/all");
    const json = await request.json();
    console.log(json)
    table_body.innerHTML = `
    <tr>
                <th scope="row">1</th>
                <td>All</td>
                <td>${json.population}</td>
                <td>${json.cases}</td>
                <td>${json.todayCases}</td>
                <td>${json.deaths}</td>
                <td>${json.todayDeaths}</td>
                <td>${json.recovered}</td>
                <td>${json.todayRecovered}</td>
                <td>${json.active}</td>
                <td>${json.critical}</td>
                <td>${json.tests}</td>
                
                
            </tr>
    `;

}
getCovidApi();
search_button.addEventListener('click', function () {
    getCountry();
})

async function getCountry() {
  const request = await fetch(`https://disease.sh/v3/covid-19/countries/${form_control.value}`);
  const data = await request.json();
  console.log(data);
  table_body.innerHTML = `
    <tr>
                <th scope="row">1</th>
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