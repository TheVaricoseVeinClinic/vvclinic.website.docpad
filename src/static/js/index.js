new WOW().init();

$(document).ready(function() {

    $("#cta-form").on("submit", function(e) {
        e.preventDefault();
        console.log("Sending CTA");

        $.ajax({
            url: atob(#{formspree_email_url}),
            type: "POST",
            data: $("#cta-form").serialize(),
            dataType: "json",
            success: function(json) {
                console.log("ok");
                ga('send', 'event', 'submit', 'click', 'cta');
                $("#email-cta-success").show();
                setTimeout(function(){
                    $("#email-cta-success").hide();
                },
                60000);
            },
            error: function(xhr, errmsg, err) {
                console.log("err: " + errmsg);
                ga('send', 'event', 'submit-fail', 'click', 'cta');
                $("#email-cta-fail").show();
                setTimeout(function(){
                    $("#email-cta-fail").hide();
                },
                10000);
            }
        });
    });

});
