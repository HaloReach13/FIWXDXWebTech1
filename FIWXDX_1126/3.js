$(document).ready(function() {
    // 1. Fejléc szövegről elhúzott egér információ kiírása
    $("h1").mouseleave(function(e) {
        const info = `Egér elhúzva a fejlécről`;
        $("#mouse-info").html(info);
    });
    
    // 2. Első bekezdésben lévő "Kattints ide" - elrejti az első bekezdést
    $("p:first strong").click(function() {
        $(this).closest("p").hide();
    });
    
    // 3. Második bekezdésben lévő "Kattints ide duplán" - elrejti a 2. bekezdést
    $("p:eq(1) strong").dblclick(function() {
        $(this).closest("p").hide();
    });
    
    // 4. Gomb felé állva a kurzorral - információs ablak jelenik meg
    $("#jelentkezes").hover(
        function(e) {
            $("#info-box")
                .text("Kattints a jelentkezéshez!")
                .css({
                    left: e.pageX + 10,
                    top: e.pageY + 10
                })
                .show();
        },
        function() {
            $("#info-box").hide();
        }
    );
    
    // 5. Bemeneti mezőn fell/lefelé mozgatva az egerét a keret színe változik
    $("input").on("mouseenter mouseleave", function(e) {
        if (e.type === "mouseenter") {
            $(this).css("border-color", "#ff9900");
        } else {
            $(this).css("border-color", "#ddd");
        }
    });
    
    // 6. Bemeneti mezőn belül kattintunk (kereten belül) - kitölti egy színnel
    $("input").click(function() {
        $(this).css("background-color", "#e6f7ff");
    });
});