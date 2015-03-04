/**
 * Created by dor on 2/24/15.
 */
getAddr = function(addr, f){
    if(typeof addr != 'undefined' && addr != null) {
        geocoder.geocode( { address: addr }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                f('ok', results);
            } else {
                f('error', null);
            }
        });
    } else {
        f('error', null);
    }
}

var url="http://hdm.ise.bgu.ac.il/Eservice/EventoService.asmx"

function insertEvent(){
    var D={}
    var address = document.getElementById("location").value;

        D.lat = loc.lat()
        D.lng = loc.lng()

    var eventName = $("#eventName").val();
    var Date =$("#date").val();
    var hour=$("#hour").val();
    var time=$("#time").val();
    var description=$("#description").val();
    var artist=$("#artist").val();
    var tags = $("#tag").val();
    var price =$("#price").val();
    var tickets =$("#tickets").val();
    //if (isValidDate(Date)){
    //    alert("Wrong Date Format")
    //    return
    //}
    if (!isValidPosNum(price)){
        alert("Wrong Price Format")
        return
    }
    if (!isValidPosNum(tickets)){
        alert("Wrong Tickects Fromat")
        return
    }
    if(!isValidPosNum(time)){
        alert("Wrong Time Format")
        return
    }
    if(!IsValidTime(hour)){
        alert("Wrong Hour Format")
        return
    }
//string eventManager,string name, string date, string hour, string time, string artist,
 //   string description, string price, string numOfTickets,string longitude, string latitude)
    var data = "{\"eventManager\":\""+getCookie("admin")+"\",\"name\":\""+eventName+"\",\"date\":\""+Date+"\",\"hour\":\""+hour+"\",\"time\":\""+time+"\",\"artist\":\""+
            artist+"\",\"description\":\""+description+"\",\"price\":\""+price+"\",\"numOfTickets\":\""+tickets+"\",\"longitude\":\""+
        D.lng+"\",\"latitude\":\""+ D.lat+"\",\"tags\":\""+$("#tag").val()+"\",\"address\":\""+address+"\"}"
    //var d1ata = {
    //    "eventManager": localStorage.getItem("username"),
    //    "date": Date,
    //    "hour": hour,
    //    "time": time,
    //    "artist": artist,
    //    "description" : description,
    //    "price": price,
    //    "numOfTickets":tickets,
    //    "longitude": D.lat,
    //    "latitude" : D.lng,
    //    "tags": $("#tag").val()
    //};
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url+"/AddEvent", //Relative or absolute path to response.php file
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data.d=="OK"){
                $("#reg-event").hide()
                document.getElementById("alert-txt").innerHTML="Event Was Created!"
            }
            else{
                $("#reg-event").hide()
                document.getElementById("alert-txt1").innerHTML="You Already created an Event with this name"
            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });


}