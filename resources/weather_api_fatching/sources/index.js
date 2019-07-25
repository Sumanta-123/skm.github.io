var cityName = [{"country":"IN","name":"Thang","lat":"34.9274","lng":"76.79336"},{"country":"IN","name":"Pūnch","lat":"33.77033","lng":"74.09254"},
{"country":"IN","name":"Keelakarai","lat":"9.23183","lng":"78.78545"},
{"country":"IN","name":"Zunheboto","lat":"25.96667","lng":"94.51667"},
{"country":"IN","name":"Ziro","lat":"27.59497","lng":"93.83854"},
{"country":"IN","name":"Zamānia","lat":"25.41961","lng":"83.55786"},
{"country":"IN","name":"Zaidpur","lat":"26.83093","lng":"81.32929"},
{"country":"IN","name":"Zahirābād","lat":"17.68138","lng":"77.60743"},
{"country":"IN","name":"Zafarābād","lat":"25.69867","lng":"82.73354"},
{"country":"IN","name":"Yol","lat":"32.16423","lng":"76.19622"},
{"country":"IN","name":"Yeola","lat":"20.0424","lng":"74.48944"},
{"country":"IN","name":"Yellāpur","lat":"14.9637","lng":"74.70929"},
{"country":"IN","name":"Yellandu","lat":"17.59064","lng":"80.32146"},
{"country":"IN","name":"Yelbarga","lat":"15.61545","lng":"76.01184"},
{"country":"IN","name":"Yelandūr","lat":"12.04629","lng":"77.03034"},
{"country":"IN","name":"Yelahanka","lat":"13.10073","lng":"77.59632"},
{"country":"IN","name":"Yavatmāl","lat":"20.39324","lng":"78.13201"},
{"country":"IN","name":"Yāval","lat":"21.16772","lng":"75.69762"},
{"country":"IN","name":"Yārāda","lat":"17.65872","lng":"83.27419"},
{"country":"IN","name":"Yanam","lat":"16.73308","lng":"82.21364"},
{"country":"IN","name":"Yamunānagar","lat":"30.12796","lng":"77.28371"},
{"country":"IN","name":"Yairipok","lat":"24.67792","lng":"94.04767"},
{"country":"IN","name":"Yādgīr","lat":"16.77007","lng":"77.13755"},
{"country":"IN","name":"Wokha","lat":"26.09717","lng":"94.25817"},
{"country":"IN","name":"Wer","lat":"27.0186","lng":"77.17636"},
{"country":"IN","name":"Wellington","lat":"11.36552","lng":"76.78442"},
{"country":"IN","name":"Wazīrganj","lat":"28.21145","lng":"79.05665"},
{"country":"IN","name":"Wāshīm","lat":"20.11128","lng":"77.133"},
{"country":"IN","name":"Warud","lat":"21.47101","lng":"78.26965"},
{"country":"IN","name":"Warora","lat":"20.22885","lng":"79.00277"},
{"country":"IN","name":"Wāris Alīganj","lat":"25.0172","lng":"85.64047"},
{"country":"IN","name":"Wardha","lat":"20.73933","lng":"78.59784"},
{"country":"IN","name":"Wārāseonī","lat":"21.76184","lng":"80.04301"},
{"country":"IN","name":"Warangal","lat":"18","lng":"79.58333"},
{"country":"IN","name":"Wanparti","lat":"16.36738","lng":"78.06889"},
{"country":"IN","name":"Wānkāner","lat":"22.61198","lng":"70.94379"},
{"country":"IN","name":"Wani","lat":"20.05507","lng":"78.95313"},
{"country":"IN","name":"Wāngjing","lat":"24.58921","lng":"94.06386"},
{"country":"IN","name":"Walajapet","lat":"12.9251","lng":"79.36626"},
{"country":"IN","name":"Wallajahbad","lat":"12.79041","lng":"79.82358"},
{"country":"IN","name":"Wai","lat":"17.95276","lng":"73.89058"},
{"country":"IN","name":"Waghāi","lat":"20.77048","lng":"73.50074"},
{"country":"IN","name":"Wādi","lat":"17.05183","lng":"76.99048"},
{"country":"IN","name":"Wadgaon","lat":"18.7392","lng":"73.63945"},
{"country":"IN","name":"Vyāra","lat":"21.11079","lng":"73.39365"},
{"country":"IN","name":"Vuyyūru","lat":"16.36307","lng":"80.84406"},
{"country":"IN","name":"Vrindāvan","lat":"27.58105","lng":"77.69662"},
{"country":"IN","name":"Vriddhāchalam","lat":"11.5183","lng":"79.32411"},
{"country":"IN","name":"Vizianagaram","lat":"18.11692","lng":"83.41148"},
{"country":"IN","name":"Vite","lat":"17.27343","lng":"74.53792"},
{"country":"IN","name":"Visnagar","lat":"23.69855","lng":"72.5521"},
{"country":"IN","name":"Visakhapatnam","lat":"17.68009","lng":"83.20161"}];
function getWeatherData(lat,lon){  
var result = null;
console.log(lat);
console.log(lon);
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat='
           +lat+'&lon='+lon
          ); //Here I have simply appended latitude and longitude to the string
  xhr.send()
  xhr.onload = function (){
    if(xhr.status == 200){
      result = xhr.response;
      printWeatherData(result);
    }
    else{
      console.log("Error Code is:" + xhr.status);
    }
  } 
} 
// This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printWeatherData = function (input){
  var body = document.querySelector('body');
  var display = document.createElement('p');
  var span= document.createElement('p');
    if(input == null){ // checking if the input is null
    display.textContent = 'Error! No weather data received or invalid request!';
    //It will print an error if the input is null
  }
  else{   
    display.textContent = input;
    // console.log(input);
    // console.log(typeof(input));
    let receive = JSON.parse(input);
    // span.textContent = receive.main.temp;
    // console.log(receive);
    showData(receive);
    // weatherBackground();
  }
  body.append(display);
  // body.appendChild(span);
}
//Button and listener for the `click here to print the weather data!` button
let displayBtn = document.querySelector('#submit');
displayBtn.addEventListener('click',function(){
  let city_name = document.querySelector('#user-city').value;
  let lon='', lat='';
  for(let i=0;i<cityName.length;i++){
    // console.log(cityName);
    if(city_name==cityName[i].name){
      lon = cityName[i].lng;
      lat = cityName[i].lat;
      break;
    }
  }
  // console.log(lon);
  getWeatherData(lat,lon);
});
function showData(receive){
  // console.log('what showData');
  // console.log(receive);
  let parent = document.getElementById('temp-report');
  let body = document.createElement('div');
  parent.appendChild(body);
  body.setAttribute('class','weather-screen');
  // chld_elmnt_frst.setAttribute('class','temp');
  body.appendChild(document.createElement('p'))
  .innerHTML="Temperature :"+receive.main.temp+"<sup>0</sup> C";
  body.appendChild(document.createElement('p'))
  .innerHTML ="Min :"+ receive.main.temp_min+"<sup>0</sup> C";
  body.appendChild(document.createElement('p'))
  .innerHTML ="Max :" +receive.main.temp_max+"<sup>0</sup> C";
  body.appendChild(document.createElement('p')
    ).textContent ="Humidity :" +receive.main.humidity+" % ";
  body.appendChild(document.createElement('p')
    ).textContent="Pressure :"+receive.main.pressure+" Mb";
    // weather description and cloudy, sunny report goes here
    let desp = document.getElementById('current-wthr-img');
    let wther_cndn = document.createElement('p');
    wther_cndn.setAttribute('id','set-weather');
  desp.appendChild(wther_cndn
    ).textContent=receive.weather[0].main;
  desp.appendChild(document.createElement('p')
    ).textContent=receive.weather[0].description;
  // wind of report scripting coding goes here
  let wind = document.getElementById('wind-report');
  wind.appendChild(document.createElement('p')
    ).textContent="Speed :"+receive.wind.speed+" Mph";
  wind.appendChild(document.createElement('p')
    ).innerHTML="Degree :"+receive.wind.deg+"<sup>0</sup>";
  var all_p_tag = document.querySelector('p');
  desiplay();
}

// hide box will display by calling below function
function desiplay(){
  let temp_box = document.getElementById('temp-div');
  let wind_box = document.getElementById('wind-div');
  let city_box = document.getElementById('city-div');
  let city_temp = document.getElementById('temp-report');
  let city_name =document.getElementById('current-wthr-img');
  let city_wind = document.getElementById('wind-report');
  let user_input = document.getElementById('user-city').value;
  let city_name_text = document.getElementById('city-name');
  temp_box.style.display='block';
  wind_box.style.display='block';
  city_box.style.display='block';
  city_wind.style.backgroundColor="violet";
  city_temp.style.backgroundColor="violet";
  city_name.style.backgroundColor="violet";
  city_name_text.innerHTML=user_input;
}
function weatherBackground(){
  let bg_change = document.getElementById('weather-page');
  let value = document.getElementById('set-weather').innerHTML;
  console.log(value);
  if(value=="Clouds"){
    console.log('what value');
    console.log(value);
    bg_change.src="images/raining.jpg";
  }
}