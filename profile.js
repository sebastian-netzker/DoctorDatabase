
/**
 * This function create parameter after the existing url
 */
function loadDoctor() {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id");

  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result); // Array with all doctors
      showDoctorInfo(id);
      showOpeningHours(id);
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });

  
}


/**
 * This function create the Doctor Info, which one create the different list for the different doctors in the profile html file
 * @param {string} picture_url - parameter for the picture source
 * @param {string} title  - parameter for the title from the doctor
 * @param {string} first_name - parameter for the  first name from the doctor
 * @param {string} last_name - parameter for the last name from the doctor
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
 * This function show the Opening Hours from the perspective doctor
 * @param {number} id - number, which search after the right doctor
 */

function showOpeningHours(id) {
 let openingHours = createOpeningHours(
    infoDoctor[id].opening_hours.monday ,
    infoDoctor[id].opening_hours.tuesday ,
    infoDoctor[id].opening_hours.wednesday,
    infoDoctor[id].opening_hours.thursday,
    infoDoctor[id].opening_hours.friday,
    infoDoctor[id].opening_hours.saturday,
    infoDoctor[id].opening_hours.sunday
  );

  document.getElementById("opening-hours").innerHTML = "";

  document.getElementById("opening-hours").insertAdjacentHTML("beforeend", openingHours);
}


/**
 * This function show the Doctor Info from the perspective doctor
 * @param {number} id - number, which search after the right doctor
 */

function showDoctorInfo(id) {
  doctorInfo = createDoctorInfo(
    infoDoctor[id].img,
    infoDoctor[id].title,
    infoDoctor[id].first_name,
    infoDoctor[id].last_name,
    infoDoctor[id].specialities,
    infoDoctor[id].street,
    infoDoctor[id].zipcode,
    infoDoctor[id].city
  );
document.getElementById("doctor-info").innerHTML = '';
  document
    .getElementById("doctor-info")
    .insertAdjacentHTML("beforeend", doctorInfo);
}



