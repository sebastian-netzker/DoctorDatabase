

let info_anton_kraus;

let opening_hours_anton_kraus;







function createAnton_Kraus(){
 info_anton_kraus = document.getElementById("doctor-anton_kraus");

 opening_hours_anton_kraus= document.getElementById("anton_kraus-opening_hours");


 OpeningHoursAnton_Kraus();

 DoctorInfoAnton_Kraus();


}

function createDoctorInfo(
  picture_url,
  title,
  first_name,
  last_name,
  specialities,
  street,
  zipcode,
  city,
) {
  let DoctorInfo = `<li>
      <img class="img-Doctor" src="DoctorDatabase/${picture_url}">
      <div class="Doctor-DIV">
      <h2> ${title + "&nbsp" + first_name + "&nbsp" + last_name}</h2>
      <h3> Fachgebiete: ${specialities}</h3>
      <h4>${street} <br> ${zipcode + "&nbsp" + city}</h4>
      </div>
  </li>`;

  return DoctorInfo;
}

function DoctorInfoAnton_Kraus(){


  DoctorInfo = createDoctorInfo(
    infoDoctor[0].img,
    infoDoctor[0].title,
    infoDoctor[0].first_name,
    infoDoctor[0].last_name,
    infoDoctor[0].specialities,
    infoDoctor[0].street,
    infoDoctor[0].zipcode,
    infoDoctor[0].city,
    
  );

  info_anton_kraus.insertAdjacentHTML("beforeend", DoctorInfo);


}





function createOpeningHours(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {

  let  OpeningHours = `<li class="li-opening-hours">
    <h2 class="h2-opening-hours">Öffnungszeiten</h2>
     <div class="div-opening-hours-1">
      <div class="div-opening-hours-2">

       <span>Mo <p> ${Monday}</p></span>
       <span>Di <p> ${Tuesday}</p></span>
       <span>Mi <p> ${Wednesday}</p></span>
       <span>Do <p> ${Thursday}</p></span>
       <span>Fr <p> ${Friday}</p></span>
       <span>Sa <p> ${Saturday}</p></span>
       <span>So <p> ${Sunday}</p></span></div>

      </div>
      </div>

    </li>`;

    return OpeningHours
}


function OpeningHoursAnton_Kraus(){

    OpeningHours = createOpeningHours(
      infoDoctor[0].opening_hours.monday,
      infoDoctor[0].opening_hours.tuesday,
      infoDoctor[0].opening_hours.wednesday,
      infoDoctor[0].opening_hours.thursday,
      infoDoctor[0].opening_hours.friday,
      infoDoctor[0].opening_hours.saturday,
      infoDoctor[0].opening_hours.sunday,
    );

    opening_hours_anton_kraus.insertAdjacentHTML("beforeend", OpeningHours)
    

}


/**
 * Loads myJSON from Server
 */
function loadAnton_Kraus() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      createAnton_Kraus();
       
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}



