/**
 * Created by dor on 2/24/15.
 */


var username;
var fname;
var lname;
var email;
var password;
var bdate;
$("#tag-user").hide()
function register(){
    password=document.getElementById("password").value
    var repass=document.getElementById("repassword").value
    if (password!=repass){
        alert("Password does not match")
        return
    }
    username=document.getElementById("username").value
    fname=document.getElementById("fname").value
    lname=document.getElementById("lname").value
    email=document.getElementById("email").value
    bdate=document.getElementById("bdate").value
    $("#reg-user").hide()
    document.getElementById("tag-user").style.visibility="visible"
    $("#tag-user").show()
}

function tag(){
    var hash=$("#tag").val()
    var data = {
        "Hash": hash,
        "Username": username
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "index.php", //Relative or absolute path to response.php file
        data: data,
        success: function(data) {


        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

}


function registerAdmin(){
    password=document.getElementById("password").value
    var repass=document.getElementById("repassword").value
    if (password!=repass){
        alert("Password does not match")
        return
    }
    username=document.getElementById("username").value
    email=document.getElementById("email").value

    var data = {
        "Hash": hash,
        "Username": username
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "index.php", //Relative or absolute path to response.php file
        data: data,
        success: function(data) {


        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

}

function loginAdmin(){
    var username1=document.getElementById("username").value
    var password1=document.getElementById("password").value

    var data = {
        "Hash": hash,
        "Username": username
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "index.php", //Relative or absolute path to response.php file
        data: data,
        success: function(data) {
            localStorage.setItem('username',username1);
            localStorage.setItem('Admin',"YES");

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function loginUser(){
    var username1=document.getElementById("username").value
    var password1=document.getElementById("password").value

    var data = {
        "Hash": hash,
        "Username": username
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "index.php", //Relative or absolute path to response.php file
        data: data,
        success: function(data) {
            localStorage.setItem('username',username1);
            localStorage.setItem('Admin',"NO");


        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}