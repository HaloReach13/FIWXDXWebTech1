$('nav a').hover(
    function () {
        $(this).animate({ paddingLeft: '20px' }, 200);
    },
    function () {
        $(this).animate({ paddingLeft: '10px' }, 200);
    }
);