const signUpForm = document.querySelector('#user-signap-form');
const enterUserName = document.querySelector('#username');
const enterUserMail = document.querySelector('#user-mail');
const userNameError = document.querySelector('#username-error');
const userMailError = document.querySelector('#mail-error');
const userId = document.querySelector('#user-id');
const userIdError = document.querySelector('#id-error');
const userPhone = document.querySelector('#user-Phone');
const userPhoneError = document.querySelector('#phone-error');
const userPosition = document.querySelector('#user-Position');
const userPositionError = document.querySelector('#position-error');

signUpForm.addEventListener('submit', e =>{
    e.preventDefault();
    checkUserName();
    checkUserMail();
    checkId();
    checkPhoneNumber();
    positionCheck();

});




///------functions----------
function checkUserName(){
    if(!enterUserName.validity.valid){
        enterUserName.classList.add('has-error');
        if(enterUserName.validity.tooShort){
            userNameError.innerText = 'Username must have minimum 4 symbol';
        }else{
            userNameError.innerText = 'Username is required';
        }
    } else{
        enterUserName.classList.replace('has-error', 'has-success');
        userNameError.innerText = '';
    }
}

function checkUserMail(){
    if(!enterUserMail.validity.valid){
        enterUserMail.classList.add('has-error');
        if(enterUserMail.validity.typeMismatch){
            userMailError.innerText = 'Please enter email correct form'
        }else{
            userMailError.innerText = 'Email is required';
        }
    } else{
        enterUserMail.classList.replace('has-error', 'has-success');
        userMailError.innerText = '';
    }
}

function checkId(){
    if(!userId.validity.valid){
        userId.classList.add('has-error');
        let pat1 = /^[0-9]{11}$/;
        if(!pat1.test(userId.value)){
            userIdError.innerText = 'ID must have 11 number(only numbers)';
        }
    }else{
        userId.classList.replace('has-error', 'has-success');
        userIdError.innerText = '';
    }
}

function checkPhoneNumber(){
    if(!userPhone.validity.valid){
        userPhone.classList.add('has-error');
        let pat2 = /^[0-9]{9}$/;
        if(!pat2.test(userPhone.value)){
            userPhoneError.innerText = 'Phone must have 9 number(only numbers)';
        }
    }else{
        userPhone.classList.replace('has-error', 'has-success');
        userPhoneError.innerText = '';
    }
}
function positionCheck(){
    if(userPosition.validity.valid){
        userPosition.classList.add('has-success');  // უბრალოდ ვამწვანებ როცა მნიშვნელობა შეყავთ
    }
}


//////
