const endDate = "27 Nov 2024 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll(".input-col")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)
 //Form Part
    var display=document.getElementById("form-main")
    var btn=document.getElementById("btn")

 btn.addEventListener("click",(ele)=>{
    display.style.display="block";
 })

function show(){
    var name1=document.getElementById("name1");
    var name2=document.getElementById("name2");
    
    if(name1.value==""){
        alert("kindly Enter your mail Id")
    return false
    }

    if(name2.value==""){
        alert("kindly Enter your Mobile Number")
    return false
    }
}


