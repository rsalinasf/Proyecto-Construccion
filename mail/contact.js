$(function () {
    $("#contactFormPc input, #contactFormPc textarea, #contactFormMobile input, #contactFormMobile textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // manejar errores
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            const isMobile = $form.attr('id') === 'contactFormMobile';

            const name = isMobile ? $("#nameMobile").val() : $("#name").val();
            const email = isMobile ? $("#emailMobile").val() : $("#email").val();
            const subject = isMobile ? $("#subjectMobile").val() : $("#subject").val();
            const message = isMobile ? $("#messageMobile").val() : $("#message").val();
            const $this = isMobile ? $("#sendMessageButtonMobile") : $("#sendMessageButton");

            $this.prop("disabled", true);

            $.ajax({
                url: "mail/contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>¡Su mensaje ha sido enviado con éxito!</strong>")
                        .append('</div>');
                    $form.trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Lo sentimos " + name + ", parece que nuestro servidor de correo no responde. ¡Inténtalo más tarde!"))
                        .append('</div>');
                    $form.trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// Limpia mensajes de éxito/error cuando el usuario comienza a escribir su nombre
$('#name, #nameMobile').focus(function () {
    $('#success').html('');
});
