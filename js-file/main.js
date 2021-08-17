document.getElementById('submit-btn').addEventListener('click',function(){
    const email = document.getElementById('email');
    const emailText = email.value;
    email.value = '';
    
    const password = document.getElementById('password');
    const passwordValue = password.value;
    const passwordNumber = parseInt(passwordValue);
    password.value = '';
  

    if(emailText == 'rahat4248@gmail.com' && passwordNumber == 12345){
        window.location.href = 'deposit-withdraw.html';
    }else{
        alert('your email or password was wrong!!! please try again leter');
    }
})