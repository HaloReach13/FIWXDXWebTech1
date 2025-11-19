$(document).ready(function() {
    $("#hideButton").click(function() {
        $(".hideable").hide();
    });

    $("#meLink").click(function(e) {
        e.preventDefault();
        window.open("https://www.uni-miskolc.hu/", "_blank")
    })
});