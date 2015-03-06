/**
 * Created by dor on 2/24/15.
 */

var url="http://hdm.ise.bgu.ac.il/Eservice/EventoService.asmx";
var username;
var fname;
var lname;
var email;
var password;
var bdate;
var alert;
function register(){
    password=document.getElementById("password").value;
    var repass=document.getElementById("repassword").value;
    if (password!=repass){
        alert("Password does not match");
        return
    }
    username=document.getElementById("username").value;
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    var tmpDate=document.getElementById("bdate").value;
    var dateArr=tmpDate.split("-");
     bdate=dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0];
    if(!validateEmail(email)){
        alert("Wrong Email Format");
        return;
    }
    alert=document.getElementById("alert").checked == true;
    $("#reg-user").hide();

    document.getElementById("tag-user").style.visibility="visible";
    $("#tag-user").show()
}

function tag(){
    var hash=$("#tag").val();
    var data = "{\"firstName\":\""+fname+"\",\"lastName\":\""+lname+"\",\"username\":\""+username+"\",\"password\":\""+password+"\",\"email\":\""+email+"\",\"bDate\":\""+
        bdate+"\",\"tags\":\""+hash+"\",\"alert\":\""+alert+"\"}";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url+"/RegisterUser", //Relative or absolute path to response.php file
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
          if(data.d=="OK"){
            //localStorage.setItem('username',username);
            //localStorage.setItem('Admin',"NO");
              createCookie("user",username,1);
            window.location.href = "userPage.html";
            }
            else{
              $("#tag-user").hide();
              $("#alerts").show();
              document.getElementById("alert-txt").innerHTML="Username is already taken"
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

}


function registerAdmin(){
    password=document.getElementById("password").value;
    var repass=document.getElementById("repassword").value;
    if (password!=repass){
        alert("Password does not match");
        return
    }
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    if (!validateEmail(email)){
        alert("Not Valid Email Format");
        return
    }
    var data = "{\"username\":\""+ username+"\",\"password\":\""+password+"\",\"email\" : \""+email+"\"}";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url+"/RegisterManager", //Relative or absolute path to response.php file
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data.d=="True"){
           // localStorage.setItem('username',username);
            //localStorage.setItem('Admin',"YES");
                createCookie("admin",username,1);
            window.location.href = "createEvent.html";
            }
            else{
                $("#reg-user").hide();
                $("#alerts").show();
                document.getElementById("alert-txt").innerHTML="Username is already taken"
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            alert("ERROR")
        }
    });

}

function loginAdmin(){
    var username1=document.getElementById("username").value;
    var password1=document.getElementById("password").value;

    var data = "{\"username\":\""+username1+"\",\"password\":\""+password1+"\"}";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url+"/AdminLogin", //Relative or absolute path to response.php file
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data.d=="OK"){
            //localStorage.setItem('username',username1);
            //localStorage.setItem('Admin',"YES");
            createCookie("admin",username1,1);
            window.location.href = "createEvent.html";
                }
            else{
                $("#log-admin").hide();
                $("#alerts").show();
                document.getElementById("alert-txt").innerHTML="Wrong credentials"
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}


var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires;
};

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function delete_cookie( name ) {
        document.cookie = name + "=";
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
function logout(name){
    delete_cookie(name);
}

function moveTo(page){
    window.location.href=page
}