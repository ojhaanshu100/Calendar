const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//getiing new date, current year and month
let date = new Date();
let currdate= date.getDate();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const months = ["January", "Fabruary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const renderCalender = () => {
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();   //getting last date of month
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfprevMonth = new Date(currYear, currMonth, 0).getDate();
    let tr = "";
    let n = 1;
    let m = 1;
    let x = 1;
    for (let i = 1; i <= 5; i++) {
        let td = "";
        for (let j = 1; j <= 7; j++) {
            if (m <= lastDateOfMonth && n > firstDayOfMonth) {
                if(m==currdate && currMonth==(new Date().getMonth()) && currYear==(new Date().getFullYear())){
                    td += '<td class="current">' + m + "</td>";
                }
                else{
                    td += "<td>" + m + "</td>";
                }
                m++;
            }
            else if (n <= firstDayOfMonth) {
                td += '<td class="inactive">' + (lastDateOfprevMonth - firstDayOfMonth + j) + '</td>';
            }
            else if (m > lastDateOfMonth) {
                td += '<td class="inactive">' + x + '</td>';
                x++;
            }
            else {
                td += "<td>" + "" + "</td>";
            }
            n++
        }
        tr += "<tr>" + td + "</tr>";
    }
    currentDate.innerText = months[currMonth] + " " + currYear;
    days.innerHTML = tr;
}
renderCalender();
//code for previous month
prev.addEventListener("click", () => {
    currMonth = currMonth - 1;
    if (currMonth < 0) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    else {
        let date = new Date();
    }
    renderCalender();
})
//code for next month
next.addEventListener("click", () => {
    currMonth = currMonth + 1;
    if (currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    else {
        let date = new Date();
    }
    renderCalender();
})
