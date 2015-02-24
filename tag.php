<?php
/**
 * Created by PhpStorm.
 * User: dor
 * Date: 2/21/15
 * Time: 11:08 PM
 */


?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Evento Registration Page</title>
    <!-- BOOTSTRAP CORE STYLE CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONTAWESOME STYLE CSS -->
    <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
    <!-- CUSTOM STYLE CSS -->
    <link href="assets/css/style.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <script src="static/js/jquery-1.11.2.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>


</head>
<body>
<div class="container">
    <div class="row text-center pad-top ">
        <div class="col-md-12">
            <h2>Evento User Registration Page</h2>
        </div>
    </div>
    <div class="row  pad-top">

        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>   Your Interests </strong>
                </div>
                <div class="panel-body">
                    <div class="form-group input-group">                   <input name="tags" type="text" placeholder="HashTags" data-role="tagsinput"/>
                    </div>
                    <div class="form-group input-group">
                        <input name="username" id="username" value="<?php echo $_GET['username']?>" type="hidden"/>
                    <button class="btn btn-success" onclick="hashtag()" name="submit">Submit</button>
                        </div>
                </div>

            </div>
        </div>
        <script>
            function hashtag(){
                var username = $('#username').val();
                var hash=$("input").val()
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
                        window.location.href = "success.php";

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        window.location.href = "success.php";
                        console.log(textStatus, errorThrown);
                    }
                });
            }

        </script>

    </div>
</div>

<script src="static/js/angular.min.js"></script>
<script src="static/js/angular.min.js.map"></script>
<script src="static/js/typeahead.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.4/typeahead.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
<script src="bTags/bootstrap-tagsinput.min.js"></script>
<script src="bTags/bootstrap-tagsinput-angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/generic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/html.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/javascript.js"></script>
<script src="bTags/app.js"></script>
<script src="bTags/app_bs3.js"></script>