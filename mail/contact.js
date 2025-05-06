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
            const $successBox = isMobile ? $("#successMobile") : $("#success");

            $this.prop("disabled", true);

            $.ajax({
                url: "mail/contact.php",
                type: "POST",
                data: {
                    name,
                    email,
                    subject,
                    message
                },
                cache: false,
                success: function () {
                    $successBox.html("<div class='alert alert-success'>");
                    $successBox.find('.alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>¡Su mensaje ha sido enviado con éxito!</strong>")
                        .append('</div>');
                    $form.trigger("reset");
                },
                error: function () {
                    $successBox.html("<div class='alert alert-danger'>");
                    $successBox.find('.alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Lo sentimos " + name + ", parece que nuestro servidor de correo no responde. ¡Inténtalo más tarde!"))
                        .append('</div>');
                    $form.trigger("reset");
                },
                complete: function () {
                    setTimeout(() => {
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

// Limpia mensaje al enfocar
$('#name, #nameMobile').focus(function () {
    $('#success, #successMobile').html('');
});
