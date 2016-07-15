
  function myFunction(x) {
  
    x.classList.toggle("change");
       if($("#menupg").css('left')< "0"){
        
       $("#menupg").animate({
     left: "0px"
      
  }, 300)
    }else{
         $("#menupg").animate({
     left: "-104%"
      
  }, 300)
    }
}
















