$("#myForm").validate({
    rules: {

        name: {
            required: true,
            minlength: 4,
        },
        email: {
            required: true,
            email: true,
        },
        password:{
            required: true,
            minlength: 4,
            maxlength : 6,
        },
        c_password:{
            required: true,
            minlength: 4,
            maxlength : 6,
            equalTo: "#password"
        },
        city:{
            required:true,
        }

    },
    messages: {
        name: {
            required : "Required your name",
            minlength : "Please Enter 4 charactor"
        },
        email: {
          required: "Required your email",
          email: "please Enter email format"
        },
        password:{
            required: "Required your password",
            minlength : "Please min Enter 4 charactor",
            maxlength : "Please max Enter 6 charactor"
            
        },
        c_password:{
            required: "Required confirm your password",
            minlength : "Please min Enter 4 charactor",
            maxlength : "Please max Enter 6 charactor",
            equalTo: "Password is Not match"
            
        },
        city:{
            required:"Required your city name",
        
        }
    },

});