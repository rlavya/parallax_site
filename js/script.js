$( document ).ready(function() {
var clock               = $('.clock').FlipClock({
                          clockFace : 'DailyCounter',
                          autoStart : false,
                          callbacks : {
                            stop  : function() {
                              $('.message').html('The clock has stopped!')
                            }
                          }
                        });
  var time              = new Date();
  var seconds             = time.getHours()*60*60 
                      +
                        time.getMinutes()*60
                      +
                        time.getSeconds();
  clock.setTime(100*22*3600-seconds);
  clock.setCountdown(true);
  clock.start();
      console.log( "ready!" );
});