/**
 * Created by dor on 3/1/15.
 */


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


 function isValidID(id){
     return (isNumber(id)&& id.length==9 && id>0)
 }
function isValidPosNum(n){
    return isNumber(n) && n>0
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function IsValidTime(t){
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);

}

function isValidDate(d){
    var b= /^([0-2]?[0-9]|3[0-1])-(0[0-9]|1[0-2])-(20[2-9][0-9]|201[5-9])$/.test(d);
    if(b)
    {
        var res = d.split("-");
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(yyyy<res[2]){
            return b
        }
        if(yyyy==res[2]&&mm<res[1]){
            return b
        }
        if (yyyy==res[2] && mm==res[1] && dd<=res[0]){
            return b
        }
        return false
    }
    else{
        return b
    }

}