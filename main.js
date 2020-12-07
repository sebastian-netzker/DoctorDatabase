const BASE_SERVER_URL =
  "http://sebastian-netzker.developerakademie.com/Bewerberaufgabe/DoctorDatabase/";

let infoDoctor = [];

let specialities = [];

let filteredDoctors;



/**
 * This function add parameter after the url
 * @param {number} id - number, for the different doctors
 */

function openProfile(id) {
  window.location.href = "./profile.html?id=" + id;
}

/**
 * This function open the Main Menu
 */

function openMainMenu() {
  location.href = "index.html";
}

/**
 * This function load the onclick function for the buttons
 */

function loadButtons() {

  

  document.getElementById("btn-0").onclick = function () {
    openProfile(0);
  };

  document.getElementById("btn-1").onclick = function () {
    openProfile(1);
  };

  document.getElementById("btn-2").onclick = function () {
    openProfile(2);
  };

  document.getElementById("btn-3").onclick = function () {
    openProfile(3);
  };

  document.getElementById("btn-4").onclick = function () {
    openProfile(4);
  };


}

/**
 * This function create the different areas for the doctors
 */

function updateResults() {

  

let speciality = document.getElementById("select-menu").value;

 filteredDoctors = infoDoctor.filter(function(doctor){

  return doctor.specialities.includes(speciality);
});

 document.getElementById("doctor-list").innerHTML = "";

showDoctorCategory();


if(speciality == "Alle Fachgebiete"){
   document.getElementById("doctor-list").innerHTML = "";

   showDoctorLists();


}
loadButtons();
}



/**
 * This function create a list for all doctors
 */

function showDoctorLists() {

  
for(let i = 0; i < infoDoctor.length; i++){

  DoctorList = createDoctorList(
    infoDoctor[i].img,
    infoDoctor[i].title,
    infoDoctor[i].first_name,
    infoDoctor[i].last_name,
    infoDoctor[i].specialities,
    infoDoctor[i].street,
    infoDoctor[i].zipcode,
    infoDoctor[i].city,
    i
    
  );

  document.getElementById("doctor-list").insertAdjacentHTML("beforeend", DoctorList);
}

  }



  /**
   * This function show all doctors from one category
   */
function showDoctorCategory() {
  for (let i = 0; i < filteredDoctors.length; i++) {
    DoctorList = createDoctorList(
      filteredDoctors[i].img,
      filteredDoctors[i].title,
      filteredDoctors[i].first_name,
      filteredDoctors[i].last_name,
      filteredDoctors[i].specialities,
      filteredDoctors[i].street,
      filteredDoctors[i].zipcode,
      filteredDoctors[i].city,
      i
    );

    document
      .getElementById("doctor-list")
      .insertAdjacentHTML("beforeend", DoctorList);
  }
}  


/**
 * This function create an array of specialites
 */

function generateSpecialities() {

  infoDoctor.forEach(function(doctor){

    doctor.specialities.forEach(function(speciality){


      if(!specialities.includes(speciality)){
        specialities.push(speciality);
      }
    });
  });
}

/**
 * This function show all speciality in the dropdown menu
 */

function showSpeciality(){

  for(let i = 0; i < specialities.length; i++){

    dropdownSpeciality = createSpeciality(

      specialities[i] );

       document
         .getElementById("select-menu")
         .insertAdjacentHTML("beforeend", dropdownSpeciality);


  }


}


/**
 * This function create different option elements, which will be displayd in the dropdown menu
 * @param {string} Speciality - parameter to show the different speciality
 */

function createSpeciality(Speciality) {
 
  let dropdownSpeciality = `<option>${Speciality}</option>`;

  return dropdownSpeciality;

}

 /**
 * This function create the DoctorList, which one is used to create the individual list for the different doctors in the index html file
 * @param {string} picture_url - parameter for the picture source
 * @param {string} title - parameter for the title from the doctor
 * @param {string} first_name - parameter for the first name from the doctor
 * @param {string} last_name - parameter for the last name from the doctor 
 * @param {string} specialities - parameter for the different specialities from the doctor 
 * @param {string} street - parameter for the streetname
 * @param {number} zipcode - number for the zipcode
 * @param {string} city - parameter for the cityname
 * @param {number} i - number create different id´s
 */

function createDoctorList(
  picture_url,
  title,
  first_name,
  last_name,
  specialities,
  street,
  zipcode,
  city,
  i
) {
  let DoctorList = `<li id="${first_name + "-" + last_name}" class="main-menu-list">
      <img class="img-Doctor" src="DoctorDatabase/${picture_url}">
      <div class="Doctor-DIV">
      <h2> ${title + "&nbsp" + first_name + "&nbsp" + last_name}</h2>
      <h3> Fachgebiete: ${specialities}</h3>
      <h4>${street} <br> ${zipcode + "&nbsp" + city}</h4>
      </div>

      <button  id="btn-${i}" type="button" class="btn btn-info">Profil anzeigen</button>

  </li> 
  <br>`;

  return DoctorList;
}

/**
 * Load AllDoctorList - JSON from Server
 */
function load() {
  loadJSONFromServer()
    .then(function (result) {
      //then(function (variable vom server))
      console.log("Laden erfolgreich!", result);
      infoDoctor = JSON.parse(result);
       showDoctorLists();
       loadButtons();
       generateSpecialities();
      showSpeciality();
    })
    .catch(function (error) {
      // Fehler
      console.error("Fehler beim laden!", error);
    });
}

/**
 * Loads a JSON or JSON Array to the Server
 * payload {JSON | Array} - The payload you want to store
 */
function loadJSONFromServer() {
  return new Promise(function (resolve, reject) {
    let xhttp = new XMLHttpRequest();
    let proxy = determineProxySettings();
    let serverURL = proxy + BASE_SERVER_URL + "get_doctors.php";
    xhttp.open("GET", serverURL); 

    xhttp.onreadystatechange = function (oEvent) {
      if (xhttp.readyState === 4) {
        let response = JSON.parse(xhttp.responseText);
        if (response.status >= 200 || response.status <= 399) {
          reject(response.error);
        } else {
          resolve(xhttp.responseText);
        }
        //if (xhttp.status >= 200 && xhttp.status <= 399) {
        //resolve(xhttp.responseText);
        //} else {
        //  reject(xhttp.statusText);
        //}
      }
    };

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
  });
}

/**
 * Function create Setting for the Proxy Server
 */

function determineProxySettings() {
  if (window.location.href.indexOf(".developerakademie.com") > -1) {
    return "";
  } else {
    return "https://cors-anywhere.herokuapp.com/";
  }
}
