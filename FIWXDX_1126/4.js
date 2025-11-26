$(document).ready(function() {
    // Elrejt gomb - elrejti a három bekezdést
    $("#elrejt-bekezdes").click(function() {
        $(".bekezdes").hide();
    });
    
    // Megjelenít gomb - megjeleníti a három bekezdést
    $("#megjelenit-bekezdes").click(function() {
        $(".bekezdes").show();
    });
    
    // Elrejt/Megjelenít gomb - kapcsoló funkció
    $("#kapcsol-bekezdes").click(function() {
        $(".bekezdes").toggle();
    });
    
    // Áttetszőség gombok
    $("#atlatszosag-01").click(function() {
        $("#urlap").css("opacity", "0.1");
    });
    
    $("#atlatszosag-05").click(function() {
        $("#urlap").css("opacity", "0.5");
    });
    
    $("#atlatszosag-08").click(function() {
        $("#urlap").css("opacity", "0.8");
    });
    
    // Űrlap elrejtése/megjelenítése
    $("#elrejt-urlap").click(function() {
        $("#urlap").hide();
    });
    
    $("#megjelenit-urlap").click(function() {
        $("#urlap").show();
    });
    
    $("#kapcsol-urlap").click(function() {
        $("#urlap").toggle();
    });
});