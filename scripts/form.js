// A $( document ).ready() block.
$( document ).ready(function() {
  //alert('test');
  
  $(document).on("change", "#T-shirt", chkTshirt);

  //begin chkTshirt function
function chkTshirt (){
    var tshirt = $("#T-shirt").val();
 // alert("tshirt");
  
    //begin if
  if (tshirt == "CUSTOM") {
    //alert("works");
     $("#custom").removeAttr("disabled");  //remove disabled
     $("#custom").attr("required", true);
  }//end of tshirt
  else{
    $("#custom").attr("disabled", true);//disabled again
    $("#custom").val(""); //set value to empty
    $("#custom").removeAttr("required");  //remove disabled
  }
   

}//end of chkTshirt function 

});









