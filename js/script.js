// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
  
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);
// }

// function highlightThis(event) {
//     //event.stopPropagation();
  
//     var backgroundColor = this.style.backgroundColor;
//     this.style.backgroundColor='yellow';
//     alert(this.className);
//     this.style.backgroundColor=backgroundColor;
// }

// $(document).on("scroll",function(){
//     if($(document).scrollTop()>100){
//         $("header").removeClass("large-header").addClass("small-header");
//     } else{
//         $("header").removeClass("small-header").addClass("large-header");
//     }
// });

$(document).ready(function(){

	$(window).scroll(function(){	
		var scroll_top = $(window).scrollTop();
		if(scroll_top>100){
			$('header').removeClass('large-header').addClass('small-header');
		} else{
	 		$('header').removeClass('small-header').addClass('large-header');
		}
		$("header ul li").removeClass('active');
		if(scroll_top < ($('.section2').offset().top-50))
		{
			$("#e1").addClass('active');
		} else if(scroll_top< ($('.section3').offset().top)-100)
		{
			$("#e2").addClass('active');
		}	else {
			$("#e3").addClass('active');	
		}
	});

	$('#e1').click(function(){
		$("html, body").animate({
			scrollTop: 0
			// $('.section1').offset().top-100
		}, 500)
	});

	$('#e2').click(function(){
		$("html, body").animate({
			scrollTop: $('.section2').offset().top-50
		}, 500)
	});

	$('#e3').click(function(){
		$("html, body").animate({
			scrollTop: $('.section3').offset().top
		}, 500)
	});


	var i1=$("#i1");
	var i2=$("#i2"); 
	var i3=$("#i3");
	$("#right").click(function() {
        return i1.is(":visible") ? (i1.animate({
            width: "toggle"
        }, 350), void i2.animate({
            width: "toggle"
        }, 350)) : i2.is(":visible") ? (i2.animate({
            width: "toggle"
        }, 350), void i3.animate({
            width: "toggle"
        }, 350)) : i3.is(":visible") ? (i3.animate({
            width: "toggle"
        }, 350), void i1.animate({
            width: "toggle"
        }, 350)) : void 0
  }), $("#left").click(function() {
        return i1.is(":visible") ? (i1.animate({
            width: "toggle"
        }, 350), void i3.animate({
            width: "toggle"
        }, 350)) : i2.is(":visible") ? (i2.animate({
            width: "toggle"
        }, 350), void i1.animate({
            width: "toggle"
        }, 350)) : i3.is(":visible") ? (i3.animate({
            width: "toggle"
        }, 350), void i2.animate({
            width: "toggle"
        }, 350)) : void 0
    });


  var s1=$("#small1");
  var s2=$("#small2");
  var s3=$("#small3");
  var c1=$("#close1");
  var c2=$("#close2");
  var c3=$("#close3");

  s1.click(function(){
  	var window_w=$(window).width();
  	var window_h=$(window).height();
  	var w=parseFloat(window_w)*0.9;
  	var ml=parseFloat(window_w)*0.05;
  	var ww=w*0.01;

  	$("#popup1").css({
  		"display": "block",
  		"width": w,
  		"margin-left": ml
  	});
  	c1.css({
  		"display": "block",
  		"width": ww,
  		"margin-left": w,
  		"cursor": "pointer"
  	});
  });
  s2.click(function(){
  	var window_w=$(window).width();
  	var window_h=$(window).height();
  	var w=parseFloat(window_w)*0.9;
  	var ml=parseFloat(window_w)*0.05;
  	var ww=w*0.01;
  	$("#popup2").css({
  		"display": "block",
  		"width": w,
  		"margin-left": ml
  	});
  	c2.css({
  		"display": "block",
  		"width": ww,
  		"margin-left": w,
  		"cursor": "pointer"
  	});
  });
  s3.click(function(){
  	var window_w=$(window).width();
  	var window_h=$(window).height();
  	var w=parseFloat(window_w)*0.9;
  	var ml=parseFloat(window_w)*0.05;
  	var ww=w*0.01;
  	$("#popup3").css({
  		"display": "block",
  		"width": w,
  		"margin-left": ml
  	});
  	c3.css({
  		"display": "block",
  		"width": ww,
  		"margin-left": w,
  		"cursor": "pointer"
  	});
  });
  c1.click(function(){
  	if(c1.css("display")==="block")
  	{
  		$("#popup1").css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  		c1.css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  	}
  });
  c2.click(function(){
  	if(c2.css("display")==="block")
  	{
  		$("#popup2").css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  		c2.css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  	}
  });
    c3.click(function(){
  	if(c3.css("display")==="block")
  	{
  		$("#popup3").css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  		c3.css({
  			"display": "none",
  			"width": "",
  			"margin-left": ""
  		});
  	}
  });

});
