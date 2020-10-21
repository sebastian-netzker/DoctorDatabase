const BASE_SERVER_URL = "http://sebastian-netzker.developerakademie.com/Bewerberaufgabe/DoctorDatabase/";

let infoDoctor = [];

let list1;

let list2;

let list3;

let list4;

let list5;

/**
 * This function open the Main Menu
 */

function openMainMenu(){
  location.href="index.html";
}


/**
 * This function load the onclick function for the buttons
 */


function loadButtons(){

  document.getElementById("btn-0").onclick = function () {
    location.href = "Anton_Kraus.html";
  };

  document.getElementById("btn-1").onclick = function () {
    location.href = "Christina_Miller.html";
  };

  document.getElementById("btn-2").onclick = function () {
    location.href = "Eberhard_Oldenberger.html";
  };

  document.getElementById("btn-3").onclick = function () {
    location.href = "Klara_Weber.html";
  };

  document.getElementById("btn-4").onclick = function () {
    location.href = "Sonja-Anette_Huber.html";
  };


}





/**
 * In this function you can choose different areas from the doctor
 */


function selector() {

  let select_Menu = document.getElementById("select-menu");
  let selectedValue = select_Menu.options[select_Menu.selectedIndex].value;

  if(selectedValue == "Allgemeinmedizin"){
    
    generalMedicine();

  } else if(selectedValue == "Dermatologie"){
    dermatology();
  } else if(selectedValue == "Mund-Kiefer-Gesichtschirurgie"){

    surgery();

  }else if(selectedValue == "Radiologie"){
    radiology();

  }else if(selectedValue == "Zahnmedizin"){
    dentistry();

  }else if(selectedValue == "Alle Fachgebiete"){

    allSubject_areas();
  }
}

/**
 * Doctor with Area in Expertise general Medicine is displayed
 */

function generalMedicine(){
  document.getElementById("list-1").classList.remove("d-none");

  document.getElementById("list-2").classList.remove("d-none");

  document.getElementById("list-3").classList.add("d-none");

  document.getElementById("list-4").classList.add("d-none");

  document.getElementById("list-5").classList.add("d-none");

}

/**
 * Doctor with Area in Expertise general dermatology is displayed
 */

function dermatology(){
  document.getElementById("list-1").classList.remove("d-none");

  document.getElementById("list-2").classList.add("d-none");

  document.getElementById("list-3").classList.add("d-none");

  document.getElementById("list-4").classList.add("d-none");

  document.getElementById("list-5").classList.add("d-none");
}

/**
 * Doctor with Area in Expertise surgery is displayed
 */

function surgery(){
  document.getElementById("list-1").classList.add("d-none");

  document.getElementById("list-2").classList.add("d-none");

  document.getElementById("list-3").classList.add("d-none");

  document.getElementById("list-4").classList.add("d-none");

  document.getElementById("list-5").classList.remove("d-none");

}

/**
 * Doctor with Area in Expertise radiology is displayed
 */

function radiology(){
   document.getElementById("list-1").classList.add("d-none");

   document.getElementById("list-2").classList.add("d-none");

   document.getElementById("list-3").classList.add("d-none");

   document.getElementById("list-4").classList.remove("d-none");

   document.getElementById("list-5").classList.add("d-none");
}

/**
 * Doctor with Area in Expertise general dentistry is displayed
 */

function dentistry(){
   document.getElementById("list-1").classList.add("d-none");

   document.getElementById("list-2").classList.add("d-none");

   document.getElementById("list-3").classList.remove("d-none");

   document.getElementById("list-4").classList.add("d-none");

   document.getElementById("list-5").classList.remove("d-none");
}

/**
 * All doctors are displayed
 */

function allSubject_areas(){
  document.getElementById("list-1").classList.remove("d-none");

  document.getElementById("list-2").classList.remove("d-none");

  document.getElementById("list-3").classList.remove("d-none");

  document.getElementById("list-4").classList.remove("d-none");

  document.getElementById("list-5").classList.remove("d-none");
}

