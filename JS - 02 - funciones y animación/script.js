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
}
);

function click_item(){
    $("#item_1").animate(
        {
            height: "200px"
        }
    );
}