function showtime(){
    let time = new Date();
    let hour = time.getHours();
    let morning = "Good Morning ❤️" , afternoon = "Good Afternoon ❤️" , evening = "Good Night ❤️"

    document.getElementById("Time").textContent = time.toLocaleTimeString("en-GB" , {hour12 : false});

    if(hour >= 6 && hour < 12){
        document.getElementById("msg").textContent = morning
    }else if (hour >= 12 && hour < 18){
        document.getElementById("msg").textContent = afternoon
    }else {
        document.getElementById("msg").textContent = evening
    }
}
showtime()
setInterval(showtime , 1000)
