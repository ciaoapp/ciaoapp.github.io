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

//prevent submit button being clickable as long as error messages 

$("#contactForm").on("submit",function(e){
    e.preventDefault();

    $.post(this.action, $(this).serialize(), function(){
        $("#contactForm button").text("Sending...");
    }, "json")
    .done(function() {
     //success message
    $("#contactForm button").text("Success!");
    $("#contactForm .row").fadeToggle("slow");
    $("#success .label-success").fadeIn();
    $("#success .btn").fadeIn();
    })
    .fail(function() {
    //error message
    $("#contactForm button").text("Resubmit");
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