const date = new Date();
const options = {
  weekday: "long",
  //   year: "numeric",
  month: "long",
  day: "numeric",
};
const options1 = {
  weekday: "short",
  //   year: "numeric",
  month: "long",
  day: "numeric",
};
let date1 = date.toLocaleDateString("en-us", options);
let showDate = (document.getElementById("d1").innerHTML = date1);

window.onload = displayClock();
function displayClock() {
  var display = new Date().toLocaleTimeString();
  document.getElementById("t1").innerHTML = display;
  setTimeout(displayClock, 1000);
}

let dydate = new Date().toLocaleDateString("en-us", options1);
console.log("==========>", dydate);
document.getElementById("dynamicdate").innerHTML = dydate;
//==============================History Day Starts=======================================//
let today = new Date();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");
let url1 = [
  `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`,
];
try {
  function getEventsApi() {
    fetch(url1)
      .then((response) => response.json())
      .then(function (data) {
        console.log(url1);
        url1.push(data.events);
        let unknownlist = data.events;
        const n = 5; // number of elements we want to get
        const shuffledArray = unknownlist.sort(() => 0.5 - Math.random()); // shuffles array
        const result = shuffledArray.slice(0, n); // gets first n elements after shuffle
        result.sort(function (a, b) {
          const aDate = new Date(a.year);
          const bDate = new Date(b.year);
          return bDate - aDate;
        });
        localStorage.setItem("history1", JSON.stringify(result));
        console.log(result);
        var listItems1 = result
          .map(function (user1) {
            return `
                    <div class="list1 d-md-flex">
                    <h6 class="redcolor">${user1.year}:</h6>
                    <h6 class="text-justify text1">${user1.text}</h6>
                    </div>
                    `;
          })
          .join("");
        document.getElementById("history1").innerHTML = listItems1;
        return data.events;
      });
  }
} catch {
  let err = "The history1 Code is ERROR";
  document.getElementById("history1").innerHTML = err;
  console.log(err);
}
getEventsApi();
//==============================History Day Ends========================================//
//==============================Births Module Starts====================================//

try {
  function getBirthApi() {
    fetch(url1)
      .then((response) => response.json())
      .then(function (data) {
        url1.push(data.births);
        let unknownlist = data.births;
        // console.log(unknownlist);
        const n = 5; // number of elements we want to get
        const shuffledArray = unknownlist.sort(() => 0.5 - Math.random()); // shuffles array
        const result = shuffledArray.slice(0, n); // gets first n elements after shuffle
        result.sort(function (a, b) {
          const aDate = new Date(a.year);
          const bDate = new Date(b.year);
          return bDate - aDate;
        });
        localStorage.setItem("birth1", JSON.stringify(result));
        console.log(result);
        var listItems1 = result
          .map(function (user1) {
            return `
                    <div class="list1 d-md-flex">
                    <h6 class="redcolor">${user1.year}:</h6>
                    <h6 class="text-justify text1">${user1.text}</h6>
                    </div>
                    `;
          })
          .join("");
        document.getElementById("birth1").innerHTML = listItems1;
        return data.events;
      });
  }
} catch {
  let err = "The history1 Code is ERROR";
  document.getElementById("birth1").innerHTML = err;
  console.log(err);
}
getBirthApi();
//==============================Births Module Ends======================================//
//==============================Births Module Starts====================================//

try {
  function getHoildayApi() {
    fetch(url1)
      .then((response) => response.json())
      .then(function (data) {
        url1.push(data.holidays);
        let unknownlist = data.holidays;
        // console.log(unknownlist);
        const n = 5; // number of elements we want to get
        const shuffledArray = unknownlist.sort(() => 0.5 - Math.random()); // shuffles array
        const result = shuffledArray.slice(0, n); // gets first n elements after shuffle
        result.sort(function (a, b) {
          const aDate = new Date(a.text);
          const bDate = new Date(b.text);
          return aDate - bDate;
        });
        localStorage.setItem("hoilday1", JSON.stringify(result));
        console.log(result);
        var listItems1 = result
          .map(function (user1) {
            return `
                    <ul class="list1">
                    <li class="text-justify text1">${user1.text}</li>
                    </ul>
                    `;
          })
          .join("");
        document.getElementById("hoilday1").innerHTML = listItems1;
        return data.events;
      });
  }
} catch {
  let err = "The history1 Code is ERROR";
  document.getElementById("hoilday1").innerHTML = err;
  console.log(err);
}
getHoildayApi();
//==============================Births Module Ends======================================//
function apiNextPage() {
  let nextdate = url1.setDate(url1.getDate() + 1);
  location.href = nextdate;
  // let prevdate = url1.setDate(url1.getDate() - 1);
  // //let datetomorrow = nextdate.
  // let nextDate1 = url1.push(nextdate);
  // let prevDate1 = url1.push(prevdate);
  document.getElementById("prev1").innerHTML = nextdate;
  // document.getElementById("prev1").innerHTML = prevDate1;
  // getBirthApi();
  // getHoildayApi();
  // getBirthApi();
}
function apiPrevPage() {
  let prevdate = url1.setDate(url1.getDate() - 1);
}
