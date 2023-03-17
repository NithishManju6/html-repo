/*==================================================================================================== */
$(function () {
  $("#i1").datepicker({
    // showOn: "button",
    // buttonImage: "assets/images/calendar.png",
    // buttonImageOnly: true,
    // buttonText: "Select date",
    showButtonPanel: true,
    closeText: ["OK"],
    onSelect: function (event) {
      event.preventDefault();
    },
  });
});

const datetodaypick = new Date();
let datetoday = datetodaypick.toDateString();

let tomorrowdate = new Date();
tomorrowdate.setDate(tomorrowdate.getDate() + 1);
let datetomorrow = tomorrowdate.toDateString();
/*==================================================================================================== */
//hiding complete tasklist
$("#dots2").on("click", function () {
  $("#taskshide").toggle();
  // $('#completedtasks').show();
  if ($(this).text("Hide Completed")) {
    $(this).text("Show Completed");
  } else {
    $(this).text("Hide Completed");
  }
});
/*==================================================================================================== */

const tasklist1 = [];
const taskDiv = document.getElementById("tasks");
const taskDiv1 = document.getElementById("completedtasks");

// if (taskDiv1 == undefined) {
//     taskDiv1.style.display = "none"
// }
// else {
//     ((!taskDiv1) == undefined)
//     //taskDiv.style.display = "block"
// }

//else {
//     $(this).style.display = $(this)
// }

$(document).on("click", ".ui-datepicker-close", function () {
  let newtask = $("#inputtask1").val();
  // console.log('=====>', newtask, typeof (newtask));
  if (newtask == "") {
    alert("enter the task");
  } else {
    // let time = new Date()
    // let localeString = time.toLocaleString('en-US', { weekday: "short", month: "short", day: "numeric" })
    // console.info(localeString)
    let x = new Date($("#i1").val()).toDateString();
    let selectedDate = $("#i1").val() ? x : datetoday;

    //console.log(selectedDate)
    let number = Math.random() * 10;
    let obj = { task: newtask, date: selectedDate, status: false, id: number };
    let tasklist2 = JSON.parse(localStorage.getItem("tasklists"));
    if (tasklist2 == null) {
      tasklist1.push(obj);
      localStorage.setItem("tasklists", JSON.stringify(tasklist1));
      getlocalData();
    } else {
      tasklist2.push(obj);
      localStorage.setItem("tasklists", JSON.stringify(tasklist2));
      getlocalData();
      let value1 = $("#i1").val("");
      value1();
    }
    // console.log(tasklist1);
    // var d1 = new Date().toDateString('en-us', { weekday: "short", month: "short", day: "numeric" });
    // // console.log("Today", d1)
    // var d2 = new Date(Date.now() + 1000 * 3600 * 24);
    // var d21 = d2.toDateString('en-us', { weekday: "short", month: "short", day: "numeric" });
    // // console.log("Tommorow", d21)
    // let d3 = new Date();
    // let d31 = d3.toDateString('en-us', { weekday: "short", month: "short", day: "numeric" })
    // // console.log("Status Ok", d31)
    // localStorage.setItem("tasklists", JSON.stringify(tasklist1));
    // console.log(tasklist1)
  }
});
/*==================================================================================================== */
compltedtask();

const getlocalData = () => {
  pendingTask();
  compltedtask();
  if (taskDiv.innerHTML == "") {
    document.getElementById("t1-hide").classList.add("d-none");
  } else {
    document.getElementById("t1-hide").classList.remove("d-none");
  }
  if (taskDiv1.innerHTML == "") {
    document.getElementById("t2-hide").classList.add("d-none");
  } else {
    document.getElementById("t2-hide").classList.remove("d-none");
  }
};
getlocalData();

