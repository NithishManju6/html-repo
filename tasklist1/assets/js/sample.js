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
// document.querySelector('#tasks').innerHTML += 
// `
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
//}
// }
const tasklist1 = [];
const taskDiv = document.getElementById('tasks')
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

const showsource = document.getElementById('tasks')

const getlocalData = () => {
    let gettasklist = JSON.parse(localStorage.getItem('tasklists'))
    let showData = gettasklist.map((item) => {
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
    showsource.innerHTML = showData;
}
getlocalData();

// var current_tasks = document.querySelectorAll(".delete_button");
$(document).on('click', '.delete_button', function () {
    let $this = $(this).attr('id')
    let getlist1 = JSON.parse(localStorage.getItem("tasklists"))
    getlist1 = getlist1.filter(item => item.id != $this)
    localStorage.setItem("tasklists", JSON.stringify(getlist1));
    getlocalData();
})

//checkbox status true /false
$(document).on('click', '.checkboxtask', function () {
    if ($(this).is(':checked')) {
        alert('checked');
        let checklist1 = JSON.parse(localStorage.getItem("tasklists"))
        // console.log(checklist1, "working")
        checklist1.filter((item) => {
            if (item.id == $(this).attr('id')) {
                item.status = true;
            }
        })
        // console.log(checklist1, "=====>working")
        localStorage.setItem("tasklists", JSON.stringify(checklist1))
        console.log("********=>>>>>>", checklist1)

    }
    else {
        alert('un checked');
        let checklist1 = JSON.parse(localStorage.getItem("tasklists"))
        //console.log(checklist1, "false is working ")
        checklist1.filter((item) => {
            if (item.id == $(this).attr('id')) {
                item.status = false;
            }
        })
        // console.log(checklist1, "=====>false is working")
        localStorage.setItem("tasklists", JSON.stringify(checklist1))
        console.log("********=>>>>>> false is working", checklist1)
    }
})





//const completedlistid = document.getElementById('completedtasks')
// $(document).on('click', '.checkboxtask', function () {
//     let completetasklist1 = $(this).attr('id')
//     if ($(this).is(':checked') == completetasklist1 >= 1) {
//         let completelist1 = JSON.parse(localStorage.getItem("tasklists"))
//         completelist1.filter((item) => {
//             item.status = true;
//             localStorage.setItem("tasklist-completed", JSON.stringify(completelist1))
//             console.log("'if condition'completelist working1", completelist1)
//         })

//         // completelist1.filter((item) => {
//         //     if (item.id == completetasklist1) {
//         //         item.status = true;
//         //         localStorage.setItem("tasklists", JSON.stringify(completelist1))
//         //         console.log("'if condition'completelist working2", completelist1)
//         //     }
//         // })

//     }
//     // completedlistid.innerHTML = completelist1
//     else {
//         let completelist1 = JSON.parse(localStorage.getItem("tasklists"))
//         completelist1.filter((item) => {
//             item.status = false;
//             localStorage.setItem("tasklist-completed", JSON.stringify(completelist1))
//             console.log("'if condition'completelist working1", completelist1)
//         })

//     }
//     // getlocalData()
//     // completedlistid.innerHTML = completetasklist1
//     // console.log(completedlistid)
// })
const completedlistid = document.getElementById('completedtasks')
// let tasklistcompleted = () => {
//     let taskcompleted = JSON.parse(localStorage.getItem("tasklists"))
//     // taskcompleted.filter((item) => {
//     //     const
//     //     // if (item.id) {
//     //     //     item.status = true;
//     //     //     localStorage.setItem("tasklists", JSON.stringify(taskcompleted))
//     //     //     console.log(taskcompleted, "===>true taskcompleted")
//     //     // }
//     //     // else {
//     //     //     item.status = false;
//     //     //     localStorage.setItem("tasklists", JSON.parse(taskcompleted))
//     //     //     console.log(taskcompleted, "===>false taskcompleted")
//     //     // }
//     // })
//     const truelist = []
//     const falselist = []
//     taskcompleted.forEach(item => {
//         if (item.status = true) {
//             truelist.push(item);
//             console.log(truelist, "truelist is working")
//             localStorage.setItem("tasklists", JSON.stringify(taskcompleted))
//         }
//         else {
//             falselist.push(item)
//             console.log(falselist, "falselist is working")
//         }
//     }); completedlistid.innerHTML = taskcompleted
//     console.log(taskcompleted, "task in working")
//     return [truelist, falselist];
//}
// $(document).on('click', '.checkboxtask', function () {
//     if ($(this).is(':checked')) {
//         alert('checked in true');

//         // const truelist = []
//         // const falselist = []
//         taskcompleted.filter(item => {
//             if (item.id == $(this).attr('id')) {
//                 let taskcompleted = JSON.parse(localStorage.getItem("tasklists"))
//                 taskcompleted.filter(item.status);
//                 item.status = true;
//                 localStorage.setItem("tasklists", JSON.stringify(taskcompleted))
//                 console.log(taskcompleted, "truelist taskcompleted")
//             }
//             else {
//                 let taskcompleted = JSON.parse(localStorage.getItem("tasklists"))
//                 item.status = false;
//                 localStorage.setItem("tasklists", JSON.stringify(taskcompleted))
//                 console.log(falselist, "falselist is working")
//                 // console.log(taskcompleted, "falselist taskcompleted")
//             }
//             //localStorage.setItem("tasklists", JSON.stringify(taskcompleted))
//             //console.log(truelist, "truelist is working")
//             //console.log(taskcompleted, "truelist taskcompleted")
//         });
//     }
// })















