let info_anton_kraus;
let opening_hours_anton_kraus;

let info_christina_miller;
let opening_hours_christina_miller;

let info_eberhard_oldenberger;
let opening_hours_eberhard_oldenberger;

let info_klara_weber;
let opening_hours_klara_weber;

let info_sonja_huber;
let opening_hours_sonja_huber;

window.onload = loadAll_Doctors();


/**
 * Anton Kraus is created 
 */

function createAnton_Kraus() {

  info_anton_kraus = document.getElementById("doctor-anton_kraus");

  opening_hours_anton_kraus = document.getElementById(
    "anton_kraus-opening_hours"
  );

  OpeningHoursAnton_Kraus();

  DoctorInfoAnton_Kraus();

}


/**
 * Christina Miller is created 
 */

function createChristina_Miller() {


  info_christina_miller = document.getElementById("doctor-christina_miller");

  opening_hours_christina_miller = document.getElementById(
    "christina_miller-opening_hours"
  );



  OpeningHoursChristina_Miller();

  DoctorInfoChristina_Miller();
}

/**
 * Eberhard Oldenberger is created 
 */

function createEberhard_Oldenberger() {
  info_eberhard_oldenberger = document.getElementById(
    "doctor-eberhard_oldenberger"
  );

  opening_hours_eberhard_oldenberger = document.getElementById(
    "eberhard_oldenberger-opening_hours"
  );

  OpeningHoursEberhard_Oldenberger();

  DoctorInfoEberhard_Oldenberger();
}

/**
 * Klara Weber is created 
 */

function createKlara_Weber() {
  info_klara_weber = document.getElementById("doctor-klara_weber");

  opening_hours_klara_weber = document.getElementById(
    "klara_weber-opening_hours"
  );

  OpeningHoursKlara_Weber();

  DoctorInfoKlara_Weber();
}

/**
 * Sonja Huber is created 
 */
function createSonja_Huber() {
  info_sonja_huber = document.getElementById("doctor-sonja_huber");

  opening_hours_sonja_huber = document.getElementById(
    "sonja_huber-opening_hours"
  );

  OpeningHoursSonja_Huber();

  DoctorInfoSonja_Huber();
}

/**
 * This function create the Doctor Info, which one create the different list for the different doctors in the profile html file
 * @param {string} picture_url - parameter for the Picture Source
 * @param {string} title  - parameter for the title from the doctor
 * @param {string} first_name - parameter for the  first name from the doctor
 * @param {string} last_name - parameter fot the last name from the doctor
 * @param {string} specialities - parameter for the different specialities from the doctor
 * @param {string} street  - parameter for the streetname
 * @param {number} zipcode - number for the zipcode
 * @param {string} city  - parameter for the cityname
 */

function createDoctorInfo(
  picture_url,
  title,
  first_name,
  last_name,
  specialities,
  street,
  zipcode,
  city
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


/**
 * This function create the different opening hours for the doctors
 * @param {number} Monday - Opening hours from monday
 * @param {number} Tuesday - Opening hours from tuesday
 * @param {number} Wednesday - Opening hours from wednesday
 * @param {number} Thursday - Opening hours from thursday
 * @param {number} Friday - Opening hours from friday
 * @param {number} Saturday - Opening hours from saturday
 * @param {number} Sunday - Opening hours from sunday
 */

function createOpeningHours(
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
) {
  let OpeningHours = `<li class="li-opening-hours">
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

  return OpeningHours;
}


/**
 * Opening Hours from the Doctor Anton Kraus are created
 */


function OpeningHoursAnton_Kraus() {
  OpeningHours = createOpeningHours(
    infoDoctor[0].opening_hours.monday,
    infoDoctor[0].opening_hours.tuesday,
    infoDoctor[0].opening_hours.wednesday,
    infoDoctor[0].opening_hours.thursday,
    infoDoctor[0].opening_hours.friday,
    infoDoctor[0].opening_hours.saturday,
    infoDoctor[0].opening_hours.sunday
  );

  opening_hours_anton_kraus.insertAdjacentHTML("beforeend", OpeningHours);
}

/**
 * Opening Hours from the Doctor Christina Miller are created
 */


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

    /**
 * Opening Hours from the Eberhard Oldenberger are created
 */

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

      opening_hours_eberhard_oldenberger.insertAdjacentHTML(
        "beforeend",
        OpeningHours
      );
    }

/**
 * Opening Hours from the Doctor Klara Weber are created
 */

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

/**
 * Opening Hours from the Doctor Sonja Huber are created
 */

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



/**
 * Doctor Info from the Doctor Anton Kraus is created
 */

    function DoctorInfoAnton_Kraus() {
      DoctorInfo = createDoctorInfo(
        infoDoctor[0].img,
        infoDoctor[0].title,
        infoDoctor[0].first_name,
        infoDoctor[0].last_name,
        infoDoctor[0].specialities,
        infoDoctor[0].street,
        infoDoctor[0].zipcode,
        infoDoctor[0].city
      );

      info_anton_kraus.insertAdjacentHTML("beforeend", DoctorInfo);
    }


/**
 * Doctor Info from the Doctor Christina Miller is created
 */

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
 * Doctor Info from the Doctor Eberhard Oldenberger is created
 */

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
 * Doctor Info from the Doctor Klara Weber is created
 */

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
 * Doctor Info from the Doctor Sonja Huber is created
 */

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
function loadAll_Doctors() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
      
      createAnton_Kraus();
      createChristina_Miller();
      createEberhard_Oldenberger();
      createKlara_Weber();
      createSonja_Huber();
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}



