export  default function (){
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        let name = $('#f_name').val();
        let phone = $('#f_phone').val();
        let email = $('#f_email').val();
        let message = $('#f_message').val();

        let isValid = true;
        $(".error").remove();
        if (name.length < 1) {
            $('#f_name').after('<span class="error">This field is required</span>');
            isValid=false;
        }
        if (phone.length < 1) {
            $('#f_phone').after('<span class="error">This field is required</span>');
            isValid=false;
        }
        if (email.length < 1) {
            $('#f_email').after('<span class="error">This field is required</span>');
            isValid=false;
        } else {
            let regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            let validEmail = regEx.test(email);
            if (!validEmail) {
                $('#f_email').after('<span class="error">Enter a valid email</span>');
                isValid=false;
            }
        }
        if (message.length <1) {
            $('#f_message').after('<span class="error">Message can not be empty</span>');
            isValid=false;
        }
        if(isValid === true){
            console.log('form is valid');
        }
    });
}
