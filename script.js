const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".eye"),
        pwField = document.querySelectorAll(".password"),
        login = document.querySelectorAll(".loginLink"),
        pass = document.getElementById('password')
        nameField = document.getElementById('nameField'),
        signUp = document.getElementById('signUp'),
        press = document.getElementsByClassName('button'),
        checkbox = document.getElementById('tickBox')
        pageTitle = document.getElementById('title'),
        signUpbox = document.getElementById('signupBox'),
        loginlink = document.getElementById('loginLink'),
        presslogin = document.getElementById('login');
        


signUp.onclick = function(){
    pageTitle.innerHTML = 'SIGN UP';
    button.innerHTML ='Sign Up Now';
    button.classList.add('signUpBtn');
    nameField.classList.remove('signUp');
    password.classList.remove('signUp');
    tickBox.classList.remove('checkBox');
    tickBox.classList.add('signUp');
    signupBox.classList.add('signUp');
    loginLink.classList.remove('signUp');
}


presslogin.onclick = function(){
    pageTitle.innerHTML = 'LOGIN';
    button.innerHTML ='Login Now';
    button.classList.add('signUpBtn');
    nameField.classList.add('signUp');
    password.classList.add('signUp');
    tickBox.classList.add('checkBox');
    tickBox.classList.remove('signUp');
    signupBox.classList.remove('signUp');
    loginLink.classList.add('signUp');
}

// To show and hide password

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=>{
        pwField.forEach(pwField =>{
            if(pwField.type == "password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type ="password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
                
            }
        })
    })
})

// TO SIGN UP AND LOGIN FORM

signUp.addEventListener("click",()=>{
    container.classList.add("active");
});

login.addEventListener("click",()=>{
    container.classList.add("remove");
});