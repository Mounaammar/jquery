  
  
    $(function(){
    $("#gras").click(function(){
   
       $("#par").css("font-weight","bold");
     
   });
});
$(function(){
    $("#italic").click(function(){
   
       $("#par").css("font-style","italic");
   });
});
    
$(function(){
    $("#underline").click(function(){
   
       $("#par").css("text-decoration","underline");
   });
});
$(function(){
        $("#police").change(function(){
          
             $("#par").css("font-family", this.value) ;
        });
    });
    $(function(){
        $("#taille").change(function(){
           
             $("#par").css("font-size", this.value) ;
        });
    });




