

let icon = document.getElementById("icon");

icon.onclick = () =>{
    document.body.classList.toggle("dark-theme")
    if( document.body.classList.contains("dark-theme") ){
        icon.src = "images/sun.png"
    }else{
        icon.src = "images/moon.png"
    }
}

let preloader = document.getElementById("preloader")

window.addEventListener("load", ()=>{
    preloader.style.display = "none";
})