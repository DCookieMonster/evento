/**
 * Created by dor on 2/24/15.
 */
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
};

function CheckFilling (name){
    var x=document.getElementById(name);
    if (x.value == ""){
        alert("you didn't fill your "+x.name);
        console.log("you didn't fill your "+x.name);
        return false;
    }
    return true;
};

function priceSorter(a, b) {
    a = +a.substring(1); // remove $
    b = +b.substring(1);
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
};
function nameSorter(a, b) {
    if (a>b)
        return 1;
    if (b>a) return -1;
    return 0;
};

function nameFormatter(value, row) {
    return   value;
};
function NISFormatter(value, row) {

    return   value+" ש״ח";
};
function bookNameFormatter(value, row) {
    var books="";
    for (var i = value.length - 1; i >= 0; i--) {
        books+=value[i].name +"<br>";
    };

    return   books;
};
function bookIDFormatter(value, row) {
    var books="";
    for (var i = value.length - 1; i >= 0; i--) {
        books+=value[i].id+"<br>";
    };

    return   books;
};


function findTheDate(value){
    var x = document.getElementById("time");
    while (x.length > 0) {
        x.remove(x.length-1);
    }
    if(value=="")
        return;
    param="{\"date\":\"" + value + "\"}";
    var j=0;
    $("#time").val([]);
    var $selectTime = $('#time');
    $.ajax({
        type: "POST",
        url: "http://agudaweb2.bgu.ac.il/LibraryService/libraryService.asmx/GetTime" + "",
        data: param,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            console.log("data: "+data.d);
            setSelectOptions1($('#time'), JSON.parse(data.d), 'Id', 'Value');

        },
        error: function (xhr, ajaxOptions, thrownError) {
            //alert("Error: "+xhr.status);
            //alert(thrownError);
        }

    });
};

