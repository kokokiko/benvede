$(document).ready(function(){
    
   
    
if( localStorage.getItem('lingua')===null ) { 
   showcerchio()
    
    
}else{
    //lingua presente
 $lingua = localStorage.getItem('lingua');
  
    if ($lingua === 'italiano'){
        dontshowcerchio('it')
    } else if ($lingua === 'inglese'){
        dontshowcerchio('eng')
    } else if ($lingua === 'cinese'){
        dontshowcerchio('cin')
    }else{
      showcerchio()  
    }
}
    function showcerchio(){
       $div = " <div id='ball'><div id='sf'><img src='img/logo.png' alt='BENVEDE'><hr id='s' class='style-two'><div id='t'><p id='ita'>ITALIANO</p><p id='cin'>中文</p><p id='eng'>ENGLISH</p></div></div></div><div id='ex'><p>X</p></div><div id='blackout'></div>"
        $('body').prepend($div);
        
        
    }
    $(document).on('click','#ex',function(){
       localStorage.setItem('lingua','italiano');
        $("#ball").remove();
         $("#ex").remove();
         $("#blackout").remove();
    });
    $(document).on('click','#ita',function(){
        localStorage.setItem('lingua', 'italiano');
        window.location.href = 'index.html'
    });
      $(document).on('click','#eng',function(){
        localStorage.setItem('lingua', 'inglese');
        window.location.href = 'home-en.html'
    });
      $(document).on('click','#cin',function(){
        localStorage.setItem('lingua', 'cinese');
        window.location.href = 'home-cin.html'
    });
function dontshowcerchio (e){
    
    
}    
$(document).on('click','#header h3', function(){
    showcerchio()
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      window.setInterval(function(){
   banana = $('.tutti').scrollLeft();
        banana = banana + (parseInt( $('.block').css('width'),10))+8;

        if (banana >= ($('.block').length * ((parseInt( $('.block').css('width'),10) +8)))/2) {
            banana = 0
        }
        $('.tutti').animate({
            scrollLeft: banana
        })
}, 5000);
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
var $default = $('#sotto').offset();
    if($(this).siblings('.subcat').css('display')!= 'block'){
        $('.subcat').hide(500);
      
      var prima = $('#sotto').offset();
     
      $('#sotto').css('position','relative');
        
      $('#sotto').offset({top:prima.top});
    $('#sotto').position(prima);
        $(this).siblings('.subcat').show(500);
        
        
        
        
    }else{  
       $(this).siblings('.subcat').hide(500, function(){
$('#sotto').css('position','absolute');$('#sotto').offset({top:$default.top});});
    }

  
    
});

















