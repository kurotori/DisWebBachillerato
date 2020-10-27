$(
function(){
/*--------------------------*/    
    $(".item").mouseover(
        function(){
            $(this).animate(
                {
                    height: "200px"
                }
            );
        }
    );
/*-------------------------*/
   $(".item").mouseleave(
        function(){
            $(this).animate(
                {
                    height: "30px"
                }
            );
        }
    ); 
/*-------------------------*/
    $(".item").mousedown(
        function(){
            $(this).css(
            "border","7px solid black"
            );
        }
    );
  
    $(".item").mouseup(
        function(){
            $(this).css(
            "border","0px solid black"
            );
        }
    );
    
    
    
}
);
