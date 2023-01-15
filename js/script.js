const update_btn = document.querySelector(".update-btn");
const countryName = document.querySelector(".enter-country-name");
const activeCase = document.querySelector(".active-case");
const confirmCase = document.querySelector(".confirm-case");
const death = document.querySelector(".death");
const recovery = document.querySelector(".recovery");
const lastUpdate = document.querySelector(".last-update");

update_btn.addEventListener('click', getApiData());


async function getApiData() {
  const apiUrl = `https://api.covid19api.com/total/country/${countryName.value}`;
  const apiRequest = await fetch(apiUrl);
  const jsonData = await apiRequest.json();
  const updateItem = jsonData.length;
  const lastUpdateItem = updateItem - 1;
  const updateToReturn = jsonData[lastUpdateItem];
  console.log(updateToReturn.Active);
}
