$(document).ready(function(){
       
    $(document).on('click','#previous', function() {
      banana = $('.tutti').scrollLeft();
        banana = banana + 206;
        if (banana >= 1948) {
            banana = 0
        }
        $('.tutti').animate({
            scrollLeft: banana
        })
        
    });        
$(document).on('click','#next', function() {
      banana = $('.tutti').scrollLeft();
        banana = banana - 206;
        if (banana < 0) {
            banana = 1952
        }
        $('.tutti').animate({
            scrollLeft: banana
        })
        
    });     
    $(document).on('click','#searchtxt', function(){
    })
    $(document).on('click', function(e) {
        gatto = e.target.id;
        if (gatto == "searchtxt"){
           if ( $("#searchtxt").val() == "Cerca"){
                $("#searchtxt").val('')
           }
        }else {
          if ( $("#searchtxt").val() == ""){
                $("#searchtxt").val('Cerca')
           }
        }
    })
});
   
