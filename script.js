const key='9c4437886a2a05db986930452197fd40';
const search=(city) => {
   city=document.getElementById('city').value;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  fetch(url)
  .then(res => res.json())
  .then (data => console.log(data))
}


