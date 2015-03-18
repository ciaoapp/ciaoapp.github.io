$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

//Reveal Sign Up form again on clicking this button
$("#success .btn").click(function(){
    $("#success").fadeOut("slow");
    $("#contactForm .row").fadeIn("slow");
});

//prevent submit button being clickable as long as error messages 

$("#contactForm").on("submit",function(e){
    e.preventDefault();
    /*if($("#contactForm ul['alert']").length != 0)
        return false;*/
    var submitButton = $("#contactForm button[type='submit']");
    $.post(this.action, $(this).serialize(), function(){
         //success message
        submitButton.text("Success!");
        $("#contactForm .row").fadeOut("slow");
        $("#success").fadeIn("slow");
    }, "json")
    .done(function() {
        //on finish
    })
    .fail(function() {
    //error message
    submitButton.text("Resubmit");
    });
    

    return false;
   /* $.ajax({
      url: form-action,
      method: 'POST',
      data: form-data,
      dataType: "json",
      beforeSend: function() {
        //sending message
        $("#contactForm button").text("Sending...");
      },
      success: function(data) {
        
      },
      error: function(err) {
        //error message
        $("#contactForm button").text("Resubmit");
      }

    return false;  
    });*/

});