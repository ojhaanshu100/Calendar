const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const time = document.querySelector(".time");
const prev = document.getElementById("prev_week");
const next = document.getElementById("next_week");
const currtime= document.querySelector(".currtime");

//getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currdate = date.getDate();
let currhour=date.getHours();
showTime=()=>{
    let Time=new Date();
    let currhours=Time.getHours();
    let currmin=Time.getMinutes();
    let currsec=Time.getSeconds();
    currtime.innerHTML="<h3>"+currhours+" : "+currmin+" : "+currsec+"</h3>";
}
setInterval(showTime,1000);
const months = ["January", "Fabruary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const renderCalender_week = () => {
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();   //getting last date of month
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfprevMonth = new Date(currYear, currMonth, 0).getDate();
    let today = new Date().getDay();
    let tr = "";
    let tm="";
    let n = 1;
    let m = 1;
    let tp = "";
    for (let i = 0; i <= 7; i++) {
        if (i == 0) {
            tp = "<th></th>";
        }
        else if (i > 0 && (currdate - today + i - 1) < lastDateOfMonth && (currdate - today + i - 1) > 0) {
            tp += '<th class="head">' + (currdate - today + i - 1) + '</th>';
        }
        else if ((currdate - today + i) > lastDateOfMonth) {
            tp += '<th class="inactive" "head">' + n + '</th>';
            n++;
        }
        else if ((currdate - today + i - 1) <= 0) {
            tp += '<th class="inactive" "head">' + (lastDateOfprevMonth - firstDayOfMonth + m) + '</th>';
            m++;
        }
    }
    tr = "<tr>" + tp + "</tr>";
    for (let k = 0; k <= 23; k++){
        let td = "";
        for(let l = 0; l <= 7; l++){
            if(l==0 && k<23){
                td += '<td class="interval">' + (k+1)+":00" + '</td>';
            }
            else if(l==0 && k==23){
                td += '<td class="interval">' + "" + '</td>';
            }
            else if(k==currhour && l==(today+1) && currdate== (new Date().getDate())){
                td += '<td class="current">' + "⌛⌛" + '</td>';
            }
            else{
                td += '<td>' + '' + '</td>';
            }
        }
        tm += "<tr>" + td + "</tr>";
    }
    currentDate.innerText = months[currMonth] + " " + currYear;
    days.innerHTML = tr;
    time.innerHTML = tm;
}
renderCalender_week();

//onclick funtion to print previous week
prev_week.addEventListener("click", () => {
    if (currdate > 7) {
        currdate = currdate - 7;
    }
    else if(currdate<=7){
        let lastDateOfprevMonth = new Date(currYear, currMonth, 0).getDate();
        currdate = currdate - 7+lastDateOfprevMonth;
        currMonth = currMonth - 1;
        date = new Date(currYear, currMonth,currdate);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    else {
        let date = new Date();
    }
    renderCalender_week();
})

//onclick funtion to print next week 
next_week.addEventListener("click", () => {
    
    let today = new Date(currYear, currMonth, currdate).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    if ((currdate + 7) < lastDateOfMonth) {
        currdate = currdate + 7;
    }
    else if((currdate + 7)>lastDateOfMonth){
        currdate=currdate+7-lastDateOfMonth;
        currMonth = currMonth + 1;
        date = new Date(currYear, currMonth,currdate);
        currYear = date.getFullYear();
        currdate = date.getDate();
        currMonth = date.getMonth();
    }
    else {
        let date = new Date();
    }
    renderCalender_week();
})