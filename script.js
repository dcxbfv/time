// HTML
    const time = document.querySelector("#time");
    const msg = document.querySelector("#msg");
    const Lang = document.querySelector("#Lang");
    const tav = document.querySelector("#tav");
    const name = document.querySelector("#name");
    const tavfa = document.querySelector("#tavfa");
    const namefa = document.querySelector("#namefa")

function Clock(){
    // Lets
    let Time = new Date();
    let hour = Time.getHours();
    let morning = "Good Morning ❤️" , afternoon = "Good Afternoon ❤️" , Night = "Good Night ❤️";
    let morningfa = "صبح بخیر ❤️" , afternoonfa = "بعد از ظهر بخیر ❤️" , Nightfa = "شب بخیر ❤️";
    // Show Time
    time.textContent = Time.toLocaleTimeString("en-GB" , {hour12 : false});
    // Ifs For Massage
    if (Lang.value === "English"){
        tav.innerHTML = "Development By";
        name.innerHTML = "Ali Asgharian ❤️"
        document.querySelector("#dev").style.display = "flex";
        document.querySelector("#devfa").style.display = "none";
        if (hour > 6 && hour < 12){
            msg.innerHTML = morning;
        }else if (hour > 12 && hour < 18){
            msg.innerHTML = afternoon;
        }else {
            msg.innerHTML = Night;
        }
    }else {
        tavfa.innerHTML = "ساخته شده توسط";
        namefa.innerHTML = "❤️علی اصغریان";
        document.querySelector("#dev").style.display = "none";
        document.querySelector("#devfa").style.display = "flex";
        if (hour > 6 && hour < 12){
            msg.innerHTML = morningfa;
        }else if (hour > 12 && hour < 18){
            msg.innerHTML = afternoonfa;
        }else {
            msg.innerHTML = Nightfa;
        }
    }
}
Clock()
setInterval(Clock , 1000)