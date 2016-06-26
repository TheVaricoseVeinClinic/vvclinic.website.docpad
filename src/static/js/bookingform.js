$(document).ready(function() {

    $("#booking-form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending Booking");

        $.ajax({
            url: atob('Ly9mb3Jtc3ByZWUuaW8vbWFpbEB0aGV2YXJpY29zZXZlaW5zY2xpbmljLmNvLnVr'),
            type: "POST",
            data: $("#booking-form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
                ga('send', 'event', 'submit', 'click', 'booking');
                $("#booking-success").show();
                setTimeout(function(){
                    $("#booking-success").hide();
                },
                60000);
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
                ga('send', 'event', 'submit-fail', 'click', 'booking');
                $("#booking-fail").show();
                setTimeout(function(){
                    $("#booking-fail").hide();
                },
                10000);
            }
        });
    });

});
