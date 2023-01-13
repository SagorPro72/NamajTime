//Time Section
const timeSec = () => {
  setInterval(() => {
    const timeOut = document.querySelector(".time-now");
    // const ifter = document.querySelector('.ifter')
    let day = new Date();
    let hours = day.getHours();
    let mins = day.getMinutes();
    let secs = day.getSeconds();

    //functional section
    if (hours > 12) {
      hours = ` 0${hours - 12}`;
    }
    if (mins < 10) {
      mins = `0${mins}`;
    }
    if (secs < 10) {
      secs = `0${secs}`;
    }
    timeOut.innerHTML = ` ${hours}:${mins}:${secs} ${"PM"}`;
  });
};
timeSec();
//salad time
function setValue() {
  const ifter = document.querySelector(".ifter");
  const sahari = document.querySelector(".sahari");
  const fazar = document.querySelector(".fazar");
  const johor = document.querySelector(".johor");
  const asor = document.querySelector(".asor");
  const magrib = document.querySelector(".magrib");
  const isha = document.querySelector(".isha");
  const dateToday = document.querySelector(".date-now");

  let ifterTime = 00;
  let siharitime = 00;
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let salahours = today.getHours();
  //set today date
  if(month == 0){
    month = 1
  }

  console.log(month)
  if (date < 10) {
    date = `0${date}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  dateToday.innerHTML = `${date}/${month}/${year}`;

  //conditional stadmaent

  //next sala alert section
  let salaName = document.querySelector(".nextSalaName");
  let salaTime = document.querySelector(".nextSalaTime");

  if (salahours > 6) {
    salaName.innerHTML = "যোহর";
    salaTime.innerHTML = `01:30`;
  }
  if (salahours > 14) {
    salaName.innerHTML = "আসর";
    salaTime.innerHTML = `05:00`;
  }
  if (salahours > 17) {
    salaName.innerHTML = "মাগরিব";
    salaTime.innerHTML = `06:${ifterTime}`;
  }
  if (salahours > 18) {
    salaName.innerHTML = "এশা";
    salaTime.innerHTML = `08:00`;
  }
  if (salahours > 22) {
    salaName.innerHTML = "ফজর";
    salaTime.innerHTML = `04:${siharitime + 15}`;
  }
}
setValue();
// let btn = document.querySelector('button');
// btn.addEventListener('click' , function(e){
//   e.preventDefault();
//   setValue();
// })

const setTimeBtn = document.querySelector(".SetTimeBtn");
const wrapper = document.querySelector(".timeWrapper");
const mainWrapper = document.querySelector(".wrapper");
setTimeBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
  mainWrapper.classList.add("active");
});

//New set Namaj Time section
function setTime() {
  const fazorHour = document.querySelector(".fazorHour");
  const fazorMin = document.querySelector(".fazorMin");
  const johorTimeMin = document.querySelector(".johorMin");
  const johorTimeSec = document.querySelector(".johorSec");
  const asorHour = document.querySelector(".asorHour");
  const asorMin = document.querySelector(".asorMin");
  const magribHour = document.querySelector(".magribHour");
  const magribMin = document.querySelector(".magribMin");
  const ishaTimeHour = document.querySelector(".ishaHour");
  const ishaTimeMin = document.querySelector(".ishaMin");
  const submitBtn = document.querySelector(".submitBtn button");

  const fazar = document.querySelector(".fazar");
  const johor = document.querySelector(".johor");
  const asor = document.querySelector(".asor");
  const magrib = document.querySelector(".magrib");
  const isha = document.querySelector(".isha");

  submitBtn.addEventListener("click", () => {
    let fajorSetHoure = Number(fazorHour.value);
    let fajorSetMin = Number(fazorMin.value);
    let finalFajorTime = ` 0${fajorSetHoure} : ${fajorSetMin} AM`;

    let johorSetHour = Number(johorTimeMin.value);
    let johorSetMin = Number(johorTimeSec.value);
    let finalJohorTime = ` 0${johorSetHour} : ${johorSetMin} PM`;

    let asorSetHour = Number(asorHour.value);
    let asorSetMin = Number(asorMin.value);
    let finalAsorTime = ` 0${asorSetHour} : ${asorSetMin} PM`;

    let magribSetHour = Number(magribHour.value);
    let magribSetMin = Number(magribMin.value);
    let finalMagribTime = ` 0${magribSetHour} : ${magribSetMin}PM`;

    let ishaSetHour = Number(ishaTimeHour.value);
    let ishaSetMin = Number(ishaTimeMin.value);
    let finalIshaTime = ` 0${ishaSetHour} : ${ishaSetMin} PM`;

    fazar.innerHTML = `${finalFajorTime}`;
    johor.innerHTML = `${finalJohorTime}`;
    asor.innerHTML = `${finalAsorTime}`;
    magrib.innerHTML = `${finalMagribTime}`;
    isha.innerHTML = `${finalIshaTime}`;

    let salaName = document.querySelector(".nextSalaName");
    let salaTime = document.querySelector(".nextSalaTime");

    let today = new Date();
    let salahours = today.getHours();

    if (salahours > 6) {
      salaName.innerHTML = "যোহর";
      salaTime.innerHTML = ` ${finalJohorTime}`;
    }
    if (salahours > 14) {
      salaName.innerHTML = "আসর";
      salaTime.innerHTML = ` ${finalAsorTime}`;
    }
    if (salahours > 17) {
      salaName.innerHTML = "মাগরিব";
      salaTime.innerHTML = ` ${finalMagribTime}`;
    }
    if (salahours > 18) {
      salaName.innerHTML = "এশা";
      salaTime.innerHTML = ` ${finalIshaTime}`;
    }
    if (salahours > 22) {
      salaName.innerHTML = "ফজর";
      salaTime.innerHTML = ` ${finalFajorTime}`;
    }

    wrapper.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
}

setTime();
