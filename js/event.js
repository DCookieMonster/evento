/**
 * Created by dor on 2/24/15.
 */


function insertEvent(){
    D={}
    var address = document.getElementById("location").value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': address}, function(results, status) {
        var location = results[0].geometry.location;
        alert(location.lat() + '' + location.lng());
        D.lat=location.lat()
        D.lng=location.lng()
    });
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
    var data = {
        "eventManager": localStorage.getItem("username"),
        "date": Date,
        "hour": hour,
        "time": time,
        "artist": artist,
        "description" : description,
        "price": price,
        "numOfTickets":tickets,
        "longitude": D.lat,
        "latitude" : D.lng,
        "tags": $("#tag").val()
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