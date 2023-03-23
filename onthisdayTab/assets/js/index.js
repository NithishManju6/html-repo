const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const options1 = {
  weekday: "short",
  month: "long",
  day: "numeric",
};
const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

let date1 = date.toLocaleDateString("en-us", options);
let showDate = (document.getElementById("calender-day").innerHTML = date1);

window.onload = displayClock();
function displayClock() {
  var display = new Date().toLocaleTimeString("en-us", timeOptions);
  document.getElementById("time1-id").innerHTML = display;
  setTimeout(displayClock, 1000);
}

let dydate = new Date().toLocaleDateString("en-us", options1);
document.getElementById("dynamicdate").innerHTML = dydate;
//==============================url1 Starts=======================================//
let today = new Date();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");
let year = today.getFullYear();
//==============================url1 ends=======================================//
//==============================getAllApi Starts=======================================//
const fetchdata = (mm, dd) => {
  let url1 = [
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${mm}/${dd}`,
  ];
  try {
    function getAllApi() {
      let loader = `<div class="loader "></div>`;
      document.getElementById("history1").innerHTML = loader;
      document.getElementById("birth1").innerHTML = loader;
      document.getElementById("hoilday1").innerHTML = loader;
      fetch(url1)
        .then((response) => response.json())
        .then(function (data) {
          let eventList1 = data.events;
          let birthList2 = data.births;
          let holidayList3 = data.holidays;
          ////////////////////////////////////eventList1/////////////////////////////////////
          const n = 5; // number of elements we want to get
          const shuffledArray1 = eventList1.sort(() => 0.5 - Math.random()); // shuffles array
          const result1 = shuffledArray1.slice(0, n); // gets first n elements after shuffle
          result1.sort(function (a, b) {
            const aDate = new Date(a.year);
            const bDate = new Date(b.year);
            return bDate - aDate;
          });
          ////////////////////////////////////birthList2/////////////////////////////////////
          const shuffledArray2 = birthList2.sort(() => 0.5 - Math.random()); // shuffles array
          const result2 = shuffledArray2.slice(0, n); // gets first n elements after shuffle
          result2.sort(function (a, b) {
            const aDate = new Date(a.year);
            const bDate = new Date(b.year);
            return bDate - aDate;
          });
          ////////////////////////////////////holidayList3/////////////////////////////////////
          const shuffledArray3 = holidayList3.sort(() => 0.5 - Math.random()); // shuffles array
          const result3 = shuffledArray3.slice(0, n); // gets first n elements after shuffle
          result3.sort(function (a, b) {
            const aDate = new Date(a.text);
            const bDate = new Date(b.text);
            return aDate - bDate;
          });
          ////////////////////////////////////////eventlistItems1////////////////////////////
          var eventlistItems1 = result1
            .map(function (user1) {
              return `
                      <div class="list1 d-md-flex">
                      <h6 class="redcolor">${user1.year}:</h6>
                      <h6 class="text-justify text1">${user1.text}</h6>
                      </div>
                      `;
            })
            .join("");
          document.getElementById("history1").innerHTML = eventlistItems1;

          ////////////////////////////////////////birthListItems1////////////////////////////
          var birthListItems1 = result2
            .map(function (user1) {
              return `
                    <div class="list1 d-md-flex">
                    <h6 class="redcolor">${user1.year}:</h6>
                    <h6 class="text-justify birth-text1">${user1.text}</h6>
                    </div>
                    `;
            })
            .join("");
          document.getElementById("birth1").innerHTML = birthListItems1;
          ////////////////////////////////////////holidayListItems1////////////////////////////
          var holidayListItems1 = result3
            .map(function (user1) {
              return `
                      <ul class="list1">
                      <li class="text-justify text1">${user1.text}</li>
                      </ul>
                      `;
            })
            .join("");
          document.getElementById("hoilday1").innerHTML = holidayListItems1;
          return data.events, data.births, data.holidays;
        });
    }
  } catch {
    let err = "The Code is ERROR";
    document.getElementById("history1").innerHTML = err;
    document.getElementById("hoilday1").innerHTML = err;
    document.getElementById("birth1").innerHTML = err;
  }
  getAllApi();
};
fetchdata(month, day);
//==============================getAllApi() Ends========================================//
//==============================apiNextPage() starts====================================//
$("#next1").click(function () {
  let refdate = document.getElementById("dynamicdate").innerText;
  seletedDate = new Date(refdate);
  seletedDate.setFullYear(year);
  seletedDate.setDate(seletedDate.getDate() + 1);
  let month1 = String(seletedDate.getMonth() + 1).padStart(2, "0");
  let day1 = String(seletedDate.getDate()).padStart(2, "0");
  fetchdata(month1, day1);
  document.getElementById("dynamicdate").innerText =
    seletedDate.toLocaleDateString("en-us", options1);
});
//==============================apiNextPage() starts====================================//
//==============================apiPrevPage() starts====================================//
$("#prev1").click(function () {
  let refdate = document.getElementById("dynamicdate").innerText;
  seletedDate = new Date(refdate);
  seletedDate.setFullYear(year);
  seletedDate.setDate(seletedDate.getDate() - 1);
  let month1 = String(seletedDate.getMonth() - 1).padStart(2, "0");
  let day1 = String(seletedDate.getDate()).padStart(2, "0");
  fetchdata(month1, day1);
  document.getElementById("dynamicdate").innerText =
    seletedDate.toLocaleDateString("en-us", options1);
});
//==============================apiPrevPage() starts====================================//
