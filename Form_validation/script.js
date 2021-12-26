function validate(e) {
    e.preventDefault();
  
    var firstName = document.feedForm.firstName.value;
    var lastName = document.feedForm.lastName.value;
    var email = document.feedForm.email.value;
    var mobile = document.feedForm.mobile.value;
    var gender = document.feedForm.gender.value;
  
    //  define error msg
    var firstNameErr = (lastNameErr =  emailErr = mobileErr = genderErr  = true);
  
    // name validation
    if (firstName === "") {
      printError("firstNameErr", "First name field cannot be empty");
    } else {
      let regex = /^[a-zA-z\s]+$/;
      if (regex.test(firstName) === false) {
        printError("firstNameErr", "please enter a valid name");
      } else {
        printError("firstNameErr", "");
        firstNameErr = false;
      }
    }
    if (lastName === "") {
      printError("lastNameErr", "Last name field cannot be empty");
    } else {
      let regex = /^[a-zA-z\s]+$/;
      if (regex.test(lastName) === false) {
        printError("lastNameErr", "please enter a valid name");
      } else {
        printError("lastNameErr", "");
        lastNameErr = false;
      }
    }
  
    //email validation
    if (email === "") {
      printError("emailErr", "Email field cannot be empty");
    } else {
      let regex = /^\S+@\S+\.\S+$/; //example@gmail.com
      if (regex.test(email) === false) {
        printError("emailErr", "Invalid email id");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }
  
    //mobile number validation
    if (mobile === "") {
      printError("mobileErr", "mobile field cannot be empty");
    } else {
      let regex = /^[6-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        printError("mobileErr", "Invalid mobile number");
      } else {
        printError("mobileErr", "");
        mobileErr = false;
      }
    }
  
    //gender validation
    if (gender === "") {
      printError("genderErr", "please select a gender");
    } else {
      printError("genderErr", "");
      genderErr = false;
    }
  }
  
  //function for error handling
  
  function printError(eleId, msg){
       document.getElementById(eleId).innerText = msg;
      
  }