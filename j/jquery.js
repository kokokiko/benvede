$(document).ready(function(){
      
    $(document).on('click','#previous', function() {
      banana = $('.tutti').scrollLeft();
        banana = banana + (parseInt( $('.block').css('width'),10))+8;

        if (banana >= ($('.block').length * ((parseInt( $('.block').css('width'),10) +8)))/2) {
            banana = 0
        }
        $('.tutti').animate({
            scrollLeft: banana
        })
        
    });        

    
$(document).on('click','#next', function() {
      banana = $('.tutti').scrollLeft();
        banana = banana - (parseInt( $('.block').css('width'),10))-8;
        if (banana < 0) {
           
            banana =  $('.block').length * ((parseInt( $('.block').css('width'),10)))
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
   







$(document).on('click', '.cat', function() {

    if($(this).siblings('.subcat').css('display')!= 'block'){
        $('.subcat').hide(500);
        $(this).siblings('.subcat').show(500);
        
        
        
        
    }else{
       $(this).siblings('.subcat').hide(500);
    }

  
    
});

















