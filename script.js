setInterval(()=>{
    const d = new Date();
    const hrs = d.getHours();
    const minute = d.getMinutes();    
    const second = d.getSeconds();

    hr_rotation = 30 * hrs+ minute / 2; //converting current time
    min_rotation = 6 * minute;
    sec_rotation = 6 * second;
    hours.style.transform = `rotate(${hr_rotation}deg)`;
    minutes.style.transform = `rotate(${min_rotation}deg)`;
    seconds.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
