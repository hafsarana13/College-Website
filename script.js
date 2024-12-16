window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
        document.getElementById("navbar").style.boxShadow =
            "0 1px 6px rgba(57,73,76,.35)";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
};