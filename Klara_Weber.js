let info_klara_weber;

let opening_hours_klara_weber;

function createKlara_Weber() {
  info_klara_weber = document.getElementById("doctor-klara_weber");

  opening_hours_klara_weber = document.getElementById(
    "klara_weber-opening_hours"
  );

  OpeningHoursKlara_Weber();

  DoctorInfoKlara_Weber();
}

function OpeningHoursKlara_Weber() {
  OpeningHours = createOpeningHours(
    infoDoctor[3].opening_hours.monday,
    infoDoctor[3].opening_hours.tuesday,
    infoDoctor[3].opening_hours.wednesday,
    infoDoctor[3].opening_hours.thursday,
    infoDoctor[3].opening_hours.friday,
    infoDoctor[3].opening_hours.saturday,
    infoDoctor[3].opening_hours.sunday
  );

  opening_hours_klara_weber.insertAdjacentHTML("beforeend", OpeningHours);
}

function DoctorInfoKlara_Weber() {
  DoctorInfo = createDoctorInfo(
    infoDoctor[3].img,
    infoDoctor[3].title,
    infoDoctor[3].first_name,
    infoDoctor[3].last_name,
    infoDoctor[3].specialities,
    infoDoctor[3].street,
    infoDoctor[3].zipcode,
    infoDoctor[3].city
  );

  info_klara_weber.insertAdjacentHTML("beforeend", DoctorInfo);
}

/**
 * Loads myJSON from Server
 */
function loadKlara_Weber() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      createKlara_Weber();
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}
