$(document).ready(function() {

$('#carouselExampleInterval').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


   
// Validate fname
    $('#usercheck').hide();    
    let usernameError = true;
    $('#usernames').keyup(function () {
        validateUsername();
    });
      
    function validateUsername() {
      let usernameValue = $('#usernames').val();
      if (usernameValue.length == '') {
      $('#usercheck').show();
          usernameError = false;
          return false;
      } 
      else if((usernameValue.length < 3)|| 
              (usernameValue.length > 10)) {
          $('#usercheck').show();
          $('#usercheck').html
("**length of username must be between 3 and 10");
          usernameError = false;
          return false;
      } 
      else {
          $('#usercheck').hide();
      }
    }

    // Validate lname
    $('#lcheck').hide();    
    let usernameError1 = true;
    $('#lastname').keyup(function () {
        validateUsername1();
    });
      
    function validateUsername1() {
      let usernameValue1 = $('#lastname').val();
      if (usernameValue1.length == '') {
      $('#lcheck').show();
          usernameError1 = false;
          return false;
      } 
      else if((usernameValue1.length < 3)|| 
              (usernameValue1.length > 10)) {
          $('#lcheck').show();
          $('#lcheck').html
("**length of username must be between 3 and 10");
          usernameError1 = false;
          return false;
      } 
      else {
          $('#lcheck').hide();
      }
    }
  
   // Validate Email
    const email = 
        document.getElementById('email');
    email.addEventListener('blur', ()=>{
       let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
       let s = email.value;
       if(regex.test(s)){
          email.classList.remove(
                'is-invalid');
          emailError = true;
        }
        else{
            email.classList.add(
                  'is-invalid');
            emailError = false;
        }
    })


  // Validate textarea
  $('#textchk').hide();    
  let usernameError2 = true;
  $('#textcheckar').keyup(function () {
      validateUsername2();
  });
    
  function validateUsername2() {
    let usernameValue2 = $('#textcheckar').val();
    if (usernameValue2.length == '') {
    $('#textchk').show();
        usernameError2 = false;
        return false;
    } 
    else if((usernameValue2.length < 8)|| 
            (usernameValue2.length > 200)) {
        $('#textchk').show();
        $('#textchk').html
("**length of textarea min 8 character max 200 character");
        usernameError2 = false;
        return false;
    } 
    else {
        $('#textchk').hide();
    }
  }


      
// Submitt button
    $('#submitbtn').click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPasswrd();
        validateEmail();
        if ((usernameError == true) && 
            (passwordError == true) && 
            (confirmPasswordError == true) && 
            (emailError == true)) {
            return true;
        } else {
            return false;
        }
    });

});