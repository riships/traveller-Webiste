// Scroll disabled while navbar is active
function myScroll() {
    var checkBox = document.getElementById("menu_toggle");
    var overfl = document.getElementById("overfl");
    if (checkBox.checked == true) {
        overfl.style.overflow = "hidden";
    } else {
        overfl.style.overflow = "scroll";
    }
};
// while you click one of the nav link navbar will be inactive
var mnu_link = document.querySelectorAll('.mnu_link');
var uncheck = document.querySelector('#menu_toggle');
function evenUn() {
    if (uncheck.checked == true) {
        uncheck.checked = false;
        overfl.style.overflow = "scroll";
    }
    else {
        uncheck.checked = true;
    }
};