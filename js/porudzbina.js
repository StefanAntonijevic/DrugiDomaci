window.onload = function()
{
    /* kad ucita stranicu da sakrije formu */
    let btn= document.getElementById("Forma2");
    btn.style.display = "none";

	document.getElementById("submit").addEventListener("click", provera);
}
function checkName(){
	var imeprezime = document.getElementById("ime").value;
	var regImeprezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11})+$/;

	if(!regImeprezime.test(imeprezime))
	{
		document.getElementById("ime").style.border="2px solid red";
	}
	else
	{
		document.getElementById("ime").style.border="2px solid green";
    }
}
function checkEmail(){
	var email = document.getElementById("email").value;
	var regEmail = /^\w+([-+.']+w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

	if(!regEmail.test(email))
	{
		document.getElementById("email").style.border="2px solid red";
	}
	else
	{
		document.getElementById("email").style.border="2px solid green";
	}
}
function checkPhone(){
	var telefon = document.getElementById("broj").value;
	var regTelefon = /^06[0-9]{1}[0-9]{3,4}[0-9]{3}$/;

	if(!regTelefon.test(telefon))
	{
		document.getElementById("broj").style.border="2px solid red";
	}
	else
	{
		document.getElementById("broj").style.border="2px solid green";
	}
}

function provera(){
	var imeprezime = document.getElementById("ime").value;
	var regImeprezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11})+$/;
	var email = document.getElementById("email").value;
    var regEmail = /^\w+([-+.']+w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var telefon = document.getElementById("broj").value;
	var regTelefon = /^06[0-9]{1}[0-9]{3,4}[0-9]{3}$/;
	
	

	if(!regImeprezime.test(imeprezime))
	{
		document.getElementById("ime").style.border="2px solid red";
		document.getElementById("ispisIme").innerHTML = "<p style='margin-top:5px;'>Podaci nisu u dobrom formatu!</p>";
	}
	else
	{
		document.getElementById("ispisIme").style.display = "none";
		// nizOk.push("Ime i prezime: " + imeprezime);
	}

	if(!regEmail.test(email))
	{
		document.getElementById("email").style.border="2px solid red";
		document.getElementById("ispisEmail").innerHTML = "<p style='margin-top:5px;'>Email nije u dobrom formatu!</p>";
	}
	else
	{
		document.getElementById("ispisEmail").style.display = "none";
		// nizOk.push("Email: " + email);
    }
    if(!regTelefon.test(telefon))
	{
		document.getElementById("telefon").style.border="2px solid red";
		document.getElementById("ispisTelefon").innerHTML = "<p style='margin-top:5px;'>Kontakt telefon nije u dobrom formatu!</p>";
	}
	else
	{
		document.getElementById("ispisTelefon").style.display = "none";
		// nizOk.push("Kontakt telefon: " + telefon);
	}

	}