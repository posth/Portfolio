$(document).ready(function(){
	$("#submit").click(function() { 
		//get input field values
		var name       		= $('#name').val(); 
		var email      		= $('#email').val();
		var message   	    = $('#comment').val();
		var flag = true;
		/********validate all our form fields***********/
		/* Name field validation  */
        if(name==""){ 
            $('#name').css('border-color','red'); 
            flag = false;
        }
		/* email field validation  */
        if(email==""){ 
            $('#email').css('border-color','red'); 
            flag = false;
        } 
		/* message field validation */
        if(message=="") {  
           $('#comment').css('border-color','red'); 
            flag = false;
        }
		/********Validation end here ****/
		/* If all are ok then we send ajax request to email_send.php *******/
		if(flag) 
        {
			$.ajax({
				type: 'post',
				url: "/mail/contact_me.php", 
				dataType: 'json',
				data: 'username='+name+'&useremail='+email+'&message='+message,
				beforeSend: function() {
					$('#submit').attr('disabled', true);
					$('#submit').after('<span class="wait">&nbsp;<img src="image/loading.gif" alt="" /></span>');
				},
				complete: function() {
					$('#submit').attr('disabled', false);
					$('.wait').remove();
				},	
				success: function(data)
				{
					if(data.type == 'error')
					{
						output = '<div class="error">'+data.text+'</div>';
					}else{
						output = '<div class="success">'+data.text+'</div>';
						$('input[type=text]').val(''); 
						$('#contactform textarea').val(''); 
					}
					
					$("#result").hide().html(output).slideDown();			
					}
			});
		}
	});

	//reset previously set border colors and hide all message on .keyup()
	$("#contactform input, #contactform textarea").keyup(function() { 
		$("#contactform input, #contactform textarea").css('border-color',''); 
		$("#result").slideUp();
	});
});