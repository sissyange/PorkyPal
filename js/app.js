/* ==========================================
   PORKYPAL - GET STARTED SCREEN
========================================== */


/* ==========================================
   GET ELEMENTS
========================================== */

const getStartedBtn =
    document.getElementById("getStartedBtn");

const loginBtn =
    document.getElementById("loginBtn");


/* ==========================================
   GET STARTED BUTTON
========================================== */

if (getStartedBtn) {

    getStartedBtn.addEventListener(
        "click",
        function () {

            /*
             * Get Started opens the Login screen.
             */

            window.location.href =
                "login.html";

        }
    );

}


/* ==========================================
   LOGIN BUTTON
========================================== */

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        function () {

            /*
             * Login button opens the Login screen.
             */

            window.location.href =
                "login.html";

        }
    );

}


/* ==========================================
   PREVENT DOUBLE CLICK
========================================== */

function navigateToLogin() {

    window.location.href =
        "login.html";

}
