$(document).on("pagecreate","#pagetwo",function(){
      // hide buttons and show btn1
     $('.ui-btn').css("visibility" , "hidden");                          
     $('#num1').css("visibility" , 'visible');
    
    var playVid = function(){
     document.getElementsByClassName("ui-btn").addEventListener("onmousedown",function(){
        document.getElementById("myVideo")[0].play;
     }  
    };
    
});