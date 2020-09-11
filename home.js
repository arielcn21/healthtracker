
/* for the login page */
var login = document.getElementById('idlogin');


window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

/* homepage */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var coll = document.getElementsByClassName("collaps");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});
}
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
}



/* scheduler */

/* activity */
function calculateCaloriesBurned() {
  var bw = document.getElementById('bodyWeight').value;
  var cals = (4 * 3.5 * bw)/200;
  document.getElementById('caloriesBurned').value = cals;
}


function stepCaloriesBurned(){
  var st = document.getElementById('stepx').value;
  var stx = st/20;
  document.getElementById('caloriesBurnedx').value = stx;
}

/* health */

/* statistics */
//script for calculation of total work time
var cal_work = document.querySelector("#cal_work");
cal_work.addEventListener('click',function(event){
  event.preventDefault();
var worktime=document.getElementById("worktime");
var workendtime=document.getElementById("workendtime");
var workdifference= document.getElementById("workdifference");
splitStartTime = worktime.value.split(":");
splitEndTime= workendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
workdifference.value=result;
sessionStorage.setItem('work_hour', h);
});

//script for calculation of total exercise time
var cal_exercise = document.querySelector("#cal_exercise");
cal_exercise.addEventListener('click',function(event){
  event.preventDefault();
var exercisetime=document.getElementById("exercisetime");
var exerciseendtime=document.getElementById("exerciseendtime");
var exercisedifference= document.getElementById("exercisedifference");
splitStartTime = exercisetime.value.split(":");
splitEndTime= exerciseendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
exercisedifference.value=result;
sessionStorage.setItem('exercise_hour', h);
});

//script for calculation of total sleep time
var cal_sleep = document.querySelector("#cal_sleep");
cal_sleep.addEventListener('click',function(event){
  event.preventDefault();
var sleeptime=document.getElementById("sleeptime");
var sleependtime=document.getElementById("sleependtime");
var sleepdifference= document.getElementById("sleepdifference");
splitStartTime = sleeptime.value.split(":");
splitEndTime= sleependtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
sleepdifference.value=result;
sessionStorage.setItem('sleep_hour', h);
});

//script for calculation of total study time
var cal_study = document.querySelector("#cal_study");
cal_study.addEventListener('click',function(event){
  event.preventDefault();
var studytime=document.getElementById("studytime");
var studyendtime=document.getElementById("studyendtime");
var studydifference= document.getElementById("studydifference");
splitStartTime = studytime.value.split(":");
splitEndTime= studyendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
studydifference.value=result;
sessionStorage.setItem('study_hour', h);
});

//script for calculation of total extra time
var cal_extra = document.querySelector("#cal_extra");
cal_extra.addEventListener('click',function(event){
  event.preventDefault();
var extratime=document.getElementById("extratime");
var extraendtime=document.getElementById("extraendtime");
var extradifference= document.getElementById("extradifference");
splitStartTime = extratime.value.split(":");
splitEndTime= extraendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}

var result = h +":"+ m;
extradifference.value=result;
sessionStorage.setItem('extra_hour', h);
});
/* schedule in health */
//chart data
console.log(sessionStorage.getItem('work_hour'));
console.log(sessionStorage.getItem('exercise_hour'));
console.log(sessionStorage.getItem('sleep_hour'));
console.log(sessionStorage.getItem('study_hour'));
console.log(sessionStorage.getItem('extra_hour'));

var work_hour=sessionStorage.getItem('work_hour');
var exercise_hour=sessionStorage.getItem('exercise_hour');
var sleep_hour=sessionStorage.getItem('sleep_hour');
var study_hour=sessionStorage.getItem('study_hour');
var extra_hour=sessionStorage.getItem('extra_hour');

var chartjson = {
  "title": "My Statistics",
  "data": [{
    "name": "Work",
    "score": work_hour
  }, {
    "name": "Exercise",
    "score": exercise_hour
  }, {
    "name": "Sleep",
    "score": sleep_hour
  }, {
    "name": "Study",
    "score": study_hour
  }, {
    "name": "Extra",
    "score": extra_hour
  }],
  "xtitle": "Hours",
  "ytitle": "Works",
  "ymax": 100,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}

//chart colors
var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

//constants
var TROW = 'tr',
  TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  var prefix = chartjson.prefix || '';
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;

function goBack()
  {
  window.history.back()
  }
;
