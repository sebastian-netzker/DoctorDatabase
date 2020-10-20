let info_eberhard_oldenberger;

let opening_hours_eberhard_oldenberger;

function createEberhard_Oldenberger() {
  info_eberhard_oldenberger = document.getElementById("doctor-eberhard_oldenberger");

  opening_hours_eberhard_oldenberger = document.getElementById(
    "eberhard_oldenberger-opening_hours"
  );

  OpeningHoursEberhard_Oldenberger();

  DoctorInfoEberhard_Oldenberger();
}

function OpeningHoursEberhard_Oldenberger() {
  OpeningHours = createOpeningHours(
    infoDoctor[2].opening_hours.monday,
    infoDoctor[2].opening_hours.tuesday,
    infoDoctor[2].opening_hours.wednesday,
    infoDoctor[2].opening_hours.thursday,
    infoDoctor[2].opening_hours.friday,
    infoDoctor[2].opening_hours.saturday,
    infoDoctor[2].opening_hours.sunday
  );

  opening_hours_eberhard_oldenberger.insertAdjacentHTML("beforeend", OpeningHours);
}

function DoctorInfoEberhard_Oldenberger() {
  DoctorInfo = createDoctorInfo(
    infoDoctor[2].img,
    infoDoctor[2].title,
    infoDoctor[2].first_name,
    infoDoctor[2].last_name,
    infoDoctor[2].specialities,
    infoDoctor[2].street,
    infoDoctor[2].zipcode,
    infoDoctor[2].city
  );

  info_eberhard_oldenberger.insertAdjacentHTML("beforeend", DoctorInfo);
}

/**
 * Loads myJSON from Server
 */
function loadEberhard_Oldenberger() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      createEberhard_Oldenberger();
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}