function pendingTask() {
  let gettasklist = JSON.parse(localStorage.getItem("tasklists"));
  let pendingData = gettasklist.filter((value) => value.status == false);
  const sortedByDate = (arr) => {
    const sorter = (a, b) => {
      return new Date(a.date) - new Date(b.date);
    };
    arr.sort(sorter);
  };

  const gropBy = function (list, key) {
    return list.reduce(function (prev, ele) {
      (prev[ele[key]] = prev[ele[key]] || []).push(ele);
      return prev;
    }, {});
  };

  sortedByDate(pendingData);
  let gropByDate = gropBy(pendingData, "date");
  taskDiv.innerHTML = "";

  for (var key in gropByDate) {
    const h_six = document.createElement("h6");
    h_six.setAttribute("class", "header_icon");
    h_six.innerText =
      key == datetoday ? "Today" : key == datetomorrow ? "Tomorrow" : key;

    // ul element
    const ul_element = document.createElement("ul");
    ul_element.setAttribute("class", "list-ul p-0");

    for (var key1 in gropByDate[key]) {
      // li element
      const liElement = document.createElement("li");
      liElement.setAttribute(
        "class",
        "d-flex justify-content-between align-items-center"
      );

      const divElement = document.createElement("div");

      // delete icon element
      const btn = document.createElement("button");
      btn.setAttribute("id", `${gropByDate[key][key1].id}`);
      btn.setAttribute("class", "delete_button");
      btn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

      // checkbox
      const checkboxElement = document.createElement("input");
      checkboxElement.setAttribute("type", "checkbox");
      checkboxElement.setAttribute("class", "checkboxtask");
      checkboxElement.setAttribute("id", gropByDate[key][key1].id);
      const labelForCheckbox = document.createElement("label");
      labelForCheckbox.setAttribute("class", "m-1");
      labelForCheckbox.innerText = gropByDate[key][key1].task;

      // li element append to ulelement
      ul_element.appendChild(liElement);
      liElement.appendChild(divElement);
      // liElement.appendChild(divElement2);
      divElement.appendChild(checkboxElement);
      divElement.appendChild(labelForCheckbox);
      liElement.appendChild(btn);
    }

    taskDiv.appendChild(h_six);
    taskDiv.appendChild(ul_element);
  }

  // let showData = pendingData
  //   .map((item) => {
  //     return `
  //     <div class="task">
  //     <h6>${
  //       item.date == datetoday
  //         ? "Today"
  //         : item.date == datetomorrow
  //         ? "Tomorrow"
  //         : item.date
  //     }</h6>
  //           <div class="t1-task">
  //        <input id="${
  //          item.id
  //        }" type="checkbox" name="taskname" class="checkboxtask">
  //        <label for="taskname" class="label1">${item.task}</label>
  //        </input>
  //        <button class="delete_button" id=${item.id}>
  //        <i class="fa fa-trash" aria-hidden="true"></i>
  //        </button></div>
  //     </div> `;
  //   })
  //   .join("");
  // taskDiv.document
  //   .getElementById("inputtask1")
  //   .addEventListener("keypress", function (event) {
  //     if (event.keyCode == 15) {
  //       event.preventDefault();
  //     }
  //   });
  // taskDiv.innerHTML = showData;
}
// pendingTask()
// Completed status
/*==================================================================================================== */
function compltedtask() {
  let gettasklist = JSON.parse(localStorage.getItem("tasklists"));
  let completedData = gettasklist.filter((value) => value.status == true);
  // console.log('=====>', completedData);
  let showData1 = completedData
    .map((item) => {
      return `
         <div class="t1-task">
         <input id="${item.id}" type="checkbox" name="taskname" class="checkboxtask" checked>
         <label for="taskname" class="label1">${item.task}</label>
         </input>
         <button class="delete_button" id=${item.id}>             
         <i class="fa fa-trash" aria-hidden="true"></i>
         </button></div> `;
    })
    .join("");
  taskDiv1.innerHTML = showData1;
}
// compltedtask();
/*==================================================================================================== */

//deleting the task by clicking img button
$(document).on("click", ".delete_button", function () {
  let $this = $(this).attr("id");
  let getlist1 = JSON.parse(localStorage.getItem("tasklists"));
  getlist1 = getlist1.filter((item) => item.id != $this);
  localStorage.setItem("tasklists", JSON.stringify(getlist1));
  getlocalData();
  // compltedtask();
});
/*==================================================================================================== */
// //checkbox status true /false
$(document).on("click", ".checkboxtask", function () {
  if ($(this).is(":checked")) {
    let checklist1 = JSON.parse(localStorage.getItem("tasklists"));
    checklist1.filter((item) => {
      if (item.id == $(this).attr("id")) {
        item.status = true;
      }
    });
    localStorage.setItem("tasklists", JSON.stringify(checklist1));
    getlocalData();
  } else {
    let checklist1 = JSON.parse(localStorage.getItem("tasklists"));
    checklist1.filter((item) => {
      if (item.id == $(this).attr("id")) {
        item.status = false;
      }
    });
    localStorage.setItem("tasklists", JSON.stringify(checklist1));
    getlocalData();
  }
});
/*==================================================================================================== */
