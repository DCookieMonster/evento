/**
 * Created by dor on 3/1/15.
 */


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isValidDate(s) {
    if(!s.contains('/'))
    return false
    var comp = text.split('/');
    var m = parseInt(comp[0], 10);
    var d = parseInt(comp[1], 10);
    var y = parseInt(comp[2], 10);
    var date = new Date(y, m - 1, d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        return true
    } else {
        return false
    }
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