function checkFunc(){

    var howManyChecked=1;
    var listItem="";
    var flag=0;

    var selectedItem=$('#table-javascript').bootstrapTable('getSelections');
    for (var i = 0;i < selectedItem.length; i++)
    {

        if(flag==1)
            listItem+=",";
        if (howManyChecked>5)
            return;
        howManyChecked++;
        // console.log(document.getElementsByName("Id")[i]);
        var choosenName = selectedItem[i].Id;
        flag=1;
        listItem+=choosenName;


    }
    console.log(listItem);
    //dataStudent.books=listItem;
    var dataStudent={}
    dataStudent.books=listItem;
    // dataStudent.books= $('#table-javascript').bootstrapTable('getSelections');
    var booksStr="\"books\":\""+dataStudent.books+"\"";
    dataStudent.date = getSelectedText('date');
    dataStudent.meetingTime = getSelectedText('time');
    if(!(CheckFilling("name") && CheckFilling("ID") && CheckFilling("Email") && CheckFilling("phone")))
    //you can submit the data only if you fiill everything
        return;

    if (document.getElementById("ID").value.length<9){
        alert("worng ID number");
        return;
    }
    if ( dataStudent.date=="" || dataStudent.meetingTime==null){
        alert("choose a date and time for a meeting");
        return;
    }
    if (dataStudent.books==""){
        alert ("You must choose at least one book ");
        return;
    }
    dataStudent.studentName=document.getElementById("name").value;

    dataStudent.studentID=document.getElementById("ID").value;
    dataStudent.studentEmail=document.getElementById("Email").value;
    dataStudent.studentPhone=document.getElementById("phone").value;


    // var param = "{\"name\":\"" + E.userid + "\",\"key\":\"" + key + "\",\"value\":" + jsonValue + ",\"exp\":\"" + experiment + "\"}";
    //  var jsonString = "{\"name\":\""+dataStudent.studentName+"\",\"id\":\""+dataStudent.studentID+"\",\"email\":\""+dataStudent.studentEmail+"\",\"phone\":\""+dataStudent.studentPhone+"\",\"books\":\""+dataStudent.books+"\",\"date\":\""+dataStudent.date+"\",\"time\":\""+dataStudent.meetingTime+"\"}";
    //	var ajaxParam={name:dataStudent.studentName,id:dataStudent.studentID,email:dataStudent.studentEmail,phone:dataStudent.studentPhone,books:dataStudent.books,date:dataStudent.date,time:dataStudent.meetingTime};
    //            console.log(jsonString);
    // console.log(dataStudent.date);
    //   console.log(dataStudent.meetingTime);
    //  console.log(listItem);
    // console.log(booksStr);
    //calling the method from the webservice
    //data: JSON.stringify(ajaxParam),
    var test ="{\"name\":\""+dataStudent.studentName+"\",\"id\":\""+dataStudent.studentID+"\",\"email\":\""+dataStudent.studentEmail+"\",\"phone\":\""+dataStudent.studentPhone+"\"," +
        "\"books\":\""+dataStudent.books+"\"," +
        "\"date\":\""+dataStudent.date+"\",\"time\":\""+dataStudent.meetingTime+"\"}";
    var pageUrl ="http://agudaweb2.bgu.ac.il/LibraryService/libraryService.asmx/Write2DB";
    $.ajax({
        type: "post",
        url: pageUrl,
        data:test,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            document.getElementById("progressbar").style.visibility="hidden" ;
            //	var j = jQuery.parseJSON(response.d);
            console.log(response.d);
            if (response.d=="OK"){
                document.getElementById("meet").innerHTML="הפגישה שלך נקבעה ל: "+dataStudent.date+" בשעה: "+dataStudent.meetingTime;
            }
            else
            if (response.d=="NO")
            {
                document.getElementById("meet").innerHTML="לא הצלחת לקבוע תור כתוצאה מכך שמועד הבקשה שבחרת נתפס או הספר שבחרת נלקח, אנא נסה שוב";
            }
            else{
                document.getElementById("meet").innerHTML="הפגישה שלך נקבעה ל: "+dataStudent.date+" בשעה: "+dataStudent.meetingTime+" אך לא הצלחת לשמור את כל הספרים, ככל הנראה אחד הספרים הוזמן הרשימה שהצלחת לשמור אצלך במייל";

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Error: "+xhr.status);
            console.log(thrownError);
            document.getElementById("progressbar").style.visibility="hidden" ;

            document.getElementById("meet").innerHTML="נוצרה שגיאה :( אנא שלח מייל לספרייה לוודא שהספרים נשמרו";
        }

    });



    var success=true;
    document.getElementById("progressbar").style.visibility="visible" ;
    $(".row").hide();
    document.getElementById("finish").style.visibility="visible" ;



};

// Fill a select list with options using an array of values as the data source
// @param {String, Object} selectElement Reference to the select list to be modified, either the selector string, or the jQuery object itself
// @param {Object} values An array of option values to use to fill the select list. May be an array of strings, or an array of hashes (associative arrays).
// @param {String} [valueKey] If values is an array of hashes, this is the hashkey to the value parameter for the option element
// @param {String} [textKey] If values is an array of hashes, this is the hashkey to the text parameter for the option element
// @param {String} [defaultValue] The default value to select in the select list
// @remark This function will remove any existing items in the select list
// @remark If the values attribute is an array, then the options will use the array values for both the text and value.
// @return {Boolean} false
function setSelectOptions1(selectElement, values, valueKey, textKey, defaultValue) {

    if (typeof (selectElement) == "string") {
        selectElement = $(selectElement);
    }

    selectElement.empty();

    if (typeof (values) == 'object') {

        if (values.length) {

            var type = typeof (values[0]);
            var html = "";

            if (type == 'object') {
                // values is array of hashes
                var optionElement = null;

                $.each(values, function () {
                    html += '<option value="' + this[valueKey] + '">' + this[textKey] + '</option>';
                });

            } else {
                // array of strings
                $.each(values, function () {
                    var value = this.toString();
                    html += '<option value="' + value + '">' + value + '</option>';
                });
            }

            selectElement.append(html);
        }

        // select the defaultValue is one was passed in
        if (typeof defaultValue != 'undefined') {
            selectElement.children('option[value="' + defaultValue + '"]').attr('selected', 'selected');
        }

    }

    return false;

};