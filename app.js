//get id from field input
var username = document.getElementById("username");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var confPassInput = document.getElementById("confPass");
var addreInput = document.getElementById("Address");
var calenderInput = document.getElementById("calender");
// var profilePic = document.getElementById("profilepic");
var number = document.getElementById("number");
var postalCode =  document.getElementById("postalCode");
// var male =  document.getElementById("male").children[0].checked;
// var female =  document.getElementById("female").children[0].checked;
function validationForm(){
    if(username.value.trim() == ""){
        document.getElementById("Error1").innerText = "UserName is Required!";
        username.focus();
        return false;
    }
    else if(emailInput.value.trim() == ""){
        document.getElementById("Error2").innerText = "Email is Required!";
        username.focus();
        return false;
    }
    else if(passInput.value.trim() == ""){
        document.getElementById("Error3").innerText = "Password is Required!";
        username.focus();
        return false;
    }
    else if(confPassInput.value.trim() == ""){
        document.getElementById("Error4").innerText = "Confirm Password is Required!";
        username.focus();
        return false;
    }
    else if(confPassInput.value.trim() != passInput.value){
        document.getElementById("Error4").innerText = "Sorry! Password not Match Try Again"
        username.focus();
        return false;
    }
    else if(addreInput.value.trim() == ""){
        document.getElementById("Error5").innerText = "Addres is Required!";
        username.focus();
        return false;
    }
    else if(calenderInput.value.trim() == ""){
        document.getElementById("Error6").innerText = "DOB is Required!";
        username.focus();
        return false;
    }
    // else if(profilePic.value.trim() == ""){
    //     document.getElementById("Error7").innerText = "Profile Pic is Required!";
    //     username.focus();
    //     return false;
    // }
    else if(number.value.trim() == ""){
        document.getElementById("Error8").innerText = "Mobile Number is Required!";
        username.focus();
        return false;
    }
    else if(postalCode.value.trim() == ""){
        document.getElementById("Error9").innerText = "Mobile Number is Required!";
        username.focus();
        return false;
    }
    localStorage.setItem("User",username.value);
    localStorage.setItem("email",emailInput.value);
    localStorage.setItem("Password",passInput.value);
    localStorage.setItem("Confirm Pass",confPassInput.value);
    localStorage.setItem("Address",addreInput.value);
    localStorage.setItem("calender",calenderInput.value);
    localStorage.setItem("Mobile Num",number.value);
    localStorage.setItem("Postal Code",postalCode.value);
    // localStorage.setItem("Gender",male);
    // localStorage.setItem("Gender",female);    
}
function singUp(){
    document.getElementById("Wraper").style.display = "block";
    document.getElementById("login").style.display = "none";
}
function loginFunc(){
    document.getElementById("login").style.display = "block";
    document.getElementById("Wraper").style.display = "none";
}
var userlogin = document.getElementById("loginUser");
var passlogin = document.getElementById("loginPass");

function loginFunction(){
    console.log(userlogin.value,localStorage.getItem("User"))
    console.log("function call")
    if(userlogin.value.trim() == "" && passlogin.value.trim() == "")
    {
        alert("Please Provide Data ")
    }
    else if(userlogin.value.trim() === localStorage.getItem("User") && passlogin.value.trim() === localStorage.getItem("Password")){
        // document.getElementById("dashboard").style.display = "block";
        // document.getElementById("container").style.display = "none"
        alert("sucessfullly")
    }
    else{
        alert("plz try again")
    }
}
function displayData(){
    document.getElementById("datShow").style.display = "block";
    document.getElementById("userName").innerText ="User Name : "+localStorage.getItem("User");
    document.getElementById("email").innerText ="Email : "+localStorage.getItem("email");
    document.getElementById("Password").innerText ="Password : "+localStorage.getItem("Password");
    document.getElementById("ConfirmPassword").innerText ="Confirm Pass : "+localStorage.getItem("Confirm Pass");
    document.getElementById("adress").innerText ="Addres : "+localStorage.getItem("Address");
    document.getElementById("dob").innerText ="DOB : "+localStorage.getItem("calender");
    document.getElementById("MobileNumber").innerText ="Mobile Number : "+localStorage.getItem("Mobile Num");
    document.getElementById("postalCode").innerText ="Postal Code : "+localStorage.getItem("Postal Code");

}







