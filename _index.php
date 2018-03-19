<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='//fonts.googleapis.com/css?family=Arimo:400,700&subset=hebrew,latin' rel='stylesheet' type='text/css'>

    <style>
        body {
            font-family: 'Arimo', sans-serif;
            background: #EAEAEA;
            text-align:center;
            direction:rtl;
        }
        body, .for-stripes {
            background-color: #EAEDEF;
            background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent), to(transparent));
            background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
            background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
            background-image: -ms-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
            background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
            background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
        }

        body, .stripes {
            margin: 10px;
            -webkit-background-size: 10px 10px;
            -moz-background-size: 10px 10px;
            background-size: 10px 10px;
        }

        .fa {
            font-size: 80px !important;
        }
        .domain {
            text-transform: uppercase;
            color: #0088CC;
        }
        .smallbox {
            max-width:45%;
            display: inline-table;
            margin:0px 2%;
            min-height:260px;
        }
        .conteiner {
            margin:auto;
            margin-top: 80px;
            width: 50%;
        }
        .imgbar{
            text-align:center;
        }
        .effect2 {
            position: relative;
        }
        .box {
            border: #CCCCCC solid 1px;
            min-height: 200px;
            background: #FFF;
            box-shadow: 0px 0px 10px #CCC;
            padding-bottom: 15px;
        }
        .credit {
            margin:10px;
            font-size:small;
            color:gray;
        }
        .action-button
        {
            display: inline-block;
            padding: 5px 20px;
            border-radius: 10px;
            font-size: 20px;
            color: #FFF;
            text-decoration: none;
        }
        .blue
        {
            background-color: #3498DB;
            border-bottom: 5px solid #2980B9;
            text-shadow: 0px -2px #2980B9;
        }
        .action-button:active
        {
            transform: translate(0px,5px);
            -webkit-transform: translate(0px,5px);
            border-bottom: 1px solid;
        }
        .effect2:before, .effect2:after {
            z-index: -1;
            position: absolute;
            content: "";
            bottom: 15px;
            left: 10px;
            width: 50%;
            top: 80%;
            max-width: 300px;
            background: #777;
            box-shadow: 0 15px 10px #969696;
            transform: rotate(-3deg);
        }
        .effect2:after {
            transform: rotate(3deg);
            right: 10px;
            left: auto;
        }


    </style>
</head>
<div class="conteiner">
    <div class="imgbar"><img src="//www.upress.co.il/themes/upress/assets/img/logo.png"></div>
    <div class="box effect2">
        <h2>
            חבילת האחסון שלך הוקמה בהצלחה!
        </h2>
        <h2 class="domain">geo.s258.upress.link</h2>
        <p>
            בכדי להפעיל את חבילת האחסון כעת, בחר
        </p>
        <div class="options">
            <div class="smallbox"><i class="fa fa-wordpress"></i><br>
                <h3>התקנת וורדפרס בקליק</h3>
                <p>תוכלו לצפות בסרטון וידאו המפרט את אופן ההתקנה של אתר וורדפרס חדש בקלות לאתר שלכם
                </p>
                <a href="//www.upress.co.il/support/20" target="_blank" class="action-button shadow animate blue">צפיה בסרטון</a>
            </div>
            <div class="smallbox"><i class="fa fa-rocket"></i><br>
                <h3>שירות העברה משרת קודם</h3>
                <p>תוכלו לצפות בסרטון וידאו המפרט את שיטת העברת התוכן מהשרת הקודם שלכם לאתר החדש</p>
                <a href="//www.upress.co.il/support/28" target="_blank" class="action-button shadow animate blue">צפיה בסרטון</a>
            </div>
        </div>
        <p>.עדיין לא מצאתם פתרון? בקרו במרכז התמיכה שלנו</p>
        <a href="//www.upress.co.il/support" target="_blank" class="action-button shadow animate blue">מרכז התמיכה</a>
    </div>
    <div class="credit">© uPress - Advanced Hosting System for WordPress Websites.</div>
</div>
</html>