$("#formvalidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength:10
        }
    },
    message:{
        name:{
            required:"Please enter your name",
            minlenght:"Name atleast 2 characters"
        },
        email:"Please enter your email",
        phone:"Please enter your Phone",
        subject:"Please enter your subject",
        formMessage:"Please enter your Phone"
    },

    submitHandler: function(form) {
      form.submit();
    }
   });