let openinghourstartp = document.getElementById('openinghourstart');
let openinghourclosep = document.getElementById('openinghourclose');
var openmons = "12pm";
var opentues = "12pm";
var openweds = "1pm";
var openthus = "1pm";
var openfris = "10am";
var opensats = "11am";
var opensuns = "2pm";
var openmonc = "9pm";
var opentuec = "9pm";
var openwedc = "10pm";
var openthuc = "11pm";
var openfric = "1am";
var opensatc = "12am";
var opensunc = "7:30pm";

const d = new Date();
let day = d.getDay();

if (day == 0){
    openinghourstartp.innerText = opensuns;
    openinghourclosep.innerText = opensunc;
}
if (day == 1){
    openinghourstartp.innerText = openmons;
    openinghourclosep.innerText = openmonc;
}
if (day == 2){
    openinghourstartp.innerText = opentues;
    openinghourclosep.innerText = opentuec;
}
if (day == 3){
    openinghourstartp.innerText = openweds;
    openinghourclosep.innerText = openwedc;
}
if (day == 4){
    openinghourstartp.innerText = openthus;
    openinghourclosep.innerText = openthuc;
}
if (day == 5){
    openinghourstartp.innerText = openfris;
    openinghourclosep.innerText = openfric;
}
if (day == 6){
    openinghourstartp.innerText = opensats;
    openinghourclosep.innerText = opensatc;
}


//Pub images

var pi1btn = document.getElementById('pi1');
var pi2btn = document.getElementById('pi2');
var pi1modal = document.getElementById('img1modal');
var pi2modal = document.getElementById('img2modal');
var close1 = document.getElementById('close-modal1');
var close2 = document.getElementById('close-modal2');
var mdc1 = document.getElementById('mdc1');
var mdc2 = document.getElementById('mdc2');
var mbr1 = document.getElementById('mbr1');
var mbr2 = document.getElementById('mbr2');

pi1btn.addEventListener('click', function(){
    pi1modal.classList.remove('closed');
    pi1modal.classList.add('open');
    mdc1.classList.add('mdcz-after');
    mdc1.classList.remove('mdcz');
    mbr1.classList.add('mbrz-after');
    mbr1.classList.remove('mbrz');
});

pi2btn.addEventListener('click', function(){
    pi2modal.classList.remove('closed');
    pi2modal.classList.add('open');
    mdc2.classList.add('mdcz-after');
    mdc2.classList.remove('mdcz');
    mbr2.classList.add('mbrz-after');
    mbr2.classList.remove('mbrz');
});

close1.addEventListener('click', function(){
    pi1modal.classList.remove('open');
    pi1modal.classList.add('closed');
    mdc1.classList.remove('mdcz-after');
    mdc1.classList.add('mdcz');
    mbr1.classList.remove('mbrz-after');
    mbr1.classList.add('mbrz');
});

close2.addEventListener('click', function(){
    pi2modal.classList.remove('open');
    pi2modal.classList.add('closed');
    mdc2.classList.remove('mdcz-after');
    mdc2.classList.add('mdcz');
    mbr2.classList.remove('mbrz-after');
    mbr2.classList.add('mbrz');
});