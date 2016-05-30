$(document).ready(function() {
    // Init Skrollr
    var s = skrollr.init();

    var lastScrollTop = 0;
    (function($) {
        $.fn.countdown = function(options, callback) {

            //custom 'this' selector
            var thisEl = $(this);

            //array of custom settings
            var settings = {
                'date': null,
                'format': null
            };

            //append the settings array to options
            if (options) {
                $.extend(settings, options);
            }

            //main countdown function
            var countdown_proc = function() {

                var eventDate = Date.parse(settings['date']) / 1000;
                var currentDate = Math.floor($.now() / 1000);

                if (eventDate <= currentDate) {
                    callback.call(this);
                    clearInterval(interval);
                };

                var seconds = eventDate - currentDate;

                var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
                seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

                var hours = Math.floor(seconds / (60 * 60));
                seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

                var minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

                //conditional Ss
                if (days == 1) {
                    thisEl.find(".time_ref_days").text("Day");
                } else {
                    thisEl.find(".time_ref_days").text("Days");
                }
                if (hours == 1) {
                    thisEl.find(".time_ref_hours").text("Hour");
                } else {
                    thisEl.find(".time_ref_hours").text("Hours");
                }
                if (minutes == 1) {
                    thisEl.find(".time_ref_minutes").text("Minute");
                } else {
                    thisEl.find(".time_ref_minutes").text("Minutes");
                }
                if (seconds == 1) {
                    thisEl.find(".time_ref_seconds").text("Second");
                } else {
                    thisEl.find(".time_ref_seconds").text("Seconds");
                }

                //logic for the two_digits ON setting
                if (settings['format'] == "on") {
                    days = (String(days).length >= 2) ? days : "0" + days;
                    hours = (String(hours).length >= 2) ? hours : "0" + hours;
                    minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                    seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
                }

                //update the countdown's html values.
                if (!isNaN(eventDate)) {
                    thisEl.find(".days").text(days);
                    thisEl.find(".hours").text(hours);
                    thisEl.find(".minutes").text(minutes);
                    thisEl.find(".seconds").text(seconds);
                } else {
                    alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
                    clearInterval(interval);
                }
            }
            //run the function
            countdown_proc();

            //loop the function
            interval = setInterval(countdown_proc, 1000);
        }
    })(jQuery);

    //Call countdown plugin
    $(".countdown").countdown({
        date: "2 february 2017 6:19:00", // add the countdown's end date (i.e. 3 november 2012 12:00:00)
        format: "on" // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
    });
    $('#content').addClass('active');

});

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
function slider_function() {
    var jssor_1_SlideoTransitions = [
        [{
            b: 5500,
            d: 3000,
            o: -1,
            r: 240,
            e: {
                r: 2
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            c: {
                x: 51.0,
                t: -51.0
            }
        }, {
            b: 0,
            d: 1000,
            o: 1,
            c: {
                x: -51.0,
                t: 51.0
            },
            e: {
                o: 7,
                c: {
                    x: 7,
                    t: 7
                }
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            sX: 9,
            sY: 9
        }, {
            b: 1000,
            d: 1000,
            o: 1,
            sX: -9,
            sY: -9,
            e: {
                sX: 2,
                sY: 2
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            r: -180,
            sX: 9,
            sY: 9
        }, {
            b: 2000,
            d: 1000,
            o: 1,
            r: 180,
            sX: -9,
            sY: -9,
            e: {
                r: 2,
                sX: 2,
                sY: 2
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 3000,
            d: 2000,
            y: 180,
            o: 1,
            e: {
                y: 16
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            r: -150
        }, {
            b: 7500,
            d: 1600,
            o: 1,
            r: 150,
            e: {
                r: 3
            }
        }],
        [{
            b: 10000,
            d: 2000,
            x: -379,
            e: {
                x: 7
            }
        }],
        [{
            b: 10000,
            d: 2000,
            x: -379,
            e: {
                x: 7
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            r: 288,
            sX: 9,
            sY: 9
        }, {
            b: 9100,
            d: 900,
            x: -1400,
            y: -660,
            o: 1,
            r: -288,
            sX: -9,
            sY: -9,
            e: {
                r: 6
            }
        }, {
            b: 10000,
            d: 1600,
            x: -200,
            o: -1,
            e: {
                x: 16
            }
        }]
    ];

    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
}