/**
 * In this function all doctors list are created on the website
 */


function createAllDoctorLists(){

   list1 = document.getElementById("list-1");
   list2 = document.getElementById("list-2");
   list3 = document.getElementById("list-3");
   list4 = document.getElementById("list-4");
   list5 = document.getElementById("list-5");
  
  DoctorList1();
  DoctorList2();
  DoctorList3();
  DoctorList4();
  DoctorList5();

  loadButtons();
  

}





/**
 * This function create a list for the first doctor
 */

function DoctorList1() { 
  
  DoctorList = createDoctorList(
    infoDoctor[0].img,
    infoDoctor[0].title,
    infoDoctor[0].first_name,
    infoDoctor[0].last_name,
    infoDoctor[0].specialities,
    infoDoctor[0].street,
    infoDoctor[0].zipcode,
    infoDoctor[0].city,
    i = 0
  );

   list1.insertAdjacentHTML("beforeend", DoctorList);

}


/**
 * This function create a list for the second doctor
 */

function DoctorList2() {

  DoctorList = createDoctorList(
    infoDoctor[1].img,
    infoDoctor[1].title,
    infoDoctor[1].first_name,
    infoDoctor[1].last_name,
    infoDoctor[1].specialities,
    infoDoctor[1].street,
    infoDoctor[1].zipcode,
    infoDoctor[1].city,
    i = 1
  );
   list2.insertAdjacentHTML("beforeend", DoctorList);
}

/**
 * This function create a list for the third doctor
 */

function DoctorList3() {
  i = 2;
  DoctorList = createDoctorList(
    infoDoctor[2].img,
    infoDoctor[2].title,
    infoDoctor[2].first_name,
    infoDoctor[2].last_name,
    infoDoctor[2].specialities,
    infoDoctor[2].street,
    infoDoctor[2].zipcode,
    infoDoctor[2].city,
    i = 2
  );
   list3.insertAdjacentHTML("beforeend", DoctorList);
}

/**
 * This function create a list for the fourth doctor
 */

function DoctorList4() {
  i = 3;
  DoctorList = createDoctorList(
    infoDoctor[3].img,
    infoDoctor[3].title,
    infoDoctor[3].first_name,
    infoDoctor[3].last_name,
    infoDoctor[3].specialities,
    infoDoctor[3].street,
    infoDoctor[3].zipcode,
    infoDoctor[3].city,
    i = 3
  );
   list4.insertAdjacentHTML("beforeend", DoctorList);
}

/**
 * This function create a list for the fifth doctor
 */

function DoctorList5() {
  
  DoctorList = createDoctorList(
    infoDoctor[4].img,
    infoDoctor[4].title,
    infoDoctor[4].first_name,
    infoDoctor[4].last_name,
    infoDoctor[4].specialities,
    infoDoctor[4].street,
    infoDoctor[4].zipcode,
    infoDoctor[4].city,
    i = 4
  );
   list5.insertAdjacentHTML("beforeend", DoctorList);
}

/**
 * This function create the DoctorList, which one is used to create the individual list for the different doctors
 */



function createDoctorList(picture_url ,title, first_name, last_name, specialities, street, zipcode, city,i) {

  
  let DoctorList = `<li>
      <img class="img-Doctor" src="DoctorDatabase/${picture_url}">
      <div class="Doctor-DIV">
      <h2> ${title + '&nbsp' + first_name + '&nbsp'+ last_name}</h2>
      <h3> Fachgebiete: ${specialities}</h3>
      <h4>${street} <br> ${zipcode + '&nbsp' + city}</h4>
      </div>

      <button  id="btn-${i}" type="button" class="btn btn-info">Profil anzeigen</button>
  </li>`;

 

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
       createAllDoctorLists();
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
        if (xhttp.status >= 200 && xhttp.status <= 399) {
          resolve(xhttp.responseText);
        } else {
          reject(xhttp.statusText);
        }
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
