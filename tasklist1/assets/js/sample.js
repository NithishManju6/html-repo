/*==================================================================================================== */
$(function () {
    $("#i1").datepicker({
        // showOn: "button",
        // buttonImage: "assets/images/calendar.png",
        // buttonImageOnly: true,
        // buttonText: "Select date",
        showButtonPanel: true,
        closeText: "OK",
        onSelect: function (event) {
            event.preventDefault();
        }
    });
});
/*==================================================================================================== */
//hiding complete tasklist
$('#dots2').on("click", function () {
    $('#completedtasks').toggle();
    // $('#completedtasks').show();
    if ($(this).text('Hide Completed')) {
        $(this).text('Show Completed')
    } else {
        $(this).text('Hide Completed')
    }
});
/*==================================================================================================== */

const tasklist1 = [];
const taskDiv = document.getElementById('tasks')
const taskDiv1 = document.getElementById('completedtasks')

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

$(document).on('click', '.ui-datepicker-close', function () {
    let newtask = $('#inputtask1').val();
    // console.log('=====>', newtask, typeof (newtask));
    if (newtask == "") {
        alert("enter the task")
    } else {
        // let time = new Date()
        // let localeString = time.toLocaleString('en-US', { weekday: "short", month: "short", day: "numeric" })
        // console.info(localeString)
        let selectedDate = $('#i1').val();
        //console.log(selectedDate)
        let number = Math.random() * 10;
        let obj = { task: newtask, date: selectedDate, status: false, id: number }
        let tasklist2 = JSON.parse(localStorage.getItem('tasklists'))
        if (tasklist2 == null) {
            tasklist1.push(obj);
            localStorage.setItem("tasklists", JSON.stringify(tasklist1));
            getlocalData();
        } else {
            tasklist2.push(obj);
            localStorage.setItem("tasklists", JSON.stringify(tasklist2));
            getlocalData();
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
    let gettasklist = JSON.parse(localStorage.getItem('tasklists'))
    // let showData = gettasklist.map((item) => {
    //     return `<div class="task">
    //      <h6>${item.date}</h6>
    //      <div class="t1-task">
    //      <input id="${item.id}" type="checkbox" name="taskname" class="checkboxtask">
    //      <label for="taskname" class="label1">${item.task}</label>
    //      </input>
    //      <button class="delete_button" id=${item.id}>            
    //      <i class="fa fa-trash" aria-hidden="true"></i>
    //      </button></div>
    //   </div> `
    // }).join('');
    // showsource.innerHTML = showData;
    pendingTask()
    compltedtask()

    if (taskDiv.innerHTML == '') {
        document.getElementById("t1-hide").classList.add('d-none')
    } else {
        document.getElementById("t1-hide").classList.remove('d-none')
    }
    if (taskDiv1.innerHTML == '') {
        document.getElementById("t2-hide").classList.add('d-none')
    } else {
        document.getElementById("t2-hide").classList.remove('d-none')
    }
}
getlocalData();

function pendingTask() {
    let gettasklist = JSON.parse(localStorage.getItem('tasklists'))
    let pendingData = gettasklist.filter((value) => value.status == false)
    // console.log('=====>', completedData);
    let showData = pendingData.map((item) => {
        return `<div class="task">
         
         <h6>${item.date}</h6>
         <div class="t1-task">
         <input id="${item.id}" type="checkbox" name="taskname" class="checkboxtask">
         <label for="taskname" class="label1">${item.task}</label>
         </input>
         <button class="delete_button" id=${item.id}>             
         <i class="fa fa-trash" aria-hidden="true"></i>
         </button></div>
      </div> `
    }).join('');
    taskDiv.innerHTML = showData;
}
// pendingTask()
// Completed status
/*==================================================================================================== */
function compltedtask() {
    let gettasklist = JSON.parse(localStorage.getItem('tasklists'))
    let completedData = gettasklist.filter((value) => value.status == true)
    // console.log('=====>', completedData);
    let showData1 = completedData.map((item) => {
        return `<div class="task">
        
         <h6>${item.date}</h6>
         <div class="t1-task">
         <input id="${item.id}" type="checkbox" name="taskname" class="checkboxtask" checked>
         <label for="taskname" class="label1">${item.task}</label>
         </input>
         <button class="delete_button" id=${item.id}>             
         <i class="fa fa-trash" aria-hidden="true"></i>
         </button></div>
      </div> `
    }).join('');
    taskDiv1.innerHTML = showData1;
}
// compltedtask();
/*==================================================================================================== */

//deleting the task by clicking img button
$(document).on('click', '.delete_button', function () {
    let $this = $(this).attr('id')
    let getlist1 = JSON.parse(localStorage.getItem("tasklists"))
    getlist1 = getlist1.filter(item => item.id != $this)
    localStorage.setItem("tasklists", JSON.stringify(getlist1));
    getlocalData();
    // compltedtask();
})
/*==================================================================================================== */
// //checkbox status true /false
$(document).on('click', '.checkboxtask', function () {
    if ($(this).is(':checked')) {
        let checklist1 = JSON.parse(localStorage.getItem("tasklists"))
        checklist1.filter((item) => {
            if (item.id == $(this).attr('id')) {
                item.status = true;
            }
        })
        localStorage.setItem("tasklists", JSON.stringify(checklist1))
        //taskDiv1.innerHTML = showData1; 
        getlocalData();
        // compltedtask();
        // console.log("tester");
        // console.log("********=>>>>>>", checklist1)
        //getlocalData()
    }
    else {
        let checklist1 = JSON.parse(localStorage.getItem("tasklists"))
        checklist1.filter((item) => {
            if (item.id == $(this).attr('id')) {
                item.status = false;
            }
        })
        localStorage.setItem("tasklists", JSON.stringify(checklist1))
        //showsource.innerHTML = showData;
        getlocalData();
        // compltedtask();
        // console.log("********=>>>>>> false is working", checklist1)
    }
})
/*==================================================================================================== */
// let compltedtask01 = document.getElementById('completedtasks')


