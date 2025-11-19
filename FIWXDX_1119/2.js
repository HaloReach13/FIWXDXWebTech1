$(document).ready(function() {
    $("#K1").click(function() {
        $("ul li:lt(2)").hide();
        $("a[href]").hide();
    });

    $("#K2").click(function() {
        $("ul li:lt(2)").hide();
        $("a[href]").hide();
        $(this).hide();
    });

    $("#K3").click(function() {
        $("h1").hide();
        $("ul li:lt(2)").hide();
        $("a[href]").hide();
    });

    $("#K4").click(function() {
        $("ul li:lt(2)").hide();
        $("a").contents().filter(function() {
            return this.nodeType === 3;
        }).wrap('<span class="link-text"></span>');
        $(".link-text").hide();
        $("a[href]").hide();
    });

    $("#K5").click(function() {
        $("ul li:lt(2)").hide();
        $("a[href]").hide();
        $("table tr:even").hide();
    });
});