const currentTime = () => {
    const dayEl = document.getElementById("date");
    const timeEl = document.getElementById("time");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    hh = hh < 10 ? `0${hh}` : hh; 
    mm = mm < 10 ? `0${mm}` : mm; 
    ss = ss < 10 ? `0${ss}` : ss; 

    let dateEl = `${day} - ${month} - ${year}`;
    let time = `${hh} : ${mm} : ${ss}`;
    dayEl.innerHTML = dateEl;
    timeEl.innerHTML = time;

};

currentTime();
setInterval(currentTime, 1000);