 
 $(document).ready(function(){
   
    /* skrivanje mape */
    let btn1= document.getElementById("Mapa");
    btn1.style.display = "none";

    var d = new Date();
    d.setMonth(11);
     document.getElementById("demo").innerHTML = d;


     
    $("p").click(function(){
      $(this).hide();
    });
  });

