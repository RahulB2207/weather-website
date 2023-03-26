let login = document.querySelector(".login-form");
document.querySelector("#user").onclick = () =>{
    login.classList.toggle("active");
    menu.classList.remove("active1");
}
let menu  = document.querySelector(".nav-bar");
document.querySelector("#menu").onclick = () =>{
    menu.classList.toggle("active1");
    login.classList.remove("active");
}
window.onscroll = () =>{
    login.classList.remove("active");
    menu.classList.remove("active1");
}
day_date = () =>{
    const d = new Date();
  let day = ["sunday","monday","tuesday","thursday","friday","saturday"];
  let month = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"];
  currday = day[d.getDay()];

  currdate = d.getDate();
  currmonth = month[d.getMonth()];
  curryear = d.getFullYear();
  let whole_date = `${currdate} ${currmonth} ${curryear}`;
  
  document.getElementById("day").innerText =currday ;
  document.getElementById("date").innerText = whole_date;
}

const oldcity = document.getElementById("city");
const cityname = document.getElementById("cityname");

const tempval = document.querySelector(".temp");

const tempstatus = document.querySelector(".status");

let tstatus = document.querySelector(".tstatus");




const getdata = async (event)=>{
    let cityVal = cityname.value;
   if(cityVal==""){
    oldcity.innerText = "Please enter the city Name";
   }
   else{
    try{
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f5e892c2e94aeda8a5c74c128a9d457f`;
    const response = await fetch(url);
    const data  =await response.json();

    const country = data.sys.country;
    oldcity.innerText = `${cityVal},${country}`
    const temp  = data.main.temp;
    tempval.innerHTML = `<span>${temp}&nbsp;&deg;C</span>`;
    let status = data.weather[0].main;
    tstatus.innerText = status;

    let min_temp = data.main.temp_min;
    document.querySelector("#min").innerHTML = `<span>min_temp : ${min_temp}&nbsp &deg;C</span>`
    let max_temp = data.main.temp_max;
    document.querySelector("#max").innerHTML = `<span>max_temp : ${max_temp}&nbsp &deg;C</span>`

    let hum = data.main.humidity;
    let pre = data.main.pressure;
    let wspeed = data.wind.speed;

    document.querySelector("#hum").innerHTML = `<span>Humidity : ${hum}&nbsp gm<sup>-3</sup></span>`

    document.querySelector("#pre").innerHTML = `<span>Pressure : ${pre}&nbsp Pa</span>`


    document.querySelector("#wspeed").innerHTML = `<span>Wind Speed : ${wspeed}&nbsp Km/Hr</span>`


    

    if(status == "Clouds"){
        tempstatus.innerHTML =`<i class="fa-solid fa-cloud" style="color:#1DA1F2"></i>`;
    }
    else if(status == "Clear"){
        tempstatus.innerHTML =`<i class="fa-solid fa-cloud-sun" style="color:yellow"></i>`;
    }
    else if(status == "Rain" ){
        tempstatus.innerHTML =`<i class="fa-solid fa-cloud-moon-rain" style="color:#1DA1F2"></i>`;
    }
    else{
        tempstatus.innerHTML =`<i class="fa-solid fa-sun" style="color:yellow"></i>`;
    }
   }
   catch{
    oldcity.innerText = "Please enter the proper city Name";
    tempval.innerText = "";
    tempstatus.innerHTML ="";
   }
   }

}

let search = document.querySelector(".btn1");
search.addEventListener('click',getdata);


day_date();

