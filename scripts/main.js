$(document).ready(function(){
	var count = 0;
	$(".start").animate({opacity: 1}, 1000);
	$(".start").click(function(){
		if (count == 0){
			$(".start").animate({opacity: 0}, 1000, function(){
				$("#cont").html("Добро пожаловать!");
				$("#cont").animate({opacity: 1}, 1000)
				.delay(200);
				$("#cont").animate({opacity: 0}, 2000, function(){
					$("#cont").html("Здесь вы узнаете много интересного");
					$("#cont").animate({opacity: 1}, 1000)
					.delay(00);
					$("#cont").animate({opacity: 0}, 1000, function(){
						$("#start").animate({opacity: 0}, 1000);
						$("#start").animate({top: -9999}, 10);
					});
				});
			});
		count = 1;
	} else {
		$("#start").css("display", "none");
	}
}); 

$("#but2").click(function(){
	$("#start").animate({opacity: 0}, 1000);
	$("#start").animate({top: -9999}, 10);
});

$("#wrapper1").animate({opacity: 0.87}, 1000);
$("#particles-js").animate({opacity: 1}, 500);

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 300
        }
      },
      "color": {
        "value": "#15B6E4"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#15B6E4"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FF8810",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 80
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

$("#but").click(function(){
	$(".vis").css("display", "block");
	$(".vis").animate({height: '750px'}, 2000);
});
$("#but1").click(function(){
	$(".vis").animate({height: '0px'}, 2000, function(){
		$(".vis").css("display", "none");
	});
	
});

	let circle1 = $("#el1");
	let circle2 =$("#el2");
	let circle3 = $("#el3");
	let circle4 = $("#el4"),
	currentTime = Date.now(),
	r1 = 175,
	r2 = 110,
	r3 = 240,
	left1 = '',
	top1 = '',
	left2 = '',
	top2 = '',
	left3 = '',
	top3 = '',
	left4 = '',
	top4 = '',
	a1 = 2 * 3.14,
	a2 = 1.9999 * 3.14,
	a3 = 2.0001 * 3.14;

function drawPosition(t){
	left1 = 170 + r1*Math.cos(a1*t);
	top1 = 120 + r1*Math.sin(-a1*t);
	left2 = 170 + r2*Math.cos(a2*t);
	top2 = 70 + r2*Math.sin(-a2*t);
	left3 = 170 + r3*Math.cos(a3*t);
	top3 = 20 + r3*Math.sin(-a3*t);
	left4 = 170 + r3*Math.cos(a3*t+4);
	top4 = 20 + r3*Math.sin(-a3*t);
	circle1.css({"left": left1, "top": top1});
	circle2.css({"left": left2, "top": top2});
	circle3.css({"left": left3, "top": top3});
	circle4.css({"left": left4, "top": top4});
}

var flag = 1;
var flag2 = 1;
var t;
var a = 0;
var b = 0;

$("#el1, #el2, #el3, #el4").mouseover(function(){
	flag = 0;
	a = Date.now();
	$("#more-info3").animate({left: 0}, 1000);

});

$("#main-circle").mouseover(function(){
	flag = 0;
	a = Date.now();
	$("#more-info4").animate({right: 0}, 1000);
});

$("#el1, #el2, #el3, #el4").mouseout(function(){
	flag = 1;
	a = Date.now() - a;
	b += a;
	$("#more-info3").animate({left: "-300px"}, 1000);
});

$("#main-circle").mouseout(function(){
	flag = 1;
	a = Date.now() - a;
	b += a;
	$("#more-info4").animate({right: "-300px"}, 1000);
});


let startTime = setInterval(function(){
	if (flag == 0) {
			
	} else {
			t = Date.now() - currentTime - b;
			console.log(t);
			drawPosition(t);
		}
}, 1);
	
left1 = 170 + r1*Math.cos(a1*t);
top1 = 120 + r1*Math.sin(-a1*t);
left2 = 170 + r2*Math.cos(a2*t);
top2 = 70 + r2*Math.sin(-a2*t);
left3 = 170 + r3*Math.cos(a3*t);
top3 = 20 + r3*Math.sin(-a3*t);
left4 = 170 + r3*Math.cos(a3*t+4);
top4 = 20 + r3*Math.sin(-a3*t);
circle1.css({"left": left1, "top": top1});
circle2.css({"left": left2, "top": top2});
circle3.css({"left": left3, "top": top3});
circle4.css({"left": left4, "top": top4});



let el1 = $("#el5");
let el2 = $("#el6");
let el3 = $("#el7");
let el4 = $("#el8");
let el5 = $("#el9");
let el6 = $("#el10");
let el7 = $("#el11");
let el8 = $("#el12");
let el9 = $("#el13");
	currentTime1 = Date.now(),
	r = 10,
	left1 = '',
	top1 = '',
	lef2 = '',
	to2 = '',
	lef3 = '',
	top3 = '',
	left4 = '',
	top4 = '',
	left5 = '',
	top5 = '',
	left6 = '',
	top6 = '',
	left7 = '',
	top7 = '',
	left8 = '',
	top8 = '',
	left9 = '',
	top9 = '',
	a = 1.99 * 3.14;

function drawPosition1(t1){
	left1 = 100 + r*Math.cos(a*t1);
	top1 = 100 + r*Math.sin(a*t1);
	left2 = 365 + r*Math.cos(a*t1);
	top2 = 80 + r*Math.sin(-a*t1);
	left3 = 142 + r*Math.cos(a*t1);
	top3 = 135 + r*Math.sin(a*t1);
	left4 = 245 + r*Math.cos(a*t1);
	top4 = 44 + r*Math.sin(-a*t1);
	left5 = 45 + r*Math.cos(a*t1);
	top5 = 123 + r*Math.sin(a*t1);
	left6 = 335 + r*Math.cos(a*t1);
	top6 = 123 + r*Math.sin(-a*t1);
	left7 = 335 + r*Math.cos(a*t1);
	top7 = -20 + r*Math.sin(a*t1);
	left8 = 200 + r*Math.cos(a*t1);
	top8 = 0 + r*Math.sin(-a*t1);
	left9 = 220 + r*Math.cos(a*t1);
	top9 = -320 + r*Math.sin(a*t1);
	el1.css({"left": left1, "top": top1});
	el2.css({"left": left2, "top": top2});
	el3.css({"left": left3, "top": top3});
	el4.css({"left": left4, "top": top4});
	el5.css({"left": left5, "top": top5});
	el6.css({"left": left6, "top": top6});
	el7.css({"left": left7, "top": top7});
	el8.css({"left": left8, "top": top8});
	el9.css({"left": left9, "top": top9});
}

var flag1 = 1;

$("#el5, #el6, #el7, #el8, #el9, #el10, #el11, #el12, #el13").mouseover(function(){
	flag1 = 0;
	$("#more-info1").animate({left: 0}, 1000);
});

$("#tomson").click(function(){
	$("#more-info2").animate({right: 0}, 1000);
});
	
$("#hide").click(function(){
	$("#more-info2").animate({right: "-300px"}, 1000);
});



$("#el5, #el6, #el7, #el8, #el9, #el10, #el11, #el12, #el13").mouseout(function(){
	flag1 = 1;
	$("#more-info1").animate({left: "-300px"}, 1000);
});

let startTime1 = setInterval(function(){
	let t1;
	if (flag1 == 0) {
		t1 = 0;
	} else {
		t1 = Date.now() - currentTime;
	}
	drawPosition1(t1);
}, 1);


});