const update_bt = document.querySelector(".update-btn");
update_bt.addEventListener('click', function () {
    console.log("Hello world")
})



async function getApiData() {
    const apiRequest = await fetch("http://localhost/timeseries/confirmed");
    const jsonData = await apiRequest.json()
    console.log(jsonData)
}
getApiData()