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
// const newtasks = [];
// let n = newtasks.length;
// document.querySelector('#i1').onclick = function () {
//     if (document.querySelector('#newtask input').value.length == 0) {
//         console.log("Please Enter a Task");
//     }

//else {
// document.querySelector('#tasks').innerHTML += `
//     <div class="task">
//         <span id="taskname">
//             ${document.querySelector('#newtask input').value}
//         </span>
//         <button class="delete_button">
//            <i class="fa fa-trash" aria-hidden="true"></i>
//         </button>
//     </div>
// `;

// var current_tasks = document.querySelectorAll(".delete_button");
// for (var i = 0; i < current_tasks.length; i++) {
//     current_tasks[i].onclick = function () {
//         this.parentNode.remove();
//     }
// }
// }
// }

// $(document).ready(function () {
//     $('.ui-datepicker-close').click(function () {
//         alert('hey')
//     })
// })
const tasklist1 = [];
// let n = tasklist1.length;
//$('#i1').click(function () {
// let newtask = $('#task1').val();
// let selectedDate = $('#i1').val()
//     console.log("=====>", selectedDate)
//     //adding the new item to tasklist1 array
// let obj = { task: newtask, date: selectedDate }
//     // 
//     //adding the new item to tasklist1 array
// tasklist1.push(obj);
//     console.log('tasklist1 new item' + JSON.stringify(tasklist1));
//     // localStorage.setItem("listtasks", JSON.stringify(tasklist1));
//})



$(document).on('click', '.ui-datepicker-close', function () {
    let newtask = $('#inputtask1').val();
    let selectedDate = $('#i1').val()
    let obj = { task: newtask, date: selectedDate }
    tasklist1.push(obj);
    console.log(tasklist1);
    localStorage.setItem("tasklists", JSON.stringify(tasklist1));
    document.getElementById('tasks').innerHTML += `
     <div class="task">
         <input id="taskname" type="checkbox" name="taskname">
         <label for="taskname" class="label1">${document.querySelector('#newtask input').value}</label>
         </input>
        <button class="delete_button">
           <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
 `;

    var current_tasks = document.querySelectorAll(".delete_button");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }
});

let newtasklist1 = JSON.parse(localStorage.getItem("tasklists"));
console.log("getatoreditem", newtasklist1);
document.getElementById('tasks').innerHTML = newtasklist1
    .map((user1) => {
        return `<div class="task">
     <input id="taskname" type="checkbox" name="taskname">
         <label for="taskname" class="label1">${user1.task}</label>
         </input>
        <button class="delete_button">
           <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
     </div>`
    }
    ).join("");
















