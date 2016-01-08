(function($) {

    $('#submit').click(function() {
        var pstar = Number($('#P-star').val());

        var T = Number($('#T').val());
        var D = Number($('#D').val());
        var M = Number($('#M').val());
        var P = Number($('#P').val());

        console.log("T " + T);
        console.log("M " + M);
        console.log("D " + D);
        console.log("P " + P);

        var shouldDrive = pstar > T * P / (T - 2 * D / M );
        console.log(T * P / (T - 2 * D / M ));

        if (shouldDrive) {
            $('.answer').text("You should go to that the station out of your way!");
        } else {
            $('.answer').text("Don't go to the station out of your way!");
        }
    });

    $('input').change(function() {
        console.log("change detected");
    });

}(jQuery));
