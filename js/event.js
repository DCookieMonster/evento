/**
 * Created by dor on 2/24/15.
 */


function insertEvent(){
    var eventName = $("#eventName").val();
    var Date =$("#date").val();
    var hour=$("#hour").val();
    var time=$("#time").val();
    var description=$("#description").val();
    var location=$("#location").val();
    var artist=$("#artist").val();
    var tags = $("#tag").val();
    var price =$("#price").val();
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