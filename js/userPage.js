/**
 * Created by dor on 2/24/15.
 */
var b=false;
function changeDist(){
    $("#panel").hide()

    if (b)
        $("#h-err").hide()
    var dist=$("#dist").val()
    if (dist=="" || dist<0 || dist >50 ){
        $("#dist-div").prepend("<h1 id=\"h-err\" style='color: #d2322d'>You can Only Choose a distance between 0 to 50 km</h1>")
        b=true
        return
    }
    ajaxCall(dist)
}
