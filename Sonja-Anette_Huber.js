let info_sonja_huber;

let opening_hours_sonja_huber;

function createSonja_Huber() {
  info_sonja_huber = document.getElementById("doctor-sonja_huber");

  opening_hours_sonja_huber = document.getElementById(
    "sonja_huber-opening_hours"
  );

  OpeningHoursSonja_Huber();

  DoctorInfoSonja_Huber();
}

function OpeningHoursSonja_Huber() {
  OpeningHours = createOpeningHours(
    infoDoctor[4].opening_hours.monday,
    infoDoctor[4].opening_hours.tuesday,
    infoDoctor[4].opening_hours.wednesday,
    infoDoctor[4].opening_hours.thursday,
    infoDoctor[4].opening_hours.friday,
    infoDoctor[4].opening_hours.saturday,
    infoDoctor[4].opening_hours.sunday
  );

  opening_hours_sonja_huber.insertAdjacentHTML("beforeend", OpeningHours);
}

function DoctorInfoSonja_Huber() {
  DoctorInfo = createDoctorInfo(
    infoDoctor[4].img,
    infoDoctor[4].title,
    infoDoctor[4].first_name,
    infoDoctor[4].last_name,
    infoDoctor[4].specialities,
    infoDoctor[4].street,
    infoDoctor[4].zipcode,
    infoDoctor[4].city
  );

  info_sonja_huber.insertAdjacentHTML("beforeend", DoctorInfo);
}

/**
 * Loads myJSON from Server
 */
function loadSonja_Huber() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      createSonja_Huber();
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}
