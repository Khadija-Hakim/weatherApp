const cityName=document.getElementById('cityName')
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo=async(event)=>
{
    event.preventDefault();
    let cityVal=cityName.value;

    if(cityVal==="")
    {
        city_name.innerText=`Plz write city name before you search`;
        temp.innerText=` `;
        temp_status.innerText=` `;
    }
    else
    {
        try
        {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=410727903215093c01d31055b04f72d8`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            // console.log(arrData);
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'> </i>"
            }
            else if(tempMood=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'> </i>"
            }
            else if(tempMood=="Rain")
            {
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'> </i>"
            }
            else
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'> </i>"
            }
        }
        catch
        {
            city_name.innerText=`Plz write correct city name `;
            temp.innerText=` `;
            temp_status.innerText=` `;
        }
    }

}
submitBtn.addEventListener('click',getInfo)