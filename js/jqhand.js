$(window).load(function(){$("head").append("<style>body{cursor:none;visibility:block;}#jqhand{position:absolute;width:256px;height:332px;background-image:url(http://img145.imageshack.us/img145/6473/custompenw.png);background-repeat:no-repeat;background-position:center}.jq_rotate{-webkit-animation-name:rotate_hand;-webkit-animation-duration:100ms;-webkit-animation-timing-function:linear;-webkit-transform:rotate(-5deg)}</style>");$("body").html('<div id="jqhand"></div>');$(document).bind("mousemove",function(a){$("#jqhand").css({left:a.pageX+2,top:a.pageY+2})});$(document).bind("mousedown",function(){$("#jqhand").addClass("jq_rotate")});$(document).bind("mouseup",function(){$("#jqhand").removeClass("jq_rotate")});}); 