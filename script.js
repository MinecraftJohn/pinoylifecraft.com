var splashScreen = document.getElementById("splashScreen")
var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var navList = document.getElementById("navList")
var mobilenavLogo = document.getElementById("mobilenavLogo")
var mobilenavMenuBackground = document.getElementById("mobilenavMenuBackground")
var aboutTrailerVideoBG = document.getElementById("aboutTrailerVideoBG")
var aboutTrailerVideo = document.getElementById("aboutTrailerVideo")

// PRE LOADER or SPLASH SCREEN
window.addEventListener("load", function () {
    splashScreen.style.animation = "splashScreen .4s forwards cubic-bezier(0.4, 0, 1, 1)"
})
function splashScreenout () {
    splashScreen.style.animation = "splashScreenout .2s forwards cubic-bezier(0.4, 0, 1, 1)"
}

// NAVIGATION MENU
function mobilenavMenuFadeout () {
    mobilenavMenu.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.display = "block"
    mobilenavMenuClose.style.animation = "NavMenuClose .3s forwards"
    mobilenavLogo.style.visibility = "hidden"
    navList.style.transition = "left .3s"
    navList.style.left = "0px"
    mobilenavMenuBackground.style.display = "block"
}
function mobilenavMenuFadein () {
    mobilenavMenu.style.animation = "NavMenuClose .3s forwards"
    mobilenavMenuClose.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.visibility = "hidden"
    mobilenavLogo.style.visibility = "visible"
    navList.style.left = "-250px"
    mobilenavMenuBackground.style.display = "none"
}

// TRAILER (PLC SERVER)
function trailerVideoOpen () {
    aboutTrailerVideo.src = "https://www.youtube.com/embed/ac5s6a5ZbWM?autoplay=1"
    aboutTrailerVideoBG.style.display = "block"
}
function trailerVideoClose () {
    aboutTrailerVideo.src = "https://www.youtube.com/embed/ac5s6a5ZbWM?autoplay=0"
    aboutTrailerVideoBG.style.display = "none"
}