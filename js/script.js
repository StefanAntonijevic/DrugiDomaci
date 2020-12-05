
/*Za sakrivanje i prikazivanje kredit forme */
function handleButtnClick(){
   
   let btn= document.getElementById("Forma2");
  

   if (btn.style.display == "none"){
      btn.style.display = "block";
      
   }
      else{
         btn.style.display = "none";
      }
}

/*Da prikaze prozor prozori*/ 
function prozori() {
   confirm("Odabrali ste nacin placanja Gotovina");
}

