let info_christina_miller;

let opening_hours_christina_miller;


function createChristina_Miller() {
  info_christina_miller = document.getElementById("doctor-christina_miller");

  opening_hours_christina_miller = document.getElementById(
    "christina_miller-opening_hours"
  );



  OpeningHoursChristina_Miller();

  DoctorInfoChristina_Miller();
}


function OpeningHoursChristina_Miller(){

    OpeningHours = createOpeningHours(
      infoDoctor[1].opening_hours.monday,
      infoDoctor[1].opening_hours.tuesday,
      infoDoctor[1].opening_hours.wednesday,
      infoDoctor[1].opening_hours.thursday,
      infoDoctor[1].opening_hours.friday,
      infoDoctor[1].opening_hours.saturday,
      infoDoctor[1].opening_hours.sunday,
    );

    opening_hours_christina_miller.insertAdjacentHTML("beforeend", OpeningHours)
    
    }

function DoctorInfoChristina_Miller() {
  DoctorInfo = createDoctorInfo(
    infoDoctor[1].img,
    infoDoctor[1].title,
    infoDoctor[1].first_name,
    infoDoctor[1].last_name,
    infoDoctor[1].specialities,
    infoDoctor[1].street,
    infoDoctor[1].zipcode,
    infoDoctor[1].city
  );

  info_christina_miller.insertAdjacentHTML("beforeend", DoctorInfo);
}

/**
 * Loads myJSON from Server
 */
function loadChristina_Miller() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      createChristina_Miller();
       
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}